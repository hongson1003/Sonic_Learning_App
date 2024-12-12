import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import RenderHtml from "react-native-render-html";
import { ViewPostHeader } from "./viewPostHeader";

const ViewPostContainer = ({ data, navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <ViewPostHeader
        authorName={data.author.fullName}
        authorAvatar={data.author.avatar}
        postId={data.id}
        onGoBack={() => navigation.goBack()}
      />

      <Text style={styles.title}>{data.title}</Text>
      <RenderHtml contentWidth={300} source={{ html: data.contentHtml }} />
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
