import { Dimensions, StyleSheet } from "react-native";

const {width, height} =  Dimensions.get("window")

export const styles = StyleSheet.create({
  headerWrap:{
    height: height*0.05,
    paddingHorizontal: width*0.05,
    // backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
})
