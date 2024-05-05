"use server";
import { Anime } from "@/models";
import { Suspense } from "react";

import { ListCards, ListCardsSkeleton } from "@/components/ListCards";
import { pagination } from "@/models";
import { topAnimeUrl } from "@/utils/constats";

export default async function Top({
  filter,
  className,
}: {
  filter?: "airing" | "upcoming" | "bypopularity" | "favorite";
  className?: string;
}) {
  filter !== "airing" || "upcoming" || "bypopularity" || "favorite"
    ? filter
    : undefined;
  const res = await fetch(
    `${topAnimeUrl}?limit=24&type=tv${filter !== undefined ? `&filter=${filter}` : ""}`,
  );
  const resData = await res.json();
  const dataAnime: Anime[] = resData.data;
  return (
    <Suspense fallback={<ListCardsSkeleton />}>
      <ListCards className={className} data={dataAnime} />
    </Suspense>
  );
}
