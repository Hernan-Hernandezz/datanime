"use server";
import { Anime } from "@/models";
import { Suspense } from "react";

import { List, ListCardsSkeleton } from "@/components/ListCards";
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
    `${topAnimeUrl}?limit=24${filter !== undefined ? `&filter=${filter}` : ""}`,
  );
  const resData = await res.json();
  const dataAnime: Anime[] = resData.data;
  return (
    <Suspense fallback={<ListCardsSkeleton />}>
      <List className={className} data={dataAnime} />
    </Suspense>
  );
}
