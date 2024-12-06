import { APP_ENVS } from "../constants";

const authService = {
  async login(data) {
    try {
      const response = await fetch(
        `${APP_ENVS.EXPO_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      if (response.ok) return result;
      throw result;
    } catch (error) {
      throw error;
    }
  },

  async refreshToken(refreshToken) {
    try {
      const response = await fetch(
        `${appEnvs.EXPO_PUBLIC_API_URL}/auth/refresh/${refreshToken}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();
      if (response.ok) return result;
      throw result;
    } catch (error) {
      throw error;
    }
  },
};

export default authService;
