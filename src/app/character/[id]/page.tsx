import Link from "next/link";
import { notFound } from "next/navigation";
import { Divider, Image } from "@nextui-org/react";
import { getAnimeCharacters, images } from "@/models";
import { characterUrl } from "@/utils/constats";
import { CardPromo } from "@/components/Cards";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const res = await fetch(`${characterUrl}/${id}/full`);
  const resOtherImages = await fetch(`${characterUrl}/${id}/pictures`);
  if (!res.ok) {
    notFound();
  }
  const data = await res.json();
  const dataOtherImages = await resOtherImages.json();
  const otherImages: images[] = dataOtherImages.data;
  const character: getAnimeCharacters = data.data;
  const { about, images, name, url, favorites, voice_actors, anime } =
    character;
  const formattedAbout = about
    ? about.split("\n").map((line) => (
        <React.Fragment key={line}>
          <p className="text-sm">{line}</p>
          <br />
        </React.Fragment>
      ))
    : "No information";

  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center p-7">
      <Image
        src={images.webp.image_url}
        alt={name}
        width={200}
        height={200}
        className="rounded-full"
      />
      <h1 className="text-3xl font-bold">{name}</h1>
      <div>
        <h2 className="text-2xl font-bold">About character</h2>
        <div>{formattedAbout}</div>
      </div>
      <h2 className="text-2xl font-bold">apperance in</h2>
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {anime.map((item) => (
          <li
            className="w-full max-w-60 hover:scale-105"
            key={item.anime.mal_id}
          >
            <CardPromo item={item.anime} />
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold">other images</h2>
      <ul className="grid grid-cols-2 justify-between gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {otherImages.map((image) => (
          <li key={image.jpg.image_url}>
            <Image
              src={image.jpg.image_url}
              alt={name}
              width={200}
              height={200}
              className="rounded-xl"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
