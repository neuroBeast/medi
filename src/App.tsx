import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import SplashScreen from './components/UI/SplashScreen';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Admin from './pages/Admin';
import Contact from './pages/Contact';
import Compliance from './pages/Compliance';

// Placeholder components for remaining pages
const Clients = () => (
  <div className="min-h-screen flex items-center justify-center bg-light-gray">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Clients & Partners</h1>
      <p className="text-xl text-gray-600">Coming Soon - Showcase of our valued clients and testimonials</p>
    </div>
  </div>
);

const FAQ = () => (
  <div className="min-h-screen flex items-center justify-center bg-light-gray">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
      <p className="text-xl text-gray-600">Coming Soon - Common questions about our services and processes</p>
    </div>
  </div>
);

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;