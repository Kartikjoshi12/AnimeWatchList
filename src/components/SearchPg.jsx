import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import "../css/search.css";
function SearchPg() {
  const { query } = useParams();
  const [searchRes, setSearchRes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResult = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`);
        if (!res.ok) throw new Error(`Error: ${res.status} ${res.statusText}`);

        const data = await res.json();
        setSearchRes(data.data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, [query]); // depends on query

  return (
    <>
      <h1 className="text-xl font-bold mb-4 text-color2 text-center ">
        Results for {query}
      </h1>
      <div className="movies-grid ">
        {searchRes.map((anime, index) => (
          <Card
            key={`${anime.mal_id}-${index}`}
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
        ))}
      </div>
    </>
  );
}

export default SearchPg;
