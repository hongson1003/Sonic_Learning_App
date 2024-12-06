import { Text, View, StyleSheet } from "react-native";

const NotificationHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Học các kỹ năng đáp ứng nhu cầu tương lai | Học trên iOS, Android và hơn
        thế nữa.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#E3F2FD", // Màu nền nhẹ nhàng
    borderBottomWidth: 1,
    borderBottomColor: "#B3E5FC", // Đường viền dưới nhẹ
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1E88E5", // Màu chữ xanh dương
    textAlign: "center", // Căn giữa
  },
});

export default NotificationHeader;
