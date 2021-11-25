import { StyleSheet } from "react-native";
import colors from "../../constants /styles/colors";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.transparentWhite,
    borderRadius: 40,
    shadowColor: colors.white,
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 30,
    //height: 75,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  smallButton: {
    flexGrow: 1,
    height: 34,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  smallButtonText: {
    fontSize: 12,
  },
  transparent: {
    opacity: 0.5,
  },
})
