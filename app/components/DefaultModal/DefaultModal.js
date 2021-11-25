import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, FlatList, Modal } from "react-native";
import { styles } from "./styles";
import SectionList from "react-native/Libraries/Lists/SectionList";
import colors from "../../constants /styles/colors";

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

