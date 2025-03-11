import type React from "react";

import { Tabs } from "expo-router";
import { ActivityIndicator, Platform, Text, View } from "react-native";

import { HeaderTitle } from "@/components/header-title";
import CartInactiveIcon from "@/components/icons/cart-inactive-icon";
import CatalogInactiveIcon from "@/components/icons/catalog-inactive-icon";
import MenuIcon from "@/components/icons/menu-inactive-icon";
import Colors from "@/constants/Colors";
import colors from "@/constants/Colors";
import { useAuth } from "@/hooks/useAuth";
import useCart from "@/hooks/useCart";

export default function TabLayout() {
	const { isLoading } = useAuth();
	const { cart } = useCart();
	const productsQuantity = cart?.length
		? JSON.parse(cart[0].products).length
		: 0;

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator color={Colors.lightBlue} size="large" />
			</View>
		);
	}

	return (
		<Tabs
			initialRouteName="index"
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
					tabBarIcon: ({ color }) => (
						<View style={{ position: "relative" }}>
							{cart && productsQuantity > 0 ? (
								<View
									style={{
										backgroundColor: colors.red,
										height: 18,
										width: 18,
										borderRadius: 18,
										top: 8,
										right: -10,
										alignItems: "center",
										justifyContent: "center",
										zIndex: 1,
									}}
								>
									<Text
										style={{
											color: colors.white,
											fontSize: 12,
										}}
									>
										{productsQuantity}
									</Text>
								</View>
							) : null}
							<CartInactiveIcon color={color} />
						</View>
					),
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
