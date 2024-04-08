"use client";
// app/page.tsx
import { Button } from "@nextui-org/button";
import { topAnime } from "../utils/api";

export default function Page() {
  return (
    <div>
      <Button
        color="primary"
        size="md"
        radius="full"
        onPress={() => console.log(topAnime())}
      >
        Click me
      </Button>
    </div>
  );
}
