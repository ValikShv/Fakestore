import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { getItems } from "../../store/actions/items";
import { ArrowDown, ArrowLeft, Carousel, Header, ItemList, Wrapper } from "../../components";
import colors from "../../constants /styles/colors";
import { useDispatch, useSelector } from "react-redux";

export const Category = ({navigation, route}) => {
  const [selectItem, setSelectItem] = useState(route.params.title)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getItems(route.params.title))
  }, [selectItem])


  const chooseCard = (id) => {
    navigation.navigate('CurrentItem', {id})
  }
  const arr =  useSelector(state => state.items.categoryItems)
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
    <Wrapper bgColor={colors.purple}>
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
      data={route.params.arr}
      value={selectItem}
      onPress={setSelectItem}
      />
      <ItemList
        data={arr}
        onPress={chooseCard}
      />
    </Wrapper>
  );
};
