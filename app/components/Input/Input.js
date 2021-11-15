import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, TextInput } from "react-native";
import { styles } from "./styles";
import KeyIcon from "../svgIcon/KeyIcon";

export default ({ small, disabled, title, bgColor, onChangeText, color, customStyles, placeholder, icon}) => {
  return(
  <View style={styles.wrapper}>
    {icon}
    <TextInput
      // editable={editable}
      // defaultValue={defaultValue}
      style={styles.input}
      onChangeText={onChangeText}
      placeholder={placeholder}
      // placeholderTextColor={accentColors.lightGray}
    />
  </View>
)
}

