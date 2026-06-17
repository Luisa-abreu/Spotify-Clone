import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ParametroRotasStack } from "./navigation";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { TabsRouters } from "./tabs";
import { InitialPage } from "../pages/InitialPage";

const Stack = createNativeStackNavigator<ParametroRotasStack>();

export const StackRouters = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="InitialPage" component={InitialPage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={TabsRouters} />
    </Stack.Navigator>
  );
};
