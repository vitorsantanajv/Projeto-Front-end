// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Metodologia from './Metodologia';
import Graficos from './Graficos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Metodologia" element={<Metodologia />} />
        <Route path="/Graficos" element={<Graficos />} />
      </Routes>
    </Router>
  );
}

export default App;
