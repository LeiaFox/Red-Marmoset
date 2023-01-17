import './App.css';
import Header from './Header';
import Forum from './Forum';
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
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
