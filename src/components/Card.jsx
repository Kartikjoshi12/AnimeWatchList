import "../css/card.css";

function Card({ Title, Image, Rating, Genre }) {
  return (
    <div className="card">
      <img src={Image} alt={Title} />
      <div className="card-content">
        <div className="card-title">{Title}</div>
        <div className="card-details">
          <span>{Genre}</span>
          <span>{Rating}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
