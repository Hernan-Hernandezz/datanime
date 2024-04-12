import { AnimeClient } from "@tutkli/jikan-ts";

const anime = new AnimeClient();
const getRecommendation = anime
  .getAnimeRecommendations(1)
  .then((res) => res.data);

export { getRecommendation };
