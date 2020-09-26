import React from "react";

const CourseForm = ({ handleInput, inputSearch, filteredCourses }) => {
  return (
    <form className="search__form">
      {/* ---- search bar ---- */}
      <input
        type="text"
        placeholder="Search for courses"
        name="inputSearch"
        onChange={handleInput}
        value={inputSearch}
        className={
          filteredCourses.length
            ? "search__input item-found"
            : "search__input no-item-found"
        }
      />

      {/* ---- filters ---- */}
      <select className="sort__input" name="sortTerm" onChange={handleInput}>
        <option>Filter by</option>
        <option value="title">Name</option>
        <option value="price">Price</option>
        <option value="students">Students</option>
      </select>

      <select className="order__input" name="sortOrder" onChange={handleInput}>
        <option value="asc">asc</option>
        <option value="desc">desc</option>
      </select>
    </form>
  );
};

export default CourseForm;
