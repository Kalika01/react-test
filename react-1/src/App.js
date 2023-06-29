import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/Dialogs-container";
import UsersContainer from "./components/Users/Users-container";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer store={props.store}  />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile"
              element={<ProfileContainer store={props.store} />}
            />

            <Route
              path="/dialogs/*"
              element={<DialogsContainer store={props.store} />}
            />

            <Route
              path="/users"
              element={<UsersContainer store={props.store} />}
            />

            <Route path="/News" element={<News />} />

            <Route path="/Music" element={<Music />} />

            <Route path="/Settings" element={<Settings />} />

            <Route
              path="/Friends"
              element={<Friends store={props.store} />}
            />

            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
