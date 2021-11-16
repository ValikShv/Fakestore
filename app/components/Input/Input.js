import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, TextInput } from "react-native";
import { styles } from "./styles";
import KeyIcon from "../svgIcon/KeyIcon";

export default ({disabled, hideText, onChangeText, customStyles, placeholder, icon}) => {
  return(
  <View style={styles.wrapper}>
    {icon}
    <TextInput
      // editable={editable}
      // defaultValue={defaultValue}
      style={styles.input}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={hideText}
      // placeholderTextColor={accentColors.lightGray}
    />
  </View>
)
}

