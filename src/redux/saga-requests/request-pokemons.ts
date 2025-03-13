export async function requestPokemons(count:number) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${count}`);
    return await response.json();
}
