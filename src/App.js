import './App.css';
import Header from './Header';
import Forum from './Forum';
import Login from './Login';
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Routes,
  Route,
  BrowserRouter,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <div className="Red">
      <BrowserRouter>

        <Header/>

        <Routes>
          
          <Route path="/forum" element={<Forum />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
