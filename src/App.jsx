import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './sections/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import FertilizersPage from './pages/FertilizersPage.jsx';
import SupplyChainPage from './pages/SupplyChainPage.jsx';
import ValueAddPage from './pages/ValueAddPage.jsx';
import LeadershipPage from './pages/LeadershipPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/fertilizers" element={<FertilizersPage />} />
            <Route path="/supply-chain" element={<SupplyChainPage />} />
            <Route path="/value-add" element={<ValueAddPage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
