import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/auth/LoginForm';
import Navbar from './components/navbar/Navbar';

import User from './routers/user.router';
import Upload from './routers/upload.router';
import Home from './components/Home';


function App() {
  return (
    
      <Router>
         <Routes>
            {/* <Route path="/login" element={<Login/>} /> */}
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/user" element={<User />}/>
            <Route path="/upload" element={<Upload/>}/>
         </Routes>
      </Router>
      
  );
}

export default App;
