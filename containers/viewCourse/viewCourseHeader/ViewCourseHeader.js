import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ViewCourseHeader = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      {/* Nút Trở về */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="chevron-back" size={30} color="#2196F3" />
      </TouchableOpacity>

      {/* Tiêu đề màn hình */}
      <Text style={styles.headerTitle}>Xem Khóa Học</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    elevation: 5, // Thêm bóng đổ (Android)
    shadowColor: "#000", // Thêm bóng đổ (iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 15,
    flex: 1, // Căn giữa tiêu đề
    textAlign: "center", // Đảm bảo tiêu đề căn giữa
  },
});

export default ViewCourseHeader;
