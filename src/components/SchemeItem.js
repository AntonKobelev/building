export default function SchemeItem({
  id,
  coordinates,
  name,
  description,
  currentPolygon,
}) {
  return (
    <div className="scheme-item" id={id} style={coordinates}>
      <div className="scheme-name">{name}</div>
      {currentPolygon === id && (
        <div className="scheme-popup">{description}</div>
      )}
    </div>
  );
}
