import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaFileDownload 
} from "react-icons/fa";

function Contact() {
  const contactDetails = [
    {
      icon: <FaEnvelope className="contact-card-icon" />,
      label: "Email Address",
      value: "siphosethuthobelani4@gmail.com",
      href: "mailto:siphosethuthobelani4@gmail.com",
    },
    {
      icon: <FaPhoneAlt className="contact-card-icon" />,
      label: "Phone / WhatsApp",
      value: "+27 83 613 5905",
      href: "tel:+27836135905",
    },
    {
      icon: <FaMapMarkerAlt className="contact-card-icon" />,
      label: "Location",
      value: "Soshanguve, Gauteng, South Africa",
      href: null,
    },
  ];

  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <div className="section-header">
        <span className="section-label">Get in Touch</span>
        <h2 className="section-title">Contact & Collaboration</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          I am actively seeking Software Developer internships, WIL placements, Graduate/Junior Software Developer roles, and AI engineering opportunities. Feel free to reach out directly.
        </p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-cards-grid">
          {contactDetails.map((item, idx) => (
            <div className="contact-info-card" key={idx}>
              <div className="contact-icon-box">{item.icon}</div>
              <span className="contact-info-label">{item.label}</span>
              {item.href ? (
                <a href={item.href} className="contact-info-value contact-link">
                  {item.value}
                </a>
              ) : (
                <span className="contact-info-value">{item.value}</span>
              )}
            </div>
          ))}
        </div>

        <div className="contact-actions-panel">
          <h3 className="panel-title">Connect Professionally</h3>
          <p className="panel-desc">
            Review my code repositories on GitHub, connect with me on LinkedIn, or download a direct copy of my CV for your recruitment review.
          </p>

          <div className="contact-buttons-row">
            <a
              href="mailto:siphosethuthobelani4@gmail.com"
              className="btn-primary"
            >
              <FaEnvelope />
              <span>Send an Email</span>
            </a>
            <a
              href="/SiphosethuCV.pdf"
              download
              className="btn-outline"
            >
              <FaFileDownload />
              <span>Download CV</span>
            </a>
            <a
              href="https://github.com/Siphosethu-02"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
              aria-label="Visit Siphosethu's GitHub Profile"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/siphosethu-thobelani-dlamini-5658a637b"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
              aria-label="Visit Siphosethu's LinkedIn Profile"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
