import { createContext, useContext, useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const AppContext = createContext();

export function useApp() {
	return useContext(AppContext);
}

export default function AppProvider({ children }) {
	const [mode, setMode] = useState("dark");
	const [openDrawer, setOpenDrawer] = useState(false);
	const [auth, setAuth] = useState();

	const theme = useMemo(() => {
		return createTheme({
			palette: { mode },
		});
	}, [mode]);

	return (
		<AppContext.Provider
			value={{ mode, setMode, openDrawer, setOpenDrawer, auth, setAuth }}>
			<ThemeProvider theme={theme}>
				{children}
				<CssBaseline />
			</ThemeProvider>
		</AppContext.Provider>
	);
}
