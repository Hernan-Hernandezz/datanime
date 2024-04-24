"use client";
import { Anime } from "@/models";
import { Suspense } from "react";

import { CardAnime, CardAnimeSkeleton } from "@/components/Cards";

function ListCards({ data }: { data: Anime[] }) {
  return (
    <ul className="grid grid-cols-1 justify-center gap-4  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((item: Anime) => (
        <li className="max-w-60 text-red-900" key={item.mal_id}>
          <Suspense fallback={<CardAnimeSkeleton />}>
            <CardAnime key={item.mal_id} item={item} />
          </Suspense>
        </li>
      ))}
    </ul>
  );
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

export { ListCards, ListCardsSkeleton };
