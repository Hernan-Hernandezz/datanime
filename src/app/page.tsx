"use server";
import Top from "@/components/Top";
import ListFavorites from "@/components/ListFavorites";

export async function generateMetadata() {
  return {
    title: "datanime",
    description: "find your anime and its information",
    authors: [
      {
        name: "Hernan-Hernandezz",
        url: "https://github.com/Hernan-Hernandezz",
      },
    ],
  };
}
export default async function Page() {
  return (
    <main className="mx-auto my-auto flex min-h-screen max-w-7xl flex-col justify-around md:flex-row">
      <section className="w-full md:w-1/5">
        <div className="rounded-md bg-content2 p-4">
          <h2 className="text-xl font-bold">Favorites</h2>
          <ListFavorites
            filter="favorite"
            className="flex h-40 w-full max-w-full flex-col overflow-y-auto font-medium text-default-900 md:h-full "
          />
        </div>
      </section>
      <section className=" flex w-full flex-col md:w-3/5">
        <h2 className="mx-auto mb-4 text-3xl font-bold underline">Emitting</h2>
        <Top
          filter="airing"
          className="grid w-full max-w-full grid-cols-1 justify-center gap-2 sm:grid-cols-2 md:grid-cols-3"
        />
      </section>
    </main>
  );
}
