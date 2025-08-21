import "../css/contentCard.css";
import { useRef } from "react";
import Card from "../components/Card";

function ContentCard({ Title, items }) {
  const scrollRef = useRef(null);

  const scrollForward = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const scrollBackward = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="section">
        <h2 className="title">{Title}</h2>

        <div className="wrapper">
          <button className="scroll-btn left" onClick={scrollBackward}>
            ⬅
          </button>

          <div className="grid" ref={scrollRef}>
            {items.length === 0 ? (
              <p>Loading...</p>
            ) : (
              items.map((anime,index) => (
                <Card
                  key={`${anime.mal_id}-${index}`}
                  id={anime.mal_id}
                  Title={anime.title}
                  Image={anime.images.jpg.image_url}
                  Rating={anime.score}
                  Genre={
                    anime.genres
                      ? anime.genres
                          .slice(0, 1)
                          .map((g) => g.name)
                          .join(",")
                      : "N/A"
                  }
                />
              ))
            )}
          </div>

          <button className="scroll-btn right" onClick={scrollForward}>
            ➡
          </button>
        </div>
      </div>
    </>
  );
}

export default ContentCard;
