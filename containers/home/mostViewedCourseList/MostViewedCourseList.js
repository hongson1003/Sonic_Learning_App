import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CourseList } from "../../../components/coursesList";
import { APP_QUERIES } from "../../../constants";
import { CourseService } from "../../../services";

const MostViewedCourseList = () => {
  const [mostViewedCourses, setMostViewedCourses] = useState([]);

  const fetchMostViewedCourses = async () => {
    try {
      const res = await CourseService.getCourses(
        {
          sortBy: APP_QUERIES.POPULAR,
          size: 6,
        },
        "vi"
      );
      setMostViewedCourses(res);
    } catch (error) {
      console.log("🚀 ~ fetchMostViewedCourses ~ error:", error);
    }
  };

  useEffect(() => {
    fetchMostViewedCourses();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Khóa Học Xem Nhiều Nhất</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Xem Thêm</Text>
        </TouchableOpacity>
      </View>
      <CourseList data={mostViewedCourses.content} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Chia đều khoảng cách giữa tiêu đề và nút
    alignItems: "center", // Căn chỉnh theo chiều dọc
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "left",
  },
  button: {
    backgroundColor: "#4CAF50",
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
});

export default MostViewedCourseList;
