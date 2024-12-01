import { APP_ENVS } from "../constants";

const categoryService = {
  async getParentCategories(lang) {
    const url = `${APP_ENVS.EXPO_PUBLIC_API_URL}/categories`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": lang,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw await response.json();
  },
  async getCategoriesHasCourse(lang) {
    const url = `${APP_ENVS.EXPO_PUBLIC_API_URL}/categories/has-course`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": lang,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw await response.json();
  },
  async getCategoryBySlug(slug, lang) {
    const url = `${APP_ENVS.EXPO_PUBLIC_API_URL}/categories/${slug}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": lang,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw await response.json();
  },
};

export default categoryService;
