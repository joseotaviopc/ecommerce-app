import { Image } from "expo-image";
import { Text, View } from "react-native";

export default function AboutScreen() {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text style={{ fontSize: 24, fontWeight: "bold" }}>About Screen</Text>
			<Image
				source={require("../components/blur-bg.png")}
				style={{ width: "100%", height: "100%", position: "absolute" }}
			/>
		</View>
	);
}
