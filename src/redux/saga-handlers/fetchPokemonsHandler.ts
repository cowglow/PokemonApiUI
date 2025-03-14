import {PayloadAction} from "@reduxjs/toolkit";
import {PokemonApiResponse} from "../../types/pokemon.ts";
import {call, put} from 'redux-saga/effects'
import {requestPokemons} from "../saga-requests/request-pokemons.ts";
import {fetchPokemonsFailure, fetchPokemonsSuccess, setSelectedPokemon} from "../reducers/pokemons.ts";
import {setTabIndex} from "../reducers/tab.ts";

export function* fetchPokemonsHandler(action: PayloadAction<number>) {
    try {
        const {results}: PokemonApiResponse = yield call(requestPokemons, action.payload)
        const nextIndex = results.length
        yield put(fetchPokemonsSuccess(results))
        yield put(setTabIndex(nextIndex))
        yield put(setSelectedPokemon(results[nextIndex-1]))
    } catch (error) {
        yield put(fetchPokemonsFailure(error));
    }
}
