import { personalInfo } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Open to AI Engineer opportunities. Let's build something impactful
          together.
        </p>
        <div className="contact-grid">
          <a href={`mailto:${personalInfo.email}`} className="contact-card" aria-label="Send email">
            <i className="fas fa-envelope" aria-hidden="true"></i>
            <h3>Email</h3>
            <p>{personalInfo.email}</p>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            aria-label="Open LinkedIn profile"
          >
            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
            <h3>LinkedIn</h3>
            <p>dianalhusari</p>
          </a>
          <div className="contact-card" aria-label="Location">
            <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
            <h3>Location</h3>
            <p>{personalInfo.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}