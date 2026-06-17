import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../pages/Home";

import { ParametroRotasTabs } from "./navigation";
import Icon from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";
import { styles } from "./style";

const Tabs = createBottomTabNavigator<ParametroRotasTabs>();

export const TabsRouters = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#121212",
          height: 70,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View style={[styles.cardTabs]}>
              <Icon name="home" size={22} color={focused ? "white" : "#ccc"} />
              <Text
                style={[styles.textTabs, { color: focused ? "white" : "#ccc" }]}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Search"
        component={Home}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View style={[styles.cardTabs]}>
              <Icon
                name="search"
                size={22}
                color={focused ? "white" : "#ccc"}
              />
              <Text
                style={[styles.textTabs, { color: focused ? "white" : "#ccc" }]}
              >
                Search
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Library"
        component={Home}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View style={[styles.cardTabs]}>
              <Icon
                name="reorder-four-outline"
                size={22}
                color={focused ? "white" : "#ccc"}
              />
              <Text
                style={[styles.textTabs, { color: focused ? "white" : "#ccc" }]}
              >
                Library
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Premium"
        component={Home}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View style={[styles.cardTabs]}>
              <Icon
                name="person-circle-outline"
                size={22}
                color={focused ? "white" : "#ccc"}
              />
              <Text
                style={[styles.textTabs, { color: focused ? "white" : "#ccc" }]}
              >
                Premium
              </Text>
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
