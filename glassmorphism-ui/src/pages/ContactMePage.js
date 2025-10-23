import "../css/Navbar.css";
import Navbar from "../components/Navbar.js";
import ContactForm from "../components/ContactForm.js";
import "../css/contactForm.css";
import "../css/contactMePage.css";

function ContactMePage() {
  return (
    <div className="contact-me-page">
      <Navbar />

      <div className="contact-content">
        <div className="get-in-touch">
          <h2>Get in Touch</h2>
          <h4>I’d like to hear from you!</h4>
          <p>
            If you have any inquiries or just want to say hi, please use the
            contact form!
          </p>

          <div className="contact-info">
            <p>
              <i className="fa fa-envelope"></i>{" "}
              <a href="mailto:yukaidu.doralice@gmail.com">
                yukaidu.doralice@gmail.com
              </a>
            </p>
            <div className="social-icons">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-behance"></i>
              </a>
              <a href="#">
                <i className="fa fa-vimeo"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
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
