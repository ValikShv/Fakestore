import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { styles } from "./styles";
import { getItemCatalog } from "../../store/actions/items";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeft, Header, itemCard, Wrapper } from "../../components";
import Button from "../../components/Button/Button";
import colors from "../../constants /styles/colors";

export const Catalog = ({navigation} ) => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getItemCatalog())

  }, [])
  const arr = useSelector(state => state.items.catalogItems)
  const itemPress = (title) => {
    navigation.navigate('Category', {title, arr})
  }
  return (
    <Wrapper bgColor={colors.purpleLight}>
      <View>
        <Header
        leftBtn={{
          icon: <ArrowLeft/>,
          func: ()=>navigation.goBack(),
        }}
      title={'Catalog'}
      />
      <View style={styles.content}>
        <FlatList
          data={arr}
          renderItem={(item, index)=>itemCard(item, index, itemPress)}
          keyExtractor={item => item.id}
        />
      </View>
      </View>
    </Wrapper>
  );
};
