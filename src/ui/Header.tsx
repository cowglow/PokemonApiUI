import {AppBar, Toolbar} from "@mui/material";
import Branding from "../components/Branding.tsx";

export default function Header() {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Branding/>
            </Toolbar>
        </AppBar>
    )
}
