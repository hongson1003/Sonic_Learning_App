import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CategoryItem = ({ name, courseCount, onRedirect }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.courseCount}>Số khoá học: {courseCount}</Text>
      </View>
      <TouchableOpacity onPress={onRedirect} style={styles.button}>
        <Text style={styles.redirectText}>Xem chi tiết</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a202c",
    marginBottom: 4,
  },
  courseCount: {
    fontSize: 14,
    color: "#718096",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#1e90ff",
    borderRadius: 8,
  },
  redirectText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});

export default CategoryItem;
