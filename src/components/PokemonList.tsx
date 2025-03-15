import {useDispatch, useSelector} from "react-redux";
import {
    getPokemonNames,
    getPokemons,
    getSelectedPokemonIndex,
    isLoading,
    setSelectedPokemon
} from "../redux/reducers/pokemons.ts";
import {Box, capitalize, Divider, List, ListItem, ListItemButton} from "@mui/material";
import Loader from "./Loader.tsx";

export default function PokemonList() {
    const dispatch = useDispatch()
    const loading = useSelector(isLoading)
    const labels = useSelector(getPokemonNames)
    const pokemons = useSelector(getPokemons)
    const selectedTab = useSelector(getSelectedPokemonIndex)

    return (
        <Box sx={{width: 250, overflow: "auto"}}>
            <List disablePadding dense>
                {labels.map((label, index) => (
                    <Box key={`pokemon-${index}`}>
                        <ListItem disablePadding>
                            <ListItemButton
                                sx={{fontSize: 20}}
                                onClick={() => dispatch(setSelectedPokemon(pokemons[index]))}
                                selected={selectedTab === index}
                            >
                                {capitalize(label)}
                            </ListItemButton>
                        </ListItem>
                        {index < labels.length - 1 && <Divider/>}
                    </Box>
                ))}
                {loading && <Loader loading={loading} isMobile={false}/>}
            </List>
        </Box>
    )
}
