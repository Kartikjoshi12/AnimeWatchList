// import { gethiddenGemes } from "../services/api";
import { useState, useEffect } from "react";
import ContentCard from "../components/ContentCard";
import { getTrending } from "../services/api";


function HiddenGemes({ data }) {
  const gemes = data
    .filter((anime) => anime.score >= 8.0 && anime.popularity > 500)
    .slice(0, 10);

  return <ContentCard Title="Hidden Gems" items={gemes} />;
}

// function HiddenGemes() {
//   const [hiddenGemes, setHiddenGemes] = useState([]);

//   useEffect(() => {
//     async function loadDataGemes() {
//       const data = await getTrending();

//       // Filter for high score & low popularity
//       const gemes = data
//         .filter(anime => anime.score >= 8.0 && anime.popularity > 500)
//         .slice(0, 10);

//       setHiddenGemes(gemes);
//     }

//     loadDataGemes();
//   }, []);

//   return (
//     <>
//       <ContentCard Title="Hidden Gems" items={hiddenGemes} />
//     </>
//   );
// }

export default HiddenGemes;



  // useEffect(()=>{
  //          async function loadhiddenGemes() {
  //            const data = await gethiddenGemes();
  //             sethiddenGemes(data);
  //          }
  //          loadhiddenGemes();
  // },[])
