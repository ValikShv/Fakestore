import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ArrowLeft, Header, Wrapper } from "../../components";

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
