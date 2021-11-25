import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import { styles } from "../Login/styles";
import colors from "../../constants /styles/colors";
import { login } from "../../store/actions/auth";
import { Button, Input, KeyIcon, PersonIcon, Wrapper } from "../../components";

export default ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [disabled, setDisabled] = useState(true)
  const loginPress = () => {
    // login(loginValue, password)
    // problem with answer!!!
    navigation.navigate('TabNavigationScreen')
  }
  useEffect(()=>{
    if(email.length === 0 || password.length === 0){
      setDisabled(true)
    }else{
      setDisabled(false)
    }
  }, [email, password])
  return (
    <Wrapper>
      <View>
        <Text>
          Image
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>
          Hi there
        </Text>
        <Text style={[styles.text, styles.bigText]}>
          Let`s Get Started
        </Text>
        <Input
          icon={<PersonIcon/>}
          onChangeText={setEmail}
          placeholder={'Email'}
        />
        <Input
          icon={<KeyIcon/>}
          onChangeText={setPassword}
          hideText
          placeholder={'Password'}
        />
        <Button
          title={'Continue'}
          bgColor={colors.purpleLight}
          onPress={()=>loginPress()}
          disabled={disabled}
        />
        <Text style={styles.text}>
          or
        </Text>
        <Button
          title={'Login'}
          bgColor={colors.purpleDark}
          onPress={()=>{navigation.navigate("Login")}}/>

      </View>
    </Wrapper>

  );
};
