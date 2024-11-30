import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { getImage } from "../../../../utils";

const ServiceItem = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: getImage(data.thumbnailUrl) }}
        style={styles.thumbnail}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.linkedItemCount}>
          Liên kết: {data.linkedItemCount}
        </Text>
        <Text style={styles.type}>Loại: {data.type}</Text>
        <Text style={styles.date}>
          Cập nhật: {new Date(data.updatedAt * 1000).toLocaleDateString()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 12,
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    marginBottom: 10,
  },
  thumbnail: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 4,
  },
  linkedItemCount: {
    fontSize: 14,
    color: "#34495e",
    marginBottom: 4,
  },
  type: {
    fontSize: 14,
    color: "#7f8c8d",
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: "#bdc3c7",
  },
});

export default ServiceItem;
