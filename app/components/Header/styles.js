import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants /styles/colors";

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
  text:{
    textAlign: 'center',
    color: colors.black,
    fontSize: 14,
    marginBottom: 10,
  },
  bigText: {
    fontWeight: 'bold',
    fontSize: 24
  },
})
