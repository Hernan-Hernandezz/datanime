const BASE_URL = "https://api.jikan.moe/v4";

export const topAnime = async () => {
  try {
    const response = await fetch(`${BASE_URL}/top/anime`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};
