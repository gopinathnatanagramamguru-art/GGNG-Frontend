import React, { useState } from 'react';
import { Award, Trophy, FileCheck, CheckCircle, Camera, X } from 'lucide-react';

const Awards = () => {
  const [expandedBox, setExpandedBox] = useState(null);
  const [hoveredBox, setHoveredBox] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Padmabhushan Guru Dr Kanak Rele',
      subtitle: 'Legendary Mohiniyattam Exponent',
      image: '/kanak_rele.png',
      description: 'Kanak Rele (11 June 1937 – 22 February 2023) was a pioneering Indian dancer, choreographer, and academic. She was a revolutionary exponent of Mohiniyattam, the founder-director of the Nalanda Dance Research Centre, and the founder-principal of the Nalanda Nritya Kala Mahavidyalaya in Mumbai. In 2013, she was conferred the Padma Bhushan by the Government of India for her exceptional contributions.'
    },
    {
      id: 2,
      title: 'Dr. Indira P.P. Bora',
      subtitle: 'Sattriya Dance Pioneer & Laureate',
      image: '/indira_bora.png',
      description: 'Acclaimed Assamese classical dancer Dr. Indira P.P. Bora was awarded the prestigious Guru Gopinath Desiya Natya Puraskaram for the year 2019. The Kerala State Government’s highest annual dance honour was presented to her in recognition of her lifelong dedication to popularising Sattriya dance globally.'
    },
    {
      id: 3,
      title: 'Guru Kumudini Lakhia',
      subtitle: 'Kathak Exponent & Scholar',
      image: '/kumudini_lakhia.png',
      description: 'Kathak exponent Guru Kumudini Lakhia has been selected for the Guru Gopinath Desiya Natya Puraskaram, 2021, the highest award conferred by the Government of Kerala for excellence in dance. Born in 1930 in Ahmedabad, Ms. Lakhia has done extensive research in Kathak dance and popularised the dance form. She was conferred the Padma Bhushan award for her contributions.'
    },
    {
      id: 4,
      title: 'VP Dhananjayan & Shanta Dhananjayan',
      subtitle: 'Legendary Bharatanatyam & Kathakali Duo',
      image: '/dhananjayans.png',
      description: 'Vannadil Pudiyaveettil Dhananjayan (born 30 April 1939) and Shanta Dhananjayan (born 12 August 1943), collectively known as the Dhananjayans, are an Indian dance duo specializing in Bharatanatyam and Kathakali. They registered their own dance school, Bharata Kalanjali, in 1971 in Chennai. Some of the awards and accolades conferred on them include the Padma Bhushan (Government of India, 2009) and the Kerala Sangeetha Nataka Akademi Fellowship (1994).'
    }
  ];

  const handleBoxClick = (index) => {
    setExpandedBox(expandedBox === index ? null : index);
  };

  const saparyaRecipients = [
    {
      id: 'saparya-1',
      title: 'Guru Chitra Mohan',
      subtitle: 'Eminent Keralanatanam Exponent',
      image: '/chitra_mohan.png'
    },
    {
      id: 'saparya-2',
      title: 'Guru Ambika Mohan',
      subtitle: 'Eminent Keralanatanam Exponent',
      image: '/ambika_mohan.png'
    }
  ];

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
              <h2 className="section-title">Award Recipients</h2>
              <p className="section-subtitle">
                A visual tribute to the legendary classical exponents and scholars who received the<p><b>Guru Gopinath National Natya Puraskaram.</b></p>
              </p>
            </div>

            <div className="grid-3" style={styles.galleryGrid}>
              {galleryItems.map((item, index) => {
                const isExpanded = expandedBox === index;
                const isHovered = hoveredBox === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => handleBoxClick(index)}
                    onMouseEnter={() => setHoveredBox(item.id)}
                    onMouseLeave={() => setHoveredBox(null)}
                    style={{
                      ...styles.galleryCard,
                      borderColor: isExpanded ? 'var(--accent-color)' : 'var(--border-color)',
                      boxShadow: isExpanded ? 'var(--shadow-gold)' : (isHovered ? 'var(--shadow-md)' : 'var(--shadow-sm)'),
                    }}
                    className="card-hover animate-scale-in"
                  >
                    {/* Background Image with Zoom Effect */}
                    <div
                      style={{
                        ...styles.cardImageContainer,
                        backgroundImage: `url("${item.image}")`,
                        transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                      }}
                    />

                    {/* Bottom Title Bar (Visible initially) */}
                    <div style={styles.cardFooter}>
                      <span style={styles.cardSubtitle}>{item.subtitle}</span>
                      <h4 style={styles.cardTitle}>{item.title}</h4>
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
                          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <span style={styles.overlaySubtitle}>{item.subtitle}</span>
                            <h4 style={styles.overlayTitle}>{item.title}</h4>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleBoxClick(index);
                            }}
                            style={styles.closeOverlayBtn}
                          >
                            <X size={16} color="var(--accent-color)" />
                          </button>
                        </div>
                        <div style={{ flex: 1, overflowY: 'auto', paddingRight: '4px' }}>
                          <p style={styles.overlayDescription}>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. Guru Gopinath Saparya Puraskaram */}
          <div style={styles.awardSectionWrapper} className="card-hover">
            <div style={styles.sectionHeader}>
              <div style={styles.iconCircle}>
                <Trophy size={28} color="var(--accent-color)" />
              </div>
              <div>
                <h2 style={styles.awardMainTitle}>Guru Gopinath Saparya Puraskaram</h2>
                <span style={styles.badgeGold}>State Level Honour</span>
              </div>
            </div>

            <div style={styles.verticalStack}>
              {/* About */}
              <div style={styles.aboutBlock}>
                <h3 style={styles.blockTitle}>About The Award</h3>
                <p style={styles.blockText}>
                  The <strong>Guru Gopinath Saparya Puraskaram</strong> is a prestigious Kerala State Award instituted by Guru Gopinath Natanagramam on behalf of the Department of Cultural Affairs, Government of Kerala, to honour eminent Keralanatanam artists who have made outstanding lifetime contributions to the preservation, promotion, and propagation of Guru Gopinath’s unique style of Keralanatanam.
                </p>
                <p style={styles.blockText}>
                  The award recognises distinguished artists whose lifelong dedication, artistic excellence, teaching, research, choreography, and cultural service have significantly enriched the heritage of Keralanatanam and inspired future generations of performers and scholars.
                </p>
              </div>

              {/* Award Details */}
              <div style={styles.detailsBlock}>
                <h3 style={styles.blockTitle}>Award Details</h3>
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    <span style={styles.bullet}>•</span>
                    <span><strong>Cash Prize:</strong> A cash award of <strong>₹50,000/-</strong> (Rupees Fifty Thousand only) to support the artist's continued legacy.</span>
                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.bullet}>•</span>
                    <span><strong>Sculpture (Memento):</strong> A specially designed Sculpture (Memento) symbolising the recipient’s exceptional contribution to the field of Keralanatanam.</span>
                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.bullet}>•</span>
                    <span><strong>Honour Insignia:</strong> A Citation issued by the Government of Kerala.</span>
                  </li>
                </ul>
              </div>

              {/* Objectives */}
              <div style={styles.detailsBlock}>
                <h3 style={styles.blockTitle}>Objectives</h3>
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    <span style={styles.bullet}>•</span>
                    <span>To recognise and honour the lifetime achievements of eminent Keralanatanam artists.</span>
                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.bullet}>•</span>
                    <span>To preserve, promote, and propagate the distinctive style and artistic vision of Natanakalanidhi Dr. Guru Gopinath.</span>
                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.bullet}>•</span>
                    <span>To encourage excellence in performance, teaching, choreography, research, and documentation of Keralanatanam.</span>
                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.bullet}>•</span>
                    <span>To inspire younger generations to pursue and preserve the rich legacy of Guru Gopinath.</span>
                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.bullet}>•</span>
                    <span>To strengthen Kerala’s cultural heritage by recognising individuals who have made remarkable contributions to the growth and national recognition of Keralanatanam.</span>
                  </li>
                </ul>
              </div>

              <p style={{ ...styles.blockText, fontStyle: 'italic', marginTop: '1.5rem', color: 'var(--text-light)', marginBottom: 0 }}>
                The Guru Gopinath Saparya Puraskaram stands as one of the highest recognitions dedicated to Keralanatanam, reaffirming the commitment of the Department of Cultural Affairs, Government of Kerala, and Guru Gopinath Natanagramam to safeguarding and advancing the invaluable artistic legacy of Dr. Guru Gopinath for future generations.
              </p>
            </div>
          </div>

          {/* Saparya Recipients Gallery Section */}
          <div style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <h2 className="section-title">Award Recipients</h2>
              <p className="section-subtitle">
                A visual tribute to the legendary classical exponents and scholars who received the<p><b>Guru Gopinath Saparya Puraskaram.</b></p>
              </p>
            </div>

            <div style={styles.saparyaGrid}>
              {saparyaRecipients.map((item) => {
                const isHovered = hoveredBox === item.id;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredBox(item.id)}
                    onMouseLeave={() => setHoveredBox(null)}
                    style={{
                      ...styles.galleryCard,
                      width: '300px',
                      borderColor: 'var(--border-color)',
                      boxShadow: isHovered ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                      cursor: 'default',
                    }}
                    className="card-hover animate-scale-in"
                  >
                    {/* Background Image with Zoom Effect */}
                    <div
                      style={{
                        ...styles.cardImageContainer,
                        backgroundImage: `url("${item.image}")`,
                        transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                      }}
                    />

                    {/* Bottom Title Bar */}
                    <div style={styles.cardFooter}>
                      <span style={styles.cardSubtitle}>{item.subtitle}</span>
                      <h4 style={styles.cardTitle}>{item.title}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. Guru Gopinath State Fellowship */}
          <div style={styles.awardSectionWrapper} className="card-hover">
            <div style={styles.sectionHeader}>
              <div style={styles.iconCircle}>
                <Award size={28} color="var(--accent-color)" />
              </div>
              <div>
                <h2 style={styles.awardMainTitle}>Guru Gopinath State Fellowship</h2>
                <span style={styles.badgeGold}>State Level Honour</span>
              </div>
            </div>

            <div style={styles.fellowshipGrid}>
              {/* Left Column: Details & Objectives */}
              <div style={styles.fellowshipDetails}>
                <div style={styles.aboutBlock}>
                  <h3 style={styles.blockTitle}>About The Fellowship</h3>
                  <p style={styles.blockText}>
                    The <strong>Guru Gopinath State Fellowship</strong> is a prestigious fellowship instituted by Guru Gopinath Natanagramam, under the Department of Cultural Affairs, Government of Kerala, to encourage advanced study, research, documentation, creative practice, and innovation in the field of performing arts, with special emphasis on Keralanatanam and the artistic legacy of Natanakalanidhi Dr. Guru Gopinath. Guru Gopinath Natanagramam is a Government of Kerala cultural institution dedicated to the preservation, promotion, training, and research of Kerala’s performing arts.
                  </p>
                  <p style={styles.blockText}>
                    The fellowship aims to support outstanding artists, researchers, scholars, and practitioners who are committed to enriching the cultural heritage of Kerala through meaningful artistic and academic contributions. It seeks to promote original research, documentation, publications, choreography, archival work, and innovative projects that preserve and propagate the vision and values of Guru Gopinath for future generations.
                  </p>
                </div>

                <div style={styles.detailsBlock}>
                  <h3 style={styles.blockTitle}>Fellowship Grant</h3>
                  <ul style={styles.list}>
                    <li style={styles.listItem}>
                      <span style={styles.bullet}>•</span>
                      <span><strong>Fellowship Grant:</strong> A fellowship grant of <strong>₹50,000/-</strong> (Rupees Fifty Thousand only) to support advanced research and practice.</span>
                    </li>
                    <li style={styles.listItem}>
                      <span style={styles.bullet}>•</span>
                      <span><strong>Honour Insignia:</strong> An official Citation presented by the Government of Kerala in recognition of the fellow’s contribution to the field of arts and culture.</span>
                    </li>
                  </ul>
                </div>

                <div style={styles.detailsBlock}>
                  <h3 style={styles.blockTitle}>Objectives</h3>
                  <ul style={styles.list}>
                    <li style={styles.listItem}>
                      <span style={styles.bullet}>•</span>
                      <span>To promote research and higher studies in Keralanatanam and Indian classical performing arts.</span>
                    </li>
                    <li style={styles.listItem}>
                      <span style={styles.bullet}>•</span>
                      <span>To encourage documentation, publication, and preservation of Kerala’s cultural heritage.</span>
                    </li>
                    <li style={styles.listItem}>
                      <span style={styles.bullet}>•</span>
                      <span>To support innovative artistic projects inspired by the philosophy and vision of Dr. Guru Gopinath.</span>
                    </li>
                    <li style={styles.listItem}>
                      <span style={styles.bullet}>•</span>
                      <span>To nurture young scholars and eminent artists engaged in the promotion of traditional performing arts and Kerala culture.</span>
                    </li>
                    <li style={styles.listItem}>
                      <span style={styles.bullet}>•</span>
                      <span>To strengthen the role of Guru Gopinath Natanagramam as a national centre for learning, research, and cultural excellence.</span>
                    </li>
                  </ul>
                </div>
                
                <p style={{ ...styles.blockText, fontStyle: 'italic', marginTop: '1.5rem', color: 'var(--text-light)', marginBottom: 0 }}>
                  The Guru Gopinath State Fellowship stands as a significant recognition of artistic merit and scholarly excellence, reaffirming the commitment of the Department of Cultural Affairs, Government of Kerala, and Guru Gopinath Natanagramam to preserving, promoting, and advancing the rich legacy of Kerala’s performing arts for generations to come.
                </p>
              </div>

              {/* Right Column: Recipient Showcase */}
              <div style={styles.recipientShowcase}>
                <h3 style={styles.blockTitle}>Fellowship Recipient</h3>
                
                <div style={styles.recipientCard} className="card-hover">
                  <div style={styles.recipientImageContainer}>
                    <img 
                      src="/aparna_sarma.png" 
                      alt="Aparna Sarma E G" 
                      style={styles.recipientImage} 
                    />
                  </div>
                  <div style={styles.recipientInfo}>
                    <h4 style={styles.recipientName}>Aparna Sarma E G</h4>
                    <span style={styles.recipientRole}>State Fellowship Recipient</span>
                    <p style={styles.recipientBio}>
                      Recipient of the Guru Gopinath State Fellowship in recognition of outstanding contributions and research in the field of Keralanatanam and performing arts.
                    </p>
                  </div>
                </div>
              </div>
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
    height: '320px',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.4s ease',
  },
  cardImageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'transform 0.5s ease',
    zIndex: 1,
  },
  cardFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    background: 'linear-gradient(transparent, rgba(15, 3, 4, 0.95))',
    padding: '2rem 1.25rem 1.25rem 1.25rem',
    color: '#FDFBF7',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  cardTitle: {
    fontSize: '1.15rem',
    fontWeight: '700',
    margin: 0,
    color: '#FDFBF7',
    lineHeight: '1.3',
  },
  cardSubtitle: {
    fontSize: '0.72rem',
    fontWeight: '600',
    color: 'var(--accent-color)',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
  },
  galleryOverlay: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(15, 3, 4, 0.97)',
    borderTop: '4px solid var(--accent-color)',
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  overlaySubtitle: {
    fontSize: '0.75rem',
    fontWeight: '600',
    color: 'var(--accent-color)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '0.5rem',
  },
  overlayDescription: {
    fontSize: '0.9rem',
    color: '#E8DFD8',
    lineHeight: '1.6',
    margin: 0,
    overflowY: 'auto',
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
    fontSize: '1.2rem',
    color: '#FDFBF7',
    fontWeight: '700',
    margin: 0,
    flex: 1,
    paddingRight: '1rem',
  },
  closeOverlayBtn: {
    background: 'rgba(255, 255, 255, 0.1)',
    border: 'none',
    cursor: 'pointer',
    padding: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    transition: 'var(--transition-fast)',
  },
  fellowshipGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '2.5rem',
    marginTop: '1rem',
  },
  fellowshipDetails: {
    flex: '1 1 500px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  recipientShowcase: {
    flex: '1 1 300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    alignItems: 'stretch',
  },
  recipientCard: {
    backgroundColor: 'var(--bg-alt)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'var(--shadow-sm)',
    transition: 'var(--transition-smooth)',
  },
  recipientImageContainer: {
    width: '100%',
    height: '380px',
    overflow: 'hidden',
    borderBottom: '3px solid var(--accent-color)',
  },
  recipientImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 20%',
    transition: 'transform 0.5s ease',
  },
  recipientInfo: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  recipientName: {
    fontSize: '1.3rem',
    color: 'var(--primary-dark)',
    fontWeight: '700',
    margin: 0,
    fontFamily: 'var(--font-serif)',
  },
  recipientRole: {
    fontSize: '0.8rem',
    fontWeight: '600',
    color: 'var(--accent-dark)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  recipientBio: {
    fontSize: '0.92rem',
    color: 'var(--text-light)',
    lineHeight: '1.6',
    margin: 0,
    marginTop: '0.25rem',
  },
  saparyaGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '2rem',
  },
};

export default Awards;
