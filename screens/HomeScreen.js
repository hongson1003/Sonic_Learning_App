import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import Icon từ react-native-vector-icons
import { APP_KEYS, APP_ROUTES } from "../constants";
import { BannersContainer } from "../containers/home/banners";
import { CategoryTabList } from "../containers/home/categoryTabList";
import { Hello } from "../containers/home/hello";
import { NotificationHeader } from "../containers/home/notificationHeader";
import { ServiceContainer } from "../containers/home/services";
import { CategoryList } from "../containers/home/categories";

const HomeScreen = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem(APP_KEYS.ACCESS_TOKEN);
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <View style={styles.headerLeft}>
          {/* Logo */}
          <Image
            source={require("../assets/sonic-learning-logo.png")} // Chỉ định đường dẫn logo
            style={styles.logo}
          />
          {/* Tên "Sonic Learning" */}
          <Text style={styles.headerLeftText}>Sonic Learning</Text>
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerRightButton}
          onPress={handleClickRightHeader}
        >
          <Text style={styles.headerRightText}>
            {isLoggedIn ? (
              <Icon name="shopping-cart" size={25} color="#2196F3" />
            ) : (
              "Đăng nhập"
            )}
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [isLoggedIn, navigation]);

  const handleClickRightHeader = async () => {
    if (isLoggedIn) {
    } else {
      navigation.replace(APP_ROUTES.WELCOME);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <NotificationHeader />
      <Hello />
      <BannersContainer />
      <CategoryTabList />
      <ServiceContainer />
      <CategoryList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 10,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  headerLeftText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2196F3",
  },
  headerRightButton: {
    marginRight: 15,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  headerRightText: {
    fontSize: 16,
    color: "#2196F3",
    fontWeight: "bold",
  },
});

export default HomeScreen;
