"use server";
import { promosUrl } from "@/utils/constats";
import { ListCardsPromo } from "./ListCards";
import { promo } from "@/models";
export default async function Promos({ className }: { className?: string }) {
  const res = await fetch(promosUrl);
  const resData = await res.json();
  const promos: promo[] = await resData.data;
  return <ListCardsPromo className={className} data={promos} />;
}
