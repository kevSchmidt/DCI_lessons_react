import React, { useState } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";

import Recipe from "./components/Recipe";
import Alert from "./components/Alert";

import "./App.css";

const { API_ID, API_KEY } = require("./config");

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;

  //  ======== GET DATA FROM API ===
  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);

      if (!result.data.more) {
        return setAlert("No food with such name");
      }

      setRecipes(result.data.hits);
      setAlert("");
      setQuery("");
    } else {
      setAlert("Please fill the form");
    }
  };

  // ======== ON CHANGE ===
  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  // ======== ON SUBMIT ===
  const submitHandler = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App">
      {/* ---- Title ---- */}
      <h1 onClick={getData}>Food Recipe</h1>

      {/* ---- Search Form ---- */}
      <form className="search-form" onSubmit={submitHandler}>
        {alert !== "" && <Alert alert={alert} />}
        <input
          type="text"
          placeholder="Search Food"
          autoComplete="off"
          onChange={changeHandler}
          value={query}
        />
        <input type="submit" value="search" />
      </form>

      {/* ---- Recipes ---- */}
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  );
};

export default App;
