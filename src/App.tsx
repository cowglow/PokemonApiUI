import {useDispatch, useSelector} from "react-redux";
import {fetchPokemonsStart, getPokemons, getSelectedPokemon} from "./redux/reducers/pokemons.ts";
import {useEffect} from "react";
import SelectedPokemon from "./components/SelectedPokemon.tsx";
import AddPokemon from "./components/Fab/AddPokemon.tsx";
import PokemonTabs from "./components/PokemonTabs.tsx";
import Layout from "./ui/Layout.tsx";
import {Box} from "@mui/material";

export default function App() {
    const dispatch = useDispatch()
    const pokemons = useSelector(getPokemons)
    const selectedPokemon = useSelector(getSelectedPokemon)

    useEffect(() => {
        dispatch(fetchPokemonsStart(5))
    }, [dispatch])


    const onAddPokemon = () => {
        dispatch(fetchPokemonsStart(pokemons.length + 1))
    }

    return (
        <Layout>
            <Box display="flex">
                <PokemonTabs/>
                <SelectedPokemon pokemon={selectedPokemon}/>
                <AddPokemon onClick={onAddPokemon}/>
            </Box>
        </Layout>
    );
}
