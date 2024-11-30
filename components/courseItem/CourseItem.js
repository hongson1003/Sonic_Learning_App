import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { getImage } from "../../utils";

const CourseItem = ({ data }) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={{ uri: getImage(data.thumbnailUrl) }}
        style={styles.image}
      />

      {/* Title, Rating, Views */}
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {data.title}
        </Text>
        <View style={styles.detailsContainer}>
          {/* Rating */}
          <Text style={styles.rating}>
            ⭐ {data.rating ? data.rating : "Chưa có"}
          </Text>
          {/* Views */}
          <Text style={styles.views}>👁️ {data.viewCount} views</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
    lineHeight: 22,
    minHeight: 44,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rating: {
    fontSize: 14,
    color: "#FFB400",
  },
  views: {
    fontSize: 14,
    color: "#757575",
  },
});

export default CourseItem;
