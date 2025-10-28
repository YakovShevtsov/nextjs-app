import { CharacterCard } from "@/app/ui/character-card/character-card";
import { fetchData } from "@/app/utils/api/client";
import NextLink from "next/link";


export const dynamicParams = false;

export function generateStaticParams() {
  return [{ id: '1' }];
}

export default async function CharacterPage({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;
    const result = await fetch(`https://rickandmortyapi.com/api/character/${id}`).then(res => res.json());

    
    return (
        <main className="p-8">
            <NextLink 
                href="/listing"
                className="mb-4 px-4 py-2 bg-amber-300 text-black rounded hover:bg-amber-400 transition-colors"
            >
                ← Back to Characters
            </NextLink>
            {result && (
                <div className="w-fit ml-auto">
                    <CharacterCard {...result} id={Number(id)} isActive={true}/>
                </div>
            )}
        </main>
    )
}
