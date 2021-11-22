import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { ArrowLeft, Button, Header, Wrapper } from "../../components";
import colors from "../../constants /styles/colors";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentItem } from "../../store/actions/items";

export const CurrentItem = ({navigation, route}) =>{
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getCurrentItem(route.params.id))
  }, [])
  const currentItem = useSelector(state => state.items.currentItem)
  useEffect(()=>{console.log(currentItem)}, [currentItem])
  console.log(currentItem)
  console.log('currentItem.data')
  return (
    <Wrapper bgColor={colors.purple} customStyle={{justifyContent: 'center'}}>
      <View style={{height: '100%', justifyContent: 'space-between'}}>
      <Header
        leftBtn={{
          icon: <ArrowLeft />,
          func: ()=>navigation.goBack(),
        }}
        title={'Item'}
      />
      <View style={{width:'100%', alignItems: 'center' }}>
        <Image
          style={{ width: '30   %', height: '30%'}}
          resizeMode={'contain'}
          source={{uri: currentItem?.image}}
        />
        <View style={{width:'80%'}}>
          <Text style={{fontSize: 24, color: colors.white}}>
            {currentItem?.title}
          </Text>
          <Text style={{fontSize: 20, color: colors.lightgray}}>
            {currentItem?.price}$
          </Text>
        </View>
      </View>
      <Button
        title={'Buy'}
        onPress={()=>{navigation.navigate("TabNavigationScreen")}}
      />
      </View>
    </Wrapper>
  );
};
