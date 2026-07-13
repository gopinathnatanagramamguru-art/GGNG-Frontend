import React from 'react';
import { Landmark, Award, ShieldCheck, Heart } from 'lucide-react';

const OBJECTIVES = [
  { num: "I", text: "To promote other Indian Classical dances." },
  { num: "II", text: "To provide training for boys and girls in the art of dance." },
  { num: "III", text: "To co-operate with the Central Akademies, Universities, State Akademies and other institutions and associations for the furtherance of the development and enrichment of Indian Culture as a whole especially in the field of Indian dance." },
  { num: "IV", text: "To co-operate, as far as possible, and to the extent necessary, the activities in the field of dance and for their scientific development and enrichment." },
  { num: "V", text: "To promote research in the field of dance and to establish a library and a museum for the purpose." },
  { num: "VI", text: "To encourage the exchange of ideas and enrichment of techniques between the different regions in regard to the said art." },
  { num: "VII", text: "To sponsor festivals in the field of the above mentioned art." },
  { num: "VIII", text: "To prepare and publish literature on the above art." },
  { num: "IX", text: "To arrange performance by eminent dancers, promote inter-State cultural exchange and thereby contribute to the National integration of India." },
  { num: "X", text: "To perform such other additional functions that may be entrusted to the Natanagramam by the Government from time to time;" },
  { num: "XI", text: "To perform all functions incidental to the powers of aforesaid;" },
  { num: "XII", text: "To give awards of merit to leading artistes in dances;" },
  { num: "XIII", text: "To give grants and financial assistance to institutions which impart training in dance and also organisations which conduct performance in the said art; and" },
  { num: "XIV", text: "To carry out such directions as may be given by the Government from time to time." },
  { num: "XV", text: "To revive Kerala Natanam of Guru Gopinath." }
];

