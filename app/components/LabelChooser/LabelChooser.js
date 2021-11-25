import React, { useState } from "react";
import { TouchableOpacity, Text, View, TextInput } from "react-native";
import colors from "../../constants /styles/colors";
import EditIcon from "../svgIcon/EditIcon";
import DefaultModal from "../DefaultModal/DefaultModal";
import { styles } from "../../screens/CurrentItem/styles";
import { Button } from "../index";

export default ({ title, value, setValue, customStyles }) => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <View style={{ width: "80%", flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: colors.white, fontSize: 18 }}>
          {title}
        </Text>
        <TouchableOpacity>
          <EditIcon />
        </TouchableOpacity>
      </View>
      <DefaultModal>
        <Text style={styles.modalTitle}>Update window</Text>
        <TextInput/>
        <View style={styles.buttonWrap}>
          <Button
            title={"Yes, delete"}
            bgColor={"red"}
            customStyles={[styles.btnWrap, styles.btnAccept]}
            textStyles={{ fontWeight: "normal", color: "white" }}
            onPress={() => console.log('done')}
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

