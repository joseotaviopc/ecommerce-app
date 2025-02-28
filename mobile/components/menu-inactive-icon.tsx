import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const MenuInactiveIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="#132322"
      fillRule="evenodd"
      d="M1 5c0-.69.513-1.25 1.146-1.25h19.708C22.487 3.75 23 4.31 23 5s-.513 1.25-1.146 1.25H2.146C1.513 6.25 1 5.69 1 5Zm0 7c0-.69.513-1.25 1.146-1.25h19.708c.633 0 1.146.56 1.146 1.25s-.513 1.25-1.146 1.25H2.146C1.513 13.25 1 12.69 1 12Zm1.146 5.75C1.513 17.75 1 18.31 1 19s.513 1.25 1.146 1.25h19.708c.633 0 1.146-.56 1.146-1.25s-.513-1.25-1.146-1.25H2.146Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default MenuInactiveIcon
