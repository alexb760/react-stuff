import React from "react";
import Post from "./post/Post";
import useStyles from "./styles";
// now how we can use the action we already dispatch in the Component that is goint to render the data.
// we use selectors.
import { useSelector } from "react-redux";

const Posts = () => {
  const classes = useStyles();
  //Creating a hook:
  // in the state viene the data we named posts in the reducer post
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div>
      <h1>Posts</h1>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
