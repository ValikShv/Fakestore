import React from "react";
import { TouchableOpacity, View, Modal } from "react-native";
import { styles } from "./styles";

export default ({visible, setVisible, children}) => {

  return(
    <Modal visible={visible} style={styles.modalWrap} transparent>
      <View style={styles.modalOverlay}>
        <TouchableOpacity style={styles.overModal} onPress={() => setVisible(!visible)} />
        <View style={styles.modalContent}>
          {children}
        </View>
        <TouchableOpacity style={styles.overModal} onPress={() => setVisible(!visible)} />
      </View>
    </Modal>
  )
}

