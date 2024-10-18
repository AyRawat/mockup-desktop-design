import { FaLinkedin, FaFacebookF, FaTwitter } from "react-icons/fa";
import Logo from "../assets/images/logo-2.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-nav">
          <img src={Logo} className="footer-logo" />
          <div className="footer-middle">
            <ul className="footer-links">
              <li>About us</li>
              <li>Services</li>
              <li>Use Cases</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="social-icons">
            <FaLinkedin className="icon" />
            <FaFacebookF className="icon" />
            <FaTwitter className="icon" />
          </div>
        </div>
        <div className="footer-left">
          <button className="contact-button">Contact us:</button>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
        </div>

        <div className="footer-right">
          <div className="subscribe-container">
            <input type="email" placeholder="Email" className="email-input" />
            <button className="subscribe-button">Subscribe to news</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a href="/">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
