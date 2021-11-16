import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants /styles/colors";

const {width, height} =  Dimensions.get("window")

export const styles = StyleSheet.create({
  content:{
    width: width*0.8,
    paddingVertical: height*0.05,
    paddingTop: height*0.35,
    marginHorizontal: width*0.1,
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
