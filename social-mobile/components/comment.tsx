import { CommentType } from "@/types/global";
import { View, Text } from "react-native";

export default function Comment({ comment }: { comment: CommentType }) {
	return (
		<View
			style={{
				borderBottomWidth: 1,
				borderColor: "#66666630",
				paddingVertical: 20,
				paddingHorizontal: 15,
			}}>
			<View style={{ flexDirection: "row", gap: 10 }}>
				<View>
					<View
						style={{
							width: 52,
							height: 52,
							borderRadius: 52,
							backgroundColor: "gray",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Text
							style={{
								fontSize: 18,
								color: "white",
							}}>
							{comment.user.name[0]}
						</Text>
					</View>
				</View>
				<View style={{ flexShrink: 1 }}>
					<Text style={{ fontSize: 18 }}>{comment.user.name}</Text>
					<Text style={{ marginTop: 5, fontSize: 16 }}>
						{comment.content}
					</Text>
				</View>
			</View>
		</View>
	);
}
