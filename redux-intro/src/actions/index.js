export const searchCourses = (inputSearch) => {
  return {
    type: "SEARCH_COURSES",
    payload: inputSearch,
  };
};
