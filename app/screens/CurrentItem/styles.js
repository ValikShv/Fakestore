import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants /styles/colors";


const {width, height} =  Dimensions.get("window")

export const styles = StyleSheet.create({
 modalTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  image:{
      width: '100%',
      height: '100%',
    },
  buttonWrap: {
   flexDirection: 'row',
   justifyContent: 'space-around',
   padding: 20,
  },
  btnWrap: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 20,
    padding: 10,
    marginLeft: 5,
  },
  imageWrap:{
       borderRadius:20,
       width: width*0.7,
       height: height*0.3,
       backgroundColor: colors.white,
       paddingHorizontal: 10,
       marginVertical: 15,
    },
  btnAccept: {},
  btnCancel:{},
})
