export default function Section({ id, eyebrow, title, intro, className = '', children }) {
  return (
    <section id={id} className={className}>
      <div className="wrap">
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        {title && <h2>{title}</h2>}
        {intro && <p className="intro">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
