import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CategoryItem = ({ name, courseCount, onRedirect }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.courseCount}>Số khoá học: {courseCount}</Text>
      </View>
      <TouchableOpacity onPress={onRedirect} style={styles.categoryButton}>
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
  categoryButton: {
    backgroundColor: "transparent",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#1e90ff",
  },
  redirectText: {
    color: "#1e90ff",
    fontWeight: "600",
    fontSize: 14,
  },
});

export default CategoryItem;
