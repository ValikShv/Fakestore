import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { styles } from "./styles";
import colors from "../../constants /styles/colors";

export default (item, index, onPress) => {
  return(
    <TouchableOpacity style={styles.wrap} onPress={()=>onPress(item.item)}>
      <View style={styles.contentWrap}>
        <Text>Picture</Text>
        <View style={styles.aboutItem}>
          <Text style={{ fontWeight: 'bold', color: colors.black}}>
            {item.item}
          </Text>
          <Text style={{ fontWeight: 'bold', color: colors.lightgray}}>
            1000 items
          </Text>
        </View>
      </View>

    </TouchableOpacity>
)}

