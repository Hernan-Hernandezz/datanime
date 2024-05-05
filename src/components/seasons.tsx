"use server";

import { seasonNowUrl } from "@/utils/constats";
import { Anime } from "@/models";
import { ListCards } from "@/components/ListCards";

export default async function Seasons() {
  const res = await fetch(seasonNowUrl);
  const resData = await res.json();
  const seasons: Anime[] = await resData.data;
  return (
    <div className="mx-auto min-h-screen max-w-7xl p-7">
      <main className="flex w-full flex-col items-center">
        <h1 className="py-4 text-3xl">Seasons</h1>
        <ListCards data={seasons} />
      </main>
    </div>
  );
}
