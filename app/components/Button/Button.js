import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from "./styles";

export default ({ small, disabled, title, bgColor, onPress, color, customStyles, textStyles = styles.text}) => (
  <TouchableOpacity
    style={[
      styles.button,
      bgColor && { backgroundColor: bgColor },
      disabled && styles.transparent,
      customStyles,
    ]}
    disabled={disabled}
    onPress={onPress}>
    <Text
      allowFontScaling={false}
      style={textStyles}>
      {title}
    </Text>
  </TouchableOpacity>
)

