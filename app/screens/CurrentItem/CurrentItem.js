import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Wrapper from "../../components/Wrapper/Wrapper";
import { styles } from "./styles";
import Header from "../../components/Header/Header";
import ArrowLeft from "../../components/svgIcon/ArrowLeft";
import ArrowDown from "../../components/svgIcon/ArrowDown";
import Button from "../../components/Button/Button";

export const CurrentItem = ({navigation, route}) => {
  return (
    <Wrapper bgColor={'white'} customStyle={{justifyContent: 'center'}}>
      <Header
        leftBtn={{
          icon: <ArrowLeft/>,
          func: ()=>navigation.goBack(),
        }}
        title={'Category'}
      />
      <View>
        <Text>Picture</Text>
      </View>
      <View>
        <Text>
          ItemName
        </Text>
      </View>
      <View>
        <Text>
          ItemPrice
        </Text>
      </View>
      <Button
        title={'Button'}
        onPress={()=>{console.log('buttonpress')}}
      />
    </Wrapper>
  );
};
