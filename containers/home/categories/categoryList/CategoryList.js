import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { categoryService } from "../../../../services";
import { CategoryItem } from "../categoryItem";
import { flattenCategories } from "../../../../utils";

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
        <TouchableOpacity onPress={() => onRedirect()}>
          <Text style={styles.viewAllButton}>Xem tất cả</Text>
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
  viewAllButton: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1e90ff",
  },
});

export default CategoryList;
