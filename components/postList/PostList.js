import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { PostItem } from "../postItem";

const PostList = ({ data }) => {
  const renderItem = ({ item }) => {
    return <PostItem data={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data} // Dữ liệu bài viết sẽ được truyền qua đây
        keyExtractor={(item) => item.id.toString()} // Cung cấp key duy nhất cho mỗi item
        renderItem={renderItem} // Hàm để render từng item
        numColumns={2} // Đặt số cột là 2 để hiển thị 2 item trên mỗi hàng
        columnWrapperStyle={styles.columnWrapper} // Để tạo khoảng cách giữa các cột
        showsVerticalScrollIndicator={false} // Ẩn thanh cuộn dọc
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 10,
  },
});

export default PostList;
