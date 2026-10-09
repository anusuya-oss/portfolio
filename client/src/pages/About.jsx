import React from 'react';

const About = () => {
  return (
    <section className="py-5 min-vh-100 d-flex align-items-center">
      <div className="container text-center py-5">
        <span className="badge bg-secondary mb-2" style={{ backgroundColor: 'rgba(255,255,255,0.1) !important', color: 'var(--accent-color)' }}>Get to know me</span>
        <h2 className="display-4 fw-bold mb-4">About Me</h2>
        <div className="mx-auto mt-3 mb-5" style={{ width: '60px', height: '4px', background: 'var(--accent-gradient)', borderRadius: '2px' }}></div>
        <p className="lead text-muted max-w-3xl mx-auto" style={{ maxWidth: '800px', margin: '0 auto' }}>
          I am a passionate Information Technology student located in Tamil Nadu, India. I am deeply interested in building full-stack web applications and learning new cloud technologies. I strive to write clean, maintainable code and love tackling complex problems.
        </p>
      </div>
    </section>
  );
};

export default About;
