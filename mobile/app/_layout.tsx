import "react-native-gesture-handler";
import {
	NotoSans_400Regular as NotoSans_400,
	NotoSans_500Medium as NotoSans_500,
	NotoSans_600SemiBold as NotoSans_600,
	NotoSans_700Bold as NotoSans_700,
} from "@expo-google-fonts/noto-sans";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Drawer } from "expo-router/drawer";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import Colors from "@/constants/Colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DrawerContent } from "../components/drawer-content";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
	initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		NotoSans_400,
		NotoSans_500,
		NotoSans_600,
		NotoSans_700,
		...FontAwesome.font,
	});

	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer
				drawerContent={(props) => <DrawerContent />}
				screenOptions={{
					drawerStyle: {
						backgroundColor: Colors.white,
						width: 250,
					},
					drawerLabelStyle: {
						fontFamily: "NotoSans_400",
						fontSize: 16,
						color: Colors.darker,
						lineHeight: 24,
					},
					headerShown: false,
				}}
			>
				<Drawer.Screen name="(tabs)" options={{ drawerLabel: "Catálogo" }} />
				<Drawer.Screen name="login" options={{ drawerLabel: "Login" }} />
				<Drawer.Screen
					name="about"
					options={({ navigation }) => ({ drawerLabel: "About" })}
				/>
				<Drawer.Screen
					name="checkout"
					options={{
						drawerItemStyle: { display: "none" },
					}}
				/>
				<Drawer.Screen
					name="product/[id]"
					options={{
						drawerItemStyle: { display: "none" },
					}}
				/>
				<Drawer.Screen
					name="+not-found"
					options={{
						drawerItemStyle: { display: "none" },
					}}
				/>
				<Drawer.Screen
					name="report"
					options={{
						drawerItemStyle: { display: "none" },
					}}
				/>
			</Drawer>
		</GestureHandlerRootView>
	);
}
