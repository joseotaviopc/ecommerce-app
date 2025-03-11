import colors from "@/constants/Colors";
import { StyleSheet, View } from "react-native";
import StartIcon from "./icons/start-icon";

const MAX_STAR = 5;

type StartsComponent = {
	starts: number;
};

const styles = StyleSheet.create({
	starts: {
		flexDirection: "row",
		gap: 4,
	},
});

export default function StartsComponent({ starts }: StartsComponent) {
	return (
		<View style={styles.starts}>
			{Array.from(Array(starts), (_, i) => (
				<StartIcon key={Math.random().toString(36)} color="" />
			))}
			{Array.from(Array(MAX_STAR - starts), (_, i) => (
				<StartIcon key={Math.random().toString(36)} color={colors.light} />
			))}
		</View>
	);
}
