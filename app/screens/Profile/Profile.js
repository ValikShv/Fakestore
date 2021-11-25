import React, {useState} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import { styles } from "../Login/styles";
import colors from "../../constants /styles/colors";
import { Button, Wrapper } from "../../components";
import LabelChooser from "../../components/LabelChooser/LabelChooser";

export default ({navigation, route}) => {
  const[name, setName] = useState('name')
  const[surName, setSurName] = useState('name')
  const[age, setAge] = useState('name')
  const[address, setAddress] = useState('name')
  const[dream, setDream] = useState('name')

  return (
    <Wrapper>
      <View style={{justifyContent: 'center', alignItems: 'center', width: '80%', height: '100%'}}>
        <View>
          <Text>Picture</Text>
        </View>
        <View>
          <LabelChooser
            value={name}
          />
          <LabelChooser
            value={surName}
          />
          <View style={{flexDirection: 'row'}}>
            <LabelChooser
              value={age}
            />
            <LabelChooser
              value={address}
            />
          </View>
          <Text>{dream}</Text>
        </View>
      </View>
    </Wrapper>
  );
};
