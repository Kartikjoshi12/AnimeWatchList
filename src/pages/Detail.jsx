import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/detail.css";
function Detail() {
  const [anime, setAnime] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadAnime = async () => {
      try {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
        if (!res.ok) {
          throw new Error(`${res.status} : ${res.statusText}`);
        }
        const data = await res.json();
        setAnime(data.data || null);
      } catch (error) {
        console.log(`failed to fetch anime: ${error.message}`);
      }
    };
    loadAnime();
  }, [id]);
  if (!anime) return <p>Loading...</p>;
  return (
    <div className="main-box">
                <div className="box">
                  <div className="left-box">
                    <img
                      src={anime?.images?.jpg?.large_image_url}
                      alt={anime?.title}
                      className="left-box-img"
                    />
                    {anime?.trailer?.url && (
                      <button
                        onClick={() => window.open(anime.trailer.url, "_blank")}
                        className="trailer-btn"
                      >
                        Watch Trailer
                      </button>
                    )}
                  </div>

      <div className="right-box">
                <h1 className="anime-title">{anime.title_english || anime.title}</h1>
                <div className="mini-detail">
                  <p className="mini">⭐ {anime.score ?? "N/A"}</p>

                  <p className="mini">
                    📅 {anime?.aired?.from ? anime.aired.from.slice(0, 4) : "Unknown"}{" "}
                    - {anime?.aired?.to ? anime.aired.to.slice(0, 4) : "Ongoing"}
                  </p>

                  <p className="mini">🎬 Episodes: {anime.episodes ?? "N/A"}</p>

                  <p className="mini">
                    🏢 Studio:{" "}
                    {anime?.studios?.length
                      ? anime.studios.map((s) => s.name).join(", ")
                      : "Unknown"}
                  </p>
                  <p className="mini">
                    🎭 Genres:{" "}
                    {anime?.genres?.length
                      ? anime.genres.map((g) => g.name).join(", ")
                      : "Unknown"}
                  </p>
                </div>
                <p className="detail">{anime.synopsis ?? "No synopsis available."}</p>
     </div>
      </div>
    </div>
  );
}

export default Detail ;
