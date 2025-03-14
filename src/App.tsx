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
import {Tab, Tabs, useMediaQuery, useTheme} from "@mui/material";
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

    const onTabChange = (_: SyntheticEvent<Element, Event>, index: number) => {
        dispatch(setTabIndex(index))
        dispatch(setSelectedPokemon(pokemons[index]))
    }

    const onAddPokemon = () => {
        dispatch(fetchPokemonsStart(pokemons.length + 1))
    }

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    return (
        <Container>
            <Branding/>
            <StyledBox>
                <Tabs
                    role="navigation"
                    orientation={isMobile ? "horizontal" : "vertical"}
                    variant="scrollable"
                    visibleScrollbar
                    value={tabIndex}
                    onChange={onTabChange}
                    aria-label="Pokemon Forms"
                    sx={{borderRight: 1, borderColor: 'divider', minWidth: 120}}
                >
                    {Object.keys(pokemons).map((_, index) => (
                        <Tab key={`pokemon-${index}`} label={pokemons[index].name}/>
                    ))}
                    <Loader loading={loading}/>
                </Tabs>
                <SelectedPokemon pokemon={selectedPokemon}/>
            </StyledBox>
            <AddPokemon onClick={onAddPokemon}/>
        </Container>
    );
}
