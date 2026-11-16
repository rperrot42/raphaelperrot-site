<?php
// Traitement du formulaire de contact.
//
// Principe : un message est TOUJOURS enregistré sur le serveur avant toute
// tentative d'envoi. Même si l'e-mail échoue, rien n'est perdu — les messages
// restent lisibles dans /home/<compte>/messages/, hors du dossier public.

declare(strict_types=1);

const DESTINATAIRE = 'raphael@raphaelperrot.com';
// L'expéditeur doit être une adresse réelle du domaine, sinon le SPF strict
// (-all) fait rejeter le message par le serveur destinataire.
const EXPEDITEUR   = 'raphael@raphaelperrot.com';
// Hors du dossier www : aucun visiteur ne peut lire les messages.
const DOSSIER_LOG  = __DIR__ . '/../messages';

header('Content-Type: application/json; charset=utf-8');

function sansSautDeLigne(string $v): string {
    return trim(str_replace(["\r", "\n", "%0a", "%0d"], ' ', $v));
}

function repondre(int $code, array $corps): never {
    http_response_code($code);
    echo json_encode($corps, JSON_UNESCAPED_UNICODE);
    exit;
}

/** Écrit le message sur disque. Retourne true si l'enregistrement a réussi. */
function enregistrer(array $donnees): bool {
    if (!is_dir(DOSSIER_LOG) && !@mkdir(DOSSIER_LOG, 0700, true)) {
        return false;
    }
    $ligne = json_encode($donnees, JSON_UNESCAPED_UNICODE) . "\n";
    return @file_put_contents(DOSSIER_LOG . '/messages.jsonl', $ligne, FILE_APPEND | LOCK_EX) !== false;
}

// ── GET : diagnostic. N'expose aucun contenu de message. ──
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'GET') {
    $dossierOk = is_dir(DOSSIER_LOG) ? is_writable(DOSSIER_LOG) : is_writable(dirname(DOSSIER_LOG));
    $fichier   = DOSSIER_LOG . '/messages.jsonl';
    repondre(200, [
        'ok'               => true,
        'php'              => PHP_VERSION,
        'mail_disponible'  => function_exists('mail'),
        'journal_ecrivable'=> $dossierOk,
        'messages_recus'   => is_file($fichier) ? count(file($fichier, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES)) : 0,
    ]);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    repondre(405, ['ok' => false, 'erreur' => 'Méthode non autorisée']);
}

if (!empty($_POST['_gotcha'])) {
    repondre(200, ['ok' => true]);
}

$nom     = sansSautDeLigne((string)($_POST['name'] ?? ''));
$email   = sansSautDeLigne((string)($_POST['email'] ?? ''));
$tel     = sansSautDeLigne((string)($_POST['phone'] ?? ''));
$message = trim((string)($_POST['message'] ?? ''));

// Le minimum est volontairement bas : « Devis ? » fait 7 caractères, et une
// demande courte reste une demande. Les robots sont arrêtés par le honeypot,
// pas par la longueur du message. Il sert seulement à écarter un envoi
// accidentel à un seul caractère.
const MESSAGE_MIN = 5;
const MESSAGE_MAX = 5000;
const NOM_MAX     = 120;

$erreurs = [];
if ($nom === '' || mb_strlen($nom) > NOM_MAX)                     { $erreurs[] = 'nom'; }
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL))  { $erreurs[] = 'email'; }
if (mb_strlen($message) < MESSAGE_MIN
    || mb_strlen($message) > MESSAGE_MAX)                         { $erreurs[] = 'message'; }

// 422 et la liste des champs fautifs : le formulaire s'en sert pour dire au
// visiteur ce qu'il doit corriger. Sans ça, il ne distingue pas un champ
// invalide d'une panne du serveur, et annonce à tort que l'envoi a échoué.
//
// Les libellés restent côté front-end : le serveur ne sait pas si le
// visiteur lit la version française ou anglaise du site.
if ($erreurs) {
    repondre(422, [
        'ok'      => false,
        'erreur'  => 'Champs invalides',
        'champs'  => $erreurs,
        'limites' => ['message_min' => MESSAGE_MIN, 'message_max' => MESSAGE_MAX, 'nom_max' => NOM_MAX],
    ]);
}

// 1) Enregistrement : c'est le filet de sécurité, il passe avant l'e-mail.
$enregistre = enregistrer([
    'date'    => date('c'),
    'nom'     => $nom,
    'email'   => $email,
    'tel'     => $tel,
    'message' => $message,
    'ip'      => sansSautDeLigne((string)($_SERVER['REMOTE_ADDR'] ?? '')),
]);

// 2) Tentative d'envoi.
$corps = "Nouveau message depuis raphaelperrot.com\n\n"
       . "Nom     : $nom\n"
       . "E-mail  : $email\n"
       . ($tel !== '' ? "Téléphone : $tel\n" : '')
       . "Date    : " . date('d/m/Y H:i') . "\n\n"
       . "-------------------------------------------\n\n"
       . $message . "\n";

$entetes = [
    'From'         => 'Site raphaelperrot.com <' . EXPEDITEUR . '>',
    'Reply-To'     => $nom . ' <' . $email . '>',
    'Content-Type' => 'text/plain; charset=UTF-8',
    'MIME-Version' => '1.0',
];

$envoye = function_exists('mail') && @mail(
    DESTINATAIRE,
    '=?UTF-8?B?' . base64_encode("[Site] Message de $nom") . '?=',
    $corps,
    $entetes,
    '-f' . EXPEDITEUR
);

// Le message est considéré comme reçu dès lors qu'il est enregistré :
// l'e-mail n'est qu'un moyen de notification parmi d'autres.
if ($enregistre || $envoye) {
    repondre(200, ['ok' => true, 'envoye' => $envoye, 'enregistre' => $enregistre]);
}

repondre(500, ['ok' => false, 'erreur' => "Le message n'a pas pu être traité"]);
