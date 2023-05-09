import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FriendsBar from './components/Friends/FriendsBar';
import DialogsContainer from './components/Dialogs/Dialogs-container';
import UsersContainer from './components/Users/Users-container';




const App = (props) => {
  
  return (
  <BrowserRouter>
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
        <div className='app-wrapper-content'>
        <Routes>
            
            <Route path="/profile" element={<Profile 
            store={props.store}
            />} />
            
            <Route path="/dialogs/*" element={<DialogsContainer 
            store={props.store}/>} />
            
            <Route path="/users" element={<UsersContainer
            store={props.store}/>} />

            <Route path="/News" element={<News/>} />
            
            <Route path="/Music" element={<Music/>} />
            
            <Route path="/Settings" element={<Settings/>} />
            
            <Route path="/Friends" element={<Friends  state={props.state.sitebar}/>} />
            
            <Route path="/FriendsBar" element={<FriendsBar state={props.state.sitebar} />} />
            
        </Routes>
          
    </div>
      </div>
  </BrowserRouter >
    );
}






export default App;
