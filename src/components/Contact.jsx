import { personalInfo } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          I'm actively seeking opportunities as a Data Scientist or AI
          Engineer. Feel free to reach out!
        </p>
        <div className="contact-grid">
          <a href={`mailto:${personalInfo.email}`} className="contact-card">
            <i className="fas fa-envelope"></i>
            <h3>Email</h3>
            <p>{personalInfo.email}</p>
          </a>
          <a
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <i className="fab fa-whatsapp"></i>
            <h3>WhatsApp</h3>
            <p>{personalInfo.phone}</p>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <i className="fab fa-linkedin-in"></i>
            <h3>LinkedIn</h3>
            <p>dianalhusari</p>
          </a>
          <div className="contact-card">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Location</h3>
            <p>{personalInfo.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}