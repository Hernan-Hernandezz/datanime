"use server";
import { notFound } from "next/navigation";
import { ListCardsCharacters } from "@/components/ListCards";
import { animeUrl } from "@/utils/constats";
export default async function Characters({ id }: { id: string }) {
  const res = await fetch(`${animeUrl}/${id}/characters`);
  if (!res.ok) {
    notFound();
  }
  const data = await res.json();
  const characters = data.data;
  return (
    <ListCardsCharacters
      className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4"
      data={characters}
      filterMain
    />
  );
}
