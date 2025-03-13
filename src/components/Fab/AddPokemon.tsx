import {Fab, IconButton} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

interface AddPokemonProps {
    onClick: () => void
}
export default function AddPokemon({onClick}:AddPokemonProps){
    return (
        <Fab color="primary" aria-label="add" size="medium"
             sx={{position: "absolute", bottom: 33, right: 33}}>
            <IconButton sx={{color: "white"}} onClick={onClick}>
                <AddRoundedIcon/>
            </IconButton>
        </Fab>
    )
}
