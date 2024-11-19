import {Box, IconButton, Paper, styled, Tab, Tabs} from "@mui/material";
import {useEffect, useState} from "react";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import PokemonForm from "./components/PokemonForm.tsx";
import Branding from "./components/Branding.tsx";

const Container = styled(Paper)`
    display: flex;
    height: 100svh;
    gap: ${({theme}) => theme.spacing(2)};
    justify-content: center;
    padding: ${({theme}) => theme.spacing(8)};
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
        })()
    }, [pokemonCount])

    const selectedPokemon = Object.keys(formCache)[tabIndex]
    return (
        <Container>
            <Branding/>
            <Box display="flex" flexDirection="column">
                <IconButton onClick={() => setPokemonCount(prevState => prevState + 1)}>
                    <AddRoundedIcon/>
                </IconButton>
                <Tabs
                    role="navigation"
                    orientation="vertical"
                    variant="fullWidth"
                    value={tabIndex}
                    onChange={(_, newValue) => setTabIndex(newValue)}
                    aria-label="Pokemon Forms"
                    sx={{borderRight: 1, borderColor: 'divider'}}>
                    {Object.keys(formCache).map((label, index) => (
                        <Tab key={`pokemon-${index}`} label={label}/>
                    ))}
                </Tabs>
            </Box>
            <Box>
                {selectedPokemon && <PokemonForm key={`form-${selectedPokemon}`} name={selectedPokemon}
                                                 url={formCache[selectedPokemon].url}/>}
            </Box>
        </Container>
    );
}
