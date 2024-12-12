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
        <Text style={styles.header}>Danh Mục</Text>
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
    backgroundColor: "#f9f9f9", // Màu nền nhạt tạo cảm giác nhẹ nhàng
    borderRadius: 12, // Góc bo tròn
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // Hiệu ứng nổi trên Android
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#4CAF50", // Đường kẻ dưới tiêu đề
    paddingBottom: 8,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2C3E50", // Màu xanh đậm, chuyên nghiệp
    textTransform: "uppercase",
    letterSpacing: 1.2, // Khoảng cách giữa các chữ
  },
  button: {
    backgroundColor: "#4CAF50", // Màu nền xanh nổi bật
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20, // Góc bo tròn mềm mại
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Hiệu ứng bóng cho nút
  },
  buttonText: {
    color: "#fff", // Màu chữ trắng nổi bật
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase", // Viết hoa toàn bộ chữ
    letterSpacing: 0.8,
  },
});

export default CategoryList;
