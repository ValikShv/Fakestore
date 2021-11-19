import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, FlatList } from "react-native";
import { styles } from "./styles";
import SectionList from "react-native/Libraries/Lists/SectionList";
import colors from "../../constants /styles/colors";

export default ({ data, value, onPress, customStyles }) => {
  const [select, setSelect] = useState(value)
  const Item = (item) =>{
    return(
      <TouchableOpacity onPress={() => {onPress(item.item); setSelect(item.item)}}>
        <Text style={[{paddingHorizontal: 20, fontSize: 24, paddingVertical: 20,}, item.item == select ? {color: colors.white, fontSize: 26 } : {color: colors.lightgray}]}>{item.item}</Text>
      </TouchableOpacity>
    )}
  return(
    <FlatList
    data={data}
    renderItem={item => Item(item)}
    keyExtractor={item => item.id}
    horizontal
    />
  )
}

