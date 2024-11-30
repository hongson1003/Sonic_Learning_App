import { APP_ENVS } from "../constants";

const linkServiceService = {
  getAll: async () => {
    const res = await fetch(`${APP_ENVS.EXPO_PUBLIC_API_URL}/link-services`);
    const data = await res.json();
    if (!res.ok) {
      throw data;
    }
    return data;
  },
};

export default linkServiceService;
