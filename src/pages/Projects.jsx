import React from 'react';
import { Film } from 'lucide-react';

const Projects = () => {
  return (
    <div style={styles.page} className="animate-fade-up">
      {/* Header Banner */}
      <section className="banner-section" style={styles.banner}>
        <div className="container" style={styles.bannerContainer}>
          <span style={styles.govtLabel}>Department of Culture, Govt. of Kerala</span>
          <h1 className="banner-title" style={styles.bannerTitle}>Projects</h1>
        </div>
      </section>

      {/* Main Video Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-main)', paddingBottom: '7rem' }}>
        <div className="container" style={styles.videoContainer}>
          
          <div style={styles.videoSectionHeader}>
            <span style={styles.sectionLabel}>Biographical Film</span>
            <h2 className="video-title" style={styles.videoTitle}>Mahapatham: The Dancing Legend</h2>
            <div style={styles.titleDivider} />
          </div>

          <div style={styles.videoCard}>
            <video
              controls
              playsInline
              style={styles.videoPlayer}
            >
              <source src="/mahapadham audio launch.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div style={styles.videoCaption}>
              <Film size={18} color="var(--accent-color)" />
              <span style={styles.captionText}>Mahapatham: The Dancing Legend - Audio Launch</span>
            </div>
          </div>

          <div style={styles.videoDescContainer}>
            <p style={styles.videoDescParagraph}>
              The audio launch of the documentary film <strong>"Mahapatham: The Dancing Legend,"</strong> which portrays the remarkable life journey of Guru Gopinath, was held in the presence of distinguished personalities associated with the documentary. Renowned music director Mr. Sharath attended the event as the chief guest. The official launch was inaugurated by the Honorable Minister.
            </p>
            <p style={{ ...styles.videoDescParagraph, marginBottom: 0 }}>
              As directed by the Department of Cultural Affairs, Natanagramam produced <strong>Mahapatham: The Dancing Legend</strong> to preserve the legendary life and artistic legacy of Guru Gopinath in a Digital Cinema Package (DCP) format for future generations. During the event, the documentary's original soundtrack and background score were showcased on stage.
            </p>
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
    backgroundImage: 'linear-gradient(rgba(74, 14, 20, 0.88), rgba(74, 14, 20, 0.94)), url("https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1200&auto=format&fit=crop")',
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
  videoContainer: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  videoSectionHeader: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  sectionLabel: {
    color: 'var(--primary-color)',
    fontSize: '0.85rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    marginBottom: '0.5rem',
    display: 'block',
  },
  videoTitle: {
    fontSize: '2.4rem',
    color: 'var(--primary-dark)',
    lineHeight: '1.25',
  },
  titleDivider: {
    width: '60px',
    height: '3px',
    backgroundColor: 'var(--accent-color)',
    margin: '0.75rem auto 0 auto',
    borderRadius: '2px',
  },
  videoCard: {
    backgroundColor: 'var(--bg-dark)',
    borderRadius: 'var(--radius-lg)',
    border: '3px solid var(--accent-color)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-lg)',
    transition: 'var(--transition-smooth)',
    marginBottom: '2.5rem',
  },
  videoPlayer: {
    width: '100%',
    aspectRatio: '16/9',
    display: 'block',
  },
  videoCaption: {
    backgroundColor: 'var(--primary-dark)',
    padding: '1rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    borderTop: '2px solid var(--accent-color)',
  },
  captionText: {
    color: 'var(--text-white)',
    fontSize: '0.95rem',
    fontWeight: '600',
  },
  videoDescContainer: {
    backgroundColor: 'var(--bg-alt)',
    padding: '2.5rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
  },
  videoDescParagraph: {
    color: 'var(--text-light)',
    fontSize: '1.05rem',
    lineHeight: '1.75',
    marginBottom: '1.25rem',
  },
};

// Injected dynamic media query style sheet for responsiveness
const injectDocMediaStyles = () => {
  if (typeof document !== 'undefined') {
    const styleId = 'documentary-media-queries';
    if (!document.getElementById(styleId)) {
      const styleSheet = document.createElement('style');
      styleSheet.id = styleId;
      styleSheet.innerText = `
        @media (max-width: 992px) {
          .banner-section {
            padding: 3rem 0 !important;
          }
          .banner-title {
            font-size: 2.2rem !important;
          }
          .container {
            width: 92% !important;
          }
        }
        @media (max-width: 600px) {
          .banner-title {
            font-size: 1.8rem !important;
          }
          .banner-subtitle {
            font-size: 0.95rem !important;
          }
          .video-title {
            font-size: 1.8rem !important;
          }
        }
      `;
      document.head.appendChild(styleSheet);
    }
  }
};
injectDocMediaStyles();

export default Projects;
