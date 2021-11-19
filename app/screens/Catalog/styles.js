import { Dimensions, StyleSheet } from "react-native";

const {width, height} =  Dimensions.get("window")

export const styles = StyleSheet.create({
  headerWrap:{
    height: height*0.05,
    paddingHorizontal: width*0.05,
    alignItems: 'center',
    flexDirection: 'row',
  },
  content:{
      justifyContent: 'space-between',
      width: width*0.8,
      marginHorizontal: width*0.1,
    },
})
