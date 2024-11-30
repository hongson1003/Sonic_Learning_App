import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { APP_ROUTES } from "../constants";
import WelcomeScreen from "../screens/WelcomeScreen";
// import BottomTabs from "./BottomTabs";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={APP_ROUTES.WELCOME}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={APP_ROUTES.WELCOME} component={WelcomeScreen} />
        <Stack.Screen name={APP_ROUTES.HOME} component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
