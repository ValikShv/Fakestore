import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants /styles/colors";

const {width, height} =  Dimensions.get("window")

export const styles = StyleSheet.create({
  headerWrap:{
    height: height*0.1,
    paddingHorizontal: width*0.05,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text:{
    textAlign: 'center',
    color: colors.white,
    fontSize: 14,
    marginBottom: 10,
  },
  bigText: {
    fontWeight: 'bold',
    fontSize: 24
  },
})
