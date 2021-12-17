import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Login from './components/auth/Login';
import Landing from './components/layout/Landing';

import User from './routers/user.router';
import Upload from './routers/upload.router';


function App() {
  return (
    <div className="app-container">
      <Router>
         <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/users" element={<User/>} />
            <Route path="/upload" element={<Upload/>} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
