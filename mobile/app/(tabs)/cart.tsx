import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function CartScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Carrinho Screen</Text>
			<Image
				source={require("../../components/blur-bg.png")}
				style={{ width: "100%", height: "100%", position: "absolute" }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
