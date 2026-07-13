import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


// Page imports
import Home from './pages/Home';
import About from './pages/About';
import Museum from './pages/Museum';
import Courses from './pages/Courses';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <div style={styles.appContainer}>
        {/* Responsive Header Navigation */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main style={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/museum" element={<Museum />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />



            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Cultural Heritage Footer */}
        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: 'var(--bg-main)',
  },
  mainContent: {
    flexGrow: 1,
  },
};

export default App;
