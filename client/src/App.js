import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './components/auth/LoginForm';
import AuthContextProvider from './contexts/AuthContext';
import Navbar from './components/navbar/Navbar';
// import Landing from './components/layout/Landing';

import User from './routers/user.router';
import Upload from './routers/upload.router';


function App() {
  return (
    <AuthContextProvider>
      <Router>
         <Routes>
            <Route path="/" element={<Login/>} />
            {/* <Route path="/" element={<Landing/>} /> */}
            {/* <Route path="/users" element={<User/>} />
            <Route path="/upload" element={<Upload/>} /> */}
         </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
