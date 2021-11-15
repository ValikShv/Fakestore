import React, {useState} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from "react-native";

export default () => {
  return (
    <SafeAreaView>
      <View>
        <Text>
          Image
        </Text></View>
      <Text>
        WelcomeBack
      </Text>
      <Text>
        Please, Log in.
      </Text>
      <TextInput/>
      <TextInput/>
      <View>
        <Text>Button</Text>
      </View>
      <Text> or</Text>
      <View>
        <Text>Button</Text>
      </View>
    </SafeAreaView>
  );
};
