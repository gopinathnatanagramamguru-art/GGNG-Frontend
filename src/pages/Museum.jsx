import React, { useEffect, useState } from 'react';
import { Landmark, Compass, Eye, Filter } from 'lucide-react';
import api from '../api';

const Museum = () => {
  const [exhibits, setExhibits] = useState([]);
  const [filteredExhibits, setFilteredExhibits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Filter States
  const [selectedFloor, setSelectedFloor] = useState('all'); // 'all', 1, 2, 3
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchExhibits = async () => {
      try {
        const data = await api.getExhibits();
        setExhibits(data);
        setFilteredExhibits(data);
        
        // Extract unique categories dynamically
        const uniqueCats = ['all', ...new Set(data.map(item => item.category))];
        setCategories(uniqueCats);
      } catch (err) {
        console.error('Failed to load exhibits:', err);
        setError('Unable to load exhibits at this moment. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchExhibits();
  }, []);

  // Handle Filtering
  useEffect(() => {
    let result = exhibits;
    
    if (selectedFloor !== 'all') {
      result = result.filter(item => item.floor === parseInt(selectedFloor));
    }
    
    if (selectedCategory !== 'all') {
      result = result.filter(item => item.category === selectedCategory);
    }
    
    setFilteredExhibits(result);
  }, [selectedFloor, selectedCategory, exhibits]);

  return (
    <div style={styles.page} className="animate-fade-up">
      {/* Header Banner */}
      <section className="banner-section" style={styles.banner}>
        <div className="container" style={styles.bannerContainer}>
          <span style={styles.govtLabel}>India's First Dance Museum</span>
          <h1 className="banner-title" style={styles.bannerTitle}>The Dance Museum Gallery</h1>
          <p style={styles.bannerSubtitle}>
            A three-storey treasure trove showcasing the history of classical dances, traditional instruments, murals, and archives of Guru Gopinath's life.
          </p>
        </div>
      </section>

      {/* Main Exhibition Layout */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          
          {/* Floor & Category Navigation Panel */}
          <div style={styles.filterWrapper}>
            <div style={styles.filterHeader}>
              <Filter size={18} color="var(--primary-color)" />
              <span style={styles.filterHeaderTitle}>Filter Galleries</span>
            </div>
            
            {/* Floor tabs */}
            <div className="floor-tabs" style={styles.floorTabs}>
              {[
                { label: 'All Galleries', val: 'all' },
                { label: 'Ground Floor', val: '1' },
                { label: 'First Floor', val: '2' },
                { label: 'Second Floor', val: '3' },
              ].map((tab) => (
                <button
                  key={tab.val}
                  onClick={() => setSelectedFloor(tab.val)}
                  className="floor-tab-btn"
                  style={{
                    ...styles.floorTabBtn,
                    backgroundColor: selectedFloor === tab.val ? 'var(--primary-color)' : 'transparent',
                    color: selectedFloor === tab.val ? 'var(--text-white)' : 'var(--text-dark)',
                    border: selectedFloor === tab.val ? '1px solid var(--primary-color)' : '1px solid var(--border-color)',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Category selection */}
            <div className="category-filters" style={styles.categoryFilters}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    ...styles.categoryBtn,
                    backgroundColor: selectedCategory === cat ? 'var(--accent-color)' : 'var(--bg-card)',
                    color: selectedCategory === cat ? 'var(--primary-dark)' : 'var(--text-light)',
                    borderColor: selectedCategory === cat ? 'var(--accent-color)' : 'var(--border-color)',
                  }}
                >
                  {cat === 'all' ? 'All Mediums' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Exhibition Grid */}
          {loading ? (
            <div style={styles.statusContainer}>
              <div style={styles.spinner} />
              <p>Exploring artifacts...</p>
            </div>
          ) : error ? (
            <div style={styles.statusContainer}>
              <p style={{ color: 'var(--primary-light)' }}>{error}</p>
            </div>
          ) : filteredExhibits.length === 0 ? (
            <div style={styles.statusContainer}>
              <p style={{ color: 'var(--text-light)' }}>No exhibits match your search criteria. Try changing filters.</p>
            </div>
          ) : (
            <div className="grid-3" style={styles.grid}>
              {filteredExhibits.map((item) => (
                <div key={item._id} style={styles.exhibitCard} className="animate-fade-up">
                  <div style={styles.cardImgWrapper}>
                    <img
                      src={item.imageURL || 'https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=600&auto=format&fit=crop'}
                      alt={item.title}
                      style={styles.cardImg}
                    />
                    <span style={styles.cardFloor}>
                      {item.floor === 1 ? 'Ground Floor' : item.floor === 2 ? 'First Floor' : item.floor === 3 ? 'Second Floor' : `Floor ${item.floor}`}
                    </span>
                  </div>
                  <div style={styles.cardInfo}>
                    <span style={styles.cardCat}>{item.category}</span>
                    <h3 style={styles.cardTitle}>{item.title}</h3>
                    <p style={styles.cardDesc}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Interactive virtual museum walkthrough guidelines */}
          <div className="guide-box" style={styles.guideBox}>
            <Landmark size={32} color="var(--accent-color)" />
            <div>
              <h3 style={styles.guideTitle}>Visitor Information & Guided Tours</h3>
              <p style={styles.guideText}>
                The museum is located within the Vattiyoorkavu campus and is open to the public from **Tuesday to Sunday, 10:00 AM to 5:00 PM**. Cultural guides are available at the Ground Floor reception counter to guide student delegations and tourists through the collections. For group booking requests, please submit an inquiry form on our contact page.
              </p>
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
    backgroundImage: 'linear-gradient(rgba(74, 14, 20, 0.88), rgba(74, 14, 20, 0.94)), url("https://images.unsplash.com/photo-1599839620722-49e54fcdf0a4?q=80&w=1200&auto=format&fit=crop")',
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
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
  filterWrapper: {
    backgroundColor: 'var(--bg-card)',
    padding: '1.5rem',
    borderRadius: 'var(--radius-md)',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--border-color)',
    marginBottom: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  filterHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid var(--border-color)',
  },
  filterHeaderTitle: {
    fontWeight: '600',
    color: 'var(--primary-dark)',
    fontSize: '0.95rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  floorTabs: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
  },
  floorTabBtn: {
    padding: '0.6rem 1.2rem',
    borderRadius: 'var(--radius-sm)',
    fontWeight: '600',
    fontSize: '0.85rem',
    cursor: 'pointer',
    transition: 'var(--transition-smooth)',
  },
  categoryFilters: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
    marginTop: '0.25rem',
  },
  categoryBtn: {
    padding: '0.4rem 0.8rem',
    borderRadius: '20px',
    border: '1px solid var(--border-color)',
    fontSize: '0.8rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'var(--transition-fast)',
  },
  grid: {
    marginTop: '1.5rem',
  },
  exhibitCard: {
    backgroundColor: 'var(--bg-card)',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-sm)',
    transition: 'var(--transition-smooth)',
    display: 'flex',
    flexDirection: 'column',
  },
  cardImgWrapper: {
    position: 'relative',
    height: '220px',
    overflow: 'hidden',
  },
  cardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardFloor: {
    position: 'absolute',
    bottom: '0.75rem',
    left: '0.75rem',
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: 'var(--accent-light)',
    padding: '0.25rem 0.6rem',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: '600',
  },
  cardInfo: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    flexGrow: 1,
  },
  cardCat: {
    fontSize: '0.75rem',
    color: 'var(--accent-dark)',
    textTransform: 'uppercase',
    fontWeight: '600',
    letterSpacing: '0.5px',
  },
  cardTitle: {
    fontSize: '1.25rem',
    color: 'var(--primary-dark)',
  },
  cardDesc: {
    color: 'var(--text-light)',
    fontSize: '0.9rem',
    lineHeight: '1.5',
  },
  statusContainer: {
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
  guideBox: {
    backgroundColor: 'var(--bg-alt)',
    padding: '2rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid rgba(212,175,55,0.2)',
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'flex-start',
    marginTop: '4rem',
  },
  guideTitle: {
    fontSize: '1.25rem',
    color: 'var(--primary-dark)',
    marginBottom: '0.5rem',
  },
  guideText: {
    color: 'var(--text-light)',
    fontSize: '0.9rem',
    lineHeight: '1.6',
  },
};

// Injected dynamic spin animation styles
const injectMuseumMediaStyles = () => {
  if (typeof document !== 'undefined') {
    const styleId = 'museum-media-queries';
    if (!document.getElementById(styleId)) {
      const styleSheet = document.createElement('style');
      styleSheet.id = styleId;
      styleSheet.innerText = `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .floor-tabs {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .floor-tab-btn {
            text-align: center !important;
          }
          .guide-box {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
        }
        @media (max-width: 600px) {
          .banner-section {
            padding: 2.5rem 0 !important;
          }
          .banner-title {
            font-size: 1.8rem !important;
          }
          .category-filters {
            gap: 0.5rem !important;
          }
        }
      `;
      document.head.appendChild(styleSheet);
    }
  }
};
injectMuseumMediaStyles();

export default Museum;
