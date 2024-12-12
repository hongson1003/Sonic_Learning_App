// screens/CourseDetail.js
import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getImage, getVideo } from "../../../utils";
import { ViewCourseHeader } from "../viewCourseHeader";
import { AuthorInfo } from "./authorInfo";
import { ChapterList } from "./chapterList";
import { CourseDescription } from "./courseDescription";
import { CourseHeader } from "./courseHeader";
import { CoursePackage } from "./coursePackage";
import { LearningOutcomes } from "./learningOutcomes";

const CourseDetail = ({ course }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  const openVideo = (url) => {
    if (url) {
      setVideoUrl(url);
      setModalVisible(true);
    }
  };

  return (
    <>
      <ViewCourseHeader navigation={navigation} />

      <ScrollView style={styles.container}>
        {/* Hình ảnh khóa học */}
        <Image
          source={{ uri: getImage(course.thumbnailUrl) }}
          style={styles.thumbnail}
        />

        {/* Tiêu đề khóa học */}
        <CourseHeader title={course.title} category={course.category.name} />

        {/* Thông tin tác giả */}
        <AuthorInfo author={course.author} />

        {/* Mô tả khóa học */}
        <CourseDescription description={course.description} />

        {/* Gói khóa học */}
        <CoursePackage packageInfo={course.coursePackage} />

        {/* Những gì học viên sẽ học */}
        <LearningOutcomes outcomes={course.learningOutcomes} />

        {/* Chương và Bài học */}
        <ChapterList
          chapters={course.chapters}
          openVideo={openVideo}
          course={course}
        />

        {/* Thông tin bổ sung */}
        <View style={styles.info}>
          <Text style={styles.infoText}>
            Số lượng bài học: {course.lessonCount}
          </Text>
          <Text style={styles.infoText}>
            Thời lượng: {Math.floor(course.duration / 60)} phút
          </Text>
          <Text style={styles.infoText}>
            Giá: {course.price === 0 ? "Miễn phí" : `${course.price} VND`}
          </Text>
        </View>

        {/* Modal Video */}
        {videoUrl && (
          <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <iframe
                src={getVideo(videoUrl)}
                width="100%"
                height="100%"
                style={styles.iframe}
                allowFullScreen
              />
              <Button title="Đóng" onPress={() => setModalVisible(false)} />
            </View>
          </Modal>
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  thumbnail: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  info: {
    marginTop: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
    paddingTop: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
  },
  infoText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  iframe: {
    width: "90%",
    height: 300,
  },
});

export default CourseDetail;
