import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Wrapper, PersonIcon, KeyIcon, Input, Button } from "../../components";
import { styles } from "./styles";
import colors from "../../constants /styles/colors";
import { login } from "../../store/actions/auth";

export default ({navigation}) => {
  const [loginValue, setLoginValue] = useState('')
  const [password, setPassword] = useState('')
  const [disabled, setDisabled] = useState(true)
  const loginPress = () => {
    // login(loginValue, password)
    // problem with answer!!!
    navigation.navigate('TabNavigationScreen')
  }
  useEffect(() => {
    if (loginValue.length === 0 || password.length === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [loginValue, password]);

  useEffect(()=>{})

  return (
    <Wrapper>
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
          placeholder={'Email'}
        />
        <Input
          icon={<KeyIcon/>}
          onChangeText={setPassword}
          hideText
          placeholder={'Password'}
        />
        <Button
          disabled={disabled}
          title={'Continue'}
          bgColor={colors.purpleLight}
          onPress={()=>loginPress()}
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
