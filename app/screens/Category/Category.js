import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { getItems } from "../../store/actions/items";
import {ArrowLeft, Carousel, Header, ItemList, Wrapper } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { Text, TouchableOpacity, View } from "react-native";
import FilterDown from "../../components/svgIcon/FilterDown";
import ModalDropdown from "react-native-modal-dropdown";

export const Category = ({ navigation, route }) => {
  const [selectItem, setSelectItem] = useState(route.params.title);
  const [filterValue, setFilterValue] = useState('shit')
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems(route.params.title));
  }, [selectItem]);

  const filterType = [qwe,qwe,qwe,qwe];

  const Selector = () => {
    return(
      <TouchableOpacity>
        {/*<Text>{filterValue}</Text>*/}
        <ModalDropdown
        options={[qwe,qwe,qwe]}
        onSelect={(value)=>{}}
        />
      </TouchableOpacity>
    )
  }

  const chooseCard = (id) => {
    navigation.navigate("CurrentItem", { id });
  };
  const arr = useSelector(state => state?.items?.categoryItems);
  return (
    <Wrapper>
      <View>
        <Header
          leftBtn={{
            icon: <ArrowLeft />,
            func: () => navigation.goBack(),
          }}
          rightBtn={{
            // icon: <Filter />,
            icon: <Selector/>,
            func: () => navigation.goBack(),
          }}
          title={"Category"}
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
      </View>
    </Wrapper>
  );
};
