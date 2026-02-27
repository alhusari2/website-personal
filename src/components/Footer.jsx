import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Dian Alhusari. All rights reserved.</p>
      </div>
    </footer>
  );
}