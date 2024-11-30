import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import Icon từ react-native-vector-icons
import { APP_KEYS, APP_ROUTES } from "../constants";
import { BannersContainer } from "../containers/home/banners";

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
    <View style={styles.container}>
      <BannersContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerLeft: {
    flexDirection: "row", // Sắp xếp logo và tên theo chiều ngang
    alignItems: "center", // Căn giữa logo và tên
  },
  logo: {
    width: 30, // Kích thước logo
    height: 30, // Kích thước logo
    marginRight: 10, // Khoảng cách giữa logo và tên
  },
  headerLeftText: {
    fontSize: 18, // Kích thước chữ
    fontWeight: "bold", // Chữ đậm
    color: "#2196F3", // Màu chữ
  },
  headerRightButton: {
    marginRight: 15,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  headerRightText: {
    fontSize: 16,
    color: "#2196F3", // Màu chữ, có thể thay đổi theo ý bạn
    fontWeight: "bold", // Để chữ đậm
  },
});

export default HomeScreen;
