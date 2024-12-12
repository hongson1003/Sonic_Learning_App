import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { APP_ROUTES } from "../constants";
import { AccountScreen, SearchScreen, ViewCourseScreen } from "../screens";
import HomeScreen from "../screens/HomeScreen";
import ViewPostScreen from "../screens/ViewPostScreen";

const Tab = createBottomTabNavigator();

const BottomTabs = ({ navigation }) => {
  const user = useSelector((state) => state.user?.data);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === APP_ROUTES.HOME) {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === APP_ROUTES.SEARCH) {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === APP_ROUTES.ACCOUNT) {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: ({ focused, color }) => {
          // Label cho các tab
          let label;

          if (route.name === APP_ROUTES.HOME) {
            label = "Trang chủ";
          } else if (route.name === APP_ROUTES.SEARCH) {
            label = "Tìm kiếm";
          } else if (route.name === APP_ROUTES.ACCOUNT) {
            label = "Tài khoản";
          }

          return (
            <Text
              style={{
                color: focused ? "#2196F3" : "#757575",
                fontSize: 12,
              }}
            >
              {label}
            </Text>
          );
        },
        tabBarActiveTintColor: "#2196F3",
        tabBarInactiveTintColor: "#757575",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0, // Ẩn border top của tab bar
          elevation: 0, // Tắt shadow cho tab bar
          height: 60, // Điều chỉnh chiều cao tab bar
        },
      })}
    >
      <Tab.Screen name={APP_ROUTES.HOME} component={HomeScreen} />
      <Tab.Screen name={APP_ROUTES.SEARCH} component={SearchScreen} />
      <Tab.Screen
        name={APP_ROUTES.VIEW_COURSE}
        component={ViewCourseScreen}
        options={{
          tabBarItemStyle: { display: "none" }, // Ẩn tab này khi ở trang ViewCourseScreen
          headerShown: false, // Ẩn header khi ở trang ViewCourseScreen
        }}
      />
      <Tab.Screen
        name={APP_ROUTES.VIEW_POST}
        component={ViewPostScreen}
        options={{
          tabBarItemStyle: { display: "none" }, // Ẩn tab này khi ở trang ViewCourseScreen
          headerShown: false, // Ẩn header khi ở trang ViewCourseScreen
        }}
      />
      {user && (
        <Tab.Screen name={APP_ROUTES.ACCOUNT} component={AccountScreen} />
      )}
    </Tab.Navigator>
  );
};

export default BottomTabs;
