import {PropsWithChildren} from "react";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import {LayoutWrapper} from "../App.Styled.ts";

export default function Layout({children}: PropsWithChildren) {
    return (
        <LayoutWrapper>
            <header>
                <Header/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </LayoutWrapper>
    )
}
