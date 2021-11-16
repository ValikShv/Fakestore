import React from 'react';
import { Platform, ScrollView, Text } from "react-native";
import { styles } from "../../screens/Login/styles";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";

export default ({children})=>{
  return(
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.wrapper}>
      <ScrollView  bounces={false} contentContainerStyle={styles.wrapper}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
