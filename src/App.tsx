import {Backdrop, Box, CircularProgress, Fab, IconButton, Paper, styled, Tab, Tabs} from "@mui/material";
import {SyntheticEvent, useEffect} from "react";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import PokemonForm from "./components/PokemonForm.tsx";
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

const Container = styled(Paper)`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100svh;
    overflow: scroll;
    align-content: center;
    padding: 0 ${({theme}) => theme.spacing(8)};
    @media (max-width: 600px) {
        padding: 0;
    }
`

const StyledBox = styled(Box)`
    display: flex;
    width: 800px;
    height: calc(100% - 78px);
    margin: 0 auto;
    @media (max-width: 600px) {
        flex-direction: column-reverse;
        width: 100%;
        gap: ${({theme}) => theme.spacing(1)};
    }
`

// type PokemonApiResponse = { count: number, next: string, previous: string | null, results: PokemonApiResults }
// type PokemonApiResults = { name: string, url: string }[]
// type PokemonData = { url: string, data?: unknown }
// type PokemonCache = Record<string, PokemonData>

export default function App() {
    const dispatch = useDispatch()
    const loading = useSelector(isLoading)
    const pokemons = useSelector(getPokemons)
    const selectedPokemon = useSelector(getSelectedPokemon)
    const tabIndex = useSelector(getTabIndex)
    // const [tabIndex, setTabIndex] = useState(0)
    // const [pokemonCount, setPokemonCount] = useState(5)
    // const [formCache, setFormCache] = useState<PokemonCache>({})


    useEffect(() => {
        dispatch(fetchPokemonsStart())
        // (async () => {
        //     await new Promise(resolve => setTimeout(resolve, 2000));
        //     const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonCount}`)
        //     const {results}: Awaited<PokemonApiResponse> = await pokemonData.json()
        //     const formCache = results.reduce((acc, {name, url}) => {
        //         return ({...acc, [name]: {url}})
        //     }, {} as PokemonCache)
        //     setFormCache(formCache)
        //     if (pokemonCount > 5) {
        //         setTabIndex(pokemonCount - 1)
        //     }
        // })()
    }, [dispatch])

    // if (loading) return <Box height="calc(100svh)" textAlign="center" padding={30}
    //                          sx={{border: "thin solid red"}}><CircularProgress/></Box>

    const onTabChange = (_: SyntheticEvent<Element, Event>, newValue: number) => {
        dispatch(setTabIndex(newValue))
        dispatch(setSelectedPokemon(pokemons[newValue]))
    }
    return (
        <Container>
            {loading && (
                <Backdrop
                    sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                    open={loading}
                    onClick={console.log}
                >
                    <CircularProgress/>
                </Backdrop>
            )}
            sdf
            <pre>{JSON.stringify({selectedPokemon})}</pre>
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
            {selectedPokemon && (
                <PokemonForm
                    key={`form-${selectedPokemon.name}`}
                    name={selectedPokemon.name}
                    url={selectedPokemon.url}
                />
            )}
            </StyledBox>
            <Fab color="primary" aria-label="add" size="medium"
                 sx={{position: "absolute", bottom: 33, right: 33}}>
                <IconButton sx={{color: "white"}}
                            onClick={() => console.log("setPokemonCount(prevState => prevState + 1)")}>
                    <AddRoundedIcon/>
                </IconButton>
            </Fab>
        </Container>
    );
}
