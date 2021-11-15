import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
// import { accentColors, fonts } from '../constants/styles'
import { styles } from "./styles";

export default ({ small, disabled, title, bgColor, onPress, color, customStyles }) => (
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
      style={styles.text}>
      {title}
    </Text>
  </TouchableOpacity>
)

