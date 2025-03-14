import {Box, Paper, styled} from "@mui/material";

export const Container = styled(Paper)`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100svh;
    overflow: scroll;
    align-content: center;
    padding: 0 ${({theme}) => theme.spacing(8)};
    @media (max-width: 600px) {
        padding: 0;
    }
`;

export const StyledBox = styled(Box)`
    display: flex;
    height: 100%;
    @media (max-width: 600px) {
        display: block;
        flex-direction: column-reverse;
        width: 100%;
        gap: ${({theme}) => theme.spacing(1)};
    }
`
