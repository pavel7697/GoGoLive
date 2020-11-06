import React from "react";
import p from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post text="learn react!" likes={15} />
      <Post text="Dima #1" likes={7} />
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;
