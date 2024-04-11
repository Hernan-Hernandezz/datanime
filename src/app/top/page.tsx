"use server";
import topAnime from "../../utils/api";
import CardAnime from "../../components/Cards";
import { Anime } from "@tutkli/jikan-ts";
export default async function page() {
  const data = await topAnime;
  return (
    <main>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
        {data.map((item: Anime) => (
          <li className="text-red-900" key={item.mal_id}>
            <CardAnime key={item.mal_id} item={item} />
          </li>
        ))}
      </ul>
    </main>
  );
}
