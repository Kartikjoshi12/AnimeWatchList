import { useState, useEffect } from "react";
import ContentCard from "../components/ContentCard";
import { getTrending } from "../services/api";

function HiddenGemes({ data }) {
  const gemes = data
    .filter((anime) => anime.score >= 8.0 && anime.popularity > 500)
    .slice(0, 10);

  return <ContentCard Title="Hidden Gems" items={gemes} />;
}

export default HiddenGemes;
