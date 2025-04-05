import React from 'react'

const About: React.FC = () => {
  return (
    <section className="section about">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-controls">
            <span className="terminal-control terminal-close"></span>
            <span className="terminal-control terminal-minimize"></span>
            <span className="terminal-control terminal-maximize"></span>
          </div>
          <h3 className="terminal-title">about.md</h3>
        </div>
        <div className="terminal-body">
          <div className="command-line typewriter">
            cat about.md
          </div>
          <div className="content">
            <h2>About Me</h2>
            <div className="bio">
              <p>Software developer with a passion for building efficient, scalable applications. Experienced in full-stack development with a focus on backend systems and data processing solutions.</p>
            </div>
            
            <div className="skills">
              <h3>Tech Stack</h3>
              <div className="skill-list">
                <span className="skill-tag"><i className="devicon-react-original colored"></i>React</span>
                <span className="skill-tag"><i className="devicon-typescript-plain colored"></i>TypeScript</span>
                <span className="skill-tag"><i className="devicon-java-plain colored"></i>Java</span>
                <span className="skill-tag"><i className="devicon-spring-plain colored"></i>Spring Boot</span>
                <span className="skill-tag"><i className="devicon-python-plain colored"></i>Python</span>
                <span className="skill-tag"><i className="devicon-postgresql-plain colored"></i>PostgreSQL</span>
                <span className="skill-tag"><i className="devicon-git-plain colored"></i>Git</span>
                <span className="skill-tag"><i className="devicon-docker-plain colored"></i>Docker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
