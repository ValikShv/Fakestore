import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants /styles/colors";

const {width, height} =  Dimensions.get("window")

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.purple,
    flexGrow: 1,
    justifyContent: 'space-between',
  },
})
