import { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CourseItem } from "../../../components/courseItem";
import courseService from "../../../services/courseService";

const CategoryTabList = () => {
  const [categoryCourses, setCategoryCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const fetchCategoryCourses = async () => {
    try {
      const courses = await courseService.getTopHighViewCategoryCourses("vi");
      setCategoryCourses(courses);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategoryCourses();
  }, []);

  // Lọc khóa học theo danh mục đã chọn
  const filteredCourses = categoryCourses
    .filter(
      (categoryCourse) =>
        selectedCategory === "all" || categoryCourse.label === selectedCategory
    )
    .map((categoryCourse) => categoryCourse.courses)
    .flat();

  return (
    <View style={styles.container}>
      {/* Tiêu đề và nút Xem thêm */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Khóa Học Theo Danh Mục</Text>
        <TouchableOpacity style={styles.seeMoreButton}>
          <Text style={styles.seeMoreText}>Xem thêm</Text>
        </TouchableOpacity>
      </View>

      {/* Tab lựa chọn danh mục */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsContainer}
      >
        {categoryCourses.map((categoryCourse, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tab,
              selectedCategory === categoryCourse.label && styles.selectedTab,
            ]}
            onPress={() => setSelectedCategory(categoryCourse.label)}
          >
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[
                styles.tabText,
                selectedCategory === categoryCourse.label &&
                  styles.selectedTabText,
              ]}
            >
              {categoryCourse.label === "all" ? "Tất cả" : categoryCourse.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Danh sách khóa học */}
      <FlatList
        data={filteredCourses}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <CourseItem data={item} />}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: "#f4f4f4",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  seeMoreButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  seeMoreText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  tabsContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    gap: 12,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    backgroundColor: "#eaeaea",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  selectedTab: {
    backgroundColor: "#2196F3",
  },
  tabText: {
    fontSize: 14,
    color: "#666",
  },
  selectedTabText: {
    color: "#fff",
    fontWeight: "700",
  },
});

export default CategoryTabList;
