import { experiences } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-company">{exp.company}</h3>
                    <p className="timeline-role">
                      {exp.role}
                      {exp.type && (
                        <span
                          className={`badge ${exp.type === 'Full Time' ? '' : 'badge-secondary'}`}
                        >
                          {exp.type}
                        </span>
                      )}
                    </p>
                    {exp.client && (
                      <p className="timeline-client">{exp.client}</p>
                    )}
                  </div>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                <ul className="timeline-details">
                  {exp.details.map((detail, j) => (
                    <li
                      key={j}
                      dangerouslySetInnerHTML={{ __html: detail }}
                    />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}