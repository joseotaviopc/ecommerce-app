import Button from "@/components/button";
import Card from "@/components/card";
import CartInactiveIconBig from "@/components/icons/cart-inactive-icon-big";
import colors from "@/constants/Colors";
import useCart from "@/hooks/useCart";
import type { OutputProductDto } from "@/orval/model";
import type { RootStackParamList } from "@/types";
import type { NavigationProp } from "@react-navigation/native";
import { Image } from "expo-image";
import { useNavigation } from "expo-router";
import { useState } from "react";
import {
	ActivityIndicator,
	FlatList,
	RefreshControl,
	StyleSheet,
	Text,
	View,
} from "react-native";

export default function CartScreen() {
	const [refreshing, setRefreshing] = useState(false);
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	const { isLoading, error, cart, refetch } = useCart();

	let products = [] as OutputProductDto[];
	if (cart && cart.length > 0) {
		products = JSON.parse(cart[0].products);
	}

	function handleNavigateToProduct(product: OutputProductDto) {
		navigation.navigate("product", { product });
	}

	function handleGoShopping() {
		navigation.navigate("(tabs)", { screen: "index" });
	}

	const onRefresh = () => {
		setRefreshing(true);
		refetch();
		setTimeout(() => {
			setRefreshing(false);
		}, 1000);
	};

	if (error) {
		return (
			<View style={styles.errorBox}>
				<Text style={styles.title}>Error</Text>
			</View>
		);
	}

	if (isLoading) {
		return (
			<View style={styles.errorBox}>
				<ActivityIndicator color={colors.lightBlue} size="large" />
			</View>
		);
	}

	return (
		<>
			{products.length === 0 ? (
				<View style={styles.container}>
					<View style={styles.content}>
						<CartInactiveIconBig color={colors.light} />
						<Text style={styles.title}>Nenhum item</Text>
						<Text style={styles.subTitle}>
							Oh não! Seu carrinho está vazio. Preencha-o com brindes para
							concluir sua compra.
						</Text>
						<Button title="Go Shopping" onPress={handleGoShopping} />
					</View>
					<Image
						source={require("../../components/blur-bg.png")}
						style={{ width: "100%", height: "100%", position: "absolute" }}
					/>
				</View>
			) : (
				<View
					style={[
						styles.container,
						{
							paddingHorizontal: 12,
							justifyContent: "flex-start",
							alignItems: "flex-start",
						},
					]}
				>
					<Text style={[styles.title]}>My Cart</Text>
					{products.length > 0 ? (
						<View style={{ flex: 1, width: "100%" }}>
							<FlatList
								data={products}
								contentContainerStyle={{
									paddingVertical: 36,
									gap: 12,
								}}
								renderItem={({ item: prod }) => (
									<View style={{ gap: 12, width: "100%" }} key={prod.id}>
										<Card
											variant="horizontal"
											quantity={1}
											product={prod}
											onPress={() => handleNavigateToProduct(prod)}
										/>
									</View>
								)}
								refreshControl={
									<RefreshControl
										refreshing={refreshing}
										onRefresh={onRefresh}
									/>
								}
							/>
						</View>
					) : null}
				</View>
			)}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.white,
	},
	content: {
		alignItems: "center",
		paddingHorizontal: 30,
		gap: 16,
		zIndex: 2,
	},
	title: {
		fontSize: 24,
		lineHeight: 32,
		fontFamily: "NotoSans_700",
		marginTop: 24,
	},
	subTitle: {
		fontFamily: "NotoSans_400",
		fontSize: 16,
		lineHeight: 24,
		textAlign: "center",
		marginBottom: 16,
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
	errorBox: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
