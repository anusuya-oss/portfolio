import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-vh-100 d-flex align-items-center pt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1 mt-5 mt-lg-0">
            <span className="badge bg-secondary mb-3 px-3 py-2" style={{ backgroundColor: 'rgba(255,255,255,0.1) !important', color: 'var(--accent-color)' }}>
              Welcome to my portfolio
            </span>
            <h1 className="display-3 fw-bold mb-3">
              Hi, I'm <span style={{ color: 'var(--accent-color)' }}>Anusuya</span>
            </h1>
            <h2 className="h3 text-muted mb-4">Information Technology Student & Aspiring Full-Stack Developer</h2>
            <p className="lead mb-5" style={{ color: 'rgba(255,255,255,0.7)' }}>
              I build modern, premium web applications with React, Node.js, and MongoDB. Passionate about creating responsive, accessible, and dynamic user experiences.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-premium shadow-lg">
                View Projects <i className="bi bi-arrow-right ms-2"></i>
              </a>
              <a href="#contact" className="btn btn-outline-premium">
                Contact Me
              </a>
            </div>
            <div className="d-flex gap-4 mt-5 fs-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-light text-decoration-none nav-link">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-light text-decoration-none nav-link">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="mailto:email@example.com" className="text-light text-decoration-none nav-link">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 text-center">
            {/* Placeholder for Hero Image/Graphic */}
            <div className="glass-card p-4 mx-auto" style={{ maxWidth: '400px', transform: 'rotate(3deg)' }}>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" 
                alt="Developer Coding" 
                className="img-fluid rounded-3 shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
