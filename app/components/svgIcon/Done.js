import React from 'react'
import { StyleSheet } from "react-native";

import colors from "../../constants /styles/colors";
import { Text } from "react-native";

export default ({ color = colors.white }) => (
  <Text style={[styles.text, {color: color}]}>Done</Text>
)

export const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 16
  }
})
