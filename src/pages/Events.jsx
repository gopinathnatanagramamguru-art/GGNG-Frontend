import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Tag, Landmark } from 'lucide-react';
import api from '../api';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await api.getEvents();
        setEvents(data);
      } catch (err) {
        console.error(err);
        setError('Could not load calendar events.');
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div style={styles.page} className="animate-fade-up">
      {/* Header Banner */}
      <section className="banner-section" style={styles.banner}>
        <div className="container" style={styles.bannerContainer}>
          <span style={styles.govtLabel}>Department of Culture, Govt. of Kerala</span>
          <h1 className="banner-title" style={styles.bannerTitle}>Events & Cultural Calendar</h1>
          <p style={styles.bannerSubtitle}>
            Explore schedules of our annual dance festivals, stage performances, academic seminars, and recitals.
          </p>
        </div>
      </section>

      {/* Main Listing */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          
          {loading ? (
            <div style={styles.loaderContainer}>
              <div style={styles.spinner} />
              <p>Loading events schedule...</p>
            </div>
          ) : error ? (
            <p style={{ color: 'var(--primary-light)', textAlign: 'center' }}>{error}</p>
          ) : events.length === 0 ? (
            <div style={styles.emptyContainer}>
              <Calendar size={48} color="var(--text-light)" />
              <p>There are no events scheduled in the calendar at this moment.</p>
            </div>
          ) : (
            <div style={styles.eventsList}>
              {events.map((event) => (
                <div key={event._id} style={styles.eventCard}>
                  {event.imageURL && (
                    <div className="image-wrapper" style={styles.imageWrapper}>
                      <img src={event.imageURL} alt={event.title} style={styles.eventImg} />
                      {event.isFestival && <span style={styles.festBadge}>National Festival</span>}
                    </div>
                  )}
                  
                  <div className="card-body" style={styles.cardBody}>
                    <div className="card-meta" style={styles.cardMeta}>
                      <div style={styles.metaItem}>
                        <Calendar size={16} color="var(--primary-color)" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div style={styles.metaItem}>
                        <MapPin size={16} color="var(--primary-color)" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {!event.imageURL && event.isFestival && (
                      <span style={styles.inlineFestBadge}>National Festival</span>
                    )}

                    <h3 className="event-title" style={styles.eventTitle}>{event.title}</h3>
                    <p style={styles.eventDesc}>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Guidelines Box */}
          <div style={styles.infoBox}>
            <Landmark size={24} color="var(--accent-color)" />
            <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: '1.6' }}>
              <strong>Public Attendance Guidelines:</strong> Unless specified otherwise (e.g., ticketed entry for specific charity performances), all programs held at the Memorial Open Air Theatre or the Indoor Recital Arena are **free to attend** for the public. Seating is on a first-come, first-served basis.
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
  loaderContainer: {
    textAlign: 'center',
    padding: '4rem 0',
    color: 'var(--text-light)',
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '4px solid rgba(122, 26, 37, 0.1)',
    borderTop: '4px solid var(--primary-color)',
    borderRadius: '50%',
    margin: '0 auto 1rem auto',
    animation: 'spin 1s linear infinite',
  },
  emptyContainer: {
    textAlign: 'center',
    padding: '4rem 2rem',
    color: 'var(--text-light)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  eventsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
  },
  eventCard: {
    backgroundColor: 'var(--bg-card)',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-sm)',
    transition: 'var(--transition-smooth)',
  },
  imageWrapper: {
    position: 'relative',
    height: '320px',
    overflow: 'hidden',
  },
  eventImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  festBadge: {
    position: 'absolute',
    top: '1.25rem',
    left: '1.25rem',
    backgroundColor: 'var(--primary-color)',
    color: 'var(--accent-light)',
    padding: '0.35rem 0.8rem',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    border: '1px solid var(--accent-color)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
  },
  inlineFestBadge: {
    backgroundColor: 'rgba(122, 26, 37, 0.15)',
    color: 'var(--primary-dark)',
    padding: '0.25rem 0.6rem',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    width: 'fit-content',
    marginBottom: '0.75rem',
    display: 'block',
    border: '1px solid var(--primary-color)',
  },
  cardBody: {
    padding: '2rem',
  },
  cardMeta: {
    display: 'flex',
    gap: '2rem',
    fontSize: '0.85rem',
    color: 'var(--text-light)',
    marginBottom: '1rem',
    flexWrap: 'wrap',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '0.75rem',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  eventTitle: {
    fontSize: '1.6rem',
    color: 'var(--primary-dark)',
    marginBottom: '0.75rem',
  },
  eventDesc: {
    color: 'var(--text-light)',
    fontSize: '0.95rem',
    lineHeight: '1.65',
  },
  infoBox: {
    backgroundColor: 'var(--bg-alt)',
    padding: '1.5rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
    display: 'flex',
    gap: '1.25rem',
    alignItems: 'flex-start',
    marginTop: '4rem',
  },
};

// Injected dynamic media query style sheet
const injectEventsMediaStyles = () => {
  if (typeof document !== 'undefined') {
    const styleId = 'events-media-queries';
    if (!document.getElementById(styleId)) {
      const styleSheet = document.createElement('style');
      styleSheet.id = styleId;
      styleSheet.innerText = `
        @media (max-width: 600px) {
          .banner-section {
            padding: 2.5rem 0 !important;
          }
          .banner-title {
            font-size: 1.8rem !important;
          }
          .image-wrapper {
            height: 200px !important;
          }
          .card-body {
            padding: 1.25rem !important;
          }
          .card-meta {
            flex-direction: column !important;
            gap: 0.5rem !important;
          }
          .event-title {
            font-size: 1.3rem !important;
          }
        }
      `;
      document.head.appendChild(styleSheet);
    }
  }
};
injectEventsMediaStyles();

export default Events;
