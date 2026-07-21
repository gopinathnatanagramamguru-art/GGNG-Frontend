import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Landmark } from 'lucide-react';
import api from '../api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    courseInterest: '', // empty for general queries
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(false);
    setError(null);

    // Simple fields check
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      setError('Please fill out all fields marked with *');
      setSubmitting(false);
      return;
    }

    try {
      await api.submitInquiry(formData);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        courseInterest: '',
      });
    } catch (err) {
      console.error(err);
      setError('Failed to send contact inquiry. Please check your network and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={styles.page} className="animate-fade-up">
      {/* Header Banner */}
      <section className="banner-section" style={styles.banner}>
        <div className="container" style={styles.bannerContainer}>
          <span style={styles.govtLabel}>Get in Touch</span>
          <h1 className="banner-title" style={styles.bannerTitle}>Contact Us & Visit</h1>
          <p style={styles.bannerSubtitle}>
            Reach out to our registrar office for course details, museum guided tour permissions, or general feedback.
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="container grid-container" style={styles.gridContainer}>

          {/* Left Column: Details & Map */}
          <div style={styles.detailsCol}>
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>Office Location</h3>

              <ul style={styles.infoList}>
                <li style={styles.infoItem}>
                  <MapPin size={22} color="var(--primary-color)" style={{ shrink: 0 }} />
                  <div>
                    <strong style={styles.infoLabel}>Address</strong>
                    <span style={styles.infoText}>Guruji Road, Vattiyoorkavu, Kuruvikkadu, Thiruvananthapuram, Kerala 695013</span>
                  </div>
                </li>

                <li style={styles.infoItem}>
                  <Phone size={22} color="var(--primary-color)" />
                  <div>
                    <strong style={styles.infoLabel}>Phone / Landline</strong>
                    <span style={styles.infoText}>04712364771</span>
                  </div>
                </li>

                <li style={styles.infoItem}>
                  <Mail size={22} color="var(--primary-color)" />
                  <div>
                    <strong style={styles.infoLabel}>Email</strong>
                    <span style={styles.infoText}>info@gurugopinathnatanagramam.in</span>
                  </div>
                </li>

                <li style={styles.infoItem}>
                  <Clock size={22} color="var(--primary-color)" />
                  <div>
                    <strong style={styles.infoLabel}>Working Hours</strong>
                    <span style={styles.infoText}>Tuesday - Sunday: 9:30 AM to 5:30 PM (Mondays Closed)</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Styled Map Placeholder */}
            <div style={styles.mapContainer}>
              <div style={styles.mapBanner}>
                <Landmark size={24} color="var(--accent-color)" />
                <span style={styles.mapTitle}>Location</span>
              </div>
              <div style={styles.mapBody}>
                <p style={styles.mapText}><strong>Guru Gopinath Natanagramam Campus</strong></p>
                <p style={styles.mapSubtext}>Guruji Road, Vattiyoorkavu (approx. 8 km from Thiruvananthapuram Central Railway Station).</p>
                <a
                  href="https://maps.google.com/?q=Guru+Gopinath+Natanagramam+Vattiyoorkavu"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.mapBtn}
                >
                  View on Google Maps ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div style={styles.formCard}>
            <h3 style={styles.formTitle}>Send a Message</h3>
            <p style={styles.formSubtitle}>Submit your query below, and we will get back to you within 2 working days.</p>

            {success && (
              <div style={styles.successAlert}>
                ✓ Your message has been sent successfully. Thank you!
              </div>
            )}

            {error && (
              <div style={styles.errorAlert}>
                ⚠ {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter 10-digit number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Subject of inquiry"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Type your message details here..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                {submitting ? 'Sending...' : 'Send Message'} <Send size={16} style={{ marginLeft: '8px' }} />
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '80vh',
  },
  banner: {
    backgroundColor: 'var(--primary-dark)',
    color: 'var(--text-white)',
    padding: '4.5rem 0',
    textAlign: 'center',
    backgroundImage: 'linear-gradient(rgba(74, 14, 20, 0.88), rgba(74, 14, 20, 0.94)), url("https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1200&auto=format&fit=crop")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderBottom: '4px solid var(--accent-color)',
  },
  bannerContainer: {
    maxWidth: '800px',
  },
  govtLabel: {
    color: 'var(--accent-color)',
    fontSize: '0.85rem',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '0.5rem',
  },
  bannerTitle: {
    color: 'var(--text-white)',
    fontSize: '2.8rem',
    marginBottom: '1rem',
  },
  bannerSubtitle: {
    fontSize: '1.1rem',
    color: '#E8DFD8',
    lineHeight: '1.6',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    alignItems: 'start',
  },
  detailsCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  infoCard: {
    backgroundColor: 'var(--bg-card)',
    padding: '2rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-sm)',
  },
  infoTitle: {
    fontSize: '1.4rem',
    color: 'var(--primary-dark)',
    marginBottom: '1.5rem',
    borderBottom: '2px solid var(--accent-color)',
    paddingBottom: '0.5rem',
    width: 'fit-content',
  },
  infoList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  infoItem: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
  },
  infoLabel: {
    display: 'block',
    fontSize: '0.8rem',
    color: 'var(--accent-dark)',
    textTransform: 'uppercase',
    fontWeight: '600',
    letterSpacing: '0.5px',
    marginBottom: '0.2rem',
  },
  infoText: {
    color: 'var(--text-light)',
    fontSize: '0.95rem',
    lineHeight: '1.5',
  },
  mapContainer: {
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-sm)',
  },
  mapBanner: {
    backgroundColor: 'var(--primary-color)',
    color: 'var(--text-white)',
    padding: '1rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  mapTitle: {
    fontWeight: '600',
    fontSize: '0.95rem',
    color: 'var(--text-white)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  mapBody: {
    backgroundColor: 'var(--bg-alt)',
    padding: '2rem 1.5rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
  },
  mapText: {
    color: 'var(--primary-dark)',
    fontSize: '1.1rem',
  },
  mapSubtext: {
    color: 'var(--text-light)',
    fontSize: '0.85rem',
    maxWidth: '380px',
    lineHeight: '1.4',
  },
  mapBtn: {
    display: 'inline-block',
    backgroundColor: 'var(--primary-color)',
    color: 'var(--text-white)',
    padding: '0.6rem 1.2rem',
    borderRadius: 'var(--radius-sm)',
    fontSize: '0.85rem',
    fontWeight: '600',
    marginTop: '0.5rem',
    boxShadow: 'var(--shadow-sm)',
    transition: 'var(--transition-smooth)',
  },
  formCard: {
    backgroundColor: 'var(--bg-card)',
    padding: '2.5rem 2rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-md)',
  },
  formTitle: {
    fontSize: '1.6rem',
    color: 'var(--primary-dark)',
    marginBottom: '0.5rem',
  },
  formSubtitle: {
    color: 'var(--text-light)',
    fontSize: '0.9rem',
    marginBottom: '1.5rem',
    lineHeight: '1.4',
  },
  successAlert: {
    backgroundColor: '#d3f9d8',
    color: '#2b8a3e',
    padding: '0.75rem 1rem',
    borderRadius: 'var(--radius-sm)',
    fontSize: '0.85rem',
    fontWeight: '600',
    marginBottom: '1.25rem',
    border: '1px solid #b2f2bb',
  },
  errorAlert: {
    backgroundColor: '#ffe3e3',
    color: '#c92a2a',
    padding: '0.75rem 1rem',
    borderRadius: 'var(--radius-sm)',
    fontSize: '0.85rem',
    fontWeight: '600',
    marginBottom: '1.25rem',
    border: '1px solid #ffc9c9',
  },
};

// Injected dynamic media query styles
const injectContactMediaStyles = () => {
  if (typeof document !== 'undefined') {
    const styleId = 'contact-media-queries';
    if (!document.getElementById(styleId)) {
      const styleSheet = document.createElement('style');
      styleSheet.id = styleId;
      styleSheet.innerText = `
        @media (max-width: 900px) {
          .grid-container {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 600px) {
          .banner-section {
            padding: 2.5rem 0 !important;
          }
          .banner-title {
            font-size: 1.8rem !important;
          }
        }
      `;
      document.head.appendChild(styleSheet);
    }
  }
};
injectContactMediaStyles();

export default Contact;
