"use client";
import { Anime, promo, recentEpisode, getAnimeCharacters } from "@/models";
import { Suspense } from "react";

import {
  CardAnime,
  CardAnimeSkeleton,
  CardPromo,
  CardEpisodes,
  CardCharacters,
} from "@/components/Cards";
import Link from "next/link";

function ListCards({ data, className }: { data: Anime[]; className?: string }) {
  return (
    <ul className={className}>
      {data.map((item: Anime) => (
        <li className="max-w-60 text-red-900 mx-auto" key={item.mal_id}>
          <Suspense fallback={<CardAnimeSkeleton />}>
            <CardAnime item={item} />
          </Suspense>
        </li>
      ))}
    </ul>
  );
}

function ListCardsPromo({
  data,
  className,
}: {
  data: promo[];
  className?: string;
}) {
  return (
    <ul className={className}>
      {data.map((item: promo) => (
        <li className="max-w-60 text-red-900" key={item.entry.mal_id}>
          <Suspense fallback={<CardAnimeSkeleton />}>
            <CardPromo item={item.entry} />
          </Suspense>
        </li>
      ))}
    </ul>
  );
}
function ListCardsEpisodes({
  data,
  className,
}: {
  data: recentEpisode[];
  className?: string;
}) {
  return (
    <ul className={className}>
      {data.map((item: recentEpisode) => (
        <li className="max-w-60 text-red-900" key={item.entry.mal_id}>
          <Suspense fallback={<CardAnimeSkeleton />}>
            <CardEpisodes item={item} />
          </Suspense>
        </li>
      ))}
    </ul>
  );
}

function List({ data, className }: { data: Anime[]; className?: string }) {
  return (
    <ul className={className}>
      {data.map((item: Anime) => (
        <li
          className="max-w-60 py-3 text-default-900 hover:text-secondary-600"
          key={item.mal_id}
        >
          <Link href={`/anime/${item.mal_id}`}>
            <p>{item.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ListCardsCharacters({
  data,
  className,
  filterMain,
}: {
  data: getAnimeCharacters[];
  className?: string;
  filterMain?: boolean;
}) {
  if (!filterMain) {
    return (
      <ul className={className}>
        {data.find((item) => item.role === "Main") && (
          <li
            className="max-w-60 py-3 text-default-900 hover:text-secondary-600"
            key={data[0].character.name + "-" + data[0].character.mal_id}
          >
            <Suspense fallback={<CardAnimeSkeleton />}>
              <CardCharacters item={data[0]} />
            </Suspense>
          </li>
        )}
      </ul>
    );
  } else {
    return (
      <ul className={className}>
        {data.map((item: getAnimeCharacters) => (
          <li
            className="max-w-60 py-3 text-default-900 hover:text-secondary-600"
            key={item.character.name + "-" + item.character.mal_id}
          >
            <Suspense fallback={<CardAnimeSkeleton />}>
              <CardCharacters item={item} />
            </Suspense>
          </li>
        ))}
      </ul>
    );
  }
}

function ListCardsSkeleton() {
  return (
    <ul className="grid grid-cols-1 justify-center gap-4  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <li>
        <CardAnimeSkeleton />
      </li>
      <li>
        <CardAnimeSkeleton />
      </li>
      <li>
        <CardAnimeSkeleton />
      </li>
      <li>
        <CardAnimeSkeleton />
      </li>
      <li>
        <CardAnimeSkeleton />
      </li>
      <li>
        <CardAnimeSkeleton />
      </li>
      <li>
        <CardAnimeSkeleton />
      </li>
      <li>
        <CardAnimeSkeleton />
      </li>
      <li>
        <CardAnimeSkeleton />
      </li>
      <li>
        <CardAnimeSkeleton />
      </li>
      <li>
        <CardAnimeSkeleton />
      </li>
      <li>
        <CardAnimeSkeleton />
      </li>
      <li>
        <CardAnimeSkeleton />
      </li>
      <li>
        <CardAnimeSkeleton />
      </li>
      <li>
        <CardAnimeSkeleton />
      </li>
      <li>
        <CardAnimeSkeleton />
      </li>
      <li>
        <CardAnimeSkeleton />
      </li>
      <li>
        <CardAnimeSkeleton />
      </li>
      <li>
        <CardAnimeSkeleton />
      </li>
      <li>
        <CardAnimeSkeleton />
      </li>
      <li>
        <CardAnimeSkeleton />
      </li>
      <li>
        <CardAnimeSkeleton />
      </li>
      <li>
        <CardAnimeSkeleton />
      </li>
      <li>
        <CardAnimeSkeleton />
      </li>
    </ul>
  );
}

export {
  List,
  ListCards,
  ListCardsSkeleton,
  ListCardsPromo,
  ListCardsEpisodes,
  ListCardsCharacters,
};
