export const flattenCategories = (categories) => {
  const result = [];

  const traverse = (categoryList) => {
    for (const category of categoryList) {
      let totalCourseCount = category.courseCount || 0;

      if (category.children && category.children.length > 0) {
        const childCourseCount = traverse(category.children);
        totalCourseCount += childCourseCount;
      }

      category.courseCount = totalCourseCount;

      result.push(category);
    }

    return categoryList.reduce((sum, cat) => sum + (cat.courseCount || 0), 0);
  };

  traverse(categories);
  return result;
};

export const flattenCategoriesWithoutSum = (categories) => {
  const result = [];

  const traverse = (categoryList) => {
    for (const category of categoryList) {
      result.push({ ...category, children: null });
      if (category.children && category.children.length > 0) {
        traverse(category.children);
      }
    }
  };

  traverse(categories);
  return result;
};

export const sumCourseCountInTree = (categories) => {
  const traverse = (categoryList) => {
    let totalCourses = 0;

    for (const category of categoryList) {
      let courseCount = category.courseCount || 0;

      if (category.children && category.children.length > 0) {
        courseCount += traverse(category.children);
      }

      category.courseCount = courseCount;

      totalCourses += courseCount;
    }

    return totalCourses;
  };

  traverse(categories);
  return categories;
};

export const getMaxDepth = (categories) => {
  if (!categories || categories.length === 0) return 0;

  let maxDepth = 0;

  for (const category of categories) {
    const depth = getMaxDepth(category.children || []);
    maxDepth = Math.max(maxDepth, depth);
  }

  return maxDepth + 1;
};

export const getRootCategories = (categories) => {
  return categories.map((category) => ({ ...category, children: null }));
};
