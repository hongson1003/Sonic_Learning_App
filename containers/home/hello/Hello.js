import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const Hello = () => {
  const user = useSelector((state) => state.user?.data);

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Image
            source={require("../../../assets/home/student.png")}
            style={styles.avatar}
          />
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>
              Chào mừng bạn, {user.fullName}!
            </Text>
            <Text style={styles.emailText}>{user.email}</Text>
          </View>
        </>
      ) : (
        <Text style={styles.welcomeText}>Bạn chưa đăng nhập!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 5,
  },
  textContainer: {
    flexDirection: "column",
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2196F3",
    flexWrap: "wrap",
    maxWidth: 300,
  },
  emailText: {
    fontSize: 14,
    color: "#757575",
  },
});

export default Hello;
