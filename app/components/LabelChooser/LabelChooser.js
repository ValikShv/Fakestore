import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, View, FlatList, Image, TextInput } from "react-native";
import { styles } from "./styles";
import { Input } from "../index";

export default ({ value, onChoose, customStyles }) => {
  const [select, setSelect] = useState(true)
  return(
    <TouchableOpacity onPress={()=>{
      setSelect(!select)
      if (select){
        // onChoose(value)
      }
    }}>
      {select ? (
        <Text>валуе</Text>
      ):(
        <TextInput
        />
      )}
    </TouchableOpacity>
  )
}

