import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { styles } from "./styles";
import { getItemCatalog } from "../../store/actions/items";
import { useSelector } from "react-redux";
import { ArrowLeft, Header, itemCard, Wrapper } from "../../components";
import Button from "../../components/Button/Button";

export const Catalog = ({navigation} ) => {
  useEffect(()=>{
    getItemCatalog()
  }, [])
  const arr = useSelector(state => {state.items.catalogItems})
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
      <Button onPress={()=>{
        getItemCatalog()
        console.log('getItemCatalog()')
        console.log(arr)
        console.log('arr')
      }}
      bgColor={'red'}
      title={'test'}
      />
      <FlatList
        data={fakeArr}
        renderItem={(item)=>itemCard(item, itemPress)}
        keyExtractor={item => item.id}
      />
    </Wrapper>
  );
};
