export const searchCourses = (inputSearch) => {
  return {
    type: "SEARCH_COURSES",
    payload: inputSearch,
  };
};

export const addSavedItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const removeSavedItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: id,
  };
};
