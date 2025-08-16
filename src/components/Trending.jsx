// import { useEffect, useState } from "react";
// import { getTrending } from "../services/api";
import ContentCard from "./ContentCard";

function Trending({data}) {
  // const [trending, setTrending] = useState([]);
  // useEffect(() => {
  //   async function loadTrending() {
  //     const data = await getTrending();
  //     setTrending(data);
  //   }
  //   loadTrending();
  // }, []);

  return <ContentCard Title=" Trending Anime" items={data.slice(0,10)} />;
}

export default Trending;
