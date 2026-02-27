import { personalInfo } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-orb hero-bg-orb-1"></div>
      <div className="hero-bg-orb hero-bg-orb-2"></div>
      <div className="hero-content">
        <div className="hero-image-wrapper">
          <div className="hero-image">
            <img src={personalInfo.photo} alt={personalInfo.name} />
          </div>
        </div>
        <div className="hero-text">
          <p className="hero-greeting">{personalInfo.greeting}</p>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <p className="hero-title">{personalInfo.title}</p>
          <p className="hero-description">{personalInfo.description}</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="#experience" className="btn btn-outline">
              View My Work
            </a>
          </div>
          <div className="hero-socials">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-indicator">
        <span>Scroll Down</span>
        <i className="fas fa-chevron-down"></i>
      </a>
    </section>
  );
}