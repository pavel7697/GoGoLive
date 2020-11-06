import React from "react";
import p from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://images.theconversation.com/files/307544/original/file-20191217-58292-121izfm.jpg?ixlib=rb-1.1.0&rect=0%2C412%2C4052%2C2026&q=45&auto=format&w=1356&h=668&fit=crop"
          alt="background-img"
        />
      </div>
      <div className={p.item}>ava + descr</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
