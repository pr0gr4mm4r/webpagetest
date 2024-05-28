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
      <div style={{ overflowY: 'auto' }}>
        <Navigationbar />
        <div style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '170vh',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '2em',
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
