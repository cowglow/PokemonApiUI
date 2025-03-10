import {FETCH_POKEMONS_FAILURE, FETCH_POKEMONS_START, FETCH_POKEMONS_SUCCESS} from "../action-types.ts";
import {PokemonApiResponse} from "../../types/pokemon.ts";

export const fetchPokemons = () => ({type: FETCH_POKEMONS_START})
export const fetchPokemonsSuccess = (payload: PokemonApiResponse) => ({type: FETCH_POKEMONS_SUCCESS, payload})
export const fetchPokemonsFailure = (payload: unknown) => ({type: FETCH_POKEMONS_FAILURE, payload})
