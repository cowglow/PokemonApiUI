import {takeEvery} from "redux-saga/effects";
import {fetchPokemonsHandler} from "./saga-handlers/fetchPokemonsHandler.ts";
import {fetchPokemonsStart} from "./reducers/pokemons.ts";

export function* watchSaga() {
    yield takeEvery(fetchPokemonsStart, fetchPokemonsHandler)
}
