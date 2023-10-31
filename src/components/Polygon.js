export default function Polygon({
  id,
  points,
  onHandlerClick,
  currentPolygon,
}) {
  return (
    <polygon
      id={id}
      points={points}
      onClick={() => onHandlerClick(id)}
      className={id === currentPolygon ? "active" : ""}
    ></polygon>
  );
}
