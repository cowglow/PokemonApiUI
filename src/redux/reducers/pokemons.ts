import {createSlice} from "@reduxjs/toolkit";
import {Pokemon} from "../../types/pokemon.ts";
import {RootState} from "../store-config.ts";

export type PokemonState = {
    items: Pokemon[],
    loading: boolean,
    error: unknown,
    selectedPokemon: Pokemon | null
}
const initialState: PokemonState = {
    items: [],
    loading: false,
    error: null,
    selectedPokemon: null
}

const pokemonSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {
        fetchPokemonsStart: (state) => ({
            ...state,
            loading: true
        }),
        fetchPokemonsSuccess: (state, action) => ({
            ...state,
            loading: false,
            items: action.payload
        }),
        fetchPokemonsFailure: (state, action) => ({
            ...state,
            loading: false,
            error: action.payload
        }),
        setSelectedPokemon: (state, action) => ({
            ...state,
            selectedPokemon: action.payload
        })
    }
})

export function isLoading(state: RootState) {
    return state.pokemons.loading
}

export function getPokemons(state: RootState) {
    return state.pokemons.items
}

export function getSelectedPokemon(state: RootState) {
    return state.pokemons.selectedPokemon
}

export const {
    fetchPokemonsStart,
    fetchPokemonsSuccess,
    fetchPokemonsFailure,
    setSelectedPokemon
} = pokemonSlice.actions
export default pokemonSlice.reducer
