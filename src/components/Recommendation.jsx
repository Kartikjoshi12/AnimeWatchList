import { useState,useEffect } from "react";
import { getRecommendation } from "../services/api";
import ContentCard from "./ContentCard";
function Recommendation() {
    const [recommendation, setRecommendation] = useState([])
    useEffect(()=>{
             async function loadRecommendation() {
                 const data = await getRecommendation();
                 setRecommendation(data)
             }
             loadRecommendation();
    },[])
  return (
    <>
      <ContentCard Title="Recommdation" items={recommendation} />
    </>
  );
}
export default Recommendation;
