import {FETCH_POKEMONS_FAILURE, FETCH_POKEMONS_START, FETCH_POKEMONS_SUCCESS} from "../action-types.ts";

export const getPokemons = () => ({type: FETCH_POKEMONS_START})
export const getPokemonsSuccess = (payload: any) => ({type: FETCH_POKEMONS_SUCCESS, payload})
export const getPokemonsFailure = (payload: any) => ({type: FETCH_POKEMONS_FAILURE, payload})