import React, {useState} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import Button from "../../components/Button/Button";
import { styles } from "./styles";
import Input from "../../components/Input/Input";
import colors from "../../constants /styles/colors";
import DefaultIcon from "../../components/svgIcon/DefaultIcon";
import KeyIcon from "../../components/svgIcon/KeyIcon";

export default () => {
  const keyIcon = () => {
    return (
      <KeyIcon/>
    )
  }
  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <Text>
          Image
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>
          Welcome Back
        </Text>
        <Text style={[styles.text, styles.bigText]}>
          Please, Log in.
        </Text>
        <Input icon={keyIcon()}/>
        <Input/>
        <Button title={'Continue'} bgColor={colors.purpleLight}/>
        <Text style={styles.text}>
          or
        </Text>
        <Button title={'Create account'} bgColor={colors.purpleDark}/>
      </View>
    </SafeAreaView>
  );
};
