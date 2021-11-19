import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { styles } from "./styles";

export default (item, onPress) => {
  return(
    <TouchableOpacity style={styles.wrap} onPress={()=>onPress(item.item.title)}>
      <View style={styles.contentWrap}>
        <Text>Picture</Text>
        <View style={styles.aboutItem}>
          <Text>
            {item.item.title}
          </Text>
          <Text>
            1000 items
          </Text>
        </View>
      </View>

    </TouchableOpacity>
)}

