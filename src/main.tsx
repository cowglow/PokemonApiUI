import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {CssBaseline} from "@mui/material";
import {Provider} from "react-redux";
import {AppStore, setupStore} from "./redux/store-config.ts";

const reduxStore: AppStore = setupStore({})

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={reduxStore}>
            <CssBaseline/>
            <App/>
        </Provider>
    </StrictMode>,
)
