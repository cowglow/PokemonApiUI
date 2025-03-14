import {Box, Tab, Tabs, useMediaQuery, useTheme} from "@mui/material";
import {SyntheticEvent} from "react";
import {
    getPokemonNames,
    getPokemons,
    getSelectedPokemonIndex,
    isLoading,
    setSelectedPokemon
} from "../redux/reducers/pokemons.ts";
import {useDispatch, useSelector} from "react-redux";
import Loader from "./Loader.tsx";

export default function PokemonTabs() {
    const dispatch = useDispatch()
    const loading = useSelector(isLoading)
    const labels = useSelector(getPokemonNames)
    const pokemons = useSelector(getPokemons)
    const selectedTab = useSelector(getSelectedPokemonIndex)

    const onTabChange = (_: SyntheticEvent<Element, Event>, index: number) => {
        dispatch(setSelectedPokemon(pokemons[index]))
    }

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))

    return (
        <Box sx={{minWidth: 120}}>
            <Tabs
                role="navigation"
                orientation={isMobile ? "horizontal" : "vertical"}
                variant="scrollable"
                visibleScrollbar
                value={selectedTab}
                onChange={onTabChange}
                aria-label="Pokemon Forms"
                sx={{borderRight: 1, borderColor: 'divider', minWidth: 120}}
            >
                {labels.map((label, index) => (
                    <Tab key={`pokemon-${index}`} label={label}/>
                ))}
            </Tabs>
            {loading && <Loader loading={loading} isMobile={isMobile}/>}
        </Box>
    );
}
