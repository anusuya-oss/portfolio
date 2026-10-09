import React from 'react';

const Contact = () => {
  return (
    <section className="py-5 min-vh-100 d-flex align-items-center">
      <div className="container py-5">
        <div className="text-center mb-5">
          <span className="badge bg-secondary mb-2" style={{ backgroundColor: 'rgba(255,255,255,0.1) !important', color: 'var(--accent-color)' }}>Get in Touch</span>
          <h2 className="display-4 fw-bold">Contact Me</h2>
          <div className="mx-auto mt-3" style={{ width: '60px', height: '4px', background: 'var(--accent-gradient)', borderRadius: '2px' }}></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 glass-card p-5">
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label text-light">Name</label>
                  <input type="text" className="form-control bg-dark text-light border-secondary" placeholder="Your Name" />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-light">Email</label>
                  <input type="email" className="form-control bg-dark text-light border-secondary" placeholder="Your Email" />
                </div>
                <div className="col-12">
                  <label className="form-label text-light">Subject</label>
                  <input type="text" className="form-control bg-dark text-light border-secondary" placeholder="Subject" />
                </div>
                <div className="col-12">
                  <label className="form-label text-light">Message</label>
                  <textarea className="form-control bg-dark text-light border-secondary" rows="5" placeholder="Your Message"></textarea>
                </div>
                <div className="col-12 text-center mt-4">
                  <button type="submit" className="btn btn-premium px-5 py-2">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
