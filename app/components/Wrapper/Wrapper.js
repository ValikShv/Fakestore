import React from 'react';
import { Platform, ScrollView, Text } from "react-native";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import { styles } from "./styles";

export default ({children, bgColor})=>{
  return(
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.wrapper}>
      <ScrollView  bounces={false} contentContainerStyle={[styles.wrapper, {backgroundColor: bgColor}]}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
