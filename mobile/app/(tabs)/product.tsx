import Button from "@/components/button";
import ColorsComponent from "@/components/colors";
import AddCircleIcon from "@/components/icons/add-circle-icon";
import RemoveCircleIcon from "@/components/icons/remove-circle-icon";
import StartsComponent from "@/components/starts";
import colors from "@/constants/Colors";
import useCart from "@/hooks/useCart";
import type { OutputProductDto } from "@/orval/model";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	imageHorizontal: {
		width: 358,
		height: 358,
		objectFit: "cover",
		alignSelf: "center",
		borderRadius: 8,
		marginTop: 8,
		marginBottom: 12,
	},
	price: {
		color: colors.darker,
		fontSize: 20,
		fontFamily: "NotoSans_700",
		lineHeight: 32,
	},
});

export default function ProductScreen() {
	const [productQuantity, setProductQuantity] = useState(1);

	const { top, bottom } = useSafeAreaInsets();
	const { params } = useRoute();
	const { product } = params as { product: OutputProductDto };

	const { cart, createCart, updateItemInCart, refetch } = useCart();

	function handleCreateOrUpdateCart() {
		if (cart && cart[0].products.length > 0) {
			console.log("update");
			updateItemInCart({ product, productQuantity });
			refetch();
			return;
		}
		if (cart) {
			console.log("create");
			createCart({ product, productQuantity });
			refetch();
			console.log(JSON.parse(cart[0].products).length);
		}
	}

	useEffect(() => setProductQuantity(1), [product]);

	return (
		<View
			style={{
				flex: 1,
				paddingTop: top / 2,
				paddingBottom: bottom * 2,
				paddingHorizontal: 12,
				gap: 8,
				backgroundColor: colors.white,
			}}
		>
			<Text style={styles.title}>{product.name}</Text>
			<StartsComponent starts={product.starts} />
			<Image
				source={{ uri: product.imageUrl }}
				width={358}
				height={358}
				style={styles.imageHorizontal}
			/>
			<ColorsComponent productColors={product.colors} />
			<Text style={[styles.price]}>R${product.price}</Text>
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					gap: 8,
				}}
			>
				<View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
					<TouchableOpacity
						onPress={() => {
							if (productQuantity > 0) setProductQuantity((prev) => prev - 1);
						}}
						activeOpacity={0.7}
					>
						<RemoveCircleIcon />
					</TouchableOpacity>
					<Text style={[]}>{productQuantity}</Text>
					<TouchableOpacity
						onPress={() => setProductQuantity((prev) => prev + 1)}
						activeOpacity={0.7}
					>
						<AddCircleIcon />
					</TouchableOpacity>
				</View>

				<View>
					<Button
						title="Adicionar ao carrinho"
						onPress={handleCreateOrUpdateCart}
					/>
				</View>
			</View>
		</View>
	);
}
