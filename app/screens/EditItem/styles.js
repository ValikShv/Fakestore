import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants /styles/colors";

const {width, height} =  Dimensions.get("window")

export const styles = StyleSheet.create({
  underImage:{
    backgroundColor: colors.lightgray
  },
  image:{
    width: '100%',
    height: '100%',
  },
  imageWrap:{
     borderRadius:20,
     width: width*0.7,
     height: height*0.3,
     backgroundColor: colors.white,
     paddingHorizontal: 10,
     marginVertical: 15,
  },

  contentWrap:{
    borderRadius: 15,
    width: "80%",
    marginHorizontal: '10%',
    height: '70%',
    alignItems: "center",
    backgroundColor: colors.purpleDark,
  },
})
