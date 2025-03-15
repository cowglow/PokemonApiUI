import AddRoundedIcon from "@mui/icons-material/AddRounded";
import {Fab} from "@mui/material";

interface AddPokemonProps {
    onClick: () => void
}

export default function AddPokemon({onClick}: AddPokemonProps) {
    return (
        <Fab color="primary" aria-label="add" size="medium" onClick={onClick}
             sx={{position: "absolute", bottom: 33, right: 33}}>
            <AddRoundedIcon/>
        </Fab>
    )
}
