const BaseUrl = "https://api.jikan.moe/v4";

export const getTrending = async () => {
  try {
    const res = await fetch(`${BaseUrl}/top/anime?order_by=score&sort=desc&page=1`);
    if (!res.ok) {
      throw new error(`Error: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log(`failed to load trending  amime:`, error);
    return [];
  }
};
export const getRecommendation = async () => {
  try {
    const res = await fetch(`${BaseUrl}/recommendations/anime`);
    if (!res.ok) {
      throw new error(`Error: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data.data.map((rec) => {
      const entry = rec.entry[0]; // get the first recommended anime
      return {
        mal_id: entry.mal_id,
        title: entry.title,
        images: entry.images, // same shape as trending
        score: null, // not provided in recommendations
        genres: [], // not provided in recommendations
      };
    });
  } catch (error) {
    console.log(`failed to load trending  amime:`, error);
    return [];
  }
};

// export const gethiddenGemes = async () => {
//   try {
//      await new Promise(resolve => setTimeout(resolve, 500));
//     const res = await fetch(
//       "https://api.jikan.moe/v4/top/anime"
//     );
//     if (!res.ok) {
//       throw new error(`error genereated ${res.status} ${res.statusText}`);
//     }
//     const data = await res.json();
//     const gemes = data.data.filter(
//       (anime) => anime.score >= 8.0 && anime.popularity > 500
//     );
//     return gemes.slice(0, 10);
//   } catch (error) {
//     console.log(`faild :`, error);
//     return [];
//   }
// };
