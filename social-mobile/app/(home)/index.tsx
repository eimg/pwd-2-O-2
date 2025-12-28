import { ScrollView, Text, View } from "react-native";

import Post from "@/components/post";

import { useQuery } from "@tanstack/react-query";
import { PostType } from "@/types/global";

const api = "http://192.168.1.4:8800";

export default function Home() {
	const {
		data: posts,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["posts"],
		queryFn: async (): Promise<PostType[]> => {
			const res = await fetch(`${api}/posts`);
			return res.json();
		},
	});

	if (isLoading) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}>
				<Text>Loading...</Text>
			</View>
		);
	}

	if (error) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}>
				<Text>{error.message}</Text>
			</View>
		);
	}

	return (
		<ScrollView>
			{posts?.map(post => {
				return (
					<Post
						key={post.id}
						post={post}
					/>
				);
			})}
		</ScrollView>
	);
}
