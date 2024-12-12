import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CourseList } from "../../../components/coursesList";
import { APP_QUERIES } from "../../../constants";
import { courseService } from "../../../services";

const MostViewedCourseList = () => {
  const [mostViewedCourses, setMostViewedCourses] = useState([]);

  const fetchMostViewedCourses = async () => {
    try {
      const res = await courseService.getCourses(
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
    backgroundColor: "#f9f9f9", // Màu nền nhẹ nhàng
    borderRadius: 10, // Góc bo tròn nhẹ cho khung
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // Bóng trên Android
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#4CAF50", // Đường kẻ màu nổi bật
    paddingBottom: 8,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2C3E50", // Màu xanh đậm
    textTransform: "uppercase", // Viết hoa toàn bộ
    letterSpacing: 1.2, // Khoảng cách giữa các chữ
  },
  button: {
    backgroundColor: "#4CAF50", // Màu xanh lá cây nổi bật
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20, // Góc bo tròn đầy đặn
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#fff", // Màu chữ trắng
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase", // Viết hoa
    letterSpacing: 0.8,
  },
});

export default MostViewedCourseList;
