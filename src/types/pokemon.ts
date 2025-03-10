export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonApiResponse {
    count: number;
    next: string;
    previous: string | null;
    results: Pokemon[];
}