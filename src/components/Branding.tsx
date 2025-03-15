import viteLogo from "../assets/vite.svg";
import {Box, styled, Typography} from "@mui/material";

const BrandingWrapper = styled(Box)`
    display: flex;
    gap: ${({theme}) => theme.spacing(1)};
    align-items: center;
    padding: ${({theme}) => theme.spacing(1.78)};
`
export default function Branding() {
    return (
        <BrandingWrapper>
            <img src={viteLogo} width={50} height={50} className="logo" alt="Vite logo"/>
            <Typography variant="h5" component="h1">Poké(en)Api(UI)</Typography>
        </BrandingWrapper>
    )
}
