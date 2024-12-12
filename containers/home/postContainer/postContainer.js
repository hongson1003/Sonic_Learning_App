import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PostList } from "../../../components/postList";
import { postService } from "../../../services";

const PostContainer = () => {
  const [posts, setPosts] = useState([]);

  const fetchTopPosts = async () => {
    try {
      const res = await postService.getTopPosts();
      setPosts(res);
    } catch (error) {
      console.log("🚀 ~ fetchTopPosts ~ error:", error);
    }
  };

  useEffect(() => {
    fetchTopPosts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post Container</Text>
      <PostList data={posts} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f8f9fa", // Màu nền nhẹ nhàng
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 16,
    textTransform: "uppercase", // Viết hoa toàn bộ chữ
    borderBottomWidth: 2,
    borderBottomColor: "#007BFF", // Đường gạch chân màu xanh
    paddingBottom: 8,
  },
});

export default PostContainer;
