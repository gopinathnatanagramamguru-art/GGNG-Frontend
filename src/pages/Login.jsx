import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, ShieldCheck } from 'lucide-react';
import api from '../api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  // If already logged in, redirect to admin page
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!username || !password) {
      setError('Please fill in both fields.');
      setLoading(false);
      return;
    }

    try {
      const data = await api.login(username, password);
      localStorage.setItem('adminToken', data.token);
      localStorage.setItem('adminUser', JSON.stringify({ id: data._id, username: data.username }));
      navigate('/admin');
    } catch (err) {
      console.error(err);
      setError(err.message || 'Invalid username or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page} className="animate-fade-up">
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.iconContainer}>
            <ShieldCheck size={32} color="var(--primary-color)" />
          </div>
          <span style={styles.govTag}>Govt. of Kerala Undertaking</span>
          <h2 style={styles.title}>Admin Portal Login</h2>
          <p style={styles.subtitle}>Sign in to manage museum exhibits, course details, events, and student inquiries.</p>
        </div>

        {error && (
          <div style={styles.errorAlert}>
            ⚠ {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <div style={styles.inputWrapper}>
              <User size={18} style={styles.inputIcon} />
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                placeholder="Enter admin username"
                style={{ paddingLeft: '2.5rem' }}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div style={styles.inputWrapper}>
              <Lock size={18} style={styles.inputIcon} />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter password"
                style={{ paddingLeft: '2.5rem' }}
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading} 
            className="btn btn-primary" 
            style={{ width: '100%', marginTop: '1rem', padding: '0.85rem' }}
          >
            {loading ? 'Authenticating...' : 'Secure Sign In'}
          </button>
        </form>

        <div style={styles.footerNote}>
          <p>For official administrative use only.</p>
          <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', color: '#B8860B' }}>
            Note: Default setup credentials are configured in seed data.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--bg-alt)',
    padding: '2rem 1rem',
  },
  card: {
    backgroundColor: 'var(--bg-card)',
    maxWidth: '420px',
    width: '100%',
    padding: '2.5rem 2rem',
    borderRadius: 'var(--radius-md)',
    boxShadow: 'var(--shadow-lg)',
    border: '1px solid var(--border-color)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  iconContainer: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: 'var(--bg-alt)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem auto',
    border: '2px solid var(--accent-color)',
  },
  govTag: {
    fontSize: '0.7rem',
    color: 'var(--accent-dark)',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    fontWeight: '700',
    display: 'block',
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: '1.6rem',
    color: 'var(--primary-dark)',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: 'var(--text-light)',
    fontSize: '0.85rem',
    lineHeight: '1.4',
  },
  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  inputIcon: {
    position: 'absolute',
    left: '0.85rem',
    color: 'var(--primary-color)',
    pointerEvents: 'none',
  },
  errorAlert: {
    backgroundColor: '#ffe3e3',
    color: '#c92a2a',
    padding: '0.75rem 1rem',
    borderRadius: 'var(--radius-sm)',
    fontSize: '0.85rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    border: '1px solid #ffc9c9',
  },
  footerNote: {
    textAlign: 'center',
    marginTop: '2rem',
    fontSize: '0.8rem',
    color: 'var(--text-light)',
    borderTop: '1px solid var(--border-color)',
    paddingTop: '1rem',
  },
};

export default Login;
