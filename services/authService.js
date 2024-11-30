import { appEnvs } from "../constants";

const authService = {
  async login(data, locale = "en") {
    try {
      const response = await fetch(
        `${appEnvs.EXPO_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept-Language": locale,
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

  async refreshToken(refreshToken, locale = "en") {
    try {
      const response = await fetch(
        `${appEnvs.EXPO_PUBLIC_API_URL}/auth/refresh/${refreshToken}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept-Language": locale,
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
