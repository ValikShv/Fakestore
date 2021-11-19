import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants /styles/colors";

const {width, height} =  Dimensions.get("window")


export const styles = StyleSheet.create({
  wrap:{
    width: width*0.48,
    marginHorizontal: width*0.01,
    backgroundColor:'rgba(10,10,10,0.05)',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: height* 0.01,
    marginBottom: 10,
  },
  picture:{
  alignItems: 'center',
  justifyContent: 'center',
  width: '75%',
  height: height*0.2,
  padding: 10,
  },
  aboutWrap:{
  width: '75%',
  paddingBottom: 10,
  },
  titleText:{
  color: colors.black,
  fontSize: 14,
  },
  priceText:{

  },
})
