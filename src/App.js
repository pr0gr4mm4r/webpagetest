import './App.css';
import Navigationbar from './components/navigationbar';
import backgroundImageUrl from './components/board-453758_1920.jpg';
import './i18n';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/footer';
import Home from './components/home';
import Contact from './components/contact';
import About from './components/personal';
import Imprint from './components/imprint';
import ScrollToTop from './components/ScrollToTop';  // Import ScrollToTop
import DataProtection from './components/dataprotection';

function App() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop /> {/* Ensure the page scrolls to top on navigation */}
      <div style={{ overflowY: 'hidden', minHeight: '100vh', position: 'relative' }}>
        <Navigationbar />
        <div style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'repeat',
          width: 'auto',
          height: '170vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '1em',
          boxSizing: 'border-box'
        }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/data-protection" element={<DataProtection />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>

        {<Footer />}
      </div>
    </Router>
  );
}

export default App;
