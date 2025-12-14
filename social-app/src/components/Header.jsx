import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

import {
	Menu as MenuIcon,
	LightMode as LightModeIcon,
	DarkMode as DarkModeIcon,
} from "@mui/icons-material";

import { useApp } from "../AppProvider";

export default function Header() {
	const { mode, setMode, setOpenDrawer } = useApp();

	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton onClick={() => setOpenDrawer(true)}>
					<MenuIcon />
				</IconButton>
				<Typography sx={{ flexGrow: 1, ml: 2 }}>Social App</Typography>
				{mode === "dark" ? (
					<IconButton
						onClick={() => setMode("light")}
						color="inherit">
						<LightModeIcon />
					</IconButton>
				) : (
					<IconButton
						onClick={() => setMode("dark")}
						color="inherit">
						<DarkModeIcon />
					</IconButton>
				)}
			</Toolbar>
		</AppBar>
	);
}
