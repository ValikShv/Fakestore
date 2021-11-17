import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { styles } from "./styles";

export const itemCard = (item, onPress) => {
  return(
    <TouchableOpacity style={styles.wrap} onPress={()=>onPress(item.item.title)}>
      <View style={styles.aboutItem}>
        <Text>Picture</Text>
      <View>
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

