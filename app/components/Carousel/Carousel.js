import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, FlatList } from "react-native";
import { styles } from "./styles";
import SectionList from "react-native/Libraries/Lists/SectionList";
import colors from "../../constants /styles/colors";

export default ({ data, value, onPress, customStyles }) => {
  const [select, setSelect] = useState(value.title)
  // console.log(data)
  const Item = (item) =>{
    return(
      <TouchableOpacity onPress={() => {onPress(item.item.title); setSelect(item.item.title)}}>
        <Text style={[{paddingHorizontal: 20, fontSize: 24, color: 'black', paddingVertical: 20,}, item.item.title == select ? {color: colors.black } : {color: colors.lightgray}]}>{item.item.title}</Text>
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

