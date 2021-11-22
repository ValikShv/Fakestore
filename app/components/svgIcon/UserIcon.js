import React from 'react'
import Svg, { Ellipse, Path } from 'react-native-svg'

export default ({ color }) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Ellipse cx="12" cy="6.5" rx="4.5" ry="5" fill={color} fill-opacity="0.25" />
    <Path
      d="M21 19C21 22.0376 16.4183 21 12 21C7.58172 21 3 22.0376 3 19C3 15.9624 7.58172 13.5 12 13.5C16.4183 13.5 21 15.9624 21 19Z"
      fill={color}
      fill-opacity="0.25"
    />
  </Svg>
)
