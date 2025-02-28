import CatalogInactiveIcon from "@/components/catalog-inactive-icon";
import Colors from "@/constants/Colors";
import type { NavigationProp } from "@react-navigation/native";
import { Stack, useNavigation } from "expo-router";
import {
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import {
	SafeAreaView,
	useSafeAreaInsets,
} from "react-native-safe-area-context";

const drawerStyles = StyleSheet.create({
	box: {
		flex: 1,
		backgroundColor: Colors.white,
		padding: 12,
		gap: 6,
	},
	title: {
		fontFamily: "NotoSans_400",
		fontSize: 20,
		lineHeight: 32,
		letterSpacing: 1.25,
		color: Colors.darker,
		borderBottomWidth: 1,
		borderBottomColor: Colors.light,
		paddingBottom: 12,
	},
	sectionTitle: {
		fontFamily: "NotoSans_400",
		fontSize: 14,
		lineHeight: 32,
		letterSpacing: 2,
		textTransform: "uppercase",
		color: Colors.dark,
	},
	separator: {
		height: 1,
		width: "100%",
		backgroundColor: Colors.light,
	},
});

type RootStackParamList = {
	"(tabs)": {
		screen: "index" | "cart";
	};
	login: undefined;
	about: undefined;
	checkout: undefined;
	"product/[id]": undefined;
	"+not-found": undefined;
	report: undefined;
};

export function DrawerContent() {
	const { top } = useSafeAreaInsets();
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	return (
		<SafeAreaView
			style={[
				drawerStyles.box,
				{ paddingTop: Platform.OS === "ios" ? top * 0.5 : 1.5 * top },
			]}
		>
			<Text style={[drawerStyles.sectionTitle]}>test flows</Text>
			<TouchableOpacity
				activeOpacity={0.7}
				onPress={() => {
					navigation.navigate("(tabs)", {
						screen: "index",
					});
				}}
			>
				<CatalogInactiveIcon color={Colors.darker} />
				<View style={[drawerStyles.separator, { marginTop: 12 }]} />
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={0.7}
				onPress={() => {
					navigation.navigate("(tabs)", {
						screen: "cart",
					});
				}}
			>
				<Text style={drawerStyles.title}>Carrinho</Text>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={0.7}
				onPress={() => {
					navigation.navigate("checkout");
				}}
			>
				<Text style={drawerStyles.title}>Checkout</Text>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={0.7}
				onPress={() => {
					navigation.navigate("login");
				}}
			>
				<Text style={drawerStyles.title}>Login</Text>
			</TouchableOpacity>
			<Text style={drawerStyles.sectionTitle}>actions</Text>
			<Text style={drawerStyles.title}>Log Out</Text>
			<Text style={drawerStyles.title}>Reset App State</Text>
			<Text style={drawerStyles.sectionTitle}>other</Text>
			<TouchableOpacity
				activeOpacity={0.7}
				onPress={() => {
					navigation.navigate("report");
				}}
			>
				<Text style={drawerStyles.title}>Report a Bug</Text>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={0.7}
				onPress={() => {
					navigation.navigate("about");
				}}
			>
				<Text style={drawerStyles.title}>About</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}
