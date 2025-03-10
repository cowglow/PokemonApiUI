export async function requestPokemons() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=5`);
    return await response.json();
}
