// components/ChapterList.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ChapterList = ({ chapters, openVideo, course }) => {
  return (
    <View style={styles.chapterSection}>
      <Text style={styles.packageTitle}>Chương và Bài học:</Text>
      {chapters && chapters.length > 0 ? (
        chapters.map((chapter, index) => (
          <View key={index} style={styles.chapter}>
            <Text style={styles.chapterTitle}>
              Chương {index + 1}: {chapter.title}
            </Text>
            {chapter.lessons && chapter.lessons.length > 0 ? (
              chapter.lessons.map((lesson, i) => (
                <View key={i} style={styles.lesson}>
                  <Text style={styles.lessonTitle}>{lesson.title}</Text>
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
  );
};

const styles = StyleSheet.create({
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
  button: {
    marginTop: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#28a745",
    borderRadius: 5,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#cccccc",
    opacity: 0.6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ChapterList;
