import React from 'react';

function Projects() {
  const projects = [
    { title: 'Project 1', desc: 'A cool app', tech: 'React', link: 'https://github.com' },
    { title: 'Project 2', desc: 'Another app', tech: 'Node.js', link: 'https://github.com' },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <p>Tech: {project.tech}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;