// components/AuthorInfo.js
import React from "react";
import { Text, StyleSheet } from "react-native";

const AuthorInfo = ({ author }) => {
  return <Text style={styles.author}>Tác giả: {author.fullName}</Text>;
};

const styles = StyleSheet.create({
  author: {
    fontSize: 18,
    color: "#555",
    marginBottom: 16,
  },
});

export default AuthorInfo;
