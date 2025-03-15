import {Box, styled} from "@mui/material";


export const LayoutWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    height: 100svh;

    & main {
        flex: 1;
    }
`
