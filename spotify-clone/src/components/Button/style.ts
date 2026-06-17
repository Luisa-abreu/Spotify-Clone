import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    width: "100%",
    maxWidth: 330,
    height: 49,
    borderRadius: 45,
    marginTop: 6,
    marginBottom: 6,
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
    left: 16,
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
