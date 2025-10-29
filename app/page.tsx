import { GetStaticPaths } from "next";
import { CharacterCard } from "./ui/character-card/character-card";
import prisma from "./lib/prisma";

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          slug: "listing",
        },
      }, // See the "paths" section below
      {
        params: {
          slug: "character",
          id: "1",
        },
      },
    ],
    fallback: true, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export default async function Home() {
  const favorites = await prisma.favorite.findMany();
  return (
    <main className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <a
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        href="/listing"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Characters
      </a>
      <h1 className="text-2xl font-bold text-center text-amber-300 uppercase">
        Favorites:
      </h1>
      {favorites.map((favorite: any) => (
        <CharacterCard
          key={favorite.id}
          name={favorite.name}
          species={favorite.species}
          type={favorite.type}
          status={favorite.status}
          id={favorite.id}
          isActive={false}
        />
      ))}
    </main>
  );
}
