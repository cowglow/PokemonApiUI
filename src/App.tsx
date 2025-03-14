import {useDispatch, useSelector} from "react-redux";
import {fetchPokemonsStart, getPokemons, getSelectedPokemon} from "./redux/reducers/pokemons.ts";
import {useEffect} from "react";
import {Container, StyledBox} from "./App.Styled.ts";
import Branding from "./components/Branding.tsx";
import SelectedPokemon from "./components/SelectedPokemon.tsx";
import AddPokemon from "./components/Fab/AddPokemon.tsx";
import PokemonTabs from "./components/PokemonTabs.tsx";

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
        <Container>
            <Branding/>
            <StyledBox>
                <PokemonTabs/>
                <SelectedPokemon pokemon={selectedPokemon}/>
            </StyledBox>
            <AddPokemon onClick={onAddPokemon}/>
        </Container>
    );
}
