import {combineReducers, configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import {pokemonReducers} from "./reducers/pokemons.ts";
import {watchSaga} from "./saga.ts";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: combineReducers({
        pokemons: pokemonReducers,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    devTools: true
});

sagaMiddleware.run(watchSaga);

export default store;