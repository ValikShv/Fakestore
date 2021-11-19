import React from "react";
import { TouchableOpacity, Text, View, FlatList, } from "react-native";
import { styles } from "./styles";

export default ({ data, value, onPress, customStyles }) => {

  const Item = (item) =>{
    return(
      <TouchableOpacity onPress={() => {onPress(item.item.id)}} style={styles.wrap}>
        {/*<Image source={{ url:item.item.image}}/>*/}
        <View style={styles.picture}><Text>{item.item.picture}</Text></View>
        <View style={styles.aboutWrap}>
          <Text style={styles.titleText}>{item.item.title}</Text>
          <Text>{item.item.price}$</Text>
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

