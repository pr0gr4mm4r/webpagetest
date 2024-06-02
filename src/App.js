import './App.css';
import Navigationbar from './components/navigationbar'
import Home from './components/home'
import Contact from './components/contact'
import About from './components/personal'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import backgroundImageUrl from './components/board-453758_1920.jpg';


function App() {
  return (
    <Router>
      <div style={{ overflowY: 'hidden' }}>
        <Navigationbar />
        <div style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'repeat',
          width: 'auto',
          height: '170vh',
          overflowY: 'hidden',
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
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
