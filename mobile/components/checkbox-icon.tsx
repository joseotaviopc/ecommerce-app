import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const CheckboxIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#007CC2"
        d="M21.333 0H2.667C1.187 0 0 1.2 0 2.667v18.666A2.666 2.666 0 0 0 2.667 24h18.666C22.813 24 24 22.8 24 21.333V2.667A2.666 2.666 0 0 0 21.333 0Zm-12 18.667L2.667 12l1.88-1.88 4.786 4.773 10.12-10.12 1.88 1.894-12 12Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default CheckboxIcon
