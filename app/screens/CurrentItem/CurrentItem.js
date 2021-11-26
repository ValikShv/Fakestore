import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, Modal } from "react-native";
import { styles } from "./styles";
import { ArrowLeft, Button, Header, Wrapper } from "../../components";
import colors from "../../constants /styles/colors";
import { useDispatch, useSelector } from "react-redux";
import { deleteItems, getCurrentItem } from "../../store/actions/items";
import BitIcon from "../../components/svgIcon/BitIcon";
import DefaultModal from "../../components/DefaultModal/DefaultModal";
import EditIcon from "../../components/svgIcon/EditIcon";

export const CurrentItem = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const deleteItem = id => {
    dispatch(deleteItems(id));
    setVisible(!visible);
    navigation.navigate("TabNavigationScreen");
  };
  useEffect(() => {
    dispatch(getCurrentItem(route.params.id));
  }, []);
  const currentItem = useSelector(state => state.items.currentItem);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Wrapper bgColor={colors.purple} customStyle={{ justifyContent: "center" }}>
        <View style={{ height: "100%", justifyContent: "space-between" }}>
          <Header
            leftBtn={{
              icon: <ArrowLeft />,
              func: () => navigation.goBack(),
            }}
            rightBtn={{
              icon: <EditIcon />,
              func: () => navigation.navigate('EditItem', {currentItem})
            }}
            title={"Item"}
          />
          <View style={{ width: "100%", alignItems: "center" }}>
            <View style={styles.imageWrap}>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={{ uri: currentItem?.image }}
            />
            </View>
            <View style={{ width: "80%" }}>
              <Text style={{ fontSize: 24, color: colors.white }}>
                {currentItem?.title}
              </Text>
              <Text style={{ fontSize: 20, color: colors.lightgray }}>
                {currentItem?.price}$
              </Text>
            </View>
          </View>
          <View>
            <Button
              title={"Buy"}
              onPress={() => {
                navigation.navigate("TabNavigationScreen");
              }}
            />
            <Button
              title={"Delete"}
              bgColor={colors.red}
              onPress={() => setVisible(!visible)}
            />
          </View>
        </View>
      </Wrapper>
      <DefaultModal visible={visible} setVisible={setVisible}>
        <Text style={styles.modalTitle}>Are you sure want to delete 'Some good title'?</Text>
        <View style={styles.buttonWrap}>
          <Button
            title={"Yes, delete"}
            bgColor={"red"}
            customStyles={[styles.btnWrap, styles.btnAccept]}
            textStyles={{ fontWeight: "normal", color: "white" }}
            onPress={() => deleteItem(route.params.id)}
          />
          <Button
            title={"Cancel"}
            customStyles={[styles.btnWrap, styles.btnAccept]}
            textStyles={{ color: "black" }}
            onPress={() => {
              setVisible(!visible);
            }}
          />
        </View>
      </DefaultModal>
    </>
  );
};
