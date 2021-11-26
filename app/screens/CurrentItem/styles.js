import { Dimensions, StyleSheet } from "react-native";

const {width, height} =  Dimensions.get("window")

export const styles = StyleSheet.create({
 modalTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
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
  btnAccept: {},
  btnCancel:{},
})
