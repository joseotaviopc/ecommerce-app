import type { OutputProductDto } from "@/orval/model";
import { useProductsControllerFindAll } from "@/orval/products/products";
import type { RootStackParamList } from "@/types";
import type { BottomSheetModal } from "@gorhom/bottom-sheet";
import type { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { useEffect, useRef, useState } from "react";

export default function useProductsList() {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	const bottomSheetRef = useRef<BottomSheetModal>(null);
	const [searchProduct, setSearchProduct] = useState("");
	const [filteredProducts, setFilteredProducts] = useState<OutputProductDto[]>(
		[],
	);

	function openBottomSheet() {
		bottomSheetRef.current?.expand();
	}

	function closeBottomSheet() {
		bottomSheetRef.current?.close();
	}

	function handleNavigateToProduct(product: OutputProductDto) {
		navigation.navigate("product", { product });
	}

	function clearSearchInput() {
		setSearchProduct("");
	}

	function handleSortByMore(
		prop: keyof Pick<OutputProductDto, "price" | "starts">,
	) {
		setFilteredProducts(
			[...filteredProducts].sort(
				(productA, productB) => productB[prop] - productA[prop],
			),
		);
		closeBottomSheet();
	}

	function handleSortByLess(
		prop: keyof Pick<OutputProductDto, "price" | "starts">,
	) {
		setFilteredProducts(
			[...filteredProducts].sort(
				(productA, productB) => productA[prop] - productB[prop],
			),
		);
		closeBottomSheet();
	}

	function handleSortAsc() {
		setFilteredProducts(
			[...filteredProducts].sort((productA, productB) =>
				productA.name.localeCompare(productB.name),
			),
		);
		closeBottomSheet();
	}

	function handleSortDes() {
		setFilteredProducts(
			[...filteredProducts].sort((productA, productB) =>
				productB.name.localeCompare(productA.name),
			),
		);
		closeBottomSheet();
	}

	const {
		data: products,
		error,
		isLoading,
	} = useProductsControllerFindAll({ query: { staleTime: 10 } });

	useEffect(() => {
		if (searchProduct.length === 0 && products) setFilteredProducts(products);
		if (searchProduct.length > 0 && products) {
			console.log("entrou no effect");
			setFilteredProducts(
				products?.filter((product) => product.name.includes(searchProduct)),
			);
		}
	}, [searchProduct, products]);

	return {
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
	};
}
