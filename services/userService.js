import { APP_ENVS } from "../constants";

const userService = {
  getUserBySlug: async (slug) => {
    const response = await fetch(
      `${APP_ENVS.EXPO_PUBLIC_API_URL}/users/${slug}`
    );
    if (response.ok) {
      return await response.json();
    }
    throw await response.json();
  },
  uploadAvatar: async (file, accessToken) => {
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch(
      `${APP_ENVS.EXPO_PUBLIC_API_URL}/users/upload-avatar`,
      {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (response.ok) {
      return response.json();
    }
    throw await response.json();
  },
  updateProfile: async (username, data, accessToken) => {
    const response = await fetch(
      `${APP_ENVS.EXPO_PUBLIC_API_URL}/users/${username}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      }
    );
    if (response.ok) {
      return response.json();
    }
    throw await response.json();
  },
  updateActive: async (id, active, accessToken) => {
    const response = await fetch(
      `${APP_ENVS.EXPO_PUBLIC_API_URL}/users/${id}/active`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ active }),
      }
    );
    if (response.ok) {
      return response.json();
    }
    throw await response.json();
  },
  getMe: async (accessToken) => {
    const response = await fetch(`${APP_ENVS.EXPO_PUBLIC_API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const result = await response.json();
    if (response.ok) {
      return result;
    }
    throw result;
  },
};

export default userService;
