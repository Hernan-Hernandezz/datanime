"use server";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Divider, Image } from "@nextui-org/react";

import { animeUrl } from "@/utils/constats";
import { Anime } from "@/models";
import Youtube from "@/components/Youtube";
import Characters from "@/components/Characters";

export async function generateMetadata() {
  return {
    title: "datanime",
    description: "information about the anime",
    authors: [
      {
        name: "Hernan-Hernandezz",
        url: "https://github.com/Hernan-Hernandezz",
      },
    ],
  };
}
function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className="rounded-2xl bg-content2 p-4">{children}</div>;
}
export default async function Page({ params }: { params: { id: string } }) {
  const res = await fetch(`${animeUrl}/${params.id}/full`);
  if (!res.ok) {
    notFound();
  }
  const anime = await res.json();
  const dataAnime: Anime = anime.data;
  const {
    streaming,
    titles,
    title,
    images,
    episodes,
    synopsis,
    status,
    genres,
    type,
    aired,
  } = dataAnime;
  const relations = dataAnime.relations;
  const { image_url } = images.webp;

  function Status() {
    switch (status) {
      case "Finished Airing":
        return <p className="bg-danger-200 p-4 text-default-900">Finished</p>;
      case "Currently Airing":
        return <p className="bg-success-200 p-4 text-default-900">emitting</p>;
      case "Not yet aired":
        return (
          <p className="bg-danger-200 p-4 text-default-900">Not Yet Aired</p>
        );
      case "Complete":
        return <p className="bg-primary-200 p-4 text-default-900">Completed</p>;
    }
  }
  const Episodes = () => {
    if (episodes) {
      return (
        <p>
          <span className="font-bold">Episodes:</span> {episodes}
        </p>
      );
    } else {
      return null;
    }
  };
  const Streaming = () => {
    if (streaming.length > 0) {
      return (
        <Container>
          <h2 className="text-xl font-bold">You can watch {title} in</h2>
          <ul className="my-4 flex flex-wrap gap-1">
            {streaming.map((stream) => (
              <li key={stream.name}>
                <a
                  href={`${stream.name === "Crunchyroll" && titles.find((title) => title.type === "English") ? "https://crunchyroll.com/" + "search?q=" + titles.find((title) => title.type === "English")?.title : stream.url}`}
                  className="w-32 rounded-full bg-primary-200 p-2 text-sm font-bold text-default-900 hover:bg-primary-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  {stream.name}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      );
    } else {
      return null;
    }
  };
  const ReleaseDate = () => {
    if (status === "Not yet aired" && aired.from !== null) {
      const date = new Date(
        aired.prop.from.year,
        aired.prop.from.month - 1,
        aired.prop.from.day,
      ).toDateString();
      return (
        <p>
          <span className="font-bold">Release Date:</span>
          {`${date}`}
        </p>
      );
    } else {
      return null;
    }
  };
  const Relations = () => {
    if (relations.length > 0) {
      return (
        <Container>
          <ul className="flex w-full flex-col items-start gap-2">
            {relations.map((relation) => (
              <button
                className="rounded p-1 text-sm text-default-700"
                key={relation.entry[0].mal_id}
              >
                <Link
                  className="hover:text-primary-600"
                  href={`/anime/${relation.entry[0].mal_id}`}
                >
                  <span className="font-extrabold">
                    {`${relation.entry[0].name} `}
                  </span>
                  ({relation.relation})
                </Link>
              </button>
            ))}
          </ul>
        </Container>
      );
    }
  };
  return (
    <main className="mx-auto min-h-screen max-w-7xl">
      <div className="flex min-h-screen max-w-7xl flex-col items-center justify-center gap-4 md:flex-row md:items-start">
        <div className="flex flex-col gap-4 p-4 pt-8">
          <Image
            className="w-full object-cover md:h-80 md:w-60"
            src={image_url}
            alt={`image from ${title}`}
            width={"100%"}
            height={"100%"}
          />
          <Status />
          <p>
            <span className="font-bold">Type:</span>
            {type}
          </p>
          <Episodes />
          <ReleaseDate />
        </div>
        <div className="flex w-4/5 flex-col gap-4 p-4 md:w-3/5">
          <h1 className="p-4 text-3xl font-bold">{title}</h1>
          <div className="flex flex-col ">
            <h2 className="p-4 text-xl font-bold">Synopsis</h2>
            <ul className="flex flex-wrap gap-1 p-4">
              {genres.map((genre) => (
                <li key={genre.mal_id}>
                  <Link
                    href={`/directories?genres=${genre.mal_id}`}
                    className="rounded-full bg-primary-200 p-2 text-sm font-bold text-default-900 hover:bg-primary-300"
                  >
                    {genre.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Container>
              <p className="text-sm">{synopsis}</p>
            </Container>
          </div>
          <Relations />
          <Container className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Trailer</h2>
            <div className="rounded p-1 text-sm font-bold text-default-700">
              <Youtube id={dataAnime.trailer.youtube_id} />
            </div>
          </Container>
          <Streaming />
          <Container>
            <p className="py-4 text-xl font-bold ">Other titles</p>
            <ul className="list-disc px-6">
              {titles.map((title) => (
                <li key={title.type}>
                  <h2>
                    {title.title} ({title.type})
                  </h2>
                </li>
              ))}
            </ul>
          </Container>
          <Container>
            <Characters id={params.id} />
          </Container>
        </div>
      </div>
    </main>
  );
}
