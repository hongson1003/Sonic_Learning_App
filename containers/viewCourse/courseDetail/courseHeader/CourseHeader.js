// components/CourseHeader.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CourseHeader = ({ title, category }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.category}>Danh mục: {category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  category: {
    fontSize: 16,
    color: "#007bff",
    marginBottom: 8,
  },
});

export default CourseHeader;
