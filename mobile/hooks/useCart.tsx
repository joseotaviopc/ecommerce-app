import {
	useCartControllerCreate,
	useCartControllerFindAll,
	useCartControllerUpdate,
} from "@/orval/cart/cart";
import type { OutputProductDto, UpdateCartDto } from "@/orval/model";

const USER_ID = "3e01a382-fddf-4c3d-8bca-9938da3be7c5";

export default function useCart() {
	const { data: cart, isLoading, error, refetch } = useCartControllerFindAll();
	const { mutate: mutateCreate } = useCartControllerCreate();
	const { mutate: mutateUpdate } = useCartControllerUpdate();

	function updateItemInCart({ product, productQuantity }: ChangeCartProp) {
		if (cart && cart.length > 0) {
			const uniqueCart = cart[0] || undefined;
			const productsInCart = JSON.parse(
				uniqueCart.products,
			) as OutputProductDto[];

			const updateData: UpdateCartDto = {
				products: JSON.stringify([
					...productsInCart.filter((item) => item.id !== product.id),
					product,
				]),
				totalValue: uniqueCart?.totalValue + product.price * productQuantity,
			};
			mutateUpdate({ id: uniqueCart.id, data: updateData });
		}
	}

	function removeItemFromCart({ product, productQuantity }: ChangeCartProp) {
		if (cart) {
			const uniqueCart = cart[0] || undefined;
			const productsInCart = JSON.parse(
				uniqueCart.products,
			) as OutputProductDto[];

			const updateData: UpdateCartDto = {
				products: JSON.stringify(
					productsInCart.filter((item) => item.id !== product.id),
				),
				totalValue: uniqueCart?.totalValue - product.price * productQuantity,
			};
			mutateUpdate({ id: uniqueCart.id, data: updateData });
		}
	}

	type ChangeCartProp = {
		product: OutputProductDto;
		productQuantity: number;
	};

	function createCart({ product, productQuantity }: ChangeCartProp) {
		mutateCreate({
			data: {
				userId: USER_ID,
				products: JSON.stringify([product]),
				totalValue: productQuantity * product.price,
			},
		});
		refetch();
	}

	return {
		isLoading,
		error,
		cart,
		createCart,
		removeItemFromCart,
		updateItemInCart,
		refetch,
	};
}
