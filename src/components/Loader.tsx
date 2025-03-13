import {Backdrop, CircularProgress} from "@mui/material";

interface LoaderProps {
    loading: boolean;
}

export default function Loader({loading}: LoaderProps) {
    return (
        <Backdrop open={loading}><CircularProgress/></Backdrop>
    )
}
