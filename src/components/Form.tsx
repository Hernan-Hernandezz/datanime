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
    <form action={getQuery} className="flex gap-2 pb-4">
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
          <option value="airing">En emisión</option>
          <option value="complete">Finalizado</option>
          <option value="upcoming">Proximamente</option>
        </Select>
      </Container>
      <Container>
        <Label htmlFor="type">type</Label>
        <Select id="type" name="type">
          <option value="">Select</option>
          <option value="tv">TV</option>
          <option value="movie">Película</option>
          <option value="ova">OVA</option>
          <option value="special">Especial</option>
        </Select>
      </Container>
      <Container>
        <Label htmlFor="order_by">Order By</Label>
        <Select id="order_by" name="order_by">
          <option value="popularity">Popularidad</option>
          <option value="score">Puntuación</option>
          <option value="favorites">Favoritos</option>
        </Select>
      </Container>
      <Container>
        <button
          type="submit"
          className="h-full w-full rounded-lg  p-1 text-default-700"
        >
          search
        </button>
      </Container>
    </form>
  );
}
//export default async function App() {
//const inicialState = {
//message: null,
//errors: {},
//};
//const [state, dispatch] = useFormState(()=>{console.log("hola")},{});
//const res = await fetch(genresUrl);
//const resData = await res.json();
//const genres: Genres[] = resData.data;
//return (
//<form
//className="grid gap-4 rounded-2xl bg-default-300 p-4 shadow-lg lg:grid-cols-6"
//action={dispatch}
//method="get"
//>
//{genres.map((genre: Genres) => (
//<div key={genre.mal_id}>
//<input
//type="checkbox"
//key={genre.mal_id}
//value={genre.name}
//color="primary"
///>
//<label>{genre.name}</label>
//</div>
//))}
//</form>
//);
//}
