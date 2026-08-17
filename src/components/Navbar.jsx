import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Landmark, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/login');
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Dance Museum', path: '/museum' },
    { name: 'Our Programs', path: '/programs' },
    { name: 'Projects', path: '/projects' },
    { name: 'Courses', path: '/courses' },
    { name: 'Awards & Recognition', path: '/awards' },
    { name: 'Events & News', path: '/events' },
    { name: 'RTI', path: '/rti' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav style={styles.nav}>
      <div className="container" style={styles.container}>
        <Link to="/" style={styles.brandContainer} onClick={() => setIsOpen(false)}>
          <div className="navbar-logo logo-hover brand-logo-first" style={{ overflow: 'hidden', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <img src="/guru_logo.png" alt="Guru Gopinath" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="navbar-logo logo-hover" style={{ overflow: 'hidden', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <img src="/logo.png" alt="Guru Gopinath Natanagramam Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="navbar-title-container">
            <span className="govt-tag">Govt. of Kerala Authority</span>
            <span className="navbar-title">Guru Gopinath Natanagramam</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={styles.desktopMenu}>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              style={({ isActive }) => ({
                ...styles.link,
                color: isActive ? 'var(--accent-color)' : 'var(--text-white)',
                borderBottom: isActive ? '2px solid var(--accent-color)' : '2px solid transparent',
              })}
            >
              {item.name}
            </NavLink>
          ))}

        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-btn" style={styles.mobileBtn} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} color="var(--text-white)" /> : <Menu size={24} color="var(--text-white)" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div style={styles.mobileMenu}>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              style={({ isActive }) => ({
                ...styles.mobileLink,
                color: isActive ? 'var(--accent-color)' : 'var(--text-white)',
                backgroundColor: isActive ? 'rgba(255,255,255,0.05)' : 'transparent',
              })}
            >
              {item.name}
            </NavLink>
          ))}

        </div>
      )}
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: 'var(--primary-color)',
    borderBottom: '3px solid var(--accent-color)',
    position: 'relative',
    zIndex: 1000,
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.75rem 1rem',
    width: '96%',
    maxWidth: '1400px',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  desktopMenu: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  link: {
    padding: '0.5rem 0',
    fontSize: '0.95rem',
    fontWeight: '500',
    transition: 'var(--transition-fast)',
  },
  adminLoginLink: {
    fontSize: '0.85rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: 'var(--accent-light)',
    padding: '0.4rem 0.8rem',
    borderRadius: '4px',
    border: '1px solid rgba(212,175,55,0.3)',
  },
  logoutBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--accent-light)',
    cursor: 'pointer',
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
    transition: 'opacity 0.2s',
  },
  mobileBtn: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  mobileMenu: {
    backgroundColor: 'var(--primary-dark)',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 0',
    borderBottom: '2px solid var(--accent-color)',
  },
  mobileLink: {
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    fontWeight: '500',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
  },
  mobileLogoutBtn: {
    margin: '0.75rem 2rem',
    padding: '0.75rem 1rem',
    backgroundColor: 'var(--primary-light)',
    color: 'var(--text-white)',
    border: 'none',
    borderRadius: 'var(--radius-sm)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    fontWeight: '600',
  },
  // Responsive overrides are handled by media query styling or dynamic display
};

// Simple media query for responsive nav button displays
const injectMediaStyles = () => {
  if (typeof document !== 'undefined') {
    const styleId = 'navbar-media-queries';
    if (!document.getElementById(styleId)) {
      const styleSheet = document.createElement('style');
      styleSheet.id = styleId;
      styleSheet.innerText = `
        @media (max-width: 900px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-btn {
            display: block !important;
          }
        }
        @media (max-width: 600px) {
          .navbar-title {
            font-size: 0.9rem !important;
          }
          .govt-tag {
            font-size: 0.65rem !important;
            letter-spacing: 0.5px !important;
          }
          /* Hide the first logo to save space on mobile */
          .brand-logo-first {
            display: none !important;
          }
          /* Make logo smaller on mobile */
          .navbar-logo {
            width: 36px !important;
            height: 36px !important;
          }
        }
      `;
      document.head.appendChild(styleSheet);
    }
  }
};
injectMediaStyles();

export default Navbar;
