import './App.css';
import Category from './forumpages/category';
import Topic from './forumpages/topic';
import Header from './Header';
import Forum from './Forum';
import Login from './Login';
import Register from './Register';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Routes,
  Route,
  BrowserRouter,
  NavLink,
  Link, 
  Outlet
} from "react-router-dom";
import useToken from './useToken';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  
  const { token, setToken } = useToken();

  return (
    <div className="Red">
      <Header/>
      {
      !token
        ?
        <Routes>
          <Route path="login" element={<Login setToken={setToken}/>} />
          <Route path="register" element={<Register />} />
          <Route path="forum" element={<Forum />} >
            <Route index element={<Category />} />
            <Route path="category" element={<Category/>} />
            <Route path="topic" element={<Topic/>} />
          </Route>
        </Routes>
        :
        <Routes>
          <Route path="forum" element={<Forum />}/>
        </Routes>
      }
    </div>
  );
}

export default App;
