import './App.css';
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
          <Route path="/login" element={<Login setToken={setToken}/>}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/forum" element={<Forum />}>
            <Route path="" />
          </Route>
        </Routes>
        :
        <Routes>
          <Route path="/forum" element={<Forum />}/>
        </Routes>
      }
    </div>
  );
}

export default App;
