import React, { useEffect, useState } from 'react';
import { GraduationCap, Clock, Award, ShieldAlert, BadgeInfo } from 'lucide-react';
import api from '../api';

const getCourseBackgroundImage = (title) => {
  const normalizedTitle = title.toLowerCase().trim();
  
  if (normalizedTitle.includes('kathakali')) {
    return '/kathakali_museum.png';
  }
  if (normalizedTitle.includes('kerala natanam')) {
    return 'https://images.unsplash.com/photo-1578996834254-13d1b661a5ee?q=80&w=600&auto=format&fit=crop';
  }
  if (normalizedTitle.includes('bharathanatyam') || normalizedTitle.includes('bharatanatyam')) {
    return 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop';
  }
  if (normalizedTitle.includes('veena')) {
    return 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=600&auto=format&fit=crop';
  }
  if (normalizedTitle.includes('violin')) {
    return 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=600&auto=format&fit=crop';
  }
  if (normalizedTitle.includes('tabla') || normalizedTitle.includes('thabla')) {
    return 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=600&auto=format&fit=crop';
  }
  if (normalizedTitle.includes('keyboard')) {
    return 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=600&auto=format&fit=crop';
  }
  if (normalizedTitle.includes('guitar')) {
    return 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=600&auto=format&fit=crop';
  }
  if (normalizedTitle.includes('drum')) {
    return 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=600&auto=format&fit=crop';
  }
  if (normalizedTitle.includes('ottanthullal') || normalizedTitle.includes('thullal')) {
    return 'https://images.unsplash.com/photo-1561542320-9a18cd340469?q=80&w=600&auto=format&fit=crop';
  }
  if (normalizedTitle.includes('sangeetham') || normalizedTitle.includes('vocal') || normalizedTitle.includes('singing') || normalizedTitle.includes('music')) {
    return 'https://images.unsplash.com/photo-1516280440614-37939bbacd6a?q=80&w=600&auto=format&fit=crop';
  }
  if (normalizedTitle.includes('drawing') || normalizedTitle.includes('paint')) {
    return 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop';
  }
  
  return 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600&auto=format&fit=crop';
};

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Course Admission Inquiry',
    message: '',
    courseInterest: '',
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await api.getCourses();
        // Sort courses to put featured courses first
        const sortedData = [...data].sort((a, b) => {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();
          const isAFeatured = titleA.includes('kerala natanam certificate') || titleA.includes('integrated diploma');
          const isBFeatured = titleB.includes('kerala natanam certificate') || titleB.includes('integrated diploma');
          
          if (isAFeatured && !isBFeatured) return -1;
          if (!isAFeatured && isBFeatured) return 1;
          return 0;
        });
        setCourses(sortedData);
      } catch (err) {
        console.error(err);
        setError('Could not load course list at this moment.');
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectCourse = (courseTitle) => {
    setFormData({
      ...formData,
      courseInterest: courseTitle,
      message: `I am interested in joining the ${courseTitle} batch. Please send details.`,
    });
    // Scroll to form smoothly
    const formSection = document.getElementById('inquiry-form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.courseInterest) {
      setSubmitError('Please fill out all required fields, including selecting a course.');
      setSubmitting(false);
      return;
    }

    try {
      await api.submitInquiry(formData);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Course Admission Inquiry',
        message: '',
        courseInterest: '',
      });
    } catch (err) {
      console.error(err);
      setSubmitError('Failed to send inquiry. Please try again or call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={styles.page} className="animate-fade-up">
      <section className="banner-section" style={styles.banner}>
        <div className="container" style={styles.bannerContainer}>
          <span style={styles.govtLabel}>Department of Culture, Govt. of Kerala</span>
          <h1 className="banner-title" style={styles.bannerTitle}>Courses & Training Programs</h1>
          <p style={styles.bannerSubtitle}>
            Enroll in structured certificate and diploma batches recognized by government authorities, coached by eminent artists.
          </p>
        </div>
      </section>

      {/* Schedule & Fees Highlights */}
      <section style={styles.highlightsSection}>
        <div className="container highlights-container" style={styles.highlightsContainer}>
          <div style={styles.highlightCard}>
            <div style={styles.highlightHeader}>
              <Clock size={22} color="var(--accent-color)" />
              <h4 style={styles.highlightTitle}>Batch Timings & Schedules</h4>
            </div>
            <div style={styles.highlightBody}>
              <div style={styles.batchItem}>
                <span style={styles.batchBadge}>Batch 1</span>
                <span style={styles.batchText}>Tuesday, Wednesday, and Thursday &mdash; <strong>4:30 PM to 6:00 PM</strong></span>
              </div>
              <div style={styles.batchItem}>
                <span style={styles.batchBadge}>Batch 2</span>
                <span style={styles.batchText}>Friday <strong>4:40 PM - 6:00 PM</strong>, Saturday <strong>4:00 PM - 6:00 PM</strong>, Sunday <strong>10:00 AM - 12:30 PM</strong></span>
              </div>
            </div>
          </div>
          
          <div style={styles.highlightCard}>
            <div style={styles.highlightHeader}>
              <Award size={22} color="var(--accent-color)" />
              <h4 style={styles.highlightTitle}>Fee Structure</h4>
            </div>
            <div className="fee-grid" style={styles.feeGrid}>
              <div style={styles.feeCol}>
                <h5 style={styles.feeColTitle}>Students (Children)</h5>
                <ul style={styles.feeList}>
                  <li><strong>1 Subject:</strong> Rs. 500/month <span style={styles.feeBreakdown}>(+ Rs. 200 Admission Fee = <strong>Rs. 700/-</strong> Total)</span></li>
                  <li><strong>2 Subjects:</strong> Rs. 600/month <span style={styles.feeBreakdown}>(+ Rs. 200 Admission Fee = <strong>Rs. 800/-</strong> Total)</span></li>
                </ul>
              </div>
              <div style={styles.feeCol}>
                <h5 style={styles.feeColTitle}>Adults</h5>
                <ul style={styles.feeList}>
                  <li><strong>1 Subject:</strong> Rs. 600/month <span style={styles.feeBreakdown}>(+ Rs. 200 Admission Fee = <strong>Rs. 800/-</strong> Total)</span></li>
                  <li><strong>2 Subjects:</strong> Rs. 800/month <span style={styles.feeBreakdown}>(+ Rs. 200 Admission Fee = <strong>Rs. 1,000/-</strong> Total)</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="container main-grid" style={styles.mainGrid}>
          
          {/* Left Column: Course Cards */}
          <div style={styles.coursesColumn}>
            {loading ? (
              <div style={styles.loaderContainer}>
                <div style={styles.spinner} />
                <p>Loading course directory...</p>
              </div>
            ) : error ? (
              <p style={{ color: 'var(--primary-light)', textAlign: 'center' }}>{error}</p>
            ) : courses.length === 0 ? (
              <p style={{ textAlign: 'center', color: 'var(--text-light)' }}>No courses available currently.</p>
            ) : (
              <div style={styles.coursesGrid}>
                {courses.map((course, index) => {
                  const isFeatured = course.title.toLowerCase().includes('kerala natanam certificate') || course.title.toLowerCase().includes('integrated diploma');
                  return (
                    <div 
                      key={course._id} 
                      style={{
                        ...styles.courseCard,
                        ...(isFeatured ? styles.featuredCourseCard : {})
                      }} 
                      className={`card-hover animate-fade-up delay-${(index % 3) + 1}`}
                    >
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url("${getCourseBackgroundImage(course.title)}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(5px)',
                        transform: 'translate3d(0,0,0) scale(1.15)',
                        willChange: 'transform',
                        opacity: 0.12,
                        zIndex: 1,
                      }} />
                      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem' }}>
                        <div style={styles.courseHeader}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                            <span style={styles.courseCategory}>{course.category}</span>
                            {isFeatured && (
                              <span style={styles.featuredBadge}>★ Featured Program</span>
                            )}
                          </div>
                          <h3 style={styles.courseTitle}>{course.title}</h3>
                        </div>
                      <div className="course-meta" style={styles.courseMeta}>
                        <div style={styles.metaItem}>
                          <Award size={16} color="var(--primary-color)" />
                          <span><strong>Fee:</strong> {course.fee}</span>
                        </div>
                        <div style={styles.metaItem}>
                          <BadgeInfo size={16} color="var(--primary-color)" />
                          <span><strong>Timings:</strong> {course.timing}</span>
                        </div>
                      </div>
                      <p style={styles.courseDesc}>{course.description}</p>
                      <button 
                        onClick={() => handleSelectCourse(course.title)}
                        className="btn btn-outline" 
                        style={styles.applyBtn}
                      >
                        Inquire Admission
                      </button>
                    </div>
                  </div>
                );
              })}
              </div>
            )}
          </div>

          {/* Right Column: Admission Inquiry Form */}
          <div id="inquiry-form-section" className="form-column" style={styles.formColumn}>
            <div style={styles.formCard}>
              <h3 style={styles.formTitle}>Admission Inquiry Form</h3>
              <p style={styles.formSubtitle}>Submit this form to express interest, and our registrar office will contact you with batch details.</p>
              
              {submitSuccess && (
                <div style={styles.successAlert}>
                  ✓ Inquiry submitted successfully! Our office will contact you shortly.
                </div>
              )}

              {submitError && (
                <div style={styles.errorAlert}>
                  ⚠ {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit} style={styles.form}>
                <div className="form-group">
                  <label htmlFor="courseInterest">Select Course *</label>
                  <select
                    name="courseInterest"
                    id="courseInterest"
                    value={formData.courseInterest}
                    onChange={handleChange}
                    className="form-control"
                    required
                  >
                    <option value="">-- Choose a Program --</option>
                    {courses.map((c) => (
                      <option key={c._id} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>

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
                  <label htmlFor="message">Questions / Remarks</label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Write details or requests..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={submitting} 
                  className="btn btn-accent" 
                  style={{ width: '100%', marginTop: '0.5rem' }}
                >
                  {submitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </form>
            </div>

            <div style={styles.alertCard}>
              <ShieldAlert size={20} color="var(--primary-color)" style={{ shrink: 0 }} />
              <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
                <strong>Govt. Recognition Notice:</strong> Certificates and diplomas are officially awarded by Guru Gopinath Natanagramam under the auspices of the Department of Culture, Govt. of Kerala.
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
    backgroundImage: 'linear-gradient(rgba(74, 14, 20, 0.88), rgba(74, 14, 20, 0.94)), url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop")',
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
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '3rem',
    alignItems: 'start',
  },
  coursesColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  coursesGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  courseCard: {
    backgroundColor: 'var(--bg-card)',
    padding: '2rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-sm)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    position: 'relative',
    overflow: 'hidden',
  },
  featuredCourseCard: {
    borderColor: 'var(--accent-color)',
    borderWidth: '2px',
    boxShadow: 'var(--shadow-gold)',
  },
  featuredBadge: {
    backgroundColor: 'rgba(212, 175, 55, 0.15)',
    color: 'var(--accent-dark)',
    padding: '0.25rem 0.6rem',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    border: '1px solid var(--accent-color)',
    display: 'inline-block',
    marginBottom: '0.5rem',
  },
  courseHeader: {
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '0.75rem',
  },
  courseCategory: {
    backgroundColor: 'var(--bg-alt)',
    color: 'var(--primary-color)',
    padding: '0.25rem 0.6rem',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    display: 'inline-block',
    marginBottom: '0.5rem',
    border: '1px solid rgba(122,26,37,0.1)',
  },
  courseTitle: {
    fontSize: '1.4rem',
    color: 'var(--primary-dark)',
  },
  courseMeta: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    fontSize: '0.9rem',
    backgroundColor: 'var(--bg-alt)',
    padding: '1rem',
    borderRadius: 'var(--radius-sm)',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  courseDesc: {
    color: 'var(--text-light)',
    fontSize: '0.95rem',
    lineHeight: '1.6',
  },
  applyBtn: {
    width: 'fit-content',
    padding: '0.6rem 1.2rem',
    fontSize: '0.9rem',
  },
  formColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    position: 'sticky',
    top: '100px',
  },
  formCard: {
    backgroundColor: 'var(--bg-card)',
    padding: '2rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-md)',
  },
  formTitle: {
    fontSize: '1.4rem',
    color: 'var(--primary-dark)',
    marginBottom: '0.5rem',
  },
  formSubtitle: {
    color: 'var(--text-light)',
    fontSize: '0.85rem',
    lineHeight: '1.4',
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
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
  alertCard: {
    backgroundColor: 'var(--bg-alt)',
    padding: '1.25rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
  },
  loaderContainer: {
    textAlign: 'center',
    padding: '3rem 0',
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
    highlightsSection: {
      backgroundColor: 'var(--primary-dark)',
      color: 'var(--text-white)',
      padding: '3rem 0',
      borderBottom: '4px solid var(--accent-color)',
      backgroundImage: 'linear-gradient(rgba(42, 6, 10, 0.95), rgba(42, 6, 10, 0.98)), url("https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    highlightsContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2.5rem',
    },
    highlightCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.04)',
      border: '1px solid rgba(212, 175, 55, 0.25)',
      borderRadius: 'var(--radius-md)',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
      boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
      backdropFilter: 'blur(10px)',
    },
    highlightHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
      paddingBottom: '0.75rem',
    },
    highlightTitle: {
      fontSize: '1.3rem',
      color: 'var(--accent-light)',
      margin: 0,
      fontWeight: '600',
    },
    highlightBody: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
    },
    batchItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.85rem',
    },
    batchBadge: {
      backgroundColor: 'var(--accent-color)',
      color: 'var(--primary-dark)',
      padding: '0.25rem 0.6rem',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      flexShrink: 0,
      boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
    },
    batchText: {
      fontSize: '0.95rem',
      lineHeight: '1.6',
      color: '#EADFD7',
    },
    feeGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2rem',
    },
    feeCol: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
    },
    feeColTitle: {
      fontSize: '1.05rem',
      color: 'var(--accent-color)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      paddingBottom: '0.4rem',
      marginBottom: '0.25rem',
      fontWeight: '600',
    },
    feeList: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      fontSize: '0.9rem',
    },
    feeBreakdown: {
      display: 'block',
      fontSize: '0.8rem',
      color: '#C4B5B0',
      marginTop: '0.15rem',
    },
  };
  
  // Injected dynamic media styles
  const injectCoursesMediaStyles = () => {
    if (typeof document !== 'undefined') {
      const styleId = 'courses-media-queries';
      if (!document.getElementById(styleId)) {
        const styleSheet = document.createElement('style');
        styleSheet.id = styleId;
        styleSheet.innerText = `
          @media (max-width: 900px) {
            .main-grid {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
            }
            .form-column {
              position: static !important;
            }
            .highlights-container {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
          }
          @media (max-width: 600px) {
            .banner-section {
              padding: 2.5rem 0 !important;
            }
            .banner-title {
              font-size: 1.8rem !important;
            }
            .course-meta {
              grid-template-columns: 1fr !important;
              gap: 0.75rem !important;
            }
            .fee-grid {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }
          }
        `;
        document.head.appendChild(styleSheet);
      }
    }
  };
  injectCoursesMediaStyles();

export default Courses;
