"use client";
import { Card, CardBody, CardFooter, Image, Skeleton } from "@nextui-org/react";
import { Anime, entryWatch, recentEpisode, getAnimeCharacters } from "@/models";
import Link from "next/link";

function CardAnime({ item }: { item: Anime }) {
  const { title, images, mal_id } = item;
  const imageUrl = images.webp?.image_url;
  const Status = () => {
    switch (item.status) {
      case "Finished Airing":
        return <p className="text-danger-700">Finished</p>;
      case "Currently Airing":
        return <p className="text-success-700">emitting</p>;
      case "Not yet aired":
        return <p className="text-danger-700">Not Yet Aired</p>;
      case "Complete":
        return <p className="text-primary-700">Completed</p>;
    }
  };
  return (
    <Link href={`/anime/${mal_id}`}>
      <Card className="h-full bg-content2">
        <CardBody className="p-0">
          <Image
            className="h-80 w-full object-cover"
            src={imageUrl}
            alt={title}
            width={"100%"}
            height={"100%"}
          />
          <div className="top-64 z-10 flex w-full flex-row items-center gap-2 bg-content2 bg-opacity-90 p-2 font-bold">
            <p>{item.type}</p>
            <Status />
          </div>
        </CardBody>
        <CardFooter className="flex flex-auto flex-col items-start justify-start bg-content2 ">
          <p>{title}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
function CardAnimeSkeleton() {
  return (
    <Card className="h-full bg-content2">
      <CardBody className="p-0">
        <Skeleton className="h-80 w-full object-cover" />
      </CardBody>
      <CardFooter className="flex flex-auto flex-col items-start justify-start">
        <Skeleton className="h-4 w-40" />
      </CardFooter>
    </Card>
  );
}

function CardPromo({ item }: { item: entryWatch }) {
  const { title, images, mal_id } = item;
  const imageUrl = images.webp?.image_url;
  return (
    <Link href={`/anime/${mal_id}`}>
      <Card className="h-full bg-content2">
        <CardBody className="p-0">
          <Image
            className="h-80 w-full object-cover"
            src={imageUrl}
            alt={title}
            width={"100%"}
            height={"100%"}
          />
        </CardBody>
        <CardFooter className="flex flex-auto flex-col items-start justify-start">
          <p>{title}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
function CardEpisodes({ item }: { item: recentEpisode }) {
  const { title, images, mal_id } = item.entry;
  const imageUrl = images.webp?.image_url;
  return (
    <Link href={`/anime/${mal_id}`}>
      <Card className="h-full bg-content2">
        <CardBody className="p-0">
          <Image
            className="h-80 w-full object-cover"
            src={imageUrl}
            alt={title}
            width={"100%"}
            height={"100%"}
          />
        </CardBody>
        <CardFooter className="flex flex-auto flex-col items-start justify-start">
          <p>{title}</p>
          <ul>
            episodes
            {item.episodes.map((item) => (
              <li key={item.mal_id}>{item.title}</li>
            ))}
          </ul>
        </CardFooter>
      </Card>
    </Link>
  );
}
function CardCharacters({ item }: { item: getAnimeCharacters }) {
  const { name, images } = item.character;
  const { role } = item;
  return (
    <Link href={`/character/${item.character.mal_id}`}>
      <Card className="h-full bg-content2">
        <CardBody className="p-0">
          <Image
            loading="lazy"
            className="h-60 w-full object-cover"
            src={images.webp?.image_url}
            alt={name}
            width={"100%"}
            height={"100%"}
          />
        </CardBody>
        <CardFooter className="flex flex-auto flex-col items-start justify-start">
          <h3 className="font-bold">{name}</h3>
          <p>{role}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
export {
  CardAnime,
  CardAnimeSkeleton,
  CardPromo,
  CardEpisodes,
  CardCharacters,
};
