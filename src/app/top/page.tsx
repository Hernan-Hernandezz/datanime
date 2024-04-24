"use server";
import { Anime } from "@/models";
import { Suspense } from "react";

import { ListCards, ListCardsSkeleton } from "@/components/ListCards";
import { pagination } from "@/models";
import ListPages from "@/components/ListPages";
import { topAnimeUrl } from "@/utils/constats";

export default async function page({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const page = searchParams?.page || "1";
  const res = await fetch(`${topAnimeUrl}?page=${page}&limit=24`);
  const resData = await res.json();
  const dataAnime: Anime[] = resData.data;
  const dataPagination: pagination = await resData.pagination;
  return (
    <div className="flex flex-col items-center justify-center">
      <main className="flex max-w-6xl justify-center">
        <section className="flex flex-col items-center justify-center">
          <Suspense fallback={<ListCardsSkeleton />}>
            <ListCards data={dataAnime} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <ListPages data={dataPagination} path="top" />
          </Suspense>
        </section>
      </main>
    </div>
  );
}
