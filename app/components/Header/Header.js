import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { styles } from "./styles";
import ArrowLeft from "../svgIcon/ArrowLeft";

export default ({ title, leftBtn, rightBtn}) => (
  <View style={styles.headerWrap}>
    {leftBtn ?
    <TouchableOpacity onPress={leftBtn.func}>
      {leftBtn.icon}
    </TouchableOpacity>:
      <View/>
    }
    <Text style={[styles.text, styles.bigText]}>{title}</Text>
    {rightBtn ?
      <TouchableOpacity onPress={rightBtn.func}>
        {rightBtn.icon}
      </TouchableOpacity>:
      <View/>
    }
  </View>
)

