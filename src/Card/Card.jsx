import "./card.css";

export default function Card({ name, img }) {
  return (
    <div className="card">
      <div className="img">
        <img src={img} alt="img" />
      </div>
      <h1>{name}</h1>
    </div>
  );
}
