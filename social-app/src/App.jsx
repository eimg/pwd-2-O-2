import { Container } from "@mui/material";
import AppDrawer from "./components/AppDrawer";
import Header from "./components/Header";

import { Outlet } from "react-router";

export default function App() {
    return <div>
        <Header />
        <AppDrawer />
        <Container maxWidth="sm">
            <Outlet />
        </Container>
    </div>
}