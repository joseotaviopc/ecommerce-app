import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, type SvgProps } from 'react-native-svg'
interface StartIconProps extends SvgProps {
    color: string
}

const StartIcon = (props: StartIconProps) => (
    <Svg width={20} height={20} fill="none" {...props}>
        <G clipPath="url(#a)">
            <Path
                fill={props.color || '#FFCD48'}
                d="M9.992 1.667c-4.6 0-8.325 3.733-8.325 8.333s3.725 8.333 8.325 8.333c4.608 0 8.341-3.733 8.341-8.333S14.6 1.667 9.992 1.667ZM13.525 15 10 12.875 6.475 15l.933-4.008L4.3 8.3l4.1-.35L10 4.167l1.6 3.775 4.1.35-3.108 2.691.933 4.017Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h20v20H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default StartIcon
