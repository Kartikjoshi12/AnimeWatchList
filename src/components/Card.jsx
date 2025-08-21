import "../css/card.css";
import { Link } from "react-router-dom";
function Card({ id, Title, Image, Rating, Genre }) {
  return (
    <Link to={`/anime/${id}`} className="card">
      <img src={Image} alt={Title} />
      <div className="card-content">
        <div className="card-title">{Title}</div>
        <div className="card-details">
          <span>{Genre}</span>
          <span>{Rating}</span>
        </div>
      </div>
    </Link>
  );
}

export default Card;
