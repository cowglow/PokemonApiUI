import {Box, Fab, IconButton, Paper, styled, Tab, Tabs} from "@mui/material";
import {useEffect, useState} from "react";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import PokemonForm from "./components/PokemonForm.tsx";
import Branding from "./components/Branding.tsx";

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
        gap: ${({theme}) => theme.spacing(1) };
    }
`

type PokemonApiResponse = { count: number, next: string, previous: string | null, results: PokemonApiResults }
type PokemonApiResults = { name: string, url: string }[]
type PokemonData = { url: string, data?: unknown }
type PokemonCache = Record<string, PokemonData>

export default function App() {
    const [tabIndex, setTabIndex] = useState(0)
    const [pokemonCount, setPokemonCount] = useState(5)
    const [formCache, setFormCache] = useState<PokemonCache>({})

    useEffect(() => {
        (async () => {
            const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonCount}`)
            const {results}: Awaited<PokemonApiResponse> = await pokemonData.json()
            const formCache = results.reduce((acc, {name, url}) => {
                return ({...acc, [name]: {url}})
            }, {} as PokemonCache)
            setFormCache(formCache)
            if (pokemonCount > 5) {
                setTabIndex(pokemonCount - 1)
            }
        })()
    }, [pokemonCount])

    const selectedPokemon = Object.keys(formCache)[tabIndex]
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
                    onChange={(_, newValue) => setTabIndex(newValue)}
                    aria-label="Pokemon Forms"
                >
                    {Object.keys(formCache).map((label, index) => (
                        <Tab key={`pokemon-${index}`} label={label}/>
                    ))}
                </Tabs>
                {selectedPokemon && (
                    <PokemonForm
                        key={`form-${selectedPokemon}`}
                        name={selectedPokemon}
                        url={formCache[selectedPokemon].url}
                    />
                )}
                <Fab color="primary" aria-label="add" size="medium" sx={{position: "absolute", bottom: 33, right: 33}}>
                    <IconButton sx={{color: "white"}} onClick={() => setPokemonCount(prevState => prevState + 1)}>
                        <AddRoundedIcon/>
                    </IconButton>
                </Fab>
            </StyledBox>
        </Container>
    );
}
