import React, {useState} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import { styles } from "../Login/styles";
import Input from "../../components/Input/Input";
import PersonIcon from "../../components/svgIcon/PersonIcon";
import KeyIcon from "../../components/svgIcon/KeyIcon";
import Button from "../../components/Button/Button";
import colors from "../../constants /styles/colors";
import Wrapper from "../../components/Wrapper/Wrapper";
import { login } from "../../store/actions/auth";

export default ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
          onPress={()=>login()}
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
