import colors from "@/constants/Colors";
import useCart from "@/hooks/useCart";
import type { OutputProductDto } from "@/orval/model";
import {
	Image,
	Text,
	TouchableOpacity,
	View,
	type ViewProps,
	useWindowDimensions,
} from "react-native";
import ColorsComponent from "./colors";
import AddCircleIcon from "./icons/add-circle-icon";
import RemoveCircleIcon from "./icons/remove-circle-icon";
import StartsComponent from "./starts";
import { styles } from "./styles/card-styles";

type CardProps = {
	product: OutputProductDto;
	quantity: number;
	onPress: () => void;
	variant?: "horizontal" | "vertical";
};

export default function Card({
	product,
	quantity,
	onPress,
	variant = "vertical",
}: CardProps) {
	const { width } = useWindowDimensions();
	const { removeItemFromCart, refetch } = useCart();
	const { colors: productColors, imageUrl, name, price, starts } = product;

	const MAX_WIDTH = width / 2 - 2;
	const cardVariants: Record<string, ViewProps["style"]> = {
		horizontal: {
			width: "100%",
			height: 240,
			flexDirection: "row",
		},
		vertical: {
			width: 170,
			height: 314,
			maxWidth: MAX_WIDTH,
		},
	};
	const isHorizontal = variant === "horizontal";

	function handleRemoveItemFromCart() {
		removeItemFromCart({ product, productQuantity: 1 });
		refetch();
	}

	if (isHorizontal) {
		return (
			<View style={[styles.card, cardVariants[variant]]}>
				<Image
					source={{ uri: imageUrl }}
					width={460}
					height={460}
					style={[styles.imageHorizontal, { backgroundColor: colors.darkBlue }]}
				/>
				<View style={styles.boxInfo}>
					<View style={styles.boxInfoHorizontal}>
						<Text style={[styles.title]}>{name}</Text>
						<StartsComponent starts={starts} />
					</View>
					<ColorsComponent productColors={productColors} />
					<Text style={[styles.price]}>R${price}</Text>
					<View
						style={{
							flex: 1,
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<TouchableOpacity
							onPress={() => console.log("menos")}
							activeOpacity={0.7}
						>
							<RemoveCircleIcon />
						</TouchableOpacity>
						<Text style={[styles.title]}>{quantity}</Text>
						<TouchableOpacity
							onPress={() => console.log("mais")}
							activeOpacity={0.7}
						>
							<AddCircleIcon />
						</TouchableOpacity>
						<TouchableOpacity
							onPress={handleRemoveItemFromCart}
							activeOpacity={0.7}
						>
							<Text style={[styles.title, { color: colors.red }]}>Remover</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}

	return (
		<TouchableOpacity
			onPress={onPress}
			style={[styles.card, cardVariants[variant]]}
			activeOpacity={0.7}
		>
			<Image
				source={{ uri: imageUrl }}
				width={MAX_WIDTH}
				height={200}
				style={[styles.image, { backgroundColor: colors.darkBlue }]}
			/>
			<View style={styles.boxInfo}>
				<Text style={[styles.title]}>{name}</Text>
				<Text style={[styles.price]}>R${price}</Text>
				<StartsComponent starts={starts} />
			</View>
		</TouchableOpacity>
	);
}
