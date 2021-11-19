import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants /styles/colors";

const {width, height} =  Dimensions.get("window")


export const styles = StyleSheet.create({
  wrap:{
    height: height*0.1,
    paddingHorizontal: width*0.1,
    backgroundColor:colors.purpleDark,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: height* 0.05,
    marginBottom: 10,
  },
  aboutItem: {
    paddingHorizontal: 10,
  },
  contentWrap: {
    flexDirection: 'row'
  },

})
