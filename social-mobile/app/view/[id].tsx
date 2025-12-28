import {
	ScrollView,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { useLocalSearchParams } from "expo-router";

import Post from "@/components/post";

import { useQuery } from "@tanstack/react-query";
import { PostType } from "@/types/global";
import Comment from "@/components/comment";

const api = "http://192.168.1.4:8800";

export default function Home() {
	const { id } = useLocalSearchParams();

	const {
		data: post,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["post", ""],
		queryFn: async (): Promise<PostType> => {
			const res = await fetch(`${api}/posts/${id}`);
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

	if (!post) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}>
				<Text>Post not found</Text>
			</View>
		);
	}

	return (
		<ScrollView>
			<Post
				key={post.id}
				post={post}
			/>

			<View style={{ margin: 10 }}>
				<TextInput
					placeholder="Your reply"
					style={{
						padding: 10,
						borderWidth: 1,
						borderRadius: 5,
						borderColor: "#66666650",
						fontSize: 16,
						backgroundColor: "white",
						marginBottom: 6,
					}}
				/>
				<TouchableOpacity
					style={{
						backgroundColor: "green",
						padding: 10,
						borderRadius: 8,
						justifyContent: "center",
                        alignItems: "center",
					}}>
					<Text
						style={{
							color: "white",
							fontWeight: "bold",
							fontSize: 16,
						}}>
						Add Comment
					</Text>
				</TouchableOpacity>
			</View>

			{post.comments.map(comment => {
				return (
					<Comment
						key={comment.id}
						comment={comment}
					/>
				);
			})}
		</ScrollView>
	);
}
