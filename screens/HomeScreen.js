import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { APP_KEYS, APP_ROUTES } from "../constants";

const HomeScreen = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem("accessToken");
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();
  }, []);

  useEffect(() => {
    // Cập nhật headerRight khi isLoggedIn thay đổi
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerRightButton}
          onPress={handleLoginLogout}
        >
          <Text style={styles.headerRightText}>
            {isLoggedIn ? "Sign Out" : "Sign In"}{" "}
            {/* Hiển thị Sign In/Sign Out */}
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [isLoggedIn, navigation]); // Lắng nghe thay đổi của isLoggedIn và navigation

  const handleLoginLogout = async () => {
    if (isLoggedIn) {
      // Đăng xuất, xóa token và cập nhật lại trạng thái
      await AsyncStorage.removeItem(APP_KEYS.ACCESS_TOKEN);
      setIsLoggedIn(false);
    } else {
      // Điều hướng đến màn hình đăng nhập
      navigation.replace(APP_ROUTES.WELCOME);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
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
