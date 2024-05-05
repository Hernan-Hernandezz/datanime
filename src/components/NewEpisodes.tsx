"use server";

import { responseEpisodes } from "@/models";
import { ListCardsEpisodes } from "@/components/ListCards";
import { newEpisodesUrl } from "@/utils/constats";

export default async function NewEpisodes({
  className,
}: {
  className?: string;
}) {
  const res = await fetch(`${newEpisodesUrl}?sfw`);
  const resData: responseEpisodes = await res.json();
  const episodes = resData.data;
  return <ListCardsEpisodes className={className} data={episodes} />;
}
