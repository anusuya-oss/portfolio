import React from 'react';

const Projects = () => {
  const dummyProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with product management, shopping cart, and secure checkout using Stripe.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubURL: "#",
      liveURL: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task manager allowing teams to organize projects, assign tasks, and track progress in real-time.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "Bootstrap", "Firebase"],
      githubURL: "#",
      liveURL: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern, premium developer portfolio built with React and styled with a custom dark theme glassmorphism UI.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "Bootstrap 5", "Vite"],
      githubURL: "#",
      liveURL: "#"
    }
  ];

  return (
    <section id="projects" className="py-5 min-vh-100">
      <div className="container py-5">
        <div className="text-center mb-5">
          <span className="badge bg-secondary mb-2" style={{ backgroundColor: 'rgba(255,255,255,0.1) !important', color: 'var(--accent-color)' }}>My Work</span>
          <h2 className="display-5 fw-bold">Featured Projects</h2>
          <div className="mx-auto mt-3" style={{ width: '60px', height: '4px', background: 'var(--accent-gradient)', borderRadius: '2px' }}></div>
        </div>

        <div className="row g-4">
          {dummyProjects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="glass-card h-100 overflow-hidden d-flex flex-column" style={{ transition: 'all 0.3s ease' }} onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)'}} onMouseLeave={(e) => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'}}>
                <img src={project.image} alt={project.title} className="w-100" style={{ height: '200px', objectFit: 'cover', borderBottom: '1px solid rgba(255,255,255,0.05)' }} />
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <h4 className="h5 fw-bold mb-3">{project.title}</h4>
                  <p className="text-muted small mb-4">{project.description}</p>
                  
                  <div className="mb-4 d-flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="badge bg-dark" style={{ border: '1px solid var(--accent-color)', color: 'var(--accent-color)' }}>{tech}</span>
                    ))}
                  </div>

                  <div className="d-flex gap-3 mt-auto">
                    <a href={project.githubURL !== "#" ? project.githubURL : "https://github.com"} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-premium flex-grow-1"><i className="bi bi-github me-2"></i>Code</a>
                    <a href={project.liveURL !== "#" ? project.liveURL : "https://example.com"} target="_blank" rel="noreferrer" className="btn btn-sm btn-premium flex-grow-1"><i className="bi bi-box-arrow-up-right me-2"></i>Live</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
