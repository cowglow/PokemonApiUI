import {Paper, styled} from "@mui/material";
import Branding from "./components/Branding.tsx";

const Container = styled(Paper)`
  border: solid greenyellow;
  display: flex;
  flex-direction: column;
  height: 100svh;
  gap: ${({theme}) => theme.spacing(2)};
  justify-content: center;
  align-items: center;
`

function App() {

    return (
        <Container>
            <Branding/>
        </Container>
    );
}

export default App
