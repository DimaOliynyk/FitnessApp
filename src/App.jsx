import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom'

import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';

export default class App extends Component{
  render(){
    return(
      <>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/profile/:username" element={<ProfilePage/>} />
        </Routes>
          
  
        <Link to="/login">Login Page</Link>
      </>
    )
  }
}

