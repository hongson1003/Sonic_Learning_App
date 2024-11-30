import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import React, { useEffect, useState } from "react";

import { appEnvs } from "../constants";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-snap-carousel";

WebBrowser.maybeCompleteAuthSession();

const data = [
  {
    title: "Tham gia khóa học video",
    description:
      "Khám phá những khóa học video hấp dẫn từ các chuyên gia hàng đầu.",
    image: require("../assets/wellCome/wc1.png"),
  },
  {
    title: "Học hỏi từ giới tinh hoa",
    description: "Tìm hiểu và trau dồi kiến thức từ những người giỏi nhất.",
    image: require("../assets/wellCome/wc2.png"),
  },
];

const WelcomeScreen = ({ navigation }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { width, height } = Dimensions.get("window");
  const [token, setToken] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    responseType: "id_token",
    androidClientId: appEnvs.EXPO_PUBLIC_ANDROID_CLIENT_ID,
    webClientId: appEnvs.EXPO_PUBLIC_GOOGLE_CLIENT_ID,
    scopes: ["email"],
  });

  const handleToken = () => {
    if (response?.type === "success") {
      const idToken = response?.params?.id_token;
      console.log("🚀 ~ handleToken ~ idToken:", idToken);
    }
  };

  useEffect(() => {
    handleToken();
  }, [response]);

  const handleOnCLickLogin = () => {
    promptAsync({
      // Thêm tùy chọn để người dùng chọn tài khoản
      prompt: "select_account",
    });
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        {token && <Text>{token}</Text>}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width * 0.8}
        onSnapToItem={(index) => setActiveSlide(index)}
        loop
        autoplay
        autoplayInterval={5000} // Tự động chuyển slide mỗi 5 giây
      />
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.browseButton}
          onPress={() => navigation.replace("Home")}
        >
          <Text style={styles.buttonText}>Duyệt tìm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleOnCLickLogin}
        >
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // Sử dụng màu sáng, dễ chịu cho nền
  },
  slide: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: "100%", // Đảm bảo hình ảnh chiếm toàn bộ không gian
    height: 280, // Tăng chiều cao để hình ảnh nổi bật hơn
    borderRadius: 20, // Thêm bo góc mềm mại cho hình ảnh
    marginBottom: 20,
    resizeMode: "cover", // Đảm bảo hình ảnh được cắt sao cho đẹp
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333", // Màu chữ tối để dễ đọc
    marginBottom: 15, // Tăng khoảng cách giữa tiêu đề và mô tả
    fontFamily: "Roboto", // Chọn font đẹp và dễ đọc
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    color: "#666", // Màu chữ nhẹ nhàng cho mô tả
    paddingHorizontal: 30, // Cách đều từ trái và phải
    marginBottom: 30, // Tăng khoảng cách dưới mô tả
    fontFamily: "Roboto", // Dùng font dễ đọc
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 40, // Thêm khoảng cách từ đáy màn hình
    width: "85%",
  },
  browseButton: {
    backgroundColor: "#ff6f61", // Màu đỏ cam nổi bật
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    flex: 1,
    marginRight: 15, // Khoảng cách giữa các nút
    alignItems: "center",
    justifyContent: "center",
    elevation: 4, // Thêm hiệu ứng đổ bóng nhẹ cho nút
  },
  loginButton: {
    backgroundColor: "#333", // Màu nút tối
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    flex: 1,
    marginLeft: 15, // Khoảng cách giữa các nút
    alignItems: "center",
    justifyContent: "center",
    elevation: 4, // Thêm hiệu ứng đổ bóng nhẹ cho nút
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18, // Thay đổi kích thước chữ để nổi bật hơn
  },
});

export default WelcomeScreen;
