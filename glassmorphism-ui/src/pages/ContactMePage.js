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
          <p>
            Feel free to reach out if you have any questions, project ideas, or
            just want to say hi!
          </p>
        </div>

        <div className="form-section">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactMePage;
