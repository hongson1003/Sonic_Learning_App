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
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
  },
  tabsContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    gap: 10,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedTab: {
    backgroundColor: "#2196F3",
  },
  tabText: {
    fontSize: 14,
    color: "#333",
  },
  selectedTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  courseItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});

export default CategoryTabList;
