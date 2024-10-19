"use client";
import { Spinner } from "@nextui-org/react";
export default function Loading() {
  return (
    <div className="absolute left-1/2 top-1/2 m-0 p-0">
      <h1 className="m-0 p-0 text-3xl text-primary">
        <Spinner size="md" /> Loading...
      </h1>
    </div>
  );
}
