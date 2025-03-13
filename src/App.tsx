import {Fab, IconButton, Tab, Tabs} from "@mui/material";
import {SyntheticEvent, useEffect} from "react";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Branding from "./components/Branding.tsx";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchPokemonsStart,
    getPokemons,
    getSelectedPokemon,
    isLoading,
    setSelectedPokemon
} from "./redux/reducers/pokemons.ts";
import {getTabIndex, setTabIndex} from "./redux/reducers/tab.ts";
import {Container, StyledBox} from "./App.Styled.ts";
import Loader from "./components/Loader.tsx";
import SelectedPokemon from "./components/SelectedPokemon.tsx";

export default function App() {
    const dispatch = useDispatch()
    const loading = useSelector(isLoading)
    const pokemons = useSelector(getPokemons)
    const selectedPokemon = useSelector(getSelectedPokemon)
    const tabIndex = useSelector(getTabIndex)

    useEffect(() => {
        dispatch(fetchPokemonsStart())
    }, [dispatch])

    const onTabChange = (_: SyntheticEvent<Element, Event>, newValue: number) => {
        dispatch(setTabIndex(newValue))
        dispatch(setSelectedPokemon(pokemons[newValue]))
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
            <Fab color="primary" aria-label="add" size="medium"
                 sx={{position: "absolute", bottom: 33, right: 33}}>
                <IconButton sx={{color: "white"}}
                            onClick={() => console.log("setPokemonCount(prevState => prevState + 1)")}>
                    <AddRoundedIcon/>
                </IconButton>
            </Fab>
            <Loader loading={loading}/>
        </Container>
    );
}
