import { Anime } from "../../../models";
import Link from "next/link";
import { Divider, Image } from "@nextui-org/react";

import { animeUrl } from "../../../utils/constats";
export default async function Page({ params }: { params: { id: string } }) {
  const res = await fetch(`${animeUrl}/${params.id}/full`);
  const anime = await res.json();
  const dataAnime: Anime = anime.data;
  const { title, images, episodes, synopsis, status, genres, type } = dataAnime;
  const relations = dataAnime.relations;
  const { image_url } = images.webp;

  return (
    <main>
      <div className="flex min-h-screen max-w-7xl flex-col items-center justify-center gap-4 md:flex-row md:items-start">
        <div className="flex flex-col gap-4 p-4 pt-8">
          <Image
            className="h-80 w-60 object-cover"
            src={image_url}
            alt={`image from ${title}`}
            width={"100%"}
            height={"100%"}
          />
          <p>
            <span className="font-bold">Episodes:</span> {episodes}
          </p>
          <p>
            <span className="font-bold">Status:</span> {status}
          </p>
          <p>
            <span className="font-bold">Type:</span>
            {type}
          </p>
        </div>
        <div className="flex w-4/5 flex-col gap-4 p-4 md:w-3/5">
          <h1 className="p-4 text-3xl font-bold">{title}</h1>
          <div className="flex flex-col  shadow-md">
            <h2 className="p-4 text-xl font-bold">Synopsis</h2>
            <ul className="flex flex-wrap gap-1 p-4">
              {genres.map((genre) => (
                <li
                  className="rounded-full bg-primary-600 p-2 text-sm font-bold text-default-700 hover:bg-default-700 hover:text-primary-600"
                  key={genre.mal_id}
                >
                  {genre.name}
                </li>
              ))}
            </ul>
            <p className="rounded-2xl bg-content2 p-4 text-sm">{synopsis}</p>
          </div>
          <ul className="flex flex-col gap-2 rounded-2xl bg-content2 p-4">
            {relations.map((relation) => (
              <li
                className="rounded p-1 text-sm font-bold text-default-700"
                key={relation.entry[0].mal_id}
              >
                <Link
                  className="hover:text-primary-600"
                  href={`/anime/${relation.entry[0].mal_id}`}
                >
                  {`${relation.relation}: ${relation.entry[0].name}`}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
