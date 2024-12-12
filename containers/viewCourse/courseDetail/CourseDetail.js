import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getImage, getVideo } from "../../../utils";
import { ViewCourseHeader } from "../viewCourseHeader";

const CourseDetail = ({ course }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const navigation = useNavigation();

  // Hàm mở video thông qua Google Drive iframe
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

        {/* Tiêu đề và danh mục khóa học */}
        <View style={styles.header}>
          <Text style={styles.title}>{course.title}</Text>
          <Text style={styles.category}>Danh mục: {course.category.name}</Text>
        </View>

        {/* Thông tin tác giả */}
        <Text style={styles.author}>Tác giả: {course.author.fullName}</Text>

        {/* Mô tả khóa học */}
        <Text style={styles.description}>{course.description}</Text>

        {/* Gói khóa học */}
        <View style={styles.package}>
          <Text style={styles.packageTitle}>Gói khóa học:</Text>
          <Text style={styles.packageName}>{course.coursePackage.name}</Text>
          <Text>{course.coursePackage.descriptionVi}</Text>
        </View>

        {/* "Will learns" - Những gì học viên sẽ học */}
        <View style={styles.willLearns}>
          <Text style={styles.packageTitle}>Bạn sẽ học được:</Text>
          {course.learningOutcomes && course.learningOutcomes.length > 0 ? (
            course.learningOutcomes.map((item, index) => (
              <Text key={index} style={styles.learningItem}>
                {item}
              </Text>
            ))
          ) : (
            <Text style={styles.learningItem}>Chưa có mục tiêu học.</Text>
          )}
        </View>

        {/* Chương và Bài học */}
        <View style={styles.chapterSection}>
          <Text style={styles.packageTitle}>Chương và Bài học:</Text>
          {course.chapters && course.chapters.length > 0 ? (
            course.chapters.map((chapter, index) => (
              <View key={index} style={styles.chapter}>
                <Text style={styles.chapterTitle}>
                  Chương {index + 1}: {chapter.title}
                </Text>
                {chapter.lessons && chapter.lessons.length > 0 ? (
                  chapter.lessons.map((lesson, i) => (
                    <View key={i} style={styles.lesson}>
                      <Text style={styles.lessonTitle}>{lesson.title}</Text>
                      {/* Kiểm tra nếu bài học có video và khóa học miễn phí, hiển thị nút xem */}
                      {lesson.videoUrl && course.price === 0 ? (
                        <TouchableOpacity
                          style={[
                            styles.button,
                            !lesson.videoUrl && styles.disabledButton,
                          ]}
                          onPress={() => openVideo(lesson.videoUrl)}
                          disabled={!lesson.videoUrl}
                        >
                          <Text style={styles.buttonText}>Xem video</Text>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          style={[styles.button, styles.disabledButton]}
                          disabled
                        >
                          <Text style={styles.buttonText}>Không thể xem</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  ))
                ) : (
                  <Text style={styles.lessonTitle}>
                    Chưa có bài học cho chương này.
                  </Text>
                )}
              </View>
            ))
          ) : (
            <Text style={styles.chapterTitle}>
              Chưa có chương và bài học cho khóa học này.
            </Text>
          )}
        </View>

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

        {/* Modal Video - Thêm iframe video từ Google Drive */}
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

export default CourseDetail;

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
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  category: {
    fontSize: 16,
    color: "#007bff",
    marginBottom: 8,
  },
  author: {
    fontSize: 18,
    color: "#555",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
    marginBottom: 16,
  },
  package: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  packageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#007bff",
  },
  packageName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  willLearns: {
    marginBottom: 16,
  },
  learningItem: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
  chapterSection: {
    marginBottom: 16,
  },
  chapter: {
    marginBottom: 12,
  },
  chapterTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#17a2b8",
  },
  lesson: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 8,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  disabledButton: {
    backgroundColor: "#cccccc",
    opacity: 0.6,
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
  button: {
    marginTop: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#28a745",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
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
