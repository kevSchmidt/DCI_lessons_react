import React from "react";
import { connect } from "react-redux";

import { removeSavedItem } from "../../actions/index";

import "./SavedItem.css";

const SavedItem = ({ savedItem, removeSavedItem }) => {
  return (
    <div className="saved__item">
      {/* ---- image ---- */}
      <div className="saved__img--container">
        <img
          src={savedItem.courseImage}
          alt={savedItem.title}
          className="saved__img"
        />
      </div>

      {/* ---- information ---- */}
      <h3 className="saved__title">{savedItem.title}</h3>
      <p className="saved__author">{savedItem.author}</p>

      <div className="saved__price">
        <span className="saved__number">{savedItem.price}</span>
        <span>$</span>
      </div>

      <span className={savedItem.isHot ? "saved__status" : ""}>
        {savedItem.isHot ? "Hot" : ""}
      </span>

      <span
        className="remove__item"
        onClick={() => removeSavedItem(savedItem.id)}
      >
        Remove
      </span>
    </div>
  );
};

// ---- connect component with redux ----
export default connect(null, { removeSavedItem })(SavedItem);
