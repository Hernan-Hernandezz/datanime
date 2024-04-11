import { Anime } from "@tutkli/jikan-ts";
import CardAnime from "./Cards";
export default function ListCards({ data }: { data: Anime[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
      {data.map((item: Anime) => (
        <li className="text-red-900" key={item.mal_id}>
          <CardAnime key={item.mal_id} item={item} />
        </li>
      ))}
    </ul>
  );
}
