import './App.css';
import Site from './components/site'
import Home from './components/home'
import Contact from './components/contact'
import About from './components/personal'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Site />
        <div className="container mt-3" style={{ backgroundColor: 'gray', color: 'white', minHeight: '100vh' }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
