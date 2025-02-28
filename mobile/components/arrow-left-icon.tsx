import * as React from 'react'
import Svg, { Path, type SvgProps } from 'react-native-svg'
const ArrowLeftIcon = (props: SvgProps) => (
    <Svg width={16} height={16} fill="none" {...props}>
        <Path
            fill="#132322"
            d="m3.613 8.668 4.191 4.192a.668.668 0 0 1-.944.944L1.53 8.472a.668.668 0 0 1 0-.944L6.86 2.196a.668.668 0 1 1 .944.944L3.613 7.332h10.386a.668.668 0 0 1 0 1.336H3.613Z"
        />
    </Svg>
)
export default ArrowLeftIcon
