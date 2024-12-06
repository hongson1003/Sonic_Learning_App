import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const AccountInfo = ({ avatarUrl, name, email }) => {
  return (
    <View style={styles.profileContainer}>
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.emailContainer}>
          <Ionicons
            name="logo-google"
            size={18}
            color="#757575"
            style={styles.icon}
          />
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
    gap: 5,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  infoContainer: {
    flexDirection: "column",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  emailContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  email: {
    fontSize: 14,
    color: "#777",
  },
});

export default AccountInfo;
