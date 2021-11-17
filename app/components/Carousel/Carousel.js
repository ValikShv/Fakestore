import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { styles } from "./styles";
import SectionList from "react-native/Libraries/Lists/SectionList";

export default ({ small, disabled, title, bgColor, onPress, color, customStyles }) => {
  return(
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  )
}

