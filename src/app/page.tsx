"use server";
import Top from "@/components/Top";
import ListFavorites from "@/components/ListFavorites";

export default async function Page() {
  return (
    <main className="mx-auto my-auto flex min-h-screen max-w-7xl justify-around">
      <section className="w-1/5">
        <div className="bg-content2 p-4">
          <h2 className="text-xl font-bold">Favoritos</h2>
          <ListFavorites
            filter="favorite"
            className="flex w-full max-w-full flex-col font-medium text-default-900 "
          />
        </div>
      </section>
      <section className="w-3/5">
        <h2>Emitting</h2>
        <Top
          filter="airing"
          className="grid w-full max-w-full grid-cols-1 justify-center gap-2 sm:grid-cols-2 md:grid-cols-3"
        />
      </section>
    </main>
  );
}
