import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import Dashboard from './Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
