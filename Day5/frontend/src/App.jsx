import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import View from './components/View';
import Update from './components/Update';
import Delete from './components/Delete';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <h1 style={{ backgroundColor: 'greenyellow' }}>User Registration System</h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={
          <>
            <Register />
            <Update />
            <Delete />
            <View />
          </>
        } />
      </Routes>
    </Router>
  );
};

export default App;
