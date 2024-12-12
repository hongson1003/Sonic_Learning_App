// components/CourseDescription.js
import React from "react";
import { Text, StyleSheet } from "react-native";

const CourseDescription = ({ description }) => {
  return <Text style={styles.description}>{description}</Text>;
};

const styles = StyleSheet.create({
  description: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
    marginBottom: 16,
  },
});

export default CourseDescription;
