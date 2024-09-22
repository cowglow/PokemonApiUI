import viteLogo from "../assets/vite.svg";
import {Box, styled, Typography} from "@mui/material";

const BrandingWrapper = styled(Box)`
  border: solid greenyellow;
  display: flex;
  gap: ${({theme}) => theme.spacing(1)};
  margin-bottom: ${({theme}) => theme.spacing(12)};
  align-items: center;
  width: 100%;
  position: absolute;
  top: 0;
`
export default function Branding() {
    return (
        <BrandingWrapper>
            <img src={viteLogo} width={50} height={50} className="logo" alt="Vite logo"/>
            <Typography variant="h4" component="h1">Typescript + React + Vite</Typography>
        </BrandingWrapper>
    )
}
