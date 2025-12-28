import { Stack } from "expo-router";

import AppProvider from "@/components/app-provider";

export default function RootLayout() {
	return (
		<AppProvider>
			<Stack>
				<Stack.Screen
					name="(home)"
					options={{
                        title: "Home",
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="form"
					options={{
						presentation: "modal",
						title: "New Post",
					}}
				/>
				<Stack.Screen
					name="view/[id]"
					options={{
						title: "Post Detail",
					}}
				/>
			</Stack>
		</AppProvider>
	);
}
