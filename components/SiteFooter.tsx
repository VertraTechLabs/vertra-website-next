import Image from "next/image";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div className="footer-brand-column">
          <a className="footer-brand" href="/">
            <Image
              src="/vertra-logo.png"
              alt="Vertra Technologies"
              width={46}
              height={46}
              className="footer-logo"
            />

            <span>VERTRA TECHNOLOGIES</span>
          </a>

          <p className="footer-brand-copy">
            Vertra Technologies builds modern digital systems that help
            businesses operate smarter, grow faster and prepare for what comes
            next.
          </p>

          <a href="#contact" className="footer-cta">
            START A PROJECT <span>-&gt;</span>
          </a>
<div className="footer-socials">
  <a
    href="https://www.linkedin.com/company/vertra-technologies/"
    aria-label="Vertra Technologies on LinkedIn"
    className="footer-social-button"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedinIn size={18} />
  </a>

  <a
    href="https://x.com/VertraTechLabs"
    aria-label="Vertra Technologies on X"
    className="footer-social-button"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaXTwitter size={18} />
  </a>

  <a
    href="https://www.instagram.com/vertratechlabs/"
    aria-label="Vertra Technologies on Instagram"
    className="footer-social-button"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram size={19} />
  </a>

  <a
    href="https://github.com/VertraTechLabs"
    aria-label="Vertra Technologies on GitHub"
    className="footer-social-button"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub size={19} />
  </a>
</div>
        </div>

        <div className="footer-column">
          <h3>SERVICES</h3>

          <a href="#services">Web + Digital</a>
          <a href="#services">Software + Platforms</a>
          <a href="#services">AI + Automation</a>
          <a href="#services">Apps + Emerging Technology</a>
        </div>

        <div className="footer-column">
          <h3>COMPANY</h3>

          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#insights">Insights</a>
          <a href="#contact">Start a Project</a>
        </div>

        <div className="footer-column">
          <h3>EXPLORE</h3>

          <a href="#work">LeadOS AI</a>
          <a href="#work">AI Receptionist</a>
          <a href="#work">Streaming Platforms</a>
          <a href="#services">Emerging Technology</a>
        </div>

        <div className="footer-column footer-contact-column">
          <h3>CONTACT</h3>

          <a href="mailto:vertratechlabs@gmail.com">
            vertratechlabs@gmail.com
          </a>

          <p>
            Vertra Technologies
            <br />
            Atlanta, Georgia
            <br />
            United States
          </p>

          <a href="#contact">Project inquiry</a>
        </div>
      </div>

      <div className="site-container footer-bottom">
        <p>
          © {new Date().getFullYear()} Vertra Technologies. All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}