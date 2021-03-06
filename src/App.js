import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  console.log(props);

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar friends={props.data.friendsPage} />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => <Dialogs data={props.data.MessagePage} />}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                dialogsPage={props.data.dialogsPage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />
            )}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
