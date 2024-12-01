import { useEffect, useState } from "react";
import { Text, View } from "react-native";
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
    <View>
      <Text>Post Container</Text>
      <PostList data={posts} />
    </View>
  );
};

export default PostContainer;
