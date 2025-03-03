import * as React from 'react'
import Svg, { ClipPath, Defs, G, LinearGradient, Path, Stop, type SvgProps } from 'react-native-svg'

interface Props extends SvgProps {
    color: string
}
const CartInactiveIcon = (props: Props) => (
    <Svg width={24} height={25} fill="none" {...props}>
        <G clipPath="url(#a)" filter="url(#b)">
            <Path
                fill="url(#c)"
                d="M7 18.25c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2Zm-6-16v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4.25H5.21l-.94-2H1Zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2Z"
            />
        </G>
        <Defs>
            <LinearGradient
                id="c"
                x1={21}
                x2={1.938}
                y1={19.931}
                y2={5.646}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor={props.color || '#28CE9C'} />
                <Stop offset={1} stopColor={props.color || '#6AC9FF'} />
            </LinearGradient>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 .25h24v24H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default CartInactiveIcon
