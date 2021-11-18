import React from 'react';
import { Platform, ScrollView, Text } from "react-native";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import { styles } from "./styles";

export default ({children, bgColor, customStyle})=>{
  return(
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={[styles.wrapper, customStyle]}>
      <ScrollView  bounces={false} contentContainerStyle={[styles.wrapper, {backgroundColor: bgColor}, customStyle]}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
