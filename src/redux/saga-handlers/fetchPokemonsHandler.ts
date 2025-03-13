import {call, put} from 'redux-saga/effects'
import {requestPokemons} from "../saga-requests/request-pokemons.ts";
import {PokemonApiResponse} from "../../types/pokemon.ts";
import {fetchPokemonsFailure, fetchPokemonsSuccess} from "../reducers/pokemons.ts";

export function* fetchPokemonsHandler() {
    try {
        const response: PokemonApiResponse = yield call(requestPokemons);
        yield put(fetchPokemonsSuccess(response.results))
    } catch (error) {
        yield put(fetchPokemonsFailure(error));
    }
}
