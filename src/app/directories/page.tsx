"use server";
import { useSearchParams } from "next/navigation";
import { animeUrl, genresUrl } from "@/utils/constats";

import { Anime, pagination, Genres } from "@/models";
import { ListCards } from "@/components/ListCards";
import ListPages from "@/components/ListPages";
import Form from "@/components/Form";
export default async function page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    genres?: string;
    state?: string;
    year?: string;
    type?: string;
    order_by?: string;
    q?: string;
  };
}) {
  const page = searchParams?.page || "1";
  const order_by = searchParams?.order_by || "popularity";
  const params = new URLSearchParams(searchParams);
  if (searchParams?.genres) {
    params.set("genres", searchParams.genres);
  }
  if (searchParams?.state) {
    params.set("status", searchParams.state);
  }
  if (searchParams?.year) {
    params.set("year", searchParams.year);
  }
  if (searchParams?.type) {
    params.set("type", searchParams.type);
  }
  if (searchParams?.q) {
    params.set("q", searchParams.q);
  }
  const res = await fetch(
    `${animeUrl}?limit=24&page=${page}&order_by=${order_by}&${params.toString()}`,
  );
  const resData = await res.json();
  const dataAnime: Anime[] = resData.data;
  const dataPagination: pagination = await resData.pagination;
  const resGenres = await fetch(genresUrl);
  const resDataGenres = await resGenres.json();
  const genre: Genres[] = resDataGenres.data;
  return (
    <div className="mx-auto min-h-screen max-w-7xl p-7">
      <main className="flex w-full flex-col items-center">
        <h1 className="py-4 text-3xl">
          List of animes{searchParams?.q ? `: ${searchParams?.q}` : ""}
        </h1>
        <Form genres={genre} />
        <ListCards
          data={dataAnime}
          className="mx-auto grid w-full grid-cols-1 justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        />
        <ListPages data={dataPagination} path="directories" />
      </main>
    </div>
  );
}
