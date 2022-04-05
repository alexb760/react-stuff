import { combineReducers } from "redux";
import posts from "./posts";

//Since we import ./posts reducer as post
// it culd be writen as posts : posts
// but they has the same name, we can keep as single posts.
export default combineReducers({
  posts,
});
