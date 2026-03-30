import "../css/Navbar.css";
import Navbar from "../components/Navbar.js";
import ContactForm from "../components/ContactForm.js";
import "../css/contactForm.css";
import "../css/contactMePage.css";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

function ContactMePage({ hideNavbar = false }) {
  return (
    <div className="contact-me-page" id="contact">
      {!hideNavbar && <Navbar />}

      <div className="contact-content">
        <div className="get-in-touch">
          <div>
            <h2
              style={{ fontFamily: "Poppins" }}
              className="slide-in-top-bottom"
            >
              Get in Touch
            </h2>
            <h4 className="slide-in-top-bottom">I’d like to hear from you!</h4>
          </div>
          <p className="slide-in-top-bottom">
            If you have any inquiries or just want to say hi, please use the
            contact form!
          </p>

          <div>
            <div className="contact-email">
              <p>
                <FaEnvelope className="slide-in-right-left" />
              </p>
              <h3 className="slide-in-right-left">c2005f08@hotmail.com</h3>
            </div>

            <div className="contact-email">
              <p>
                <FaPhone className="slide-in-right-left" />
              </p>
              <h3 className="slide-in-right-left">905-991-4423</h3>
            </div>

            <div className="more-links">
              <a
                href="https://www.linkedin.com/jobs/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="slide-in-right-left"
                  src="../assets/images/linkedInIcon.png"
                  alt="LinkedIn link"
                />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <img
                  className="slide-in-right-left"
                  src="../assets/images/GitHub-Symbol.png"
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
