import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { getItems } from "../../store/actions/items";
import { ArrowDown, ArrowLeft, Carousel, Header, ItemList, Wrapper } from "../../components";

export const Category = ({navigation, route}) => {
  const [selectItem, setSelectItem] = useState(route.params.title)

  useEffect(()=>{
    getItems(route.params.title)
  }, [])

  const chooseCard = (id) => {
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
        onPress={chooseCard}
      />
    </Wrapper>
  );
};
