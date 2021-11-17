import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Wrapper from "../../components/Wrapper/Wrapper";
import { styles } from "./styles";
import Header from "../../components/Header/Header";
import ArrowLeft from "../../components/svgIcon/ArrowLeft";
import ArrowDown from "../../components/svgIcon/ArrowDown";

export const Category = ({navigation, route}) => {
  console.log(route.params.title)
  return (
    <Wrapper bgColor={'white'}>
      <Header
        leftBtn={{
          icon: <ArrowLeft/>,
          func: ()=>navigation.goBack(),
        }}
        rightBtn={{
          icon: <ArrowDown/>,
          func: ()=>{console.log('rightBtn')},
        }}
        // title={route.params.title}
        title={'Category'}
      />
      <Carousel/>
    </Wrapper>
  );
};
