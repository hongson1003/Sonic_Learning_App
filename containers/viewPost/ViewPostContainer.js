import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import RenderHtml from "react-native-render-html";

const ViewPostContainer = ({ data }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <RenderHtml contentWidth={300} source={{ html: data.content }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default ViewPostContainer;
