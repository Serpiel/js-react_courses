import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../../styles/App.css';
import Navbar from './Navbar';
import Home from '../../pages/Home';
import Contact from '../../pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        {/* Le moteur de rendu change de composant selon l'URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;