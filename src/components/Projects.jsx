import { projects } from '../data/projectsData';
import './Projects.css';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        {projects.length === 0 ? (
          <p className="coming-soon">More projects coming soon...</p>
        ) : (
          <div className="projects-grid">
            {projects.map((project, i) => (
              <div className="project-card" key={i}>
                <div className="project-icon" aria-hidden="true">
                  <i className={`fas ${project.icon}`}></i>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, j) => (
                    <span key={j} className="tech-tag">{t}</span>
                  ))}
                </div>
                <span className={`project-status ${project.status.toLowerCase().replace(/\s/g, '-')}`}>
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
