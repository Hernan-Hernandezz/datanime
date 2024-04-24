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
    <div className="min-h-screen max-w-7xl ">
      <main className="w-max">
        <h1>directories</h1>
        <Form genres={genre} />
        <ListCards data={dataAnime} />
        <ListPages data={dataPagination} path="directories" />
      </main>
    </div>
  );
}
