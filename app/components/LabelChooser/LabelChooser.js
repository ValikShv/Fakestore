import React, { useState } from "react";
import { TouchableOpacity, Text, View, FlatList, Image, TextInput } from "react-native";
import { styles } from "./styles";
import { Input } from "../index";

export default ({ value, onChoose, customStyles }) => {
  const [select, setSelect] = useState(true)
  const choose = (item) => {setSelect(!item)}
  return(
    <TouchableOpacity onPress={()=>{choose(select)}}>
      {select ? (
        <Input
        />
      ): (
        <TextInput
        />
      )}
    </TouchableOpacity>
  )
}

