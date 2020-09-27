import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import CourseList from "./components/CourseList/CourseList";
import Navbar from "./components/Navbar/Navbar";
import SavedList from "./components/SavedList/SavedList";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/home" component={CourseList} />
        <Route path="/saved" component={SavedList} />
        <Redirect from="/" to="/home" />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
export default App;
