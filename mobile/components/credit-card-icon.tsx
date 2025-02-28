import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const CreditCardIcon = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#DBDBDB"
        d="M26.667 5.333H5.333A2.646 2.646 0 0 0 2.68 8l-.013 16a2.657 2.657 0 0 0 2.666 2.667h21.334A2.657 2.657 0 0 0 29.333 24V8a2.657 2.657 0 0 0-2.666-2.667Zm0 18.667H5.333v-8h21.334v8Zm0-13.333H5.333V8h21.334v2.667Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default CreditCardIcon
