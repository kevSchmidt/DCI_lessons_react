import React from "react";
import { connect } from "react-redux";

import SavedItem from "../SavedItem/SavedItem";

import "./SavedList.css";

const SavedList = ({ saved }) => {
  console.log(saved);
  return (
    <div>
      {saved.length === 0 ? (
        <div>no item have been saved yet!</div>
      ) : (
        <div className="saved__items">
          {saved.map((savedItem) => (
            <SavedItem key={savedItem.id} savedItem={savedItem} />
          ))}
        </div>
      )}
    </div>
  );
};

// ---- connect component with redux ----
const getSavedFromStore = (state) => {
  return {
    saved: state.savedList.saved,
  };
};

export default connect(getSavedFromStore)(SavedList);
