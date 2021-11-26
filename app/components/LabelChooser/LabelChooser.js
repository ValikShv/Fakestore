import React, { useState } from "react";
import { TouchableOpacity, Text, View, TextInput } from "react-native";
import colors from "../../constants /styles/colors";
import EditIcon from "../svgIcon/EditIcon";
import DefaultModal from "../DefaultModal/DefaultModal";
import { styles } from "./styles";
import { Button } from "../index";

export default ({ title, value, setValue, customStyles }) => {
  const [visible, setVisible] = useState(false);
  const [newValue, setNewValue] = useState('');
  const updateItem = item => {
    setVisible(!visible)
    setValue(item)
  }
  return (
    <>
      <View style={{ width: "80%", flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: colors.white, fontSize: 18 }}>
          {title}
        </Text>
        <TouchableOpacity onPress={()=>setVisible(true)}>
          <EditIcon />
        </TouchableOpacity>
      </View>
      <DefaultModal visible={visible} setVisible={setVisible}>
        <Text style={styles.modalTitle}>Update window</Text>
        <TextInput
          maxLength={50}
          multiline
          onChangeText={setNewValue}
          placeholder={'Writing me...'}
          style={{backgroundColor:'rgba(0,0,0,0.05)', borderRadius: 10}}
        />
        <View style={styles.buttonWrap}>
          <Button
            title={"Update"}
            bgColor={"green"}
            customStyles={[styles.btnWrap, styles.btnAccept]}
            textStyles={{ fontWeight: "normal", color: "white" }}
            onPress={() => updateItem(newValue)}
          />
          <Button
            title={"Cancel"}
            customStyles={[styles.btnWrap, styles.btnAccept]}
            textStyles={{ color: "black" }}
            onPress={() => {
              setVisible(!visible);
            }}
          />
        </View>
      </DefaultModal>
    </>
  );
}

