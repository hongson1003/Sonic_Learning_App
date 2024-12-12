import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { CourseDetail } from "../containers/viewCourse/courseDetail";
import { courseService } from "../services";

const ViewCourseScreen = ({ route, navigation }) => {
  const { slug } = route.params;
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchCourseDetail = async (slug) => {
    try {
      const response = await courseService.getCourseBySlug(slug);
      setData(response);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCourseDetail(slug);
  }, [slug]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF5733" />
        <Text style={styles.loadingText}>Đang tải khóa học...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CourseDetail course={data} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: "#555",
  },
});

export default ViewCourseScreen;
