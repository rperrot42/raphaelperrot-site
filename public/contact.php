<?php
// Traitement du formulaire de contact.
//
// Volontairement sans dépendance : l'hébergement OVH fournit PHP et mail(),
// donc rien à installer ni aucun service tiers à créer.
//
// Le destinataire est codé en dur : ce script ne peut pas être détourné
// pour envoyer du courrier à une adresse arbitraire.

declare(strict_types=1);

const DESTINATAIRE = 'raphael@raphaelperrot.com';
const EXPEDITEUR   = 'site@raphaelperrot.com'; // doit appartenir au domaine, sinon SPF rejette

header('Content-Type: application/json; charset=utf-8');

/** Supprime tout retour à la ligne : empêche l'injection d'en-têtes SMTP. */
function sansSautDeLigne(string $v): string {
    return trim(str_replace(["\r", "\n", "%0a", "%0d"], ' ', $v));
}

function repondre(int $code, array $corps): never {
    http_response_code($code);
    echo json_encode($corps, JSON_UNESCAPED_UNICODE);
    exit;
}

// ── GET : diagnostic, pour vérifier que PHP tourne bien sur l'hébergement ──
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'GET') {
    repondre(200, [
        'ok'             => true,
        'php'            => PHP_VERSION,
        'mail_disponible'=> function_exists('mail'),
    ]);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    repondre(405, ['ok' => false, 'erreur' => 'Méthode non autorisée']);
}

// ── Piège à robots : un humain ne remplit jamais ce champ ──
if (!empty($_POST['_gotcha'])) {
    repondre(200, ['ok' => true]); // on fait semblant d'accepter
}

$nom     = sansSautDeLigne((string)($_POST['name'] ?? ''));
$email   = sansSautDeLigne((string)($_POST['email'] ?? ''));
$message = trim((string)($_POST['message'] ?? ''));

$erreurs = [];
if ($nom === '' || mb_strlen($nom) > 120) {
    $erreurs[] = 'nom';
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $erreurs[] = 'email';
}
if (mb_strlen($message) < 10 || mb_strlen($message) > 5000) {
    $erreurs[] = 'message';
}
if ($erreurs) {
    repondre(422, ['ok' => false, 'erreur' => 'Champs invalides', 'champs' => $erreurs]);
}

$sujet = "[raphaelperrot.com] Message de $nom";

$corps = "Nouveau message depuis le formulaire du site.\n\n"
       . "Nom     : $nom\n"
       . "E-mail  : $email\n"
       . "Date    : " . date('d/m/Y H:i') . "\n"
       . "IP      : " . sansSautDeLigne((string)($_SERVER['REMOTE_ADDR'] ?? 'inconnue')) . "\n\n"
       . "-------------------------------------------\n\n"
       . $message . "\n";

$entetes = [
    'From'         => 'Site raphaelperrot.com <' . EXPEDITEUR . '>',
    'Reply-To'     => $nom . ' <' . $email . '>', // répondre va directement au visiteur
    'Content-Type' => 'text/plain; charset=UTF-8',
    'MIME-Version' => '1.0',
];

$envoye = mail(
    DESTINATAIRE,
    '=?UTF-8?B?' . base64_encode($sujet) . '?=',
    $corps,
    $entetes,
    '-f' . EXPEDITEUR
);

if (!$envoye) {
    repondre(500, ['ok' => false, 'erreur' => "L'envoi a échoué"]);
}

repondre(200, ['ok' => true]);
