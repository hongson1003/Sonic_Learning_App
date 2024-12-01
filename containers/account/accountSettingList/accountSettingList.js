import React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Dữ liệu các tùy chọn cài đặt tài khoản
const settingsData = [
  { id: "1", name: "Chỉnh sửa thông tin cá nhân", icon: "person-outline" },
  { id: "3", name: "Cài đặt thông báo", icon: "notifications-outline" },
  { id: "4", name: "Quản lý phương thức thanh toán", icon: "wallet-outline" },
  { id: "5", name: "Đăng xuất", icon: "log-out-outline" },
];

const AccountSettingList = ({ navigation }) => {
  const handleOnClickSettingItem = (id) => {
    console.log("🚀 ~ AccountSettingList ~ id:", id);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        handleOnClickSettingItem(item.id);
      }}
    >
      <Ionicons
        name={item.icon}
        size={24}
        color="#2196F3"
        style={styles.icon}
      />
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={settingsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  icon: {
    marginRight: 15,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
  separator: {
    height: 1,
    backgroundColor: "#ddd",
  },
});

export default AccountSettingList;
