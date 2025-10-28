const BASE_URL = "https://rickandmortyapi.com/api";

export async function fetchData(endpoint: string) {
    const response = await fetch(`${BASE_URL}/${endpoint}`)
    if (!response.ok) throw new Error(`Error: ${response.status}`)
    return response.json()
}