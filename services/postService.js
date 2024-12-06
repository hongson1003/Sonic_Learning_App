import { APP_ENVS } from "../constants";

const postService = {
  getTopPosts: async () => {
    const url = `${APP_ENVS.EXPO_PUBLIC_API_URL}/posts/top-posts`;
    const response = await fetch(url);

    if (response.ok) {
      return response.json();
    }

    throw await response.json();
  },

  getPostSlug: async (slug) => {
    const url = `${APP_ENVS.EXPO_PUBLIC_API_URL}/posts/${slug}`;
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    }

    throw await response.json();
  },
};

export default postService;
