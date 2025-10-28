import { GetStaticPaths } from "next";

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          slug: 'listing',
        },
      }, // See the "paths" section below
      {
        params: {
          slug: 'character',
          id: '1',
        },
      }
    ],
    fallback: true, // false or "blocking"
  }
}) satisfies GetStaticPaths



export default function Home() {
  return (
    <main className="font-sans flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <a
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        href="/listing"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Characters
      </a>
    </main>
  );
}
