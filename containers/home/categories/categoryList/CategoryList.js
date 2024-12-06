import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { categoryService } from "../../../../services";
import { flattenCategories } from "../../../../utils";
import { CategoryItem } from "../categoryItem";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const res = await categoryService.getParentCategories("vi");
      const flatten = flattenCategories(res);
      flatten.sort((a, b) => b.courseCount - a.courseCount);
      const fiveCategories = flatten.slice(0, 5);
      setCategories(fiveCategories);
    } catch (error) {
      console.log("🚀 ~ fetchCategories ~ error:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const renderItem = ({ item }) => (
    <CategoryItem
      name={item.name}
      courseCount={item.courseCount}
      onRedirect={() => onRedirect(item.id)}
    />
  );

  const onRedirect = (id) => {
    console.log(`Redirect to category ID: ${id}`);
    // Add navigation logic here.
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Danh mục</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Xem Thêm</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#4CAF50", // Nút "Xem Thêm" với màu nền nổi bật
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
  },
  categoryButton: {
    backgroundColor: "transparent",
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  categoryButtonText: {
    color: "#4CAF50", // Chỉ sử dụng màu chữ xanh, không có nền hoặc viền
    fontSize: 14,
    fontWeight: "500",
  },
});

export default CategoryList;
