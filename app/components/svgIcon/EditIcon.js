import React from 'react'
import Svg, { Path } from 'react-native-svg'
import colors from "../../constants /styles/colors";

export default ({ color = colors.white }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    fill={color}
  >
    <Path d="M14.076 5.924L3 17v4h4L18.076 9.924zM15.586 4.414L18 2l4 4-2.414 2.414z" />
  </Svg>
)
