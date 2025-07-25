// src/App.jsx

import React from 'react';
import Blog from './components/Blog';
import Courses from './components/Courses';
import './index.css'; 

function App() {
  return (
    <div className="App">
      <Courses />
      <Blog /> 
      
      
    </div>
    
  );
}

export default App;