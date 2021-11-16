import React, {useState} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, Keyboard, ScrollView, Platform } from "react-native";
import Button from "../../components/Button/Button";
import { styles } from "./styles";
import Input from "../../components/Input/Input";
import colors from "../../constants /styles/colors";
import DefaultIcon from "../../components/svgIcon/DefaultIcon";
import KeyIcon from "../../components/svgIcon/KeyIcon";
import PersonIcon from "../../components/svgIcon/PersonIcon";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import Wrapper from "../../components/Wrapper/Wrapper";

export default ({navigation}) => {
  const [loginValue, setLoginValue] = useState(null)
  const [password, setPassword] = useState(null)
  return (
    <Wrapper>
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
        <Input
          icon={<PersonIcon/>}
          onChangeText={setLoginValue}
        />
        <Input
          icon={<KeyIcon/>}
          onChangeText={setPassword}
          hideText
        />
        <Button
          title={'Continue'}
          bgColor={colors.purpleLight}
          onPress={()=>{
            console.log(loginValue)
            console.log(password)
          }}
        />
        <Text style={styles.text}>
          or
        </Text>
        <Button
          title={'Create account'}
          bgColor={colors.purpleDark}
          onPress={()=>{navigation.navigate("Registration")}}/>
      </View>
    </Wrapper>
  );
};
