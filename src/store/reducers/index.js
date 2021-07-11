import { combineReducers } from "redux";

import UserReducer from "./UserReducer";
import postReducer from "./PostReducer";

const rootReducer = combineReducers({
  users: UserReducer,
  posts: postReducer,
});

export default rootReducer;
