// components/LearningOutcomes.js
import React from "react";
import { Text, StyleSheet, View } from "react-native";

const LearningOutcomes = ({ outcomes }) => {
  return (
    <View style={styles.willLearns}>
      <Text style={styles.packageTitle}>Bạn sẽ học được:</Text>
      {outcomes && outcomes.length > 0 ? (
        outcomes.map((item, index) => (
          <Text key={index} style={styles.learningItem}>
            {item}
          </Text>
        ))
      ) : (
        <Text style={styles.learningItem}>Chưa có mục tiêu học.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  willLearns: {
    marginBottom: 16,
  },
  learningItem: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
  packageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#007bff",
  },
});

export default LearningOutcomes;
