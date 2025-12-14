import { Container } from "@mui/material";
import AppDrawer from "./components/AppDrawer";
import Header from "./components/Header";

import Home from "./pages/Home";

export default function App() {
    return <div>
        <Header />
        <AppDrawer />
        <Container maxWidth="sm">
            <Home />
        </Container>
    </div>
}