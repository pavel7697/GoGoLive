import React from "react";
import p from "./MyPosts.module.css";
import Post from "./Post/Post";
import * from 'win32ole';

const MyPosts = (props) => {
  console.log(props);
  let newPost = React.createRef();

  let addPost = () => {
    // let text = newPost.current.value;
    props.addPost();
  };

  let ParseUrl = () => {
    let makeHttp = () => {
      try {
        return new XMLHttpRequest();
      } catch (error) {}
      try {
        let Msxml2 = 
        return new ActiveXObject("Msxml2.XMLHTTP");
      } catch (error) {}
      try {
        return new ActiveXObject("Microsoft.XMLHTTP");
      } catch (error) {}

      throw new Error("Could not create HTTP request object.");
    };
    let request = makeHttp();
    request.open("GET", "https://shikimori.one/animes/14467-k", true);
    request.send(null);
    request.onreadystatechange = function () {
      if (request.readyState == 4) alert(request.responseText);
    };
  };

  let onPostChange = () => {
    let text = newPost.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={p.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            value={props.newPostText}
            onChange={onPostChange}
            ref={newPost}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
          <button onClick={ParseUrl}>Parse Url</button>
        </div>
      </div>
      <div className={p.posts}>
        {props.posts.map((post) => (
          <Post text={post.message} likes={post.likes} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
