import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 900,
    color: "#FFF",
    textAlign: "left",
    paddingLeft: 16,
  },

  icons: {
    flexDirection: "row",
    gap: 5,
    paddingRight: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 30,
  },
  player: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: "#1e1e1e",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    width: "100%",
  },

  info: {
    flexDirection: "row",
    alignItems: "center",
  },

  cover: {
    width: 50,
    height: 50,
    backgroundColor: "gray",
    marginRight: 10,
    borderRadius: 4,
  },

  music: {
    color: "white",
    fontWeight: "bold",
  },

  artist: {
    color: "gray",
    fontSize: 12,
  },

  controls: {
    flexDirection: "row",
    alignItems: "center",
  },
});
