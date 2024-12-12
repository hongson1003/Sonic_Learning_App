import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { ViewPostContainer } from "../containers/viewPost";
import { postService } from "../services";

const ViewPostScreen = ({ route, navigation }) => {
  const { slug } = route.params;
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);

  const fetchPostDetail = async (slug) => {
    try {
      const response = await postService.getPostSlug(slug);
      setData(response);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  console.log("🚀 ~ ViewPostScreen ~ data:", data);

  useEffect(() => {
    fetchPostDetail(slug);
  }, [slug, refetch]);

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
      <ViewPostContainer data={data} navigation={navigation} />
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

export default ViewPostScreen;
