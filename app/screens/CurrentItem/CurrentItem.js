import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ArrowLeft, Button, Header, Wrapper } from "../../components";
import colors from "../../constants /styles/colors";

export const CurrentItem = ({navigation, route}) => {
  return (
    <Wrapper bgColor={colors.purple} customStyle={{justifyContent: 'center'}}>
      <View style={{height: '100%', justifyContent: 'space-between'}}>
      <Header
        leftBtn={{
          icon: <ArrowLeft />,
          func: ()=>navigation.goBack(),
        }}
        title={'Category'}
      />
      <View style={{width:'100%', alignItems: 'center' }}>
        <View style={{height: 350, width: 350, backgroundColor: 'red'}}>
          <Text>Picture</Text>
        </View>
        <View style={{width:'80%'}}>
          <Text style={{fontSize: 24, color: colors.white}}>
            ItemName
          </Text>
          <Text style={{fontSize: 20, color: colors.lightgray}}>
            ItemPrice
          </Text>
        </View>
      </View>
      <Button
        title={'Buy'}
        onPress={()=>{console.log('buttonpress')}}
      />
      </View>
    </Wrapper>
  );
};
