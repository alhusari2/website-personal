import { education } from '../data/portfolioData';
import './Education.css';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, i) => (
            <div className="edu-card" key={i}>
              <div className="edu-icon">
                <i className={`fas ${edu.icon}`}></i>
              </div>
              <h3>{edu.institution}</h3>
              <p className="edu-degree">{edu.degree}</p>
              <p className="edu-date">{edu.date}</p>
              {edu.location && (
                <p className="edu-location">
                  <i className="fas fa-map-marker-alt"></i> {edu.location}
                </p>
              )}
              {edu.sponsor && <p className="edu-sponsor">{edu.sponsor}</p>}
              <p className="edu-gpa">
                <strong>{edu.gpa}</strong>
              </p>
              <p className="edu-thesis">
                {edu.thesis.startsWith('Classification') ? (
                  <>
                    <strong>Thesis:</strong> {edu.thesis}
                  </>
                ) : (
                  edu.thesis
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}