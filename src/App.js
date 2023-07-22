import React from 'react';
import './App.css';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/resume' element={<Resume/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
