import {Paper, styled, Tab, Tabs} from "@mui/material";
import {useEffect, useState} from "react";
import PokemonForm from "./components/PokemonForm.tsx";
import Branding from "./components/Branding.tsx";

const Container = styled(Paper)`
  display: flex;
  height: 100svh;
  gap: ${({theme}) => theme.spacing(2)};
  justify-content: center;
  align-items: center;
  padding: ${({theme}) => theme.spacing(2)};
  margin: 0 auto;
`
type PokemonApiResponse = { count: number, next: string, previous: string | null, results: PokemonApiResults }
type PokemonApiResults = { name: string, url: string }[]
type PokemonData = { url: string, data?: unknown }
type PokemonCache = Record<string, PokemonData>

export default function App() {
    const [tabIndex, setTabIndex] = useState(0)
    const [formCache, setFormCache] = useState<PokemonCache>({})

    useEffect(() => {
        (async () => {
            const pokemonData = await fetch('https://pokeapi.co/api/v2/pokemon?limit=5')
            const {results}: Awaited<PokemonApiResponse> = await pokemonData.json()
            const formCache = results.reduce((acc, {name, url}) => {
                return ({...acc, [name]: {url}})
            }, {} as PokemonCache)
            setFormCache(formCache)
        })()
    }, [])

    const selectedPokemon = Object.keys(formCache)[tabIndex]
    return (
        <Container>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={tabIndex}
                onChange={(_, newValue) => setTabIndex(newValue)}
                aria-label="Vertical tabs example"
                sx={{borderRight: 1, borderColor: 'divider'}}>
                {Object.keys(formCache).map((label, index) => (
                    <Tab key={`pokemon-${index}`} label={label}/>
                ))}
            </Tabs>
            <Branding/>
            {selectedPokemon && <PokemonForm key={`form-${selectedPokemon}`} name={selectedPokemon} url={formCache[selectedPokemon].url}/>}
        </Container>
    );
}
