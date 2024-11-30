import { APP_ENVS, APP_QUERIES } from "../constants";

const courseService = {
  async getCourses(params, lang) {
    const query = new URLSearchParams();
    if (Array.isArray(params.category)) {
      params.category.forEach((category) => {
        query.append(APP_QUERIES.CATEGORY, category);
      });
    }

    if (Array.isArray(params.price)) {
      params.price.forEach((price) => {
        query.append(APP_QUERIES.PRICE, price);
      });
    }

    delete params.category;
    delete params.price;

    Object.keys(params).forEach((key) => {
      if (params[key]) {
        query.append(key, params[key]);
      }
    });

    const url = `${APP_ENVS.EXPO_PUBLIC_API_URL}/courses?${query.toString()}`;
    const response = await fetch(url, {
      headers: {
        "Accept-Language": lang,
      },
    });
    if (response.ok) return await response.json();
    throw await response.json();
  },

  async getCourseBySlug(slug, locale) {
    const url = `${APP_ENVS.EXPO_PUBLIC_API_URL}/courses/${slug}`;
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": locale,
      },
    });
    if (response.ok) return await response.json();
    throw await response.json();
  },

  async getTopHighViewCategoryCourses(locale) {
    const url = `${APP_ENVS.EXPO_PUBLIC_API_URL}/courses/top-categories`;
    const response = await fetch(url, {
      headers: {
        "Accept-Language": locale,
      },
    });
    if (response.ok) return await response.json();
    throw await response.json();
  },
};

export default courseService;
