import type React from "react";

import { Redirect, Tabs } from "expo-router";
import { ActivityIndicator, Platform, Text, View } from "react-native";

import CartInactiveIcon from "@/components/icons/cart-inactive-icon";
import CatalogInactiveIcon from "@/components/icons/catalog-inactive-icon";
import MenuIcon from "@/components/icons/menu-inactive-icon";
import Colors from "@/constants/Colors";
import { HeaderTitle } from "@/components/header-title";
import { useAuth } from "@/hooks/useAuth";

export default function TabLayout() {
	const {isLoading,isAuthenticated} = useAuth()

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator color={Colors.lightBlue} size="large" />
			</View>
		)}
	
		// if (!isAuthenticated) return <Redirect href={"/login"} />
	
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
				name="login"
				options={{
					href: null,
					headerTitle: () => <HeaderTitle />,
				  }}
			/>
			<Tabs.Screen
				name="about"
				options={{
					href: null,
					headerTitle: () => <HeaderTitle />,
				  }}
			/>
			<Tabs.Screen
				name="report"
				options={{
					href: null,
					headerTitle: () => <HeaderTitle />,
				  }}
			/>
			<Tabs.Screen
				name="checkout"
				options={{
					href: null,
					headerTitle: () => <HeaderTitle />,
				  }}
			/>
			<Tabs.Screen
				name="product"
				options={{
					href: null,
					headerTitle: () => <HeaderTitle />,
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
