import { APP_ENVS } from "../constants";

const bannerService = {
  getBanners: async () => {
    const response = await fetch(`${APP_ENVS.EXPO_PUBLIC_API_URL}/banners`, {
      method: "GET",
    });

    if (response.ok) return await response.json();

    throw await response.json();
  },
};

export default bannerService;
