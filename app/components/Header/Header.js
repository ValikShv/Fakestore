import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
// import { accentColors, fonts } from '../constants/styles'
import { styles } from "./styles";
import ArrowLeft from "../svgIcon/ArrowLeft";

export default ({ title, leftBtn, rightBtn}) => (
  <View style={styles.headerWrap}>
    {leftBtn ?
    <TouchableOpacity onPress={leftBtn.func} style={{backgroundColor: 'red', height: 20, width: 20}}>
      {leftBtn.icon}
      <ArrowLeft/>
    </TouchableOpacity>:
      <View/>
    }
    <Text style={[styles.text, styles.bigText]}>{title}</Text>
    {rightBtn ?
      <TouchableOpacity style={{ height: 10, width: 10}} onPress={rightBtn.func}>
        {rightBtn.icon}
      </TouchableOpacity>:
      <View/>
    }
  </View>
)

