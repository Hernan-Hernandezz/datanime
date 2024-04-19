"use server";
import { animeUrl } from "@/utils/constats";

import { Anime, pagination } from "../../models";
import { ListCards } from "../../components/ListCards";
import ListPages from "../../components/ListPages";
export default async function page({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const page = searchParams?.page || "1";
  const res = await fetch(`${animeUrl}?limit=24&page=${page}`);
  const resData = await res.json();
  const dataAnime: Anime[] = resData.data;
  const dataPagination: pagination = await resData.pagination;
  return (
    <div className="min-h-screen max-w-7xl ">
      <main className="w-max">
        <h1>directories</h1>
        <ListCards data={dataAnime} />
        <ListPages data={dataPagination} />
      </main>
    </div>
  );
}
