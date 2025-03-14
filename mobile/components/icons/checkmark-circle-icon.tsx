import * as React from 'react'
import Svg, { Defs, LinearGradient, Path, Stop, type SvgProps } from 'react-native-svg'
const CheckmarkCircleIcon = (props: SvgProps) => (
    <Svg width={72} height={72} fill="none" {...props}>
        <Path
            fill="url(#a)"
            d="M34.5 3c6.628 0 12.82 1.87 18.077 5.11l-4.061 4.569A28.37 28.37 0 0 0 34.5 9C18.76 9 6 21.76 6 37.5S18.76 66 34.5 66 63 53.24 63 37.5c0-2.84-.415-5.581-1.188-8.17l4.54-5.108A34.394 34.394 0 0 1 69 37.5C69 56.554 53.554 72 34.5 72 15.446 72 0 56.554 0 37.5 0 18.446 15.446 3 34.5 3Z"
        />
        <Path
            fill="url(#b)"
            d="M71.079 9.16a3.74 3.74 0 0 0-.304-5.225 3.612 3.612 0 0 0-5.15.308L35.746 38.349 24.378 25.347a3.612 3.612 0 0 0-5.15-.313 3.74 3.74 0 0 0-.309 5.225L35.742 49.5 71.08 9.16Z"
        />
        <Defs>
            <LinearGradient id="a" x1={72} x2={5.5} y1={64} y2={12} gradientUnits="userSpaceOnUse">
                <Stop stopColor="#28CE9C" />
                <Stop offset={1} stopColor="#6AC9FF" />
            </LinearGradient>
            <LinearGradient id="b" x1={72} x2={5.5} y1={64} y2={12} gradientUnits="userSpaceOnUse">
                <Stop stopColor="#28CE9C" />
                <Stop offset={1} stopColor="#6AC9FF" />
            </LinearGradient>
        </Defs>
    </Svg>
)
export default CheckmarkCircleIcon
