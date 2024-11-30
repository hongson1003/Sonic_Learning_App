import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LoadingScreen } from "../components/loading";
import { APP_KEYS, APP_ROUTES } from "../constants";
import { setUser } from "../context/slices";
import WelcomeScreen from "../screens/WelcomeScreen";
import userService from "../services/userService";
import BottomTabs from "./BottomTabs";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const [redirectRoute, setRedirectRoute] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem(APP_KEYS.ACCESS_TOKEN);
        if (token) {
          const res = await userService.getMe(token);
          if (res) {
            dispatch(setUser(res));
            setRedirectRoute(APP_ROUTES.HOME);
            setIsLoading(false);
            return;
          }
        }

        setRedirectRoute(APP_ROUTES.WELCOME);
      } catch (error) {
        console.error("Error checking login status:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  if (isLoading || !redirectRoute) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={redirectRoute}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={APP_ROUTES.WELCOME} component={WelcomeScreen} />
        <Stack.Screen name={APP_ROUTES.HOME} component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
