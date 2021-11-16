import { StyleSheet } from "react-native";
import colors from "../../constants /styles/colors";

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: colors.white,
    borderRadius: 40,
  },
  input:{
    width: '80%',
    // backgroundColor: 'red',
  },
})
