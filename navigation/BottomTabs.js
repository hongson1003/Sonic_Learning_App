import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { APP_ROUTES } from "../constants";
import { AccountScreen } from "../screens";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

const BottomTabs = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === APP_ROUTES.HOME) {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === APP_ROUTES.ACCOUNT) {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#2196F3",
        tabBarInactiveTintColor: "#757575",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
        },
      })}
    >
      <Tab.Screen name={APP_ROUTES.HOME} component={HomeScreen} />
      <Tab.Screen name={APP_ROUTES.ACCOUNT} component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
