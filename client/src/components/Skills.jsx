import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: "bi-code-slash",
      skills: ["Java", "C", "C++", "Python"]
    },
    {
      title: "Web Development",
      icon: "bi-browser-edge",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express"]
    },
    {
      title: "Database & Cloud",
      icon: "bi-database-fill",
      skills: ["MongoDB", "SQL", "AWS"]
    },
    {
      title: "Tools & Others",
      icon: "bi-tools",
      skills: ["Git", "GitHub", "VS Code", "Docker"]
    }
  ];

  return (
    <section id="skills" className="py-5 min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-secondary mb-2" style={{ backgroundColor: 'rgba(255,255,255,0.1) !important', color: 'var(--accent-color)' }}>My Expertise</span>
          <h2 className="display-5 fw-bold">Technical Skills</h2>
          <div className="mx-auto mt-3" style={{ width: '60px', height: '4px', background: 'var(--accent-gradient)', borderRadius: '2px' }}></div>
        </div>

        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="glass-card p-4 h-100 text-center" style={{ transition: 'transform 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div className="mb-4 d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(139, 92, 246, 0.1)', color: 'var(--accent-color)', fontSize: '24px' }}>
                  <i className={`bi ${category.icon}`}></i>
                </div>
                <h4 className="h5 fw-bold mb-3">{category.title}</h4>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="badge" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#e2e8f0', padding: '8px 12px', fontWeight: '500' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
