import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: "#FFF",
    fontWeight: 900,
    marginBottom: 30,
  },
  divisor: {
    height: 1,
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: 500,
    marginTop: 25,
    marginBottom: 25,
    opacity: 0.5,
  },
  link: {
    color: "#fff",
    textDecorationLine: "underline",
    fontWeight: 700,
  },
  container: {
    width: "100%",
    maxWidth: 330,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
