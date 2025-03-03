import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, type SvgProps } from 'react-native-svg'

interface Props extends SvgProps {
    color: string
}
const CatalogInactiveIcon = (props: Props) => (
    <Svg width={24} height={25} fill="none" {...props}>
        <G clipPath="url(#a)">
            <Path
                fill={props.color}
                d="M20 4.75H4v2h16v-2Zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1Zm-9 4H6v-4h6v4Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 .75h24v24H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default CatalogInactiveIcon
