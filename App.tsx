import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '.Navbar/Navbar';
import Posts from './Posts/Posts';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
