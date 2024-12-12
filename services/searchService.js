const { APP_ENVS } = require("../constants");

const keywordService = {
  async search(
    keyword,
    userPage = 0,
    userSize = 10,
    coursePage = 0,
    courseSize = 10,
    postPage = 0,
    postSize = 10,
    locale = "vi"
  ) {
    const url = new URL(`${APP_ENVS.EXPO_PUBLIC_API_URL}/keywords/search`);
    url.searchParams.append("input", keyword);
    url.searchParams.append("userPage", userPage.toString());
    url.searchParams.append("userSize", userSize.toString());
    url.searchParams.append("coursePage", coursePage.toString());
    url.searchParams.append("courseSize", courseSize.toString());
    url.searchParams.append("postPage", postPage.toString());
    url.searchParams.append("postSize", postSize.toString());

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Accept-Language": locale,
      },
    });

    const data = await response.json();
    if (response.ok) {
      return data;
    }
    throw data;
  },
};

export default keywordService;
