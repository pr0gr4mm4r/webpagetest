import './App.css';
import Site from './components/site'
import Home from './components/home'
import Contact from './components/contact'
import About from './components/personal'
import { BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Site />
        <div style={{ backgroundColor: 'gray', color: 'white', minHeight: '100vh' }}>
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
