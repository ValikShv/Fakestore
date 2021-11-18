import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Wrapper from "../../components/Wrapper/Wrapper";
import { styles } from "./styles";
import Header from "../../components/Header/Header";
import ArrowLeft from "../../components/svgIcon/ArrowLeft";
import ArrowDown from "../../components/svgIcon/ArrowDown";
import Carousel from "../../components/Carousel/Carousel";
import ItemList from "../../components/ItemList/ItemList";

export const Category = ({navigation, route}) => {
  const [selectItem, setSelectItem] = useState(route.params.fakeArr[0])
  const chooseCard = (id) => {
    console.log(id)
    console.log("chooseCardId")
    navigation.navigate('CurrentItem', {id})
  }
  const fakeArr2 = [
    {
      picture: 'picture',
      title: 'one',
      id: '1',
      about: 'about about',
      price: '10$'
    },
    {
      picture: 'picture',
      title: 'two',
      id: '2',
      about: 'about about',
      price: '10$'

    },
    {
      picture: 'picture',
      title: 'tri',
      id: '3',
      about: 'about about',
      price: '10$'
    },
  ]
  return (
    <Wrapper bgColor={'white'} customStyle={{justifyContent: 'center'}}>
      <Header
        leftBtn={{
          icon: <ArrowLeft/>,
          func: ()=>navigation.goBack(),
        }}
        rightBtn={{
          icon: <ArrowDown/>,
          func: ()=>{console.log('rightBtn')},
        }}
        title={'Category'}
      />
      <Carousel
      data={route.params.fakeArr}
      value={selectItem}
      onPress={setSelectItem}
      />
      <ItemList
        data={fakeArr2}
        // value={selectItem}
        onPress={chooseCard}
      />
    </Wrapper>
  );
};
