import { Dimensions, StyleSheet } from "react-native";

const {width, height} =  Dimensions.get("window")

export const styles = StyleSheet.create({
  modalWrap: {
    //flex: 1,
    height: height,
    width: width,
    alignItems: 'center',
  },
  overModal: {
    width: '100%',
    height: '33%',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '66%',
    padding: 10,
  },
  modalOverlay: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonWrap: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   padding: 20,
  },
  btnWrap: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  btnAccept: {
    backgroundColor: 'red',
  },
  btnCancel:{},
})
