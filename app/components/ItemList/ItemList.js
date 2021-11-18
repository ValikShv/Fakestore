import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, FlatList } from "react-native";
import { styles } from "./styles";
import SectionList from "react-native/Libraries/Lists/SectionList";
import colors from "../../constants /styles/colors";

export default ({ data, value, onPress, customStyles }) => {
  // const [select, setSelect] = useState(value?.title)
  const Item = (item) =>{
    // console.log(item)
    return(
      <TouchableOpacity onPress={() => {onPress(item.item.id)}} style={styles.wrap}>
        <View style={styles.picture}><Text>{item.item.picture}</Text></View>
        <View style={styles.aboutWrap}>
          <Text style={styles.titleText}>{item.item.title}</Text>
          <Text>{item.item.price}</Text>
        </View>
      </TouchableOpacity>
    )}
  return(
    <FlatList
      data={data}
      renderItem={item => Item(item)}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  )
}

