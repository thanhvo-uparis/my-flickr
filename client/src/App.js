import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import User from './routers/user.router';
import Upload from './routers/upload.router';

import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar/>
        <Login/>
         <Routes>
            <Route path="/users" element={<User/>}/>
            <Route path="/upload" element={<Upload/>}/>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