const About = () => {
  return (
    <div style={styles.page} className="animate-fade-up">
      {/* Header Section */}
      <section className="header-section" style={styles.headerSection}>
        <div className="container" style={styles.headerContainer}>
          <span style={styles.headerGov}>Department of Culture, Govt. of Kerala</span>
          <h1 className="header-title" style={styles.headerTitle}>About the Institution & Legacy</h1>
          <p style={styles.headerSubtitle}>
            Preserving classical heritage, fostering creative arts training, and promoting Kerala Natanam dance form.
          </p>
        </div>
      </section>

      {/* Guru Gopinath Biography Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="container grid-section" style={styles.gridSection}>
          <div style={styles.imgContainer}>
            <img
              src="/guru.jpg"
              alt="Guru Gopinath Portrait"
              style={styles.bioImg}
            />
            <div style={styles.quoteBox}>
              <p style={styles.quoteText}>"Make classical dance simple and readable for the common public, without sacrificing the purity of our ancient shastras."</p>
              <span style={styles.quoteAuthor}>- Guru Gopinath</span>
            </div>
          </div>

          <div style={styles.textContent}>
            <span style={styles.sectionLabel}>The Visionary Founder</span>
            <h2 className="subtitle-text" style={styles.subTitle}>Guru Gopinath (1908 - 1987)</h2>
            <p style={styles.paragraph}>
              Born in Kuttanad, Alappuzha, Guru Gopinath was a legendary performer, choreographer, and Guru. He began training in Kathakali at a young age under eminent masters. With his refined technique, he envisioned an accessible form of classical dance that combined the dramatic qualities of Kathakali with modern performance sensibilities.
            </p>
            <p style={styles.paragraph}>
              In the 1930s, along with the American dancer Ragini Devi, he presented a modified form of Kathakali which drew global accolades. This experiment laid the seeds of a new classical style. He established the first modern dance school in India, 'Uday Shankar-style' and went on to structure the grammar of **Kerala Natanam**.
            </p>
            <p style={styles.paragraph}>
              Over his long career, Guru Gopinath was awarded the Sangeet Natak Akademi Award, the Veera Srinkhala, and the title of 'Kala Ratnam'. His life work remains a benchmark for creativity in Indian classical choreography.
            </p>
          </div>
        </div>
      </section>

      {/* Kerala Natanam Dance Grammar Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-alt)' }}>
        <div className="container grid-section-inverse" style={styles.gridSectionInverse}>
          <div style={styles.textContent}>
            <span style={styles.sectionLabel}>A Unique Classical Form</span>
            <h2 className="subtitle-text" style={styles.subTitle}>Kerala Natanam</h2>
            <p style={styles.paragraph}>
              <b>Kerala Natanam</b> is a stylized, classical dance form created by Guru Gopinath. It was designed to bridge the gap between traditional orthodox dance forms and the general public, making mudras and stories easier to interpret.
            </p>

            <div className="points-grid" style={styles.pointsGrid}>
              <div style={styles.pointCard}>
                <Award size={20} color="var(--primary-color)" />
                <div>
                  <h4 style={styles.pointTitle}>Kathakali Roots</h4>
                  <p style={styles.pointDesc}>Retains the strict mudras (hand gestures), facial expressions (abhinaya), and rhythm patterns (tala) of traditional Kathakali.</p>
                </div>
              </div>

              <div style={styles.pointCard}>
                <Heart size={20} color="var(--primary-color)" />
                <div>
                  <h4 style={styles.pointTitle}>Expressive & Graceful</h4>
                  <p style={styles.pointDesc}>Blends Mohiniyattam and Koodiyattam style body movements for enhanced elegance and expressions.</p>
                </div>
              </div>

              <div style={styles.pointCard}>
                <Landmark size={20} color="var(--primary-color)" />
                <div>
                  <h4 style={styles.pointTitle}>Lighter Costumes</h4>
                  <p style={styles.pointDesc}>Replaces heavy wooden ornaments and thick face painting with lightweight, graceful costumes matching character roles.</p>
                </div>
              </div>

              <div style={styles.pointCard}>
                <ShieldCheck size={20} color="var(--primary-color)" />
                <div>
                  <h4 style={styles.pointTitle}>Universal Themes</h4>
                  <p style={styles.pointDesc}>Incorporates non-mythological stories, social issues, and contemporary topics alongside traditional scripts.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="img-container" style={styles.imgContainer}>
            <img
              src="/kerala_natanam_about.png"
              alt="Kerala Natanam Performance Postures"
              style={styles.danceImg}
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span style={styles.sectionLabel}></span>
            <h2 className="subtitle-text" style={styles.subTitle}>Our Vision & Mission</h2>
            <p className="section-subtitle">
              Guru Gopinath Natanagramam is dedicated to the preservation, promotion, and enrichment of Indian dance and culture through these core missions.
            </p>
          </div>

          <div style={styles.objectivesList}>
            {OBJECTIVES.map((item, index) => (
              <div key={index} style={styles.objectiveRow}>
                <div style={styles.objectiveRowNumber}>({item.num.toLowerCase()})</div>
                <div style={styles.objectiveRowText}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History of Natanagramam Institution */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-alt)' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="text-center">
            <span style={styles.sectionLabel}>Our Roots</span>
            <h2 className="subtitle-text" style={styles.subTitle}>Our Legacy</h2>
            <p style={styles.paragraphCenter}>
              Established in <b>1994–1995</b> by the Department of Culture, Government of Kerala, Guru Gopinath Natanagramam was envisioned as a comprehensive cultural village. Located in the serene outskirts of Vattiyoorkavu in Thiruvananthapuram, the campus provides a peaceful environment conducive to intensive training, creative research, and cultural tourism.
            </p>
            <p style={styles.paragraphCenter}>
              In addition to providing multi-year certificate courses in Kerala Natanam, classical music, and instruments, the Natanagramam manages the **Dance Museum**—the first of its kind in India. The museum showcases traditional dance heritage, costume structures, and visual displays of Guru Gopinath's achievements.
            </p>
            <p style={styles.paragraphCenter}>
              Administered by a government governing body chaired by the Minister for Culture, Govt. of Kerala, the institution serves as an active hub organizing monthly performances, academic seminars, and national cultural festivals.
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
  headerSection: {
    backgroundColor: 'var(--primary-color)',
    color: 'var(--text-white)',
    padding: '4rem 0',
    backgroundImage: 'linear-gradient(rgba(122,26,37,0.85), rgba(74,14,20,0.95)), url("https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1200&auto=format&fit=crop")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
    borderBottom: '4px solid var(--accent-color)',
  },
  headerContainer: {
    maxWidth: '800px',
  },
  headerGov: {
    color: 'var(--accent-color)',
    fontSize: '0.8rem',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '0.5rem',
  },
  headerTitle: {
    color: 'var(--text-white)',
    fontSize: '2.8rem',
    marginBottom: '1rem',
  },
  headerSubtitle: {
    fontSize: '1.15rem',
    color: '#E8DFD8',
    lineHeight: '1.6',
  },
  gridSection: {
    display: 'grid',
    gridTemplateColumns: '0.9fr 1.1fr',
    gap: '4rem',
    alignItems: 'center',
  },
  gridSectionInverse: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: '4rem',
    alignItems: 'center',
  },
  imgContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  bioImg: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: 'var(--radius-md)',
    border: '2px solid var(--border-color)',
    boxShadow: 'var(--shadow-md)',
  },
  danceImg: {
    width: '100%',
    height: '450px',
    objectFit: 'cover',
    borderRadius: 'var(--radius-md)',
    border: '3px solid var(--accent-color)',
    boxShadow: 'var(--shadow-md)',
  },
  quoteBox: {
    backgroundColor: 'var(--bg-alt)',
    padding: '1.5rem',
    borderRadius: 'var(--radius-sm)',
    borderLeft: '4px solid var(--primary-color)',
  },
  quoteText: {
    fontStyle: 'italic',
    fontSize: '0.95rem',
    color: 'var(--primary-dark)',
    fontWeight: '500',
    lineHeight: '1.5',
  },
  quoteAuthor: {
    display: 'block',
    marginTop: '0.5rem',
    fontSize: '0.85rem',
    fontWeight: '600',
    color: 'var(--text-light)',
    textAlign: 'right',
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  sectionLabel: {
    color: 'var(--accent-dark)',
    fontSize: '0.8rem',
    fontWeight: '600',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
  },
  subTitle: {
    fontSize: '2.2rem',
    color: 'var(--primary-dark)',
  },
  paragraph: {
    color: 'var(--text-light)',
    fontSize: '1rem',
    lineHeight: '1.7',
  },
  paragraphCenter: {
    color: 'var(--text-light)',
    fontSize: '1.05rem',
    lineHeight: '1.75',
    marginBottom: '1.5rem',
  },
  pointsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
    marginTop: '1rem',
  },
  pointCard: {
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'flex-start',
  },
  pointTitle: {
    fontSize: '1rem',
    color: 'var(--primary-dark)',
    marginBottom: '0.25rem',
  },
  pointDesc: {
    fontSize: '0.85rem',
    color: 'var(--text-light)',
    lineHeight: '1.4',
  },
  objectivesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0px',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  objectiveRow: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
    padding: '1.25rem 0.5rem',
    borderBottom: '1px solid var(--border-color)',
    transition: 'var(--transition-smooth)',
  },
  objectiveRowNumber: {
    color: 'var(--primary-color)',
    fontWeight: '700',
    fontSize: '1.05rem',
    minWidth: '40px',
    flexShrink: 0,
    fontFamily: 'var(--font-sans)',
  },
  objectiveRowText: {
    color: 'var(--text-light)',
    fontSize: '1.05rem',
    lineHeight: '1.65',
    flexGrow: 1,
  },
};

// Media query style injection for responsive layout adjustments
const injectAboutMediaStyles = () => {
  if (typeof document !== 'undefined') {
    const styleId = 'about-media-queries';
    if (!document.getElementById(styleId)) {
      const styleSheet = document.createElement('style');
      styleSheet.id = styleId;
      styleSheet.innerText = `
        @media (max-width: 900px) {
          .grid-section, .grid-section-inverse {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .grid-section-inverse .img-container {
            order: -1 !important;
          }
        }
        @media (max-width: 600px) {
          .header-section {
            padding: 2.5rem 0 !important;
          }
          .header-title {
            font-size: 1.8rem !important;
          }
          .subtitle-text {
            font-size: 1.7rem !important;
          }
          .points-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
      `;
      document.head.appendChild(styleSheet);
    }
  }
};
injectAboutMediaStyles();

export default About;
