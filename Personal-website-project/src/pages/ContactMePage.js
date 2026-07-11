import ContactForm from "../components/ContactForm.js";
import "../css/contactForm.css";
import "../css/contactMePage.css";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import linkedInIcon from "../assets/images/linkedInIcon.png";
import githubIcon from "../assets/images/GitHub-Symbol.png";

function ContactMePage() {
  return (
    <div className="contact-me-page" id="contact">
      <div className="contact-content">
        <div className="get-in-touch">
          <div className="contact-header">
            <h2 className="slide-in-top-bottom">Get in Touch</h2>
            <h4 className="slide-in-top-bottom">I’d like to hear from you!</h4>
          </div>
          <p className="slide-in-top-bottom">
            If you have any inquiries or just want to say hi, please use the
            contact form!
          </p>

          <div className="contact-info">
            <div className="contact-email">
              <FaEnvelope className="slide-in-right-left" />
              <a
                href="mailto:c2005f08@hotmail.com"
                className="slide-in-right-left"
              >
                c2005f08@hotmail.com
              </a>
            </div>

            <div className="contact-email">
              <FaPhone className="slide-in-right-left" />
              <a href="tel:9059914423" className="slide-in-right-left">
                905-991-4423
              </a>
            </div>

            <div className="more-links">
              <a
                href="https://www.linkedin.com/jobs/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="slide-in-right-left linkedin-icon"
                  src={linkedInIcon}
                  alt="LinkedIn link"
                />
              </a>

              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <img
                  className="slide-in-right-left github-icon"
                  src={githubIcon}
                  alt="GitHub link"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="form-section">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactMePage;
