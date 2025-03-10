import {call, put} from 'redux-saga/effects'
import {fetchPokemonsFailure, fetchPokemonsSuccess} from "../actions/fetch-pokemons.ts";
import {requestPokemons} from "../saga-requests/request-pokemons.ts";

export function* fetchPokemonsHandler() {
    try {
        // @ts-ignore
        const response = yield call(requestPokemons);
        yield put(fetchPokemonsSuccess(response.results))
    } catch (error) {
        yield put(fetchPokemonsFailure(error));
    }
}
