import React from "react";
import { View, TextInput } from "react-native";
import { styles } from "./styles";

export default ({ hideText, onChangeText , placeholder, icon}) => {
  return(
  <View style={styles.wrapper}>
    {icon}
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={hideText}
    />
  </View>
)
}

