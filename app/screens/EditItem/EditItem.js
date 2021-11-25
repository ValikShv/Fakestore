import React, { useEffect, useState } from "react";
import { View, Text, Image, } from "react-native";
import { styles } from "./styles";
import { ArrowLeft, Button, Header, Wrapper } from "../../components";
import colors from "../../constants /styles/colors";
import { useDispatch, useSelector } from "react-redux";

export const EditItem = ({ navigation, route }) => {
  const dispatch = useDispatch();
  useEffect(()=>{console.log(route.params.currentItem)}, [])
  return (
    <Wrapper>
      <Header
      title={"Item Edit"}
      leftBtn={{
        icon: <ArrowLeft />,
        func: () => navigation.goBack(),
      }}
      rightBtn={{
        icon: <Text style={{fontWeight: 'bold', color: 'white', fontSize: 16}}>Done</Text>,
        func: () => navigation.navigate('CurrentItem')
      }}
      />
      <View style={{ width: "100%", alignItems: "center" }}>
        <Image
          style={{ width: "30%", height: "30%" }}
          resizeMode={"contain"}
          source={{ uri: route.params.currentItem.image }}
        />
        <View style={{ width: "80%" }}>
          <Text style={{ fontSize: 24, color: colors.white }}>
            {route.params.currentItem.title}
          </Text>

          {/*<LabelChooser value={route.params.currentItem.title}/>*/}
        </View>
      </View>
    </Wrapper>
  );
}
