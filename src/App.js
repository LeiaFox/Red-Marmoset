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

function App() {
  const [token, setToken] = useState();

  return (
    <div className="Red">
      <Header/>
      {!token
        ?<Login setToken={setToken} /> 
        :<Routes>
          <Route path="/forum" element={<Forum />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      }
    </div>
  );
}

export default App;
