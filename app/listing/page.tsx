import { CharacterList } from "../ui/character-list/character-list";
import { fetchData } from "../utils/api/client";

export default async function ListingPage() {

    const results = await fetchData("character/?page=1");

    return <div className="p-8">
        <h1 className="text-4xl font-bold text-center text-amber-300 uppercase">Characters!</h1>
        <CharacterList initialItems={results.results} />
    </div>
}
