import ContentCard from "./ContentCard";

function Trending({data}) {
  return <ContentCard Title=" Trending Anime" items={data.slice(0,15)} />;
}

export default Trending;
