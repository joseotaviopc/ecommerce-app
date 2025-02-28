import * as React from 'react'
import Svg, { Path, type SvgProps } from 'react-native-svg'
const FilterIcon = (props: SvgProps) => (
    <Svg width={20} height={20} fill="none" {...props}>
        <Path
            fill="#132322"
            d="M7.5 13.125a.625.625 0 0 1 .625-.625h3.75a.624.624 0 1 1 0 1.25h-3.75a.625.625 0 0 1-.625-.625ZM5 9.375a.625.625 0 0 1 .625-.625h8.75a.625.625 0 1 1 0 1.25h-8.75A.625.625 0 0 1 5 9.375Zm-2.5-3.75A.625.625 0 0 1 3.125 5h13.75a.625.625 0 1 1 0 1.25H3.125a.625.625 0 0 1-.625-.625Z"
        />
    </Svg>
)
export default FilterIcon
