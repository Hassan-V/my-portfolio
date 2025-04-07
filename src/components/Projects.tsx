import React from 'react';

const projectData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with React and TypeScript. Features smooth scrolling, component-based architecture, and optimized performance.",
    techStack: ["React", "TypeScript", "CSS3", "Responsive Design"],
    githubUrl: "https://github.com/Hassan-V/my-portfolio",
    liveUrl: "#",
    image: "/images/portfolio-project.webp",
  },
  {
    id: 2,
    title: "Disaster Relief Management System (DRMS)",
    description: "Comprehensive API for disaster relief coordination built with Spring Boot. Features 50+ endpoints, complete user authentication with JWT, role-based access control, and resource management.",
    techStack: ["Java", "Spring Boot", "JWT", "RESTful API", "PostgreSQL"],
    githubUrl: "https://github.com/Hassan-V/DisasterReliefManagementSystem",
    liveUrl: null,
    image: "/images/drms-project.webp",
  },
  {
    id: 3,
    title: "Advanced Novel Scraper",
    description: "Sophisticated web scraper for collecting and organizing novel content from multiple sources. Built with efficiency and minimal footprint in mind.",
    techStack: ["Python", "BeautifulSoup", "Selenium", "Data Processing"],
    githubUrl: null,
    liveUrl: null,
    image: "/images/ans-project.webp",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="section projects">
      <h2>Featured Projects</h2>
      <div className="project-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width="400"
                height="225"
              />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                ) : (
                  <span className="private-project">Private Project</span>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
