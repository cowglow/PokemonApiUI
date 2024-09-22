import {styled, TextField} from "@mui/material";

export const StyledForm = styled('form')`
  border: solid greenyellow;
  padding: ${({theme}) => `${theme.spacing(2)} ${theme.spacing(1)}`};
`

export const StyledTextInput = styled(TextField)`
  width: ${({theme}) => theme.spacing(75)};
`