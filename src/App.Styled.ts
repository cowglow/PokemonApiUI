import {Box, Paper, styled} from "@mui/material";

export const Container = styled(Paper)`
    border: solid red;
    width: 100%;
    height: 100%;
    display: flex;
    //flex-direction: column;
    //overflow: scroll;
`;

export const LayoutWrapper = styled(Box)`
    border: solid greenyellow;
    display: flex;
    flex-direction: column;
    height: 100svh;

    & main {
        flex: 1;
    }
`
