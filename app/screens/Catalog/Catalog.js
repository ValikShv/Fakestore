import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Wrapper from "../../components/Wrapper/Wrapper";
import { styles } from "./styles";
import ArrowLeft from "../../components/svgIcon/ArrowLeft";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { getItemCatalog } from "../../store/actions/items";

export const Catalog = ({navigation}, title, leftButton, rightButton ) => {
  const renderItem = (item) => {

    return(
      <View>
        <View>
          <View>
            <Text>Picture</Text>
          </View>
          <View>
            <Text>
              title
              {item.title}
            </Text>
            <Text>
              1000 items
            </Text>
          </View>
        </View>
        <View></View>
      </View>
    )
  }
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
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Wrapper>
  );
};
