import './App.css';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import AssetsPage from './AssetsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/assets" element={<AssetsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
