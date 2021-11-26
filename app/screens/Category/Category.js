import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { getItems } from "../../store/actions/items";
import { ArrowLeft, Carousel, Header, ItemList, Wrapper } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { Text, TouchableOpacity, View } from "react-native";
import FilterDown from "../../components/svgIcon/FilterDown";
import ModalDropdown from "react-native-modal-dropdown";
import Filter from "../../components/svgIcon/Filter";

export const Category = ({ navigation, route }) => {
  const [selectItem, setSelectItem] = useState(route.params.title);
  const [filterValue, setFilterValue] = useState("shit");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems(route.params.title));
  }, [selectItem]);

  const filterType = [
    {
      title: "Sort: A-Z ᐁ",
      value: "asc",
    },
    {
      title: "Sort: Z-A ᐁ",
      value: "desc",
    }];

  // const Selector = (value1) => {
  //   const [open, setOpen] = useState();
  //   return (
  //     // {
  //     //   open ?
  //     //     <View><Text>shit</Text></View>
  //     //     :
  //     //     <TouchableOpacity>
  //     //       <Text>{value1}</Text>
  //     //     </TouchableOpacity>
  //     // }
  //   );
  // };

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
            icon: <Filter />,
            // icon: <Selector />,
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
