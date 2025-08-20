import { useState , useEffect} from "react";
import "../css/admin.css";

function Admin() {
  const [query, setQuery] = useState("");
  const [animeResult, setAnimeResult] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [watched, setWatched] = useState([]);
const [watched, setWatched] = useState(() => {
  return JSON.parse(localStorage.getItem("watched")) || [];
});
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("watched")) || [];
    setWatched(stored);
  }, []);

  const handelAnimeSubmit = async (e) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    setLoading(true);
    try {
      const res = await fetch(`https://api.jikan.moe/v4/anime?q=${q}`);
      const data = await res.json();
      setAnimeResult(data.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handeladd = (anime) => {
    const formatted = {
      id: anime.mal_id,
      Title: anime.title,
      Image: anime.images.jpg.image_url,
      Genre: anime.genres?.[0]?.name || "Unknown",
      Rating: anime.score ? `${anime.score}⭐` : "N/A",
    };

    setWatched((prev) => {
      if (prev.some((item) => item.id === formatted.id)) return prev;
      const updated = [...prev, formatted];
      localStorage.setItem("watched", JSON.stringify(updated));
      return updated;
    });
  };

  const handeldel = (anime) => {
    const storedList = JSON.parse(localStorage.getItem("watched")) || [];
    const updated = storedList.filter((item) => item.id !== anime.mal_id);
    localStorage.setItem("watched", JSON.stringify(updated));
    setWatched(updated); // update UI too
  };

  return (
    <>
      <div>
        {/* Search Bar */}
        <div className="searchbar">
          <form onSubmit={handelAnimeSubmit}>
            <input
              type="text"
              className="search-input"
              placeholder="Search Admin"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </div>

        {/* Results */}
        <div className="card-search">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="content-search">
              {animeResult.map((anime) => (
                <div className="" key={anime.mal_id}>
                  <h3>{anime.title}</h3>
                  <img
                    src={anime.images.jpg.image_url}
                    alt={anime.title}
                    width="120"
                  />
                  <button
                    className="btn"
                    onClick={() => {
                      handeladd(anime);
                    }}
                  >
                    Add
                  </button>
                  <button
                    className="btn"
                    onClick={() => {
                      handeldel(anime);
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Admin;
