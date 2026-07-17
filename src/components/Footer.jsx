import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container footer-container" style={styles.container}>
        {/* Info Column */}
        <div style={styles.col}>
          <h3 style={styles.colTitle}>Guru Gopinath Natanagramam</h3>
          <p style={styles.text}>
            Established by the Department of Culture, Government of Kerala, to preserve, train, and promote the legacy of Kerala Natanam and the classical dance museum.
          </p>
          <div style={styles.govAuthority}>
            <ShieldCheck size={16} color="var(--accent-color)" />
            <span style={styles.govText}>Government of Kerala Undertaking</span>
          </div>
        </div>

        {/* Links Column */}
        <div style={styles.col}>
          <h3 style={styles.colTitle}>Quick Links</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}><Link to="/about" style={styles.link}>About Guru Gopinath</Link></li>
            <li style={styles.listItem}><Link to="/museum" style={styles.link}>Museum Exhibits</Link></li>
            <li style={styles.listItem}><Link to="/courses" style={styles.link}>Courses & Admission</Link></li>
            <li style={styles.listItem}><Link to="/events" style={styles.link}>Events & News</Link></li>
            <li style={styles.listItem}><Link to="/rti" style={styles.link}>Right to Information (RTI)</Link></li>
            <li style={styles.listItem}><Link to="/contact" style={styles.link}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div style={styles.col}>
          <h3 style={styles.colTitle}>Contact Details</h3>
          <ul style={styles.list}>
            <li style={styles.contactItem}>
              <MapPin size={18} color="var(--accent-color)" style={{ shrink: 0 }} />
              <span style={styles.text}>Guruji Road, Vattiyoorkavu, Thiruvananthapuram, Kerala 695013</span>
            </li>
            <li style={styles.contactItem}>
              <Phone size={18} color="var(--accent-color)" />
              <span style={styles.text}>+91 471 236 6555</span>
            </li>
            <li style={styles.contactItem}>
              <Mail size={18} color="var(--accent-color)" />
              <span style={styles.text}>gopinathnatanagramamguru@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Department links Column */}
        <div style={styles.col}>
          <h3 style={styles.colTitle}>Official Portals</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <a href="https://kerala.gov.in" target="_blank" rel="noopener noreferrer" style={styles.link}>
                Kerala Govt. Portal <ExternalLink size={12} />
              </a>
            </li>
            <li style={styles.listItem}>
              <a href="https://www.keralatourism.org" target="_blank" rel="noopener noreferrer" style={styles.link}>
                Kerala Tourism <ExternalLink size={12} />
              </a>
            </li>
            <li style={styles.listItem}>
              <a href="https://culture.kerala.gov.in" target="_blank" rel="noopener noreferrer" style={styles.link}>
                Department of Culture <ExternalLink size={12} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div style={styles.bottom}>
        <div className="container footer-bottom-container" style={styles.bottomContainer}>
          <p>© {new Date().getFullYear()} Guru Gopinath Natanagramam. All Rights Reserved. Managed by Department of Culture, Govt. of Kerala.</p>

        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'var(--bg-dark)',
    color: '#D4C5C0',
    padding: '4rem 0 0 0',
    borderTop: '5px solid var(--accent-color)',
    fontSize: '0.9rem',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr 1.2fr 1fr',
    gap: '2.5rem',
    paddingBottom: '3rem',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  colTitle: {
    color: 'var(--text-white)',
    fontSize: '1.25rem',
    fontWeight: '600',
    position: 'relative',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid rgba(212, 175, 55, 0.2)',
  },
  text: {
    lineHeight: '1.6',
    color: '#C4B5B0',
  },
  govAuthority: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginTop: '0.5rem',
    padding: '0.4rem 0.8rem',
    backgroundColor: 'rgba(122, 26, 37, 0.2)',
    borderRadius: '4px',
    border: '1px solid rgba(212, 175, 55, 0.1)',
    width: 'fit-content',
  },
  govText: {
    color: 'var(--accent-color)',
    fontSize: '0.75rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    color: '#C4B5B0',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
  contactItem: {
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'flex-start',
  },
  bottom: {
    backgroundColor: '#121212',
    color: '#7F726E',
    padding: '1.5rem 0',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    fontSize: '0.8rem',
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  bottomLinks: {
    display: 'flex',
    gap: '1.5rem',
  },
  bottomLink: {
    color: '#7F726E',
  },
};

// Simple media query style injection for responsive footers
const injectFooterMediaStyles = () => {
  if (typeof document !== 'undefined') {
    const styleId = 'footer-media-queries';
    if (!document.getElementById(styleId)) {
      const styleSheet = document.createElement('style');
      styleSheet.id = styleId;
      styleSheet.innerText = `
        @media (max-width: 900px) {
          .footer-container {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 550px) {
          .footer-container {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .footer-bottom-container {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
      `;
      document.head.appendChild(styleSheet);
    }
  }
};
injectFooterMediaStyles();

export default Footer;
