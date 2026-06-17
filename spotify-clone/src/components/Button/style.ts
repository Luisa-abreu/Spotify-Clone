import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    width: "100%",
    maxWidth: 330,
    height: 49,
    borderRadius: 45,
    marginTop: 5,
    marginBottom: 5,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSolid: {
    backgroundColor: "#1ED760",
  },

  buttonOutline: {
    borderColor: "#FFF",
    borderWidth: 0.7,
  },

  icon: {
    position: "absolute",
    left: 25,
  },
  text: {
    fontWeight: "900",
  },
  textSolid: {
    color: "#000",
  },
  textOutline: {
    color: "#fff",
  },
});
