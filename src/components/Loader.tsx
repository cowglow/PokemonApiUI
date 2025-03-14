import {Backdrop, CircularProgress, LinearProgress} from "@mui/material";

interface LoaderProps {
    loading: boolean;
    isMobile?: boolean;
}

export default function Loader({loading, isMobile = true}: LoaderProps) {
    if (isMobile) return <LinearProgress/>
    return (
        <Backdrop open={loading} sx={{position: "absolute"}}><CircularProgress/></Backdrop>
    )
}
