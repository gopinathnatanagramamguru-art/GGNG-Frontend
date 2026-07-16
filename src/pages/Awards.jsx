import React, { useState } from 'react';
import { Award, Trophy, FileCheck, CheckCircle, Camera, X } from 'lucide-react';

const Awards = () => {
  const [expandedBox, setExpandedBox] = useState(null);

  const galleryItems = [
    { id: 1, title: 'Award Ceremony 2025' },
    { id: 2, title: 'Natya Puraskar Presentation' },
    { id: 3, title: 'Saparya Puraskaram Event' },
    { id: 4, title: 'Fellowship Research Review' },
    { id: 5, title: 'Dignitaries & Scholars Meet' },
    { id: 6, title: 'Cultural Archive Exhibition' },
  ];

  const handleBoxClick = (index) => {
    setExpandedBox(expandedBox === index ? null : index);
  };

  return (
    <div style={styles.page} className="animate-fade-up">
      {/* Header Banner */}
      <section className="banner-section" style={styles.banner}>
        <div className="container" style={styles.bannerContainer}>
          <span style={styles.govtLabel}>Department of Culture, Government of Kerala</span>
          <h1 className="banner-title" style={styles.bannerTitle}>Awards & Recognition</h1>
          <p style={styles.bannerSubtitle}>
            Celebrating outstanding artistic excellence, academic documentation, and lifelong dedication to classical performing arts.
          </p>
        </div>
      </section>

      {/* Main Awards Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="container" style={styles.contentContainer}>

          {/* 1. Guru Gopinath National Natya Puraskar Award */}
          <div style={styles.awardSectionWrapper} className="card-hover">
            <div style={styles.sectionHeader}>
              <div style={styles.iconCircle}>
                <Trophy size={28} color="var(--accent-color)" />
              </div>
              <div>
                <h2 style={styles.awardMainTitle}>Guru Gopinath National Natya Puraskaram</h2>
                <span style={styles.badgeGold}>National Level Honour</span>
              </div>
            </div>

            <div style={styles.verticalStack}>
              {/* About */}
              <div style={styles.aboutBlock}>
                <h3 style={styles.blockTitle}>About The Award</h3>
                <p style={styles.blockText}>
                  The <strong>Guru Gopinath National Natya Puraskaram</strong> (also known as the <strong>Guru Gopinath Desiya Natya Puraskaram</strong>) is the highest dance award conferred by the Government of Kerala.
                </p>
                <p style={styles.blockText}>
                  Instituted by the Guru Gopinath Natana Gramam for the Department of Cultural Affairs, it honors lifetime achievements in Indian classical dance. The award recognizes artists who have made monumental contributions to the preservation and growth of traditional performance arts.
                </p>
                <div style={styles.highlightBox}>
                  <CheckCircle size={18} color="var(--accent-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>Pioneering Vision:</strong> Honoring legendary exponents, gurus, and scholars of classical dance across India.
                  </div>
                </div>
              </div>

              {/* Award Details */}
              <div style={styles.detailsBlock}>
                <h3 style={styles.blockTitle}>Award Details</h3>
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    <span style={styles.bullet}>•</span>
                    <span><strong>Cash Prize:</strong> A cash purse of <strong>₹3,00,000/-</strong> (Three Lakh Rupees) to support the artist's continued legacy.</span>
                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.bullet}>•</span>
                    <span><strong>Honour Insignia:</strong> A formal Citation of Merit and a statuette designed by noted sculptor <strong>Kanayi Kunhiraman</strong>.</span>
                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.bullet}>•</span>
                    <span><strong>Presentation:</strong> Conferred by the Government of Kerala and presented by the Hon’ble Minister for Culture during cultural celebrations.</span>
                  </li>
                </ul>
              </div>


            </div>
          </div>



          {/* Gallery Section */}
          <div style={{ marginTop: '3rem' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <h2 className="section-title">Gallery</h2>
              <p className="section-subtitle">
                A visual journey through the history of our award ceremonies, fellowship presentation moments, and archival memories.
              </p>
            </div>

            <div className="grid-3" style={styles.galleryGrid}>
              {galleryItems.map((item, index) => {
                const isExpanded = expandedBox === index;
                return (
                  <div
                    key={item.id}
                    onClick={() => handleBoxClick(index)}
                    style={{
                      ...styles.galleryCard,
                      borderColor: isExpanded ? 'var(--accent-color)' : 'var(--border-color)',
                      boxShadow: isExpanded ? 'var(--shadow-gold)' : 'var(--shadow-sm)',
                    }}
                    className="card-hover animate-scale-in"
                  >
                    {/* Placeholder Photo Content */}
                    <div style={styles.photoPlaceholder}>
                      <Camera size={40} color="var(--accent-dark)" style={{ opacity: 0.6, marginBottom: '0.5rem' }} />
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: '600' }}>
                        Photo {item.id}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--accent-dark)', marginTop: '0.25rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                        Click to reveal details
                      </span>
                    </div>

                    {/* Details Overlay Sliding Upwards */}
                    <div
                      style={{
                        ...styles.galleryOverlay,
                        transform: isExpanded ? 'translateY(0)' : 'translateY(100%)',
                      }}
                    >
                      <div style={styles.overlayContent}>
                        <div style={styles.overlayHeader}>
                          <h4 style={styles.overlayTitle}>{item.title}</h4>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleBoxClick(index);
                            }}
                            style={styles.closeOverlayBtn}
                          >
                            <X size={16} color="var(--primary-dark)" />
                          </button>
                        </div>
                        <p style={styles.overlayText}>ivide contents verum!</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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
    backgroundImage: 'linear-gradient(rgba(74, 14, 20, 0.9), rgba(74, 14, 20, 0.95)), url("https://images.unsplash.com/photo-1578996834254-13d1b661a5ee?q=80&w=1200&auto=format&fit=crop")',
    backgroundSize: 'cover',
    backgroundPosition: 'center 30%',
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
  contentContainer: {
    maxWidth: '960px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
  },
  awardSectionWrapper: {
    backgroundColor: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-lg)',
    padding: '2.5rem',
    boxShadow: 'var(--shadow-sm)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    transition: 'var(--transition-smooth)',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
  },
  iconCircle: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: 'var(--primary-dark)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'var(--shadow-md)',
  },
  awardMainTitle: {
    fontSize: '1.75rem',
    color: 'var(--primary-dark)',
    marginBottom: '0.25rem',
    fontWeight: '700',
  },
  badgeGold: {
    display: 'inline-block',
    backgroundColor: 'var(--accent-light)',
    color: 'var(--primary-dark)',
    fontSize: '0.75rem',
    fontWeight: '600',
    padding: '0.2rem 0.75rem',
    borderRadius: '50px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    border: '1px solid var(--accent-color)',
  },
  verticalStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginTop: '1rem',
  },
  aboutBlock: {
    backgroundColor: 'var(--bg-alt)',
    padding: '1.75rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
  },
  blockTitle: {
    fontSize: '1.25rem',
    color: 'var(--primary-dark)',
    fontWeight: '600',
    marginBottom: '0.75rem',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '0.25rem',
    display: 'inline-block',
  },
  blockText: {
    color: 'var(--text-light)',
    fontSize: '1rem',
    lineHeight: '1.7',
    marginBottom: '0.75rem',
  },
  highlightBox: {
    backgroundColor: 'var(--bg-card)',
    borderLeft: '4px solid var(--accent-color)',
    padding: '1rem',
    borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
    display: 'flex',
    gap: '0.75rem',
    fontSize: '0.88rem',
    color: 'var(--text-dark)',
    marginTop: '1rem',
    boxShadow: 'var(--shadow-sm)',
  },
  detailsBlock: {
    padding: '0.5rem 0',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem',
    fontSize: '0.95rem',
    color: 'var(--text-dark)',
    lineHeight: '1.5',
  },
  bullet: {
    color: 'var(--accent-color)',
    fontWeight: 'bold',
  },
  bulletItem: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.85rem',
    color: 'var(--text-light)',
    marginTop: '0.5rem',
    backgroundColor: 'var(--bg-alt)',
    padding: '0.4rem 0.8rem',
    borderRadius: 'var(--radius-sm)',
  },
  galleryGrid: {
    marginTop: '2rem',
  },
  galleryCard: {
    backgroundColor: 'var(--bg-alt)',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
    height: '240px',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    transition: 'var(--transition-smooth)',
  },
  photoPlaceholder: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    textAlign: 'center',
  },
  galleryOverlay: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(253, 251, 247, 0.98)',
    borderTop: '3px solid var(--accent-color)',
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    zIndex: 10,
  },
  overlayContent: {
    padding: '1.5rem',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  overlayHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '0.5rem',
  },
  overlayTitle: {
    fontSize: '1.1rem',
    color: 'var(--primary-dark)',
    fontWeight: '700',
    margin: 0,
  },
  closeOverlayBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: 'var(--bg-alt)',
    transition: 'var(--transition-fast)',
  },
  overlayText: {
    color: 'var(--primary-color)',
    fontWeight: '600',
    fontSize: '1.25rem',
    textAlign: 'center',
    margin: 'auto 0',
  },
};

export default Awards;
