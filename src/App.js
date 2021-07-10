import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./App.css";
import MainNavigation from "./shared/components/navigation/main-navigation/MainNavigation";
import Posts from "./posts/views/posts/Posts";
import Users from "./users/views/users/Users";

function App() {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Posts />
        </Route>

        <Route to="/user/:userId">
          <Users />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
