import React, {useState} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import { styles } from "../Login/styles";
import colors from "../../constants /styles/colors";
import { Button, Wrapper } from "../../components";

export default ({navigation, route}) => {
  return (
    <Wrapper>
      <View>
        <Text>Picture</Text>
      </View>
      <View>
        <Text>Name Surname</Text>
        <Text>Age</Text>
        <Text>Dream</Text>
      </View>
    </Wrapper>
  );
};
