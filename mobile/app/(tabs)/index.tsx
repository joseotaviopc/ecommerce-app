import Card from "@/components/card";
import FilterIcon from "@/components/icons/filter-icon";
import colors from "@/constants/Colors";
import useProductsList from "@/hooks/useProductsList";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import {
	ArrowDown01,
	ArrowDown10,
	ArrowDownAZ,
	ArrowDownNarrowWide,
	ArrowDownWideNarrow,
	ArrowDownZA,
} from "lucide-react-native";
import React, { useMemo } from "react";
import {
	ActivityIndicator,
	FlatList,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "../../styles/index-styles";

export default function ProductListScreen() {
	const { top, bottom } = useSafeAreaInsets();
	const {
		error,
		isLoading,
		bottomSheetRef,
		filteredProducts,
		searchProduct,
		setSearchProduct,
		openBottomSheet,
		closeBottomSheet,
		handleNavigateToProduct,
		clearSearchInput,
		handleSortAsc,
		handleSortDes,
		handleSortByLess,
		handleSortByMore,
	} = useProductsList();

	const snapPoints = useMemo(() => ["40%"], []);

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
		<View
			style={{
				flex: 1,
				paddingTop: top / 2,
				paddingBottom: bottom,
				paddingHorizontal: 8,
				gap: 16,
				backgroundColor: colors.white,
			}}
		>
			<View style={styles.filterBox}>
				<Text style={styles.title}>Produtos</Text>
				<FilterIcon onPress={openBottomSheet} />
			</View>
			<View style={{ flex: 1, width: "100%" }}>
				<FlatList
					data={filteredProducts}
					bounces={false}
					contentContainerStyle={[styles.productListBox, { rowGap: 12 }]}
					renderItem={({ item: product }) => (
						<Card
							key={product.id}
							quantity={1}
							product={product}
							onPress={() => handleNavigateToProduct(product)}
						/>
					)}
				/>
			</View>
			<BottomSheet
				index={-1}
				ref={bottomSheetRef}
				snapPoints={snapPoints}
				bottomInset={46}
				detached
				enablePanDownToClose
				style={styles.bottomSheetStyle}
			>
				<BottomSheetView style={styles.contentContainer}>
					<Text style={styles.title}>Pesquisar ou filtrar</Text>
					<TouchableOpacity
						activeOpacity={0.7}
						onPress={closeBottomSheet}
						style={[styles.eraseIcon, { borderWidth: 0, top: -8, right: 16 }]}
					>
						<Text style={styles.eraseText}>X</Text>
					</TouchableOpacity>
					<View style={styles.inputBox}>
						<TextInput
							style={styles.input}
							placeholder="Pesquisar..."
							placeholderTextColor={colors.dark}
							onChangeText={setSearchProduct}
							value={searchProduct}
						/>
						{searchProduct.length > 0 ? (
							<TouchableOpacity
								activeOpacity={0.7}
								onPress={clearSearchInput}
								style={styles.eraseIcon}
							>
								<Text style={styles.eraseText}>X</Text>
							</TouchableOpacity>
						) : null}
					</View>
					<View
						style={{
							flexDirection: "row",
							gap: 16,
							alignItems: "center",
							marginBottom: 12,
						}}
					>
						<ArrowDown10
							color={colors.dark}
							size={20}
							onPress={() => handleSortByMore("price")}
						/>
						<Text style={styles.filterTitle}>Preço</Text>
						<ArrowDown01
							color={colors.dark}
							size={20}
							onPress={() => handleSortByLess("price")}
						/>
					</View>
					<View
						style={{
							flexDirection: "row",
							gap: 16,
							alignItems: "center",
							marginBottom: 12,
						}}
					>
						<ArrowDownZA
							color={colors.dark}
							size={20}
							onPress={handleSortDes}
						/>
						<Text style={styles.filterTitle}>Nome</Text>
						<ArrowDownAZ
							color={colors.dark}
							size={20}
							onPress={handleSortAsc}
						/>
					</View>
					<View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
						<ArrowDownWideNarrow
							color={colors.dark}
							size={20}
							onPress={() => handleSortByMore("starts")}
						/>
						<Text style={styles.filterTitle}>Estrelas</Text>
						<ArrowDownNarrowWide
							color={colors.dark}
							size={20}
							onPress={() => handleSortByLess("starts")}
						/>
					</View>
				</BottomSheetView>
			</BottomSheet>
		</View>
	);
}
