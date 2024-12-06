import React from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const BannerItem = ({ title, description, href, bg, btnColor, btnText }) => {
  const onPress = () => {
    if (href) {
      Linking.openURL(href);
    }
  };

  return (
    <View style={[styles.container, { background: bg }]}>
      {/* Title */}
      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>

      <Text numberOfLines={3} style={styles.description}>
        {description}
      </Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: btnColor }]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    shadowColor: "#000",
    height: "100%",
    maxHeight: 230,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff", // Đặt màu trắng cho tiêu đề khi nền có gradient
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#fff", // Đặt màu trắng cho mô tả khi nền có gradient
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: "auto",
    width: "fit-content",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default BannerItem;
