import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ArrowLeft, Button, Header, Wrapper } from "../../components";
import colors from "../../constants /styles/colors";
import { useDispatch, useSelector } from "react-redux";
import LabelChooser from "../../components/LabelChooser/LabelChooser";
import { updateItem } from "../../store/actions/items";
import Done from "../../components/svgIcon/Done";

export const EditItem = ({ navigation, route }) => {
  const [item, setItem] = useState(route.params.currentItem)
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(route.params.currentItem);
  }, []);
  const updateValue = i => {
    dispatch(updateItem(i, i.id))
  }
  return (
    <Wrapper>
      <View>
        <Header
          title={"Item Edit"}
          leftBtn={{
            icon: <ArrowLeft />,
            func: () => navigation.goBack(),
          }}
          rightBtn={{
            icon: <Done />,
            func: () => {
              updateValue(item)
              navigation.navigate("CurrentItem")},
          }}
        />
        <View style={styles.contentWrap}>
          <View style={styles.underImage}>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={{ uri: route.params.currentItem.image }}
            />
          </View>
          <LabelChooser
            title={'Title'}
            value={item.title}
            setValue={(newTitle)=>setItem({...item, title:newTitle})}
          />
          <LabelChooser
            title={'Price'}
            value={item.price}
            setValue={(newTitle)=>setItem({...item, price:newTitle})}
          />
          <LabelChooser
            title={'Description'}
            value={item.description}
            setValue={(newTitle)=>setItem({...item, description:newTitle})}
          />
        </View>
      </View>
    </Wrapper>
  );
};
