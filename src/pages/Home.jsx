import HeroSection from "../components/HeroSection";
import Trending from "../components/Trending";
import Recommendation from "../components/Recommendation";
import HiddenGemes from "../components/HiddenGemes";
import { useState, useEffect } from "react";
import { getTrending } from "../services/api";

function Home() {
  const [topAnime, setTopAnime] = useState([]);
  useEffect(() => {
    async function loadData() {
      const data = await getTrending();
      setTopAnime(data);
    }
    loadData();
  }, []);
  return (
    <>
      <HeroSection />
      <Trending data={topAnime} />
      <HiddenGemes data={topAnime} />
      <Recommendation />
    </>
  );
}

export default Home;
