"use client";
import { useFormState } from "react-dom";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import { Genres } from "@/models";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-40 flex-col gap-2 rounded-xl bg-content2 p-2 text-sm">
      {children}
    </div>
  );
}
function Select({
  id,
  name,
  children,
}: {
  id: string;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <select id={id} name={name} className="w-full rounded-lg bg-content3 p-1">
      {children}
    </select>
  );
}
function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return <label htmlFor={htmlFor}>{children}</label>;
}
export default function StatefulForm({ genres }: { genres: Genres[] }) {
  const path = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  function getQuery(formData: FormData) {
    const genres = formData.get("genres");
    const status = formData.get("status");
    const type = formData.get("type");
    const order_by = formData.get("order_by");
    const params = new URLSearchParams();
    if (genres) {
      params.set("genres", genres.toString());
    }
    if (status) {
      params.set("status", status.toString());
    }
    if (type) {
      params.set("type", type.toString());
    }
    if (order_by) {
      params.set("order_by", order_by.toString());
      if (
        order_by.toString() === "score" ||
        order_by.toString() === "favorites"
      ) {
        params.set("sort", "desc");
      }
    }
    replace(`${path}?${params.toString()}`);
  }
  return (
    <form action={getQuery} className="flex flex-wrap gap-2 py-4">
      <Container>
        <Label htmlFor="genres">Genres</Label>

        <Select id="genres" name="genres">
          <option value="">Select</option>
          {genres.map((genre: Genres) => (
            <option key={genre.mal_id} value={genre.mal_id}>
              {genre.name}
            </option>
          ))}
        </Select>
      </Container>
      <Container>
        <Label htmlFor="status">State</Label>
        <Select id="status" name="status">
          <option value="">Select</option>
          <option value="airing">emitting</option>
          <option value="complete">complete</option>
          <option value="upcoming">upcoming</option>
        </Select>
      </Container>
      <Container>
        <Label htmlFor="type">type</Label>
        <Select id="type" name="type">
          <option value="">Select</option>
          <option value="tv">TV</option>
          <option value="movie">Movie</option>
          <option value="ova">OVA</option>
          <option value="special">special</option>
          <option value="tv_special">TV special</option>
          <option value="ona">ONA</option>
          <option value="music">music</option>
        </Select>
      </Container>
      <Container>
        <Label htmlFor="order_by">Order By</Label>
        <Select id="order_by" name="order_by">
          <option value="">Select</option>
          <option value="popularity">Popularity</option>
          <option value="score">score</option>
          <option value="favorites">Favorites</option>
        </Select>
      </Container>
      <Container>
        <button
          type="submit"
          className="h-full w-full rounded-lg  p-1 text-default-700"
        >
          filter
        </button>
      </Container>
    </form>
  );
}
