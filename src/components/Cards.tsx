"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import { Anime } from "@tutkli/jikan-ts";

export default function CardAnime({ item }: { item: Anime }) {
  const { title, images } = item;
  const imageUrl = images.webp?.image_url;
  return (
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
      <CardFooter className="flex justify-center">
        <p>{title}</p>
      </CardFooter>
    </Card>
  );
}
