import { Ionicons } from "@expo/vector-icons"; // Để sử dụng biểu tượng ghim
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment"; // Cài đặt moment.js để xử lý thời gian
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { APP_KEYS } from "../../../constants";
import pinnedPostService from "../../../services/pinService";
import { getImage } from "../../../utils";

const ViewPostHeader = ({
  authorName,
  authorAvatar,
  postId,
  createdAt,
  onGoBack,
}) => {
  const [isPinned, setIsPinned] = useState(false);

  const fetchCheckPinned = async () => {
    try {
      const token = await AsyncStorage.getItem(APP_KEYS.ACCESS_TOKEN);
      const res = await pinnedPostService.checkIfPostPinned(postId, token);
      setIsPinned(res);
    } catch (error) {
      console.log("🚀 ~ fetchCheckPinned ~ error:", error);
    }
  };

  useEffect(() => {
    fetchCheckPinned();
  }, []);

  const handleOnClickPin = async () => {
    try {
      const token = await AsyncStorage.getItem(APP_KEYS.ACCESS_TOKEN);
      if (isPinned) {
        await pinnedPostService.unpinPost(postId, token);
      } else {
        await pinnedPostService.pinPost(postId, token);
      }
      setIsPinned(!isPinned);
    } catch (error) {
      console.error(error);
    }
  };

  // Hàm chuyển đổi thời gian đăng bài sang định dạng đẹp
  const formattedDate = moment(createdAt).fromNow(); // Ví dụ: "3 hours ago", "1 day ago"

  return (
    <View style={styles.ViewPostHeader}>
      <TouchableOpacity style={styles.goBackButton} onPress={onGoBack}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Hiển thị thời gian đăng bài */}
      <Text style={styles.timePosted}>{formattedDate}</Text>

      {/* Avatar và tên tác giả */}
      <View style={styles.authorInfo}>
        <Image
          style={styles.avatar}
          source={{ uri: getImage(authorAvatar) }} // Sử dụng URL của avatar
        />
        <Text style={styles.authorName}>{authorName}</Text>
      </View>

      {/* Nút ghim bài viết */}
      <TouchableOpacity style={styles.pinButton} onPress={handleOnClickPin}>
        <Ionicons
          name={isPinned ? "pin" : "pin-outline"} // Biểu tượng ghim và chưa ghim
          size={24}
          color={isPinned ? "gold" : "black"} // Chỉnh màu sắc tùy vào trạng thái ghim
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  goBackButton: {
    padding: 8,
  },
  ViewPostHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  timePosted: {
    fontSize: 12,
    color: "#888",
  },
  authorInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  authorName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  pinButton: {
    padding: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
});

export default ViewPostHeader;
