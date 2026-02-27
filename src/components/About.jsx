import { aboutText, stats } from '../data/portfolioData';
import './About.css';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            {aboutText.map((text, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: text }} />
            ))}
          </div>
          <div className="about-stats">
            {stats.map((stat, i) => (
              <div className="stat-card" key={i}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}