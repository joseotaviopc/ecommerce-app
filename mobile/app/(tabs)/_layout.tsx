import type React from "react";

import { Tabs } from "expo-router";
import { Platform, Text, View } from "react-native";

import CartInactiveIcon from "@/components/cart-inactive-icon";
import CatalogInactiveIcon from "@/components/catalog-inactive-icon";
import MenuIcon from "@/components/menu-inactive-icon";
import Colors from "@/constants/Colors";

function HeaderTitle() {
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

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors.lightBlue,
				tabBarInactiveTintColor: Colors.darker,
				headerStyle: {
					backgroundColor: Colors.white,
				},
				headerTitleStyle: {
					color: Colors.darker,
					alignSelf: "center",
					textAlign: "center",
					fontFamily: "NotoSans_400",
					fontSize: 18,
					lineHeight: 40,
				},
				tabBarStyle: {
					backgroundColor: Colors.white,
					borderTopWidth: 0,
					height: Platform.OS === "ios" ? 70 : 60,
				},
				tabBarLabelStyle: {
					fontFamily: "NotoSans_400",
					fontSize: 12,
					color: Colors.darker,
					lineHeight: 20,
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Catalogo",
					tabBarIcon: ({ color }) => <CatalogInactiveIcon color={color} />,
					headerTitle: () => <HeaderTitle />,
				}}
			/>
			<Tabs.Screen
				name="cart"
				options={{
					title: "Carrinho",
					headerTitle: () => <HeaderTitle />,
					tabBarIcon: ({ color }) => <CartInactiveIcon color={color} />,
				}}
			/>
			<Tabs.Screen
				name="menu"
				listeners={({ navigation }) => ({
					tabPress: (e) => {
						e.preventDefault();
						navigation.getParent()?.openDrawer();
					},
				})}
				options={{
					title: "Menu",
					headerTitle: () => <HeaderTitle />,
					tabBarIcon: ({ color }) => <MenuIcon color={color} />,
				}}
			/>
		</Tabs>
	);
}
