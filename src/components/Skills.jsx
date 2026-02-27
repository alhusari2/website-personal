import { skills } from '../data/portfolioData';
import './Skills.css';

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div className="skill-category" key={i}>
              <div className="skill-icon">
                <i className={`fas ${skill.icon}`}></i>
              </div>
              <h3>{skill.category}</h3>
              <div className="skill-tags">
                {skill.tags.map((tag, j) => (
                  <span
                    className={`skill-tag ${tag.primary ? 'tag-primary' : ''} ${tag.cert ? 'tag-cert' : ''}`}
                    key={j}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}