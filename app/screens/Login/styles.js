import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants /styles/colors";

const {width, height} =  Dimensions.get("window")

export const styles = StyleSheet.create({
  wrapper: {
    height:height,
    paddingVertical: height*0.05,
    backgroundColor: colors.purple,
    alignItems: 'center',
    justifyContent: "space-between"
  },
  content:{
    width: width*0.8,
  },
  text:{
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
  },
  bigText: {
    fontWeight: 'bold',
    fontSize: 24
  },
})
