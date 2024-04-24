"use server";
import Link from "next/link";
import { Divider, Image } from "@nextui-org/react";

import { animeUrl } from "@/utils/constats";
import { Anime } from "@/models";
import Youtube from "@/components/Youtube";
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
                <li key={genre.mal_id}>
                  <button className="rounded-full bg-primary-600 p-2 text-sm font-bold text-default-700 hover:bg-default-700 hover:text-primary-600">
                    {genre.name}
                  </button>
                </li>
              ))}
            </ul>
            <p className="rounded-2xl bg-content2 p-4 text-sm">{synopsis}</p>
          </div>
          <ul className="flex w-full flex-col items-start gap-2 rounded-2xl bg-content2 p-4">
            {relations.map((relation) => (
              <button
                className="rounded p-1 text-sm text-default-700"
                key={relation.entry[0].mal_id}
              >
                <Link
                  className="hover:text-primary-600"
                  href={`/anime/${relation.entry[0].mal_id}`}
                >
                  <span className="font-bold">{relation.entry[0].name}</span>(
                  {relation.relation})
                </Link>
              </button>
            ))}
          </ul>
          <Divider />
          <div className="flex flex-col gap-2 rounded-2xl bg-content2 p-4">
            <h3>trailer</h3>
            <div className="rounded p-1 text-sm font-bold text-default-700">
              <Youtube id={dataAnime.trailer.youtube_id} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
