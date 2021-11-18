import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Wrapper from "../../components/Wrapper/Wrapper";
import { styles } from "./styles";
import ArrowLeft from "../../components/svgIcon/ArrowLeft";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { getItemCatalog } from "../../store/actions/items";
import ItemCard, { itemCard } from "../../components/ItemCard/ItemCard";

export const Catalog = ({navigation}, title, leftButton, rightButton ) => {
  useEffect(()=>{
    getItemCatalog()
  }, [])
  const fakeArr = [
    {
      title: 'one',
      id: 1,
    },{
      title: 'two',
      id: 2,
    },{
      title: 'Sofa',
      id: 3,
    },{
      title: 'Chair',
      id: 4,
    }
  ]

  const itemPress = (title) => {
    navigation.navigate('Category', {title, fakeArr})
  }

  return (
    <Wrapper bgColor={'white'}>
      <Header
        leftBtn={{
          icon: <ArrowLeft/>,
          func: ()=>navigation.goBack(),
        }}
      title={'Catalog'}
      />
      {/*<Button onPress={()=>getItemCatalog()} bgColor={'red'} />*/}
      <FlatList
        data={fakeArr}
        renderItem={(item)=>itemCard(item, itemPress)}
        keyExtractor={item => item.id}
      />
    </Wrapper>
  );
};
