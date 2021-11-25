import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants /styles/colors";

const {width, height} =  Dimensions.get("window")

export const styles = StyleSheet.create({
  underImage:{
    backgroundColor: colors.lightgray
  },
  image:{
  },
  contentWrap:{
    width: "100%",
    alignItems: "center"
  },
})
