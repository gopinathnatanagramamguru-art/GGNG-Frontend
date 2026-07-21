import React, { useState } from 'react';
import { ShieldCheck, FileText, Phone, User, Download, ChevronDown, ChevronUp, Mail, MapPin } from 'lucide-react';

const RTI_SECTIONS = [
  {
    id: 'sec1',
    title: '1. Particulars of Organisation, Functions and Duties',
    content: 'Guru Gopinath Natanagramam is an autonomous institution under the Department of Cultural Affairs, Government of Kerala. Established to preserve and propagate the legacy of Natanakalanidhi Dr. Guru Gopinath (the pioneer of Keralanatanam), it functions as a prominent cultural centre for performing arts training, research, and documentation.'
  },
  {
    id: 'sec2',
    title: '2. Powers and Duties of Officers and Employees',
    content: 'The Secretary is the chief executive officer of the institution, responsible for executing administrative decisions, managing finances, and overseeing academic training programs under the guidance of the Chairman and Governing Body. Administrative, teaching, and museum staff perform duties assigned to them to meet institutional guidelines.'
  },
  {
    id: 'sec3',
    title: '3. Procedure of Decision Making and Accountability',
    content: 'The administration of Natanagramam is vested in the Executive Committee and Governing Body, chaired by the Hon. Minister for Cultural Affairs, Government of Kerala. Academic policy and program planning are structured through sub-committees. Public funds and grants are audited regularly by Government auditors.'
  },
  {
    id: 'sec4',
    title: '4. Norms set for the discharge of functions',
    content: 'Functions are performed according to annual academic schedules for Keralanatanam and music courses, standard operation guidelines for the Guru Gopinath National Dance Museum, and directives from the Department of Culture, Government of Kerala.'
  },
  {
    id: 'sec5',
    title: '5. Rules, Regulations, Instructions, Manuals & Records',
    content: 'The institution operates under the rules and regulations registered under the Travancore-Cochin Literary, Scientific and Charitable Societies Registration Act, 1955. It maintains administrative records, student admission registers, ledger books, audit files, and asset registers.'
  },
  {
    id: 'sec6',
    title: '6. Categories of Documents held under control',
    content: 'Documents maintained include Governing Body minutes, government orders, executive committee decisions, staff records, cash books, course curriculum registers, and museum archives containing historical photos and manuscripts of Guru Gopinath.'
  }
];

