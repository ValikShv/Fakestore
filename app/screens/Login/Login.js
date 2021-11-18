import React, { useEffect, useState } from "react";
import { View, Text} from "react-native";
import Button from "../../components/Button/Button";
import { styles } from "./styles";
import Input from "../../components/Input/Input";
import colors from "../../constants /styles/colors";
import KeyIcon from "../../components/svgIcon/KeyIcon";
import PersonIcon from "../../components/svgIcon/PersonIcon";
import Wrapper from "../../components/Wrapper/Wrapper";
import { login } from "../../store/actions/auth";

export default ({navigation}) => {
  const [loginValue, setLoginValue] = useState('')
  const [password, setPassword] = useState('')
  const [disabled, setDisabled] = useState(true)
  const loginPress = () => {
    console.log(loginValue.length)
    console.log(password.length)
    login(loginValue, password)
    // navigation.navigate('Catalog')
  }
  useEffect(()=>{
    if(loginValue.length == 0 || password.length == 0){
      setDisabled(true)
    }else{
      setDisabled(false)
    }
  }, [loginValue, password])
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
          disabled={disabled}
          title={'Continue'}
          bgColor={colors.purpleLight}
          onPress={()=>loginPress()}
        />
        <Text style={styles.text}>
          or
        </Text>
        <Button
          disabled={disabled}
          title={'Create account'}
          bgColor={colors.purpleDark}
          onPress={()=>{navigation.navigate("Registration")}}/>
      </View>
    </Wrapper>
  );
};
