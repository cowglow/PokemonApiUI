import {takeEvery} from "redux-saga/effects";
import {FETCH_POKEMONS_FAILURE, FETCH_POKEMONS_START, FETCH_POKEMONS_SUCCESS} from "./action-types.ts";
import {fetchPokemonsHandler} from "./saga-handlers/fetchPokemonsHandler.ts";

export function* watchSaga() {
    yield takeEvery(FETCH_POKEMONS_START, fetchPokemonsHandler)
    yield takeEvery(FETCH_POKEMONS_SUCCESS, () => null)
    yield takeEvery(FETCH_POKEMONS_FAILURE, () => null)
}
