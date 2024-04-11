import { TopClient } from "@tutkli/jikan-ts";

const client = new TopClient();
const topAnime = client.getTopAnime().then((res) => res.data);

export default topAnime;
