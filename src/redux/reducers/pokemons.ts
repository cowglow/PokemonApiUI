import {FETCH_POKEMONS_FAILURE, FETCH_POKEMONS_START, FETCH_POKEMONS_SUCCESS} from "../action-types.ts";
import {Pokemon, PokemonApiResponse} from "../../types/pokemon.ts";

export type PokemonState = {
    pokemons: PokemonApiResponse[],
    loading: boolean,
    error: unknown,
}
const initialState: PokemonState = {
    pokemons: [],
    loading: false,
    error: null,
}

export function pokemonReducers(
    state = initialState,
    action: { type: string, payload: any }
) {
    switch (action.type) {
        case FETCH_POKEMONS_START:
            return {...state, loading: true}
        case FETCH_POKEMONS_SUCCESS:
            return {
                ...state,
                loading: false,
                pokemons: action.payload.reduce((acc: {}, {name, url}: Pokemon) => {
                    return ({...acc, [name]: {url}})
                }, {} as Pokemon)
            }
        case FETCH_POKEMONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}