const RTI = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (id) => {
    if (expandedSection === id) {
      setExpandedSection(null);
    } else {
      setExpandedSection(id);
    }
  };

  return (
    <div style={styles.page} className="animate-fade-up">
      {/* Header Banner */}
      <section className="banner-section rti-banner" style={styles.banner}>
        <div className="container" style={styles.bannerContainer}>
          <span style={styles.govtLabel}>Department of Culture, Government of Kerala</span>
          <h1 className="banner-title" style={styles.bannerTitle}>Right to Information (RTI)</h1>
          <p style={styles.bannerSubtitle}>
            Statutory disclosures, contact details of designated officials, and guidance on requesting information under the RTI Act, 2005.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="container" style={styles.mainContainer}>

          {/* Introduction Card */}
          <div style={styles.introCard} className="rti-intro-card">
            <div style={styles.introHeader}>
              <ShieldCheck size={28} color="var(--primary-color)" />
              <h2 style={styles.sectionHeading}>Right to Information Act, 2005</h2>
            </div>
            <p style={styles.introText}>
              In accordance with Section 4(1)  (b) of the Right to Information Act, 2005, Guru Gopinath Natanagramam is committed to maintaining transparency and accountability in its administration. Citizens of India have the right to request information, inspect documents, and obtain copies of records under the control of this public authority.
            </p>
          </div>

          <div style={styles.gridContainer} className="rti-grid responsive-grid">
            {/* Left Side: Designated RTI Officers */}
            <div style={styles.officersSection}>
              <h3 style={styles.subHeading}>Designated RTI Officers</h3>
              <p style={styles.subText}>Contact details of officials authorized to handle applications and appeals:</p>

              {/* Officer 1: FAA */}
              <div style={styles.officerCard} className="card-hover rti-officer-card">
                <div style={styles.officerBadge} className="officer-badge-mobile">Appellate Authority</div>
                <div style={styles.officerNameContainer}>
                  <User size={20} color="var(--primary-color)" />
                  <h4 style={styles.officerName}>Smt. Sabna Sreedevi</h4>
                </div>
                <p style={styles.officerRole}>Secretary</p>
                <div style={styles.officerDetails}>
                  <p style={styles.detailItem}><MapPin size={16} color="var(--accent-dark)" /> Guru Gopinath Natanagramam, Vattiyoorkavu, TVM</p>
                  <p style={styles.detailItem}><Phone size={16} color="var(--accent-dark)" />04712364771</p>
                  <p style={styles.detailItem}><Mail size={16} color="var(--accent-dark)" /> secretaryggng@gmail.com</p>
                </div>
              </div>

              {/* Officer 2: SPIO */}
              <div style={styles.officerCard} className="card-hover rti-officer-card">
                <div style={styles.officerBadge} className="officer-badge-mobile">
                  State Public Information Officer</div>
                <div style={styles.officerNameContainer}>
                  <User size={20} color="var(--primary-color)" />
                  <h4 style={styles.officerName}>Bindu V</h4>
                </div>
                <p style={styles.officerRole}>Asminstrative Officer Guru Gopinath Natanagramam</p>
                <div style={styles.officerDetails}>
                  <p style={styles.detailItem}><MapPin size={16} color="var(--accent-dark)" /> Guru Gopinath Natanagramam, Vattiyoorkavu, TVM</p>
                  <p style={styles.detailItem}><Phone size={16} color="var(--accent-dark)" /> 04712364771</p>
                  <p style={styles.detailItem}><Mail size={16} color="var(--accent-dark)" /> info@gurugopinathnatanagramam.in  </p>
                </div>
              </div>
            </div>

            {/* Right Side: How to Apply & Fees */}
            <div style={styles.instructionSection}>
              <h3 style={styles.subHeading}>How to File an RTI Application</h3>

              <div style={styles.instructionBox}>
                <h4 style={styles.stepTitle}>Step 1: Write the Application</h4>
                <p style={styles.stepDesc}>
                  Write your request on plain paper in English, Malayalam, or Hindi. Be specific about the records or information you seek, including periods, references, or context.
                </p>
              </div>

              <div style={styles.instructionBox}>
                <h4 style={styles.stepTitle}>Step 2: Pay the Prescribed Fee</h4>
                <p style={styles.stepDesc}>
                  The standard application fee is <strong>Rs. 10/-</strong>. You can pay via:
                </p>
                <ul style={styles.feeList}>
                  <li>Affixing a **Court Fee Stamp** of Rs. 10/- directly onto the written application.</li>
                  <li>A Demand Draft or Indian Postal Order (IPO) drawn in favor of **Secretary, Guru Gopinath Natanagramam**, payable at Thiruvananthapuram.</li>
                  <li>Payment through Government Treasury under the Head of Account: **0070-60-800-98-other receipts**.</li>
                </ul>
              </div>

              <div style={styles.instructionBox}>
                <h4 style={styles.stepTitle}>Step 3: Submit the Request</h4>
                <p style={styles.stepDesc}>
                  Send your application along with the fee payment to the **State Public Information Officer (SPIO)** at the Natanagramam office by registered post, speed post, or hand delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4(1)(b) Proactive Disclosures */}
          <div style={styles.disclosuresSection}>
            <h3 style={styles.subHeading} className="text-center">Proactive Disclosures (Section 4(1)(b))</h3>
            <p style={styles.disclosureIntro} className="text-center">
              Click on each section heading below to view the detailed proactive disclosure contents:
            </p>

            <div style={styles.accordionContainer}>
              {RTI_SECTIONS.map((sec) => {
                const isOpen = expandedSection === sec.id;
                return (
                  <div key={sec.id} style={styles.accordionItem}>
                    <button
                      style={{
                        ...styles.accordionHeader,
                        backgroundColor: isOpen ? 'var(--bg-alt)' : 'var(--bg-card)'
                      }}
                      onClick={() => toggleSection(sec.id)}
                    >
                      <span style={{
                        ...styles.accordionTitle,
                        color: isOpen ? 'var(--primary-color)' : 'var(--text-dark)'
                      }}>{sec.title}</span>
                      {isOpen ? <ChevronUp size={20} color="var(--primary-color)" /> : <ChevronDown size={20} color="var(--text-light)" />}
                    </button>
                    {isOpen && (
                      <div style={styles.accordionContent}>
                        <p style={styles.accordionText}>{sec.content}</p>
                      </div>
                    )}
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
  mainContainer: {
    maxWidth: '1000px',
  },
  introCard: {
    backgroundColor: 'var(--bg-card)',
    padding: '2.5rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-sm)',
    marginBottom: '3rem',
  },
  introHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.25rem',
  },
  sectionHeading: {
    fontSize: '1.8rem',
    color: 'var(--primary-dark)',
    margin: 0,
  },
  introText: {
    color: 'var(--text-light)',
    fontSize: '1.05rem',
    lineHeight: '1.75',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: '3rem',
    marginBottom: '4rem',
  },
  officersSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  subHeading: {
    fontSize: '1.6rem',
    color: 'var(--primary-dark)',
    marginBottom: '0.5rem',
  },
  subText: {
    color: 'var(--text-light)',
    fontSize: '0.95rem',
    marginBottom: '1rem',
  },
  officerCard: {
    backgroundColor: 'var(--bg-card)',
    padding: '1.75rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-sm)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  officerBadge: {
    position: 'absolute',
    top: '1rem',
    right: '1.25rem',
    fontSize: '0.7rem',
    backgroundColor: 'rgba(212, 175, 55, 0.15)',
    color: 'var(--primary-dark)',
    fontWeight: '700',
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    border: '1px solid var(--accent-color)',
  },
  officerNameContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginTop: '0.75rem',
  },
  officerName: {
    fontSize: '1.2rem',
    color: 'var(--primary-dark)',
    margin: 0,
  },
  officerRole: {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: 'var(--accent-dark)',
    marginBottom: '0.5rem',
  },
  officerDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    fontSize: '0.9rem',
    color: 'var(--text-light)',
  },
  detailItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  instructionSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  instructionBox: {
    backgroundColor: 'var(--bg-alt)',
    padding: '1.5rem',
    borderRadius: 'var(--radius-sm)',
    borderLeft: '4px solid var(--accent-color)',
  },
  stepTitle: {
    fontSize: '1.1rem',
    color: 'var(--primary-dark)',
    marginBottom: '0.5rem',
  },
  stepDesc: {
    color: 'var(--text-light)',
    fontSize: '0.95rem',
    lineHeight: '1.5',
  },
  feeList: {
    marginTop: '0.5rem',
    paddingLeft: '1.25rem',
    color: 'var(--text-light)',
    fontSize: '0.9rem',
    lineHeight: '1.5',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  disclosuresSection: {
    marginTop: '2rem',
    borderTop: '1px solid var(--border-color)',
    paddingTop: '3.5rem',
  },
  disclosureIntro: {
    color: 'var(--text-light)',
    fontSize: '1rem',
    marginBottom: '2rem',
  },
  accordionContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '850px',
    margin: '0 auto',
  },
  accordionItem: {
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-sm)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-sm)',
  },
  accordionHeader: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.25rem 1.5rem',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'var(--transition-fast)',
  },
  accordionTitle: {
    fontSize: '1.05rem',
    fontWeight: '600',
  },
  accordionContent: {
    padding: '1.5rem',
    backgroundColor: 'var(--bg-card)',
    borderTop: '1px solid var(--border-color)',
  },
  accordionText: {
    color: 'var(--text-light)',
    fontSize: '0.95rem',
    lineHeight: '1.65',
    margin: 0,
  }
};

export default RTI;
