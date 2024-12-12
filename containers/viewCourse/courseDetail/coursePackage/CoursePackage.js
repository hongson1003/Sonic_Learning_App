// components/CoursePackage.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CoursePackage = ({ packageInfo }) => {
  return (
    <View style={styles.package}>
      <Text style={styles.packageTitle}>Gói khóa học:</Text>
      <Text style={styles.packageName}>{packageInfo.name}</Text>
      <Text>{packageInfo.descriptionVi}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  package: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  packageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#007bff",
  },
  packageName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
});

export default CoursePackage;
