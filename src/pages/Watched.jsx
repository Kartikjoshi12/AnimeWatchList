import { useEffect, useState } from "react";
import Card from "../components/Card";
import "../css/watched.css";

function Watched() {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    const Data = JSON.parse(localStorage.getItem("watched")) || [];
    console.log("Watched Data:", Data); // 👈 check values here
    setCardData(Data);
  }, []);
  return (
    <div className="watched-page">
      <h1 className="heading">My Anime List</h1>
      <div className="card-grid">
        {cardData.map((anime, index) => (
          <Card
            key={`${anime.id}-${index}`}
            id={anime.id}
            Title={anime.Title}
            Image={anime.Image}
            Rating={anime.Rating}
            Genre={anime.Genre}
          />
        ))}
      </div>
    </div>
  );
}

export default Watched;
