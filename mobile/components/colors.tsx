import colors from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	boxColor: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	textColor: {
		color: colors.darker,
		fontSize: 16,
		fontFamily: "NotoSans_400",
		lineHeight: 28,
	},
	colorCircle: {
		width: 20,
		height: 20,
		borderRadius: 20,
	},
});

type ColorsComponent = {
	productColors: string[];
};

export default function ColorsComponent({ productColors }: ColorsComponent) {
	return (
		<View style={styles.boxColor}>
			<Text style={[styles.textColor]}>Cor:</Text>
			{productColors &&
				Array.from(productColors, (color) => (
					<View
						key={color}
						style={[styles.colorCircle, { backgroundColor: color }]}
					/>
				))}
		</View>
	);
}
