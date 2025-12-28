import { PostType } from "@/types/global";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function Post({ post }: { post: PostType }) {
	return (
		<View
			style={{
				borderBottomWidth: 1,
				borderColor: "#66666630",
				paddingVertical: 20,
				paddingHorizontal: 15,
				backgroundColor: "white",
			}}>
			<View style={{ flexDirection: "row", gap: 10 }}>
				<View>
					<View
						style={{
							width: 52,
							height: 52,
							borderRadius: 52,
							backgroundColor: "green",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Text
							style={{
								fontSize: 18,
								color: "white",
							}}>
							{post.user.name[0]}
						</Text>
					</View>
				</View>
				<View style={{ flexShrink: 1 }}>
					<Text style={{ fontSize: 18 }}>{post.user.name}</Text>
					<Text style={{ color: "green" }}>{post.createdAt}</Text>
					<TouchableOpacity onPress={() => {
                        router.push(`/view/${post.id}`);
                    }}>
						<Text style={{ marginTop: 5, fontSize: 16 }}>
							{post.content}
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View
				style={{
					marginTop: 15,
					flexDirection: "row",
					justifyContent: "space-around",
				}}>
				<View
					style={{
						flexDirection: "row",
						gap: 8,
						alignItems: "center",
					}}>
					<TouchableOpacity>
						<Ionicons
							name="heart-outline"
							color="red"
							size={24}
						/>
					</TouchableOpacity>
					<Text>{post.likes.length}</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						gap: 8,
						alignItems: "center",
					}}>
					<TouchableOpacity>
						<Ionicons
							name="chatbubble-outline"
							color="gray"
							size={24}
						/>
					</TouchableOpacity>
					<Text>{post.comments.length}</Text>
				</View>
			</View>
		</View>
	);
}
