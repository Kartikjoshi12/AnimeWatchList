import { useEffect, useState } from "react";
import Card from "../components/Card";
import "../css/watched.css";

function Watched() {
  // const CardData = [
  //   {
  //     id: 1,
  //     Title: "Naruto",
  //     Image: "/cardimg/naruto.jpeg",
  //     Genre: "Action",
  //     Rating: "9✨",
  //   },
  //   {
  //     id: 2,
  //     Title: "One Piece",
  //     Image: "/cardimg/onepiece.jpeg",
  //     Genre: "Action",
  //     Rating: "10⭐",
  //   },
  //   {
  //     id: 3,
  //     Title: "Bleach",
  //     Image: "/cardimg/bleach.jpeg",
  //     Genre: "Action",
  //     Rating: "9✨",
  //   },
  //   {
  //     id: 4,
  //     Title: "Berserk",
  //     Image: "/cardimg/berserk.jpeg",
  //     Genre: "Action",
  //     Rating: "4.5⭐",
  //   },
  //   {
  //     id: 5,
  //     Title: "Hunter X Hunter",
  //     Image: "/cardimg/hunterxhunter.jpeg",
  //     Genre: "Action",
  //     Rating: "8✨",
  //   },
  //   {
  //     id: 6,
  //     Title: "Vagabond",
  //     Image: "/cardimg/vagabond.jpeg",
  //     Genre: "Action",
  //     Rating: "9.9⭐",
  //   },
  //   {
  //     id: 7,
  //     Title: "Vinland Saga",
  //     Image: "/cardimg/vinland.jpeg",
  //     Genre: "Action",
  //     Rating: "9✨",
  //   },
  //   {
  //     id: 8,
  //     Title: "Dragon Ball",
  //     Image: "/cardimg/dargonball.jpeg",
  //     Genre: "Action",
  //     Rating: "4.5⭐",
  //   },
  // ];
 const [cardData, setCardData]= useState([])
  useEffect(()=>{
    const Data = JSON.parse(localStorage.getItem("watched")) || [];
     console.log("Watched Data:", Data);  // 👈 check values here
    setCardData(Data)
  },[])
  return (
    <div className="watched-page">
      <h1 className="heading">My Anime List</h1>
      <div className="card-grid">
        {cardData.map((anime,index) => (
          <Card
            key={`${anime.id}-${index}`}
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
