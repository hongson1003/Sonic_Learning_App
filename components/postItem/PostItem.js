import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { getImage } from "../../utils";

const PostItem = ({ data }) => {
  return (
    <View style={styles.container}>
      {/* Ảnh bài viết */}
      <Image
        source={{ uri: getImage(data.thumbnailUrl) }}
        style={styles.image}
      />

      {/* Thông tin bài viết: Tiêu đề, lượt xem, avatar */}
      <View style={styles.infoContainer}>
        {/* Tiêu đề bài viết */}
        <Text style={styles.title} numberOfLines={2}>
          {data.title}
        </Text>

        {/* Thông tin tác giả */}
        <View style={styles.detailsContainer}>
          <Image
            source={{ uri: getImage(data.authorAvatar) }}
            style={styles.avatar}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.authorName} numberOfLines={1}>
              {data.authorName}
            </Text>
            <Text style={styles.viewCount}>👁️ {data.viewCount} views</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 3,
    maxWidth: 200,
    width: "48%",
  },
  image: {
    width: "100%",
    height: 120,
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    lineHeight: 22,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: "column",
  },
  authorName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
    width: "90%",
  },
  viewCount: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
  },
});

export default PostItem;
