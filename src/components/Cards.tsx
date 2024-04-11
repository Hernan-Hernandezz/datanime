"use client";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Anime } from "@tutkli/jikan-ts";

export default function CardAnime({ item }: { item: Anime }) {
  const { title, images } = item;
  const imageUrl = images.webp?.image_url;
  return (
    <Card className="h-full">
      <CardHeader>
        <Image
          className="h-80 w-56"
          src={imageUrl}
          alt={title}
          width={"100%"}
          height={"100%"}
        />
      </CardHeader>
      <CardBody>
        <p>{title}</p>
      </CardBody>
    </Card>
  );
}
