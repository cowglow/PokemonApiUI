import viteLogo from "../assets/vite.svg";
import {Box, Typography} from "@mui/material";

export default function Branding(){
    return (
        <Box display="flex" gap={2}>
            <img src={viteLogo} width={50} height={50} className="logo" alt="Vite logo"/>
            <Typography variant="h4" component="h1">Typescript + React + Vite</Typography>
        </Box>
    )
}
