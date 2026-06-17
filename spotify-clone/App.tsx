import { StyleSheet, View } from "react-native";
import { Login } from "./src/pages/Login";
import { Home } from "./src/pages/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
      {/* <Home /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
});
