import { UserType } from "@/types/global";
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";

const queryClient = new QueryClient();

const AppContext = createContext<{
	auth: UserType | undefined;
	setAuth: Dispatch<SetStateAction<undefined>>;
}>({ auth: undefined, setAuth: () => {} });

export function useApp() {
	if (AppContext) {
		return useContext(AppContext);
	}

	throw new Error("App Context do not exitst");
}

const api = "http://192.168.1.4:8800";

export default function AppProvider({ children }: { children: ReactNode }) {
	const [auth, setAuth] = useState();

	useEffect(() => {
		const restoreLogin = async () => {
            const token = await AsyncStorage.getItem("token");
            if(token) {
                const res = await fetch(`${api}/users/verify`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if(res.ok) {
                    const user = await res.json();
                    setAuth(user);
                } else {
                    await AsyncStorage.removeItem("token");
                }
            }
        };

        restoreLogin();
	}, []);

	return (
		<AppContext.Provider value={{ auth, setAuth }}>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</AppContext.Provider>
	);
}
