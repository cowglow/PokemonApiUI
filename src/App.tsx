import {useDispatch, useSelector} from "react-redux";
import {
    fetchPokemonsStart,
    getPokemons,
    getSelectedPokemon,
    isLoading,
    setSelectedPokemon
} from "./redux/reducers/pokemons.ts";
import {getTabIndex, setTabIndex} from "./redux/reducers/tab.ts";
import {SyntheticEvent, useEffect} from "react";
import {Container, StyledBox} from "./App.Styled.ts";
import Branding from "./components/Branding.tsx";
import {Tab, Tabs} from "@mui/material";
import SelectedPokemon from "./components/SelectedPokemon.tsx";
import AddPokemon from "./components/Fab/AddPokemon.tsx";
import Loader from "./components/Loader.tsx";
export default function App() {
    const dispatch = useDispatch()
    const loading = useSelector(isLoading)
    const pokemons = useSelector(getPokemons)
    const selectedPokemon = useSelector(getSelectedPokemon)
    const tabIndex = useSelector(getTabIndex)

    useEffect(() => {
        dispatch(fetchPokemonsStart(5))
    }, [dispatch])

    const onTabChange = (_: SyntheticEvent<Element, Event>, newValue: number) => {
        dispatch(setTabIndex(newValue))
        dispatch(setSelectedPokemon(pokemons[newValue]))
    }

    const onAddPokemon = () => {
        dispatch(setTabIndex(pokemons.length - 1))
        dispatch(fetchPokemonsStart(pokemons.length + 1))
    }

    return (
        <Container>
            <Branding/>
            <StyledBox>
                <Tabs
                    role="navigation"
                    orientation="vertical"
                    variant="scrollable"
                    visibleScrollbar
                    value={tabIndex}
                    onChange={onTabChange}
                    aria-label="Pokemon Forms"
                >
                    {Object.keys(pokemons).map((_, index) => (
                        <Tab key={`pokemon-${index}`} label={pokemons[index].name}/>
                    ))}
                </Tabs>
                <SelectedPokemon pokemon={selectedPokemon}/>
            </StyledBox>
            <AddPokemon onClick={onAddPokemon}/>
            <Loader loading={loading}/>
        </Container>
    );
}
