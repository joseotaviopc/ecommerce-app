import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, type SvgProps } from "react-native-svg";

interface Props extends SvgProps {
	color: string;
}

function CartInactiveIconBig(props: Props) {
	return (
		<Svg width={101} height={101} viewBox="0 0 101 101" fill="none" {...props}>
			<G clipPath="url(#clip0_33_2557)">
				<Path
					d="M29.458 75.75c-4.629 0-8.374 3.787-8.374 8.417 0 4.629 3.745 8.416 8.374 8.416 4.63 0 8.417-3.787 8.417-8.416 0-4.63-3.788-8.417-8.417-8.417zM4.208 8.417v8.416h8.417l15.15 31.942-5.681 10.31a8.137 8.137 0 00-1.052 4.04c0 4.63 3.787 8.417 8.416 8.417h50.5v-8.417H31.226c-.59 0-1.052-.463-1.052-1.052l.126-.505 3.787-6.86H65.44a8.377 8.377 0 007.364-4.334L87.87 23.062c.337-.59.505-1.305.505-2.02a4.22 4.22 0 00-4.208-4.209H21.925L17.97 8.417H4.208zM71.542 75.75c-4.63 0-8.375 3.787-8.375 8.417 0 4.629 3.745 8.416 8.375 8.416 4.629 0 8.416-3.787 8.416-8.416 0-4.63-3.787-8.417-8.416-8.417z"
					fill="#E7E7E7"
				/>
			</G>
			<Defs>
				<ClipPath id="clip0_33_2557">
					<Path fill="#fff" d="M0 0H101V101H0z" />
				</ClipPath>
			</Defs>
		</Svg>
	);
}

export default CartInactiveIconBig;
