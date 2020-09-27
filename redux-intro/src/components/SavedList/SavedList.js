import React from "react";
import { connect } from "react-redux";

const SavedList = ({ saved }) => {
  console.log(saved);
  return <div>Saved</div>;
};

// ---- connect component with redux ----
const getSavedFromStore = (state) => {
  return {
    saved: state.savedList.saved,
  };
};
export default connect(getSavedFromStore)(SavedList);
