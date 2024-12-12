import { APP_ENVS } from "../constants";

const pinnedPostService = {
  // Ghim một bài viết
  pinPost: async (postId, accessToken) => {
    const url = `${APP_ENVS.EXPO_PUBLIC_API_URL}/pinned-posts/pin?postId=${postId}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return response.json();
    }
    throw await response.json();
  },

  // Hủy ghim một bài viết
  unpinPost: async (postId, accessToken) => {
    const url = `${APP_ENVS.EXPO_PUBLIC_API_URL}/pinned-posts/unpin?postId=${postId}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return response.json();
    }
    throw await response.json();
  },

  // Lấy danh sách các bài viết đã ghim của người dùng (với phân trang)
  getPinnedPosts: async (options, accessToken) => {
    const url = `${
      APP_ENVS.EXPO_PUBLIC_API_URL
    }/pinned-posts/user/me?${new URLSearchParams(options).toString()}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.ok) {
      return response.json();
    }
    throw await response.json();
  },

  // Kiểm tra xem bài viết đã được ghim hay chưa
  checkIfPostPinned: async (postId, accessToken) => {
    const url = `${APP_ENVS.EXPO_PUBLIC_API_URL}/pinned-posts/check/${postId}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.ok) {
      return response.json(); // Trả về true/false tùy thuộc vào trạng thái ghim
    }

    throw await response.json(); // Ném lỗi nếu có
  },
};

export default pinnedPostService;
