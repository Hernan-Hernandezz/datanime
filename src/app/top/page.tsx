"use server";
import { Anime } from "@tutkli/jikan-ts";

import { ListTopCards } from "../../components/ListCards";
import { pagination } from "../../models";
import ListPages from "../../components/ListPages";

export default async function page({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const page = searchParams?.page || "1";
  const res = await fetch(
    `https://api.jikan.moe/v4/top/anime?page=${page}&limit=24`,
  );
  const resData = await res.json();
  const dataAnime: Anime[] = resData.data;
  const dataPagination: pagination = await resData.pagination;
  return (
    <div className="flex">
      <main className="px-10 pt-10">
        <section className="flex w-3/5 ">
          <ListTopCards data={dataAnime} />
        </section>
        <ListPages data={dataPagination} />
      </main>
    </div>
  );
}
