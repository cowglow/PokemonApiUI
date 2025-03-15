import {Box, Paper, styled} from "@mui/material";


export const LayoutWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    height: 100svh;

    & > header, & > footer {
        flex-shrink: 0;
    }

    & > main {
        flex: 1;
        overflow: auto;
    }
`
export const ContentWrapper = styled(Paper)`
    display: flex;
    flex: 1;
    //height: 100%;
    height: calc(100svh - 78px - 40px - 18px);
    margin: ${({theme}) => theme.spacing(1)};
    padding: ${({theme}) => theme.spacing(0.5)};
    overflow: hidden;
`
