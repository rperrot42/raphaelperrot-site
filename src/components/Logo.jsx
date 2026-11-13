export default function Logo({ size = 44 }) {
  return (
    <div className="mark" style={{ width: size, height: size, fontSize: size * 0.41 }} aria-hidden="true">
      R<span>/</span>P
    </div>
  );
}
