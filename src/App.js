import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import MainNavigation from "./shared/components/navigation/main-navigation/MainNavigation";
import Posts from "./posts/views/posts/Posts";
import Users from "./users/views/users/Users";
import PostDetails from "./posts/components/post-details/PostDetails.js";
import UserDetails from "./users/components/user-details/UserDetails";

import "./App.scss";

function App() {
  return (
    <Router>
      <header>
        <MainNavigation />
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Posts />
          </Route>

          <Route path="/post/:postId" exact>
            <PostDetails />
          </Route>

          <Route path="/users" exact>
            <Users />
          </Route>

          <Route path="/user/:userId" exact>
            <UserDetails />
          </Route>

          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
