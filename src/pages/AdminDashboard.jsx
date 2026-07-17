import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Landmark, GraduationCap, Calendar, Mail, Plus, Trash2, Edit2, CheckCircle, Archive, LogOut, Check } from 'lucide-react';
import api from '../api';

const AdminDashboard = () => {
  const navigate = useNavigate();
  
  // Dashboard state
  const [activeTab, setActiveTab] = useState('inquiries'); // 'inquiries', 'exhibits', 'courses', 'events'
  const [inquiries, setInquiries] = useState([]);
  const [exhibits, setExhibits] = useState([]);
  const [courses, setCourses] = useState([]);
  const [events, setEvents] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Form states (Add/Edit)
  const [isEditing, setIsEditing] = useState(false); // true if editing
  const [editId, setEditId] = useState(null); // id of item being edited
  const [showAddForm, setShowAddForm] = useState(false);

  // Form Fields State
  const [exhibitForm, setExhibitForm] = useState({ title: '', floor: 1, category: '', description: '', imageURL: '' });
  const [courseForm, setCourseForm] = useState({ title: '', category: 'Dance', timing: '', duration: 'N/A', fee: '', description: '' });
  const [eventForm, setEventForm] = useState({ title: '', date: '', description: '', location: '', imageURL: '', isFestival: false });

  // Load Admin Profile Verification
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.verifyToken();
        loadTabData();
      } catch (err) {
        console.error(err);
        localStorage.removeItem('adminToken');
        navigate('/login');
      }
    };
    checkAuth();
  }, [activeTab]);

  const loadTabData = async () => {
    setLoading(true);
    setError(null);
    try {
      if (activeTab === 'inquiries') {
        const data = await api.getInquiries();
        setInquiries(data);
      } else if (activeTab === 'exhibits') {
        const data = await api.getExhibits();
        setExhibits(data);
      } else if (activeTab === 'courses') {
        const data = await api.getCourses();
        setCourses(data);
      } else if (activeTab === 'events') {
        const data = await api.getEvents();
        setEvents(data);
      }
    } catch (err) {
      console.error(err);
      setError(`Failed to retrieve ${activeTab} data.`);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/login');
  };

  // --- CRUD OPERATIONS ---

  // INQUIRIES
  const handleInquiryStatus = async (id, status) => {
    try {
      await api.updateInquiryStatus(id, status);
      loadTabData();
    } catch (err) {
      alert('Failed to update status');
    }
  };

  const handleDeleteInquiry = async (id) => {
    if (window.confirm('Delete this inquiry permanently?')) {
      try {
        await api.deleteInquiry(id);
        loadTabData();
      } catch (err) {
        alert('Failed to delete inquiry');
      }
    }
  };

  // EXHIBITS
  const handleExhibitSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await api.updateExhibit(editId, exhibitForm);
      } else {
        await api.createExhibit(exhibitForm);
      }
      resetForm();
      loadTabData();
    } catch (err) {
      alert('Error submitting exhibit form');
    }
  };

  const startEditExhibit = (item) => {
    setIsEditing(true);
    setEditId(item._id);
    setExhibitForm({
      title: item.title,
      floor: item.floor,
      category: item.category,
      description: item.description,
      imageURL: item.imageURL
    });
    setShowAddForm(true);
  };

  const handleDeleteExhibit = async (id) => {
    if (window.confirm('Delete this exhibit permanently?')) {
      try {
        await api.deleteExhibit(id);
        loadTabData();
      } catch (err) {
        alert('Failed to delete exhibit');
      }
    }
  };

  // COURSES
  const handleCourseSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await api.updateCourse(editId, courseForm);
      } else {
        await api.createCourse(courseForm);
      }
      resetForm();
      loadTabData();
    } catch (err) {
      alert('Error submitting course form');
    }
  };

  const startEditCourse = (item) => {
    setIsEditing(true);
    setEditId(item._id);
    setCourseForm({
      title: item.title,
      category: item.category,
      timing: item.timing,
      duration: item.duration,
      fee: item.fee,
      description: item.description
    });
    setShowAddForm(true);
  };

  const handleDeleteCourse = async (id) => {
    if (window.confirm('Delete this course permanently?')) {
      try {
        await api.deleteCourse(id);
        loadTabData();
      } catch (err) {
        alert('Failed to delete course');
      }
    }
  };

  // EVENTS
  const handleEventSubmit = async (e) => {
    e.preventDefault();
    try {
      // Format date for backend model saving
      const dataToSubmit = { ...eventForm };
      if (isEditing) {
        await api.updateEvent(editId, dataToSubmit);
      } else {
        await api.createEvent(dataToSubmit);
      }
      resetForm();
      loadTabData();
    } catch (err) {
      alert('Error submitting event form');
    }
  };

  const startEditEvent = (item) => {
    setIsEditing(true);
    setEditId(item._id);
    // Format date string to match input field format: YYYY-MM-DDThh:mm
    const dateObj = new Date(item.date);
    const dateString = dateObj.toISOString().slice(0, 16);
    
    setEventForm({
      title: item.title,
      date: dateString,
      description: item.description,
      location: item.location,
      imageURL: item.imageURL,
      isFestival: item.isFestival
    });
    setShowAddForm(true);
  };

  const handleDeleteEvent = async (id) => {
    if (window.confirm('Delete this event permanently?')) {
      try {
        await api.deleteEvent(id);
        loadTabData();
      } catch (err) {
        alert('Failed to delete event');
      }
    }
  };

  const resetForm = () => {
    setIsEditing(false);
    setEditId(null);
    setShowAddForm(false);
    setExhibitForm({ title: '', floor: 1, category: '', description: '', imageURL: '' });
    setCourseForm({ title: '', category: 'Dance', timing: '', duration: 'N/A', fee: '', description: '' });
    setEventForm({ title: '', date: '', description: '', location: '', imageURL: '', isFestival: false });
  };

  return (
    <div style={styles.page} className="animate-fade-up">
      {/* Top Banner Dashboard */}
      <header style={styles.dashHeader}>
        <div className="container" style={styles.dashHeaderContainer}>
          <div>
            <span style={styles.govTag}>Official System Control Panel</span>
            <h1 style={styles.dashTitle}>Natanagramam Management System</h1>
          </div>
          <button onClick={handleLogout} style={styles.logoutBtn}>
            Sign Out <LogOut size={16} style={{ marginLeft: '8px' }} />
          </button>
        </div>
      </header>

      {/* Navigation tabs */}
      <section style={styles.tabSection}>
        <div className="container" style={styles.tabContainer}>
          {[
            { id: 'inquiries', label: 'Inquiries', icon: <Mail size={18} /> },
            { id: 'exhibits', label: 'Museum Exhibits', icon: <Landmark size={18} /> },
            { id: 'courses', label: 'Art Courses', icon: <GraduationCap size={18} /> },
            { id: 'events', label: 'Events Calendar', icon: <Calendar size={18} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); resetForm(); }}
              style={{
                ...styles.tabBtn,
                borderBottom: activeTab === tab.id ? '3px solid var(--accent-color)' : '3px solid transparent',
                color: activeTab === tab.id ? 'var(--accent-color)' : 'var(--text-white)',
                backgroundColor: activeTab === tab.id ? 'rgba(255,255,255,0.08)' : 'transparent',
              }}
            >
              {tab.icon}
              <span style={{ marginLeft: '8px' }}>{tab.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Main Board Panel */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-main)', minHeight: '60vh' }}>
        <div className="container">
          
          {/* Action Row */}
          {activeTab !== 'inquiries' && !showAddForm && (
            <div style={styles.actionRow}>
              <button onClick={() => setShowAddForm(true)} className="btn btn-primary">
                <Plus size={18} style={{ marginRight: '8px' }} /> Add New {activeTab === 'exhibits' ? 'Exhibit' : activeTab === 'courses' ? 'Course' : 'Event'}
              </button>
            </div>
          )}

          {/* Forms Section */}
          {showAddForm && (
            <div style={styles.formContainer}>
              <div style={styles.formCard}>
                <h3 style={styles.formHeader}>
                  {isEditing ? 'Modify Existing' : 'Create New'} {activeTab === 'exhibits' ? 'Exhibit' : activeTab === 'courses' ? 'Course' : 'Event'}
                </h3>
                
                {/* EXHIBIT FORM */}
                {activeTab === 'exhibits' && (
                  <form onSubmit={handleExhibitSubmit}>
                    <div className="grid-2">
                      <div className="form-group">
                        <label htmlFor="title">Exhibit Title *</label>
                        <input
                          type="text"
                          value={exhibitForm.title}
                          onChange={(e) => setExhibitForm({ ...exhibitForm, title: e.target.value })}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="category">Category / Medium *</label>
                        <input
                          type="text"
                          value={exhibitForm.category}
                          onChange={(e) => setExhibitForm({ ...exhibitForm, category: e.target.value })}
                          className="form-control"
                          placeholder="e.g. Mural, Sculpture, Costume"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid-2">
                      <div className="form-group">
                        <label htmlFor="floor">Floor Level *</label>
                        <select
                          value={exhibitForm.floor}
                          onChange={(e) => setExhibitForm({ ...exhibitForm, floor: parseInt(e.target.value) })}
                          className="form-control"
                          required
                        >
                          <option value={1}>Ground Floor</option>
                          <option value={2}>First Floor</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="imageURL">Display Image URL</label>
                        <input
                          type="url"
                          value={exhibitForm.imageURL}
                          onChange={(e) => setExhibitForm({ ...exhibitForm, imageURL: e.target.value })}
                          className="form-control"
                          placeholder="Unsplash image or static asset link"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">Exhibit Description *</label>
                      <textarea
                        value={exhibitForm.description}
                        onChange={(e) => setExhibitForm({ ...exhibitForm, description: e.target.value })}
                        className="form-control"
                        required
                      />
                    </div>
                    <div style={styles.formActions}>
                      <button type="submit" className="btn btn-primary">{isEditing ? 'Save Changes' : 'Create'}</button>
                      <button type="button" onClick={resetForm} className="btn btn-outline">Cancel</button>
                    </div>
                  </form>
                )}

                {/* COURSE FORM */}
                {activeTab === 'courses' && (
                  <form onSubmit={handleCourseSubmit}>
                    <div className="grid-2">
                      <div className="form-group">
                        <label htmlFor="title">Course Title *</label>
                        <input
                          type="text"
                          value={courseForm.title}
                          onChange={(e) => setCourseForm({ ...courseForm, title: e.target.value })}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="category">Category *</label>
                        <select
                          value={courseForm.category}
                          onChange={(e) => setCourseForm({ ...courseForm, category: e.target.value })}
                          className="form-control"
                          required
                        >
                          <option value="Dance">Dance</option>
                          <option value="Vocal Music">Vocal Music</option>
                          <option value="Instrumental Music">Instrumental Music</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid-2">
                      <div className="form-group">
                        <label htmlFor="fee">Tuition Fee *</label>
                        <input
                          type="text"
                          value={courseForm.fee}
                          onChange={(e) => setCourseForm({ ...courseForm, fee: e.target.value })}
                          className="form-control"
                          placeholder="e.g. Rs. 500 per month"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="timing">Batch Timings *</label>
                        <input
                          type="text"
                          value={courseForm.timing}
                          onChange={(e) => setCourseForm({ ...courseForm, timing: e.target.value })}
                          className="form-control"
                          placeholder="e.g. Saturdays (10 AM - 12 PM)"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">Course Description *</label>
                      <textarea
                        value={courseForm.description}
                        onChange={(e) => setCourseForm({ ...courseForm, description: e.target.value })}
                        className="form-control"
                        required
                      />
                    </div>
                    <div style={styles.formActions}>
                      <button type="submit" className="btn btn-primary">{isEditing ? 'Save Changes' : 'Create'}</button>
                      <button type="button" onClick={resetForm} className="btn btn-outline">Cancel</button>
                    </div>
                  </form>
                )}

                {/* EVENT FORM */}
                {activeTab === 'events' && (
                  <form onSubmit={handleEventSubmit}>
                    <div className="grid-2">
                      <div className="form-group">
                        <label htmlFor="title">Event Title *</label>
                        <input
                          type="text"
                          value={eventForm.title}
                          onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="date">Scheduled Date & Time *</label>
                        <input
                          type="datetime-local"
                          value={eventForm.date}
                          onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid-2">
                      <div className="form-group">
                        <label htmlFor="location">Event Location</label>
                        <input
                          type="text"
                          value={eventForm.location}
                          onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })}
                          className="form-control"
                          placeholder="Main Auditorium, Natanagramam"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="imageURL">Promo Image URL</label>
                        <input
                          type="url"
                          value={eventForm.imageURL}
                          onChange={(e) => setEventForm({ ...eventForm, imageURL: e.target.value })}
                          className="form-control"
                          placeholder="Unsplash banner link"
                        />
                      </div>
                    </div>
                    <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      <input
                        type="checkbox"
                        id="isFestival"
                        checked={eventForm.isFestival}
                        onChange={(e) => setEventForm({ ...eventForm, isFestival: e.target.checked })}
                        style={{ width: '20px', height: '20px' }}
                      />
                      <label htmlFor="isFestival" style={{ margin: 0, cursor: 'pointer' }}>Mark as Guru Gopinath National Dance Festival Event</label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">Event description *</label>
                      <textarea
                        value={eventForm.description}
                        onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
                        className="form-control"
                        required
                      />
                    </div>
                    <div style={styles.formActions}>
                      <button type="submit" className="btn btn-primary">{isEditing ? 'Save Changes' : 'Create'}</button>
                      <button type="button" onClick={resetForm} className="btn btn-outline">Cancel</button>
                    </div>
                  </form>
                )}

              </div>
            </div>
          )}

          {/* Records Display Board */}
          {loading ? (
            <div style={styles.statusBox}>
              <div style={styles.spinner} />
              <p>Loading database records...</p>
            </div>
          ) : error ? (
            <div style={styles.statusBox}>
              <p style={{ color: 'var(--primary-light)' }}>{error}</p>
            </div>
          ) : (
            <div>
              {/* INQUIRIES LISTING */}
              {activeTab === 'inquiries' && (
                <div style={styles.inquiriesContainer}>
                  {inquiries.length === 0 ? (
                    <p style={styles.emptyText}>No inquiries have been submitted yet.</p>
                  ) : (
                    inquiries.map((inquiry) => (
                      <div 
                        key={inquiry._id} 
                        style={{
                          ...styles.inquiryRow,
                          borderLeft: inquiry.status === 'Pending' ? '4px solid var(--primary-color)' : '4px solid #adb5bd'
                        }}
                      >
                        <div style={styles.inquiryHeader}>
                          <div>
                            <h4 style={styles.inquiryName}>{inquiry.name}</h4>
                            <span style={styles.inquiryContact}>✉ {inquiry.email} | 📞 {inquiry.phone}</span>
                          </div>
                          <div style={styles.inquiryBadges}>
                            {inquiry.courseInterest && (
                              <span style={styles.courseBadge}>Course: {inquiry.courseInterest}</span>
                            )}
                            <span style={{
                              ...styles.statusBadge,
                              backgroundColor: inquiry.status === 'Pending' ? '#ffe8cc' : inquiry.status === 'Read' ? '#d3f9d8' : '#f1f3f5',
                              color: inquiry.status === 'Pending' ? '#d9480f' : inquiry.status === 'Read' ? '#2b8a3e' : '#495057',
                            }}>
                              {inquiry.status}
                            </span>
                          </div>
                        </div>
                        <div style={styles.inquiryBody}>
                          <p><strong>Subject:</strong> {inquiry.subject}</p>
                          <p style={{ marginTop: '0.5rem', whiteSpace: 'pre-line' }}>{inquiry.message}</p>
                        </div>
                        <div style={styles.inquiryActions}>
                          {inquiry.status !== 'Read' && (
                            <button onClick={() => handleInquiryStatus(inquiry._id, 'Read')} style={styles.actBtn} title="Mark as Read">
                              <Check size={16} /> Mark Read
                            </button>
                          )}
                          {inquiry.status !== 'Archived' && (
                            <button onClick={() => handleInquiryStatus(inquiry._id, 'Archived')} style={styles.actBtn} title="Archive Inquiry">
                              <Archive size={16} /> Archive
                            </button>
                          )}
                          <button onClick={() => handleDeleteInquiry(inquiry._id)} style={{ ...styles.actBtn, color: 'var(--primary-light)' }} title="Delete Inquiry">
                            <Trash2 size={16} /> Delete
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* EXHIBITS LISTING */}
              {activeTab === 'exhibits' && !showAddForm && (
                <div style={styles.tableCard}>
                  {exhibits.length === 0 ? (
                    <p style={styles.emptyText}>No exhibits in catalog.</p>
                  ) : (
                    <table style={styles.table}>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Floor</th>
                          <th>Category</th>
                          <th>Title</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {exhibits.map((item) => (
                          <tr key={item._id}>
                            <td>
                              <img 
                                src={item.imageURL || 'https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=100&auto=format&fit=crop'} 
                                alt={item.title} 
                                style={styles.tableThumb} 
                              />
                            </td>
                            <td>{item.floor === 1 ? 'Ground Floor' : item.floor === 2 ? 'First Floor' : item.floor === 3 ? 'Second Floor' : `Floor ${item.floor}`}</td>
                            <td>{item.category}</td>
                            <td><strong>{item.title}</strong></td>
                            <td>
                              <div style={styles.tableActions}>
                                <button onClick={() => startEditExhibit(item)} style={styles.tableActBtn} title="Edit"><Edit2 size={14} /></button>
                                <button onClick={() => handleDeleteExhibit(item._id)} style={{ ...styles.tableActBtn, color: 'var(--primary-color)' }} title="Delete"><Trash2 size={14} /></button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              )}

              {/* COURSES LISTING */}
              {activeTab === 'courses' && !showAddForm && (
                <div style={styles.tableCard}>
                  {courses.length === 0 ? (
                    <p style={styles.emptyText}>No courses cataloged.</p>
                  ) : (
                    <table style={styles.table}>
                      <thead>
                        <tr>
                          <th>Category</th>
                          <th>Course Name</th>
                          <th>Fee Structure</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {courses.map((item) => (
                          <tr key={item._id}>
                            <td><span style={styles.categoryLabel}>{item.category}</span></td>
                            <td><strong>{item.title}</strong></td>
                            <td>{item.fee}</td>
                            <td>
                              <div style={styles.tableActions}>
                                <button onClick={() => startEditCourse(item)} style={styles.tableActBtn} title="Edit"><Edit2 size={14} /></button>
                                <button onClick={() => handleDeleteCourse(item._id)} style={{ ...styles.tableActBtn, color: 'var(--primary-color)' }} title="Delete"><Trash2 size={14} /></button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              )}

              {/* EVENTS LISTING */}
              {activeTab === 'events' && !showAddForm && (
                <div style={styles.tableCard}>
                  {events.length === 0 ? (
                    <p style={styles.emptyText}>No events cataloged.</p>
                  ) : (
                    <table style={styles.table}>
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Location</th>
                          <th>Type</th>
                          <th>Title</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {events.map((item) => (
                          <tr key={item._id}>
                            <td>{new Date(item.date).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                            <td>{item.location}</td>
                            <td>{item.isFestival ? <span style={{ ...styles.categoryLabel, backgroundColor: '#fdf2e9', color: '#d9480f' }}>Festival</span> : <span style={styles.categoryLabel}>Event</span>}</td>
                            <td><strong>{item.title}</strong></td>
                            <td>
                              <div style={styles.tableActions}>
                                <button onClick={() => startEditEvent(item)} style={styles.tableActBtn} title="Edit"><Edit2 size={14} /></button>
                                <button onClick={() => handleDeleteEvent(item._id)} style={{ ...styles.tableActBtn, color: 'var(--primary-color)' }} title="Delete"><Trash2 size={14} /></button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              )}

            </div>
          )}

        </div>
      </section>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '80vh',
  },
  dashHeader: {
    backgroundColor: 'var(--primary-dark)',
    color: 'var(--text-white)',
    padding: '2rem 0',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
  dashHeaderContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  dashTitle: {
    color: 'var(--text-white)',
    fontSize: '1.8rem',
  },
  govTag: {
    fontSize: '0.75rem',
    color: 'var(--accent-color)',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    fontWeight: '600',
    display: 'block',
    marginBottom: '0.2rem',
  },
  logoutBtn: {
    backgroundColor: 'var(--primary-color)',
    color: 'var(--text-white)',
    border: '1px solid var(--accent-color)',
    borderRadius: '4px',
    padding: '0.5rem 1rem',
    fontSize: '0.85rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'var(--transition-smooth)',
  },
  tabSection: {
    backgroundColor: 'var(--primary-color)',
    borderBottom: '4px solid var(--accent-color)',
  },
  tabContainer: {
    display: 'flex',
    overflowX: 'auto',
  },
  tabBtn: {
    padding: '1rem 1.5rem',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.95rem',
    transition: 'var(--transition-smooth)',
    flexShrink: 0,
  },
  actionRow: {
    marginBottom: '2rem',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  statusBox: {
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
  emptyText: {
    textAlign: 'center',
    padding: '3rem',
    color: 'var(--text-light)',
    fontSize: '1rem',
  },
  formContainer: {
    marginBottom: '3rem',
    animation: 'fadeInUp 0.4s ease-out',
  },
  formCard: {
    backgroundColor: 'var(--bg-card)',
    padding: '2.5rem 2rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-md)',
  },
  formHeader: {
    fontSize: '1.4rem',
    color: 'var(--primary-dark)',
    marginBottom: '1.5rem',
    borderBottom: '2px solid var(--accent-color)',
    paddingBottom: '0.5rem',
  },
  formActions: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1.5rem',
  },
  // Inquiries
  inquiriesContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  inquiryRow: {
    backgroundColor: 'var(--bg-card)',
    padding: '1.5rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-sm)',
  },
  inquiryHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '0.75rem',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '0.75rem',
    marginBottom: '0.75rem',
  },
  inquiryName: {
    fontSize: '1.15rem',
    color: 'var(--primary-dark)',
  },
  inquiryContact: {
    fontSize: '0.8rem',
    color: 'var(--text-light)',
  },
  inquiryBadges: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
  },
  courseBadge: {
    backgroundColor: 'var(--accent-light)',
    color: 'var(--primary-dark)',
    fontSize: '0.75rem',
    fontWeight: '600',
    padding: '0.2rem 0.5rem',
    borderRadius: '4px',
  },
  statusBadge: {
    fontSize: '0.75rem',
    fontWeight: '600',
    padding: '0.2rem 0.5rem',
    borderRadius: '4px',
    textTransform: 'uppercase',
  },
  inquiryBody: {
    fontSize: '0.9rem',
    color: 'var(--text-dark)',
    lineHeight: '1.5',
  },
  inquiryActions: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
    justifyContent: 'flex-end',
    borderTop: '1px solid var(--border-color)',
    paddingTop: '0.75rem',
  },
  actBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--text-light)',
    fontSize: '0.8rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
  },
  // Table styles
  tableCard: {
    backgroundColor: 'var(--bg-card)',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
    overflowX: 'auto',
    boxShadow: 'var(--shadow-sm)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
    fontSize: '0.9rem',
  },
  tableThumb: {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    borderRadius: '4px',
  },
  categoryLabel: {
    backgroundColor: 'var(--bg-alt)',
    color: 'var(--primary-color)',
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: '600',
  },
  tableActions: {
    display: 'flex',
    gap: '0.5rem',
  },
  tableActBtn: {
    border: '1px solid var(--border-color)',
    background: 'none',
    padding: '0.4rem',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-light)',
    transition: 'var(--transition-fast)',
  },
};

// Simple inject table styles
const injectAdminMediaStyles = () => {
  if (typeof document !== 'undefined') {
    const styleId = 'admin-media-queries';
    if (!document.getElementById(styleId)) {
      const styleSheet = document.createElement('style');
      styleSheet.id = styleId;
      styleSheet.innerText = `
        table th, table td {
          padding: 1rem !important;
          border-bottom: 1px solid var(--border-color) !important;
        }
        table th {
          background-color: var(--bg-alt) !important;
          color: var(--primary-dark) !important;
          font-weight: 600 !important;
        }
        table tr:hover {
          background-color: #fcfbfa !important;
        }
        button[style*="tableActBtn"]:hover {
          background-color: var(--bg-alt) !important;
          color: var(--primary-color) !important;
          border-color: var(--primary-color) !important;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
      document.head.appendChild(styleSheet);
    }
  }
};
injectAdminMediaStyles();

export default AdminDashboard;
