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
  const formattedAbout = about.split("\n").map((line) => (
    <React.Fragment key={line}>
      <p className="text-sm">{line}</p>
      <br />
    </React.Fragment>
  ));

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
        <p className="text-sm ">{formattedAbout}</p>
      </div>
      <h2 className="text-2xl font-bold">apperance in</h2>
      <ul className="flex flex-wrap gap-2">
        {anime.map((item) => (
          <li className="max-w-60" key={item.anime.mal_id}>
            <CardPromo item={item.anime} />
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold">other images</h2>
      <ul className="flex flex-wrap gap-2">
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
