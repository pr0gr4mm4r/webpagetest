import './App.css';
import Site from './components/site'
import Leistungen from './components/leistungen.js'
import Pricing from './components/pricing.js'
import Personal from './components/personal.js'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Site />
        <div className="container mt-3" style={{ backgroundColor: 'gray', color: 'white', minHeight: '100vh', marginTop: '100px', marginLeft: '100px', marginRight: '20px' }}>
          <Routes>
            <Route path="/leistungen" element={<Leistungen />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/personal" element={<Personal />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
