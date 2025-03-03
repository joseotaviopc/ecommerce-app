import { Text, View } from "react-native";

export function HeaderTitle() {
	return (
		<View
			style={{
				width: "100%",
				flexGrow: 1,
				flexDirection: "row",
				alignItems: "center",
				paddingHorizontal: 12,
			}}
		>
			<Text
				style={{ fontFamily: "NotoSans_600", fontSize: 18, lineHeight: 40 }}
			>
				My Demo <Text style={{ fontFamily: "NotoSans_400" }}>App</Text>
			</Text>
		</View>
	);
}