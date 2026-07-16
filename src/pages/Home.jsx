import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Landmark, GraduationCap, Calendar, Compass, ArrowRight, User } from 'lucide-react';
import api from '../api';

const LEADERS = [
  {
    name: "Shri V D Satheesan",
    role: "Hon. Chief Minister",
    department: "Government of Kerala",
    image: "/vd_satheesan.png"
  },
  {
    name: "Shri P C Vishnunadh",
    role: "Hon. Minister for Culture & Tourism",
    department: "Chairman, Guru Gopinath Natanagramam",
    image: "/pc_vishnunadh.png"
  },
  {
    name: "Smt Anjana M IAS",
    role: "Special Secretary",
    department: "Cultural Affairs, Government of Kerala",
    image: "/anjana_m.png"
  },
  {
    name: "Shri Prem Krishnan IAS",
    role: "Director",
    department: "Directorate of Culture, Government of Kerala",
    image: "/prem_krishnan.png"
  },
  {
    name: "Smt Sabna Sreedevi Sasidharan",
    role: "Secretary",
    department: "Guru Gopinath Natanagramam,Cultural Affairs, Government of Kerala",
    image: "/sabna_s.png"
  }
];

const Home = () => {
  const [exhibits, setExhibits] = useState([]);
  const [events, setEvents] = useState([]);
  const [leadershipVisible, setLeadershipVisible] = useState(false);
  const leadershipRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLeadershipVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (leadershipRef.current) {
      observer.observe(leadershipRef.current);
    }
    return () => {
      if (leadershipRef.current) {
        observer.unobserve(leadershipRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Fetch a sample of exhibits and events
    const loadData = async () => {
      try {
        const exhibitsData = await api.getExhibits();
        setExhibits(exhibitsData.slice(0, 3));

        const eventsData = await api.getEvents();
        setEvents(eventsData.slice(0, 2));
      } catch (err) {
        console.error('Error loading home data:', err);
      }
    };
    loadData();
  }, []);

  return (
    <div style={styles.page} className="animate-fade-up">
      {/* Government Banner Ticker */}
      <div className="ticker-wrap">
        <div className="ticker-content">
          <span className="ticker-item">🏛️ Welcome to Guru Gopinath Natanagramam - India's premier dance learning and research center.</span>
          <span className="ticker-item">📣 Admissions are now open for Kerala Natanam and Classical Music courses (2026 batches).</span>
          <span className="ticker-item">🌟 Upcoming: Guru Gopinath National Dance Festival starting Dec 15, 2026. Entry Free!</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section" style={styles.hero}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={styles.heroVideo}
        >
          <source src="/natanagramam header video .mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={styles.heroOverlay} />
        <div className="container" style={styles.heroContent}>
          <span style={styles.heroGovLabel}>Department of Culture, Government of Kerala</span>
          <h1 className="hero-title" style={styles.heroTitle}>Welcome to Guru Gopinath Natanagramam & Dance Museum</h1>
          <p className="hero-subtitle" style={styles.heroSubtitle}>
            Immerse yourself in India's first specialized three-storey Dance Museum and a world-class institution dedicated to training classical arts.
          </p>
          <div style={styles.heroActions}>
            <Link to="/courses" className="btn btn-accent" style={{ marginRight: '1rem' }}>
              Explore Courses <GraduationCap size={18} style={{ marginLeft: '8px' }} />
            </Link>
            <Link to="/museum" className="btn btn-outline" style={styles.heroBtnOutline}>
              Visit Museum <Landmark size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Natanagramam Section */}
      <section className="section-padding animate-scale-in" style={{ backgroundColor: 'var(--bg-alt)' }}>
        <div className="container" style={styles.aboutContainerStacked}>

          {/* Title & Subtitle */}
          <div style={styles.aboutHeaderStacked}>
            <span style={styles.aboutLabel}>About the Institution</span>
            <h2 className="about-title" style={styles.aboutTitleStacked}>Guru Gopinath Natanagramam & Guru Gopinath National Dance Museum </h2>
            <div style={styles.aboutDividerStacked} />
          </div>

          {/* Photo */}
          <div style={styles.aboutImgColStacked}>
            <img
              src="/Screenshot 2026-07-15 161007.png"
              alt="Guru Gopinath Natanagramam & Guru Gopinath National Dance Museum"
              style={styles.aboutImgStacked}
            />
          </div>

          {/* Content paragraphs */}
          <div style={styles.aboutTextColStacked}>
            <p style={styles.aboutText}>
              <b>Guru Gopinath Natanagramam</b> is an autonomous institution under the Department of Cultural Affairs, Government of Kerala, dedicated to preserving, promoting, and propagating the rich legacy of Natanakalanidhi Dr. Guru Gopinath, the pioneer of Keralanatanam. Located at Vattiyoorkkav, Thiruvananthapuram, the institution serves as a national centre for performing arts, cultural research, education, documentation, and heritage conservation.
            </p>
            <p style={styles.aboutText}>
              The institution offers systematic training in Indian classical dance forms, with special emphasis on Keralanatanam, Indian classical dance forms, and Music, while also conducting workshops, seminars, lecture demonstrations, festivals, and performances by eminent artists from across the country. Guru Gopinath Natanagramam regularly organizes prestigious cultural events such as Guru Gopinath Jayanti, Natyolsavam, national dance festivals, folk festivals, and award ceremonies such as National Natya Puraskaram and Saparya Puraskaram, that recognize outstanding contributions to the field of performing arts.
            </p>
            <p style={styles.aboutText}>
              The institution is also home to the <b>Guru Gopinath National Dance Museum</b>, which preserves invaluable archival materials, photographs, a wax museum, costumes, manuscripts, and memorabilia related to Indian dance traditions and the life of Dr. Guru Gopinath. Through documentation, publications, research projects, and digital preservation initiatives, the museum contributes significantly to safeguarding India’s performing arts heritage.
            </p>
            <p style={styles.aboutText}>
              Committed to cultural excellence and social inclusion, Guru Gopinath Natanagramam undertakes programmes that support artists through scholarships, training opportunities, and capacity-building initiatives. It also promotes women artists, transgenders, and young talents by providing platforms for performance, learning, and professional development.
            </p>
            <p style={styles.aboutText}>
              With a vision to make Kerala a vibrant hub of classical performing arts, Guru Gopinath Natanagramam continues to uphold the artistic philosophy and timeless legacy of Dr. Guru Gopinath while inspiring future generations to preserve and celebrate India’s rich cultural traditions.
            </p>
            <div style={styles.aboutButtonsStacked}>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </Link>
              <Link to="/courses" className="btn btn-outline">
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Patrons & Administrative Leadership Section */}
      <section ref={leadershipRef} className={`section-padding leaders-section ${leadershipVisible ? 'revealed' : ''}`}>
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">WHO IS WHO</h2>
            <p className="section-subtitle">
              Guided by distinguished leaders and administrators committed to preserving and promoting our cultural heritage.
            </p>
          </div>

          <div className="leaders-grid">
            {LEADERS.map((leader, index) => (
              <div
                key={index}
                className={`leader-card card-hover animate-fade-up delay-${(index % 5) + 1}`}
              >
                <div className="leader-image-container">
                  {leader.image ? (
                    <img src={leader.image} alt={leader.name} className="leader-image" />
                  ) : (
                    <User size={64} className="leader-avatar-icon" />
                  )}
                </div>
                <div className="leader-info-container">
                  <h3 className="leader-name">{leader.name}</h3>
                  <div className="leader-role-container">
                    <span className="leader-role">{leader.role}</span>
                    <span className="leader-dept">{leader.department}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">An Institution of Cultural Eminence</h2>
            <p className="section-subtitle">
              Natanagramam stands as a living tribute to Guru Gopinath, a visionary who revolutionized and democratized classical dance for the masses.
            </p>
          </div>

          <div className="grid-3" style={{ marginTop: '2rem' }}>
            <div style={styles.featureCard} className="card-hover animate-fade-up delay-1">
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url("https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=600&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(5px)',
                transform: 'translate3d(0,0,0) scale(1.15)',
                willChange: 'transform',
                opacity: 0.3,
                zIndex: 1,
              }} />
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem' }}>
                <div style={styles.featureIconContainer}>
                  <Landmark size={28} />
                </div>
                <h3 style={styles.featureTitle}>The Dance Museum</h3>
                <p style={styles.featureText}>
                  Explore India's unique three-floor dance museum featuring mural paintings, life-size mannequins, dance ornaments, and historical archives.
                </p>
                <Link to="/museum" style={styles.featureLink}>
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div style={styles.featureCard} className="card-hover animate-fade-up delay-2">
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(5px)',
                transform: 'translate3d(0,0,0) scale(1.15)',
                willChange: 'transform',
                opacity: 0.3,
                zIndex: 1,
              }} />
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem' }}>
                <div style={styles.featureIconContainer}>
                  <GraduationCap size={28} />
                </div>
                <h3 style={styles.featureTitle}>Artistic Training</h3>
                <p style={styles.featureText}>
                  Structured curriculum coaching for all age groups in Kerala Natanam, classical music, and instruments like the Veena, Tabla, and Mridangam.
                </p>
                <Link to="/courses" style={styles.featureLink}>
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div style={styles.featureCard} className="card-hover animate-fade-up delay-3">
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url("https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=600&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(5px)',
                transform: 'translate3d(0,0,0) scale(1.15)',
                willChange: 'transform',
                opacity: 0.3,
                zIndex: 1,
              }} />
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem' }}>
                <div style={styles.featureIconContainer}>
                  <Calendar size={28} />
                </div>
                <h3 style={styles.featureTitle}>Annual Festivals</h3>
                <p style={styles.featureText}>
                  Hosts the prestigious Guru Gopinath National Dance Festival, bringing together leading exponents of diverse Indian classical dances.
                </p>
                <Link to="/events" style={styles.featureLink}>
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Museum Highlight Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Museum Highlights</h2>
            <p className="section-subtitle">A glimpse of the priceless historical artifacts and displays preserved in our galleries.</p>
          </div>

          <div className="grid-3">
            {exhibits.length > 0 ? (
              exhibits.map((exhibit, index) => (
                <div key={exhibit._id} style={styles.museumCard} className={`card-hover animate-fade-up delay-${(index % 3) + 1}`}>
                  <div style={styles.cardImgContainer}>
                    <img
                      src={exhibit.imageURL || 'https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=600&auto=format&fit=crop'}
                      alt={exhibit.title}
                      style={styles.cardImg}
                    />
                    <span style={styles.floorBadge}>
                      {exhibit.floor === 1 ? 'Ground Floor' : exhibit.floor === 2 ? 'First Floor' : exhibit.floor === 3 ? 'Second Floor' : `Floor ${exhibit.floor}`}
                    </span>
                  </div>
                  <div style={styles.cardContent}>
                    <span style={styles.cardCategory}>{exhibit.category}</span>
                    <h3 style={styles.cardTitle}>{exhibit.title}</h3>
                    <p style={styles.cardText}>{exhibit.description.substring(0, 110)}...</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center" style={{ gridColumn: 'span 3', color: 'var(--text-light)' }}>
                Loading exhibit highlights...
              </p>
            )}
          </div>

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/museum" className="btn btn-primary">
              Explore All Museum Galleries <ArrowRight size={16} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Bio Banner Section (Intro to Guru Gopinath) */}
      <section className="bio-banner-section" style={styles.bioBanner}>
        <div className="container bio-container" style={styles.bioContainer}>
          <div style={styles.bioTextCol}>
            <span style={styles.bioLabel}>Legendary Founder</span>
            <h2 className="bio-title" style={styles.bioTitle}>Guru Gopinath</h2>
            <p style={styles.bioText}>
              "Guru Gopinath (1908–1987) was a pathbreaking classical dancer who created Kerala Natanam, a style which maintains the structural integrity of Kathakali but presents it in a more expressive and communicative format for the contemporary audience."
            </p>
            <p style={styles.bioText}>
              Recipient of the Sangeet Natak Akademi Award and Kerala State Sangeetha Nataka Akademi Fellowship, his teachings continue to inspire generations of dancers.
            </p>
            <Link to="/about" className="btn btn-accent" style={{ marginTop: '1rem', width: 'fit-content' }}>
              Read Biography
            </Link>
          </div>
          <div className="bio-img-col" style={styles.bioImgCol}>
            <img
              src="/guru.jpg"
              alt="Guru Gopinath Representation"
              style={styles.bioImg}
            />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Upcoming Updates</h2>
            <p className="section-subtitle">Stay updated with the latest cultural events and programs at Natanagramam.</p>
          </div>

          <div className="grid-2">
            {events.length > 0 ? (
              events.map((event, index) => (
                <div key={event._id} style={styles.eventRowCard} className={`event-row-card card-hover animate-fade-up delay-${(index % 2) + 1}`}>
                  <div className="event-date-badge" style={styles.eventDateBadge}>
                    <span className="event-date-day" style={styles.eventDateDay}>
                      {new Date(event.date).getDate()}
                    </span>
                    <span style={styles.eventDateMonth}>
                      {new Date(event.date).toLocaleString('default', { month: 'short' })}
                    </span>
                  </div>
                  <div style={styles.eventDetails}>
                    {event.isFestival && <span style={styles.festivalBadge}>National Festival</span>}
                    <h3 style={styles.eventRowTitle}>{event.title}</h3>
                    <p style={styles.eventRowLocation}>📍 {event.location}</p>
                    <p style={styles.eventRowText}>{event.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center" style={{ gridColumn: 'span 2', color: 'var(--text-light)' }}>
                No events currently scheduled.
              </p>
            )}
          </div>

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/events" className="btn btn-outline">
              View All Calendar Events <Calendar size={16} style={{ marginLeft: '8px' }} />
            </Link>
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
  hero: {
    position: 'relative',
    overflow: 'hidden',
    padding: '8rem 0',
    color: 'var(--text-white)',
    textAlign: 'center',
  },
  heroVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 1,
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))',
    zIndex: 2,
    pointerEvents: 'none',
  },
  heroContent: {
    position: 'relative',
    zIndex: 3,
    maxWidth: '850px',
  },
  heroGovLabel: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.85rem',
    color: 'var(--accent-color)',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    display: 'block',
    marginBottom: '1rem',
  },
  heroTitle: {
    fontSize: '3.5rem',
    color: 'var(--text-white)',
    marginBottom: '1.5rem',
    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    color: '#E8DFD8',
    marginBottom: '2.5rem',
    lineHeight: '1.7',
  },
  heroActions: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  heroBtnOutline: {
    border: '2px solid var(--text-white)',
    color: 'var(--text-white)',
  },
  featureCard: {
    backgroundColor: 'var(--bg-card)',
    padding: '2.5rem 2rem',
    borderRadius: 'var(--radius-md)',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--border-color)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    transition: 'var(--transition-smooth)',
    position: 'relative',
    overflow: 'hidden',
  },
  featureIconContainer: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: 'var(--bg-alt)',
    color: 'var(--primary-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0.5rem',
    border: '2px dashed var(--accent-color)',
  },
  featureTitle: {
    fontSize: '1.4rem',
    color: 'var(--primary-dark)',
  },
  featureText: {
    color: 'var(--text-light)',
    fontSize: '0.95rem',
    lineHeight: '1.5',
    flexGrow: 1,
  },
  featureLink: {
    color: 'var(--primary-color)',
    fontWeight: '600',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    width: 'fit-content',
    fontSize: '0.9rem',
    marginTop: '0.5rem',
  },
  museumCard: {
    backgroundColor: 'var(--bg-card)',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--border-color)',
    transition: 'var(--transition-smooth)',
  },
  cardImgContainer: {
    position: 'relative',
    height: '240px',
    overflow: 'hidden',
  },
  cardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  floorBadge: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: 'var(--primary-dark)',
    color: 'var(--accent-color)',
    padding: '0.35rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '600',
    border: '1px solid var(--accent-color)',
  },
  cardContent: {
    padding: '1.5rem',
  },
  cardCategory: {
    fontSize: '0.75rem',
    color: 'var(--accent-dark)',
    textTransform: 'uppercase',
    fontWeight: '600',
    letterSpacing: '1px',
    display: 'block',
    marginBottom: '0.5rem',
  },
  cardTitle: {
    fontSize: '1.25rem',
    color: 'var(--primary-dark)',
    marginBottom: '0.75rem',
  },
  cardText: {
    color: 'var(--text-light)',
    fontSize: '0.9rem',
    lineHeight: '1.5',
  },
  bioBanner: {
    backgroundColor: 'var(--primary-dark)',
    color: 'var(--text-white)',
    padding: '5rem 0',
    position: 'relative',
    overflow: 'hidden',
    borderTop: '3px solid var(--accent-color)',
    borderBottom: '3px solid var(--accent-color)',
  },
  bioContainer: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '4rem',
    alignItems: 'center',
  },
  bioTextCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  bioLabel: {
    color: 'var(--accent-color)',
    fontSize: '0.85rem',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
  bioTitle: {
    color: 'var(--text-white)',
    fontSize: '2.5rem',
  },
  bioText: {
    color: '#E8DFD8',
    lineHeight: '1.7',
    fontSize: '1.05rem',
  },
  bioImgCol: {
    display: 'flex',
    justifyContent: 'center',
  },
  bioImg: {
    width: '100%',
    maxWidth: '350px',
    height: '420px',
    objectFit: 'cover',
    borderRadius: 'var(--radius-md)',
    border: '4px solid var(--accent-color)',
    boxShadow: 'var(--shadow-lg)',
  },
  eventRowCard: {
    backgroundColor: 'var(--bg-card)',
    padding: '2rem',
    borderRadius: 'var(--radius-md)',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--border-color)',
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-start',
    transition: 'var(--transition-smooth)',
  },
  eventDateBadge: {
    width: '70px',
    height: '70px',
    backgroundColor: 'var(--primary-color)',
    color: 'var(--text-white)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'var(--radius-sm)',
    border: '2px solid var(--accent-color)',
    shrink: 0,
  },
  eventDateDay: {
    fontSize: '1.6rem',
    fontWeight: '700',
    lineHeight: '1',
    color: 'var(--text-white)',
  },
  eventDateMonth: {
    fontSize: '0.75rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    color: 'var(--accent-color)',
  },
  eventDetails: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  festivalBadge: {
    backgroundColor: 'rgba(212, 175, 55, 0.15)',
    color: 'var(--primary-dark)',
    fontSize: '0.7rem',
    fontWeight: '700',
    padding: '0.2rem 0.5rem',
    borderRadius: '4px',
    width: 'fit-content',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    border: '1px solid var(--accent-color)',
  },
  eventRowTitle: {
    fontSize: '1.3rem',
    color: 'var(--primary-dark)',
  },
  eventRowLocation: {
    color: 'var(--text-light)',
    fontSize: '0.85rem',
    fontWeight: '500',
  },
  eventRowText: {
    color: 'var(--text-light)',
    fontSize: '0.9rem',
    lineHeight: '1.5',
    marginTop: '0.25rem',
  },
  aboutContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
  },
  aboutImgCol: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  aboutImg: {
    width: '100%',
    maxWidth: '480px',
    height: '400px',
    objectFit: 'cover',
    borderRadius: 'var(--radius-md)',
    border: '3px solid var(--accent-color)',
    boxShadow: 'var(--shadow-lg)',
  },
  aboutTextCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  aboutLabel: {
    color: 'var(--primary-color)',
    fontSize: '0.85rem',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
  aboutTitle: {
    color: 'var(--primary-dark)',
    fontSize: '2.5rem',
    lineHeight: '1.2',
  },
  aboutDivider: {
    width: '60px',
    height: '3px',
    backgroundColor: 'var(--accent-color)',
    borderRadius: '2px',
    marginBottom: '0.5rem',
  },
  aboutText: {
    color: 'var(--text-light)',
    lineHeight: '1.7',
    fontSize: '1.05rem',
  },
  aboutContainerStacked: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  aboutHeaderStacked: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  aboutTitleStacked: {
    color: 'var(--primary-dark)',
    fontSize: '2.5rem',
    lineHeight: '1.2',
    marginTop: '0.5rem',
    textAlign: 'center',
  },
  aboutDividerStacked: {
    width: '80px',
    height: '3px',
    backgroundColor: 'var(--accent-color)',
    borderRadius: '2px',
    marginTop: '0.75rem',
  },
  aboutImgColStacked: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  aboutImgStacked: {
    width: '100%',
    maxWidth: '750px',
    height: 'auto',
    maxHeight: '450px',
    objectFit: 'cover',
    borderRadius: 'var(--radius-md)',
    border: '3px solid var(--accent-color)',
    boxShadow: 'var(--shadow-lg)',
  },
  aboutTextColStacked: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    textAlign: 'left',
  },
  aboutButtonsStacked: {
    marginTop: '1.5rem',
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

// Simple media query style injection for responsive layout adjustments
const injectHomeMediaStyles = () => {
  if (typeof document !== 'undefined') {
    const styleId = 'home-media-queries';
    if (!document.getElementById(styleId)) {
      const styleSheet = document.createElement('style');
      styleSheet.id = styleId;
      styleSheet.innerText = `
        @media (max-width: 900px) {
          .about-container {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .about-img-col {
            order: -1 !important;
          }
          .bio-container {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .bio-img-col {
            order: -1 !important;
          }
          .hero-title {
            font-size: 2.5rem !important;
          }
        }
        @media (max-width: 600px) {
          .hero-section {
            padding: 4rem 0 !important;
          }
          .hero-title {
            font-size: 1.8rem !important;
            line-height: 1.3 !important;
          }
          .hero-subtitle {
            font-size: 1rem !important;
            margin-bottom: 1.5rem !important;
          }
          .bio-banner-section {
            padding: 3rem 0 !important;
          }
          .bio-title {
            font-size: 1.8rem !important;
          }
          .event-row-card {
            flex-direction: column !important;
            gap: 1rem !important;
          }
          .event-date-badge {
            flex-direction: row !important;
            width: auto !important;
            height: auto !important;
            padding: 0.5rem 1rem !important;
            gap: 0.5rem !important;
          }
          .event-date-day {
            font-size: 1.2rem !important;
          }
          .leader-card {
            max-width: 100% !important;
          }
        }
      `;
      document.head.appendChild(styleSheet);
    }
  }
};
injectHomeMediaStyles();

export default Home;
