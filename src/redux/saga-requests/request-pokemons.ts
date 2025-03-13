export async function requestPokemons() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=5`);
    return await response.json();
}
