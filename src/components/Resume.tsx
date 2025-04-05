import React, { useState } from "react";

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

interface Skill {
  category: string;
  items: string[];
}

const Resume: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      role: "Freelancing - Software Developer",
      company: "Self-Employed",
      period: "2021 - Present",
      description:
        "Developing and deploying software solutions with a focus on automation and optimization.",
      achievements: [
        "Developed automated web scraping solutions for data extraction.",
        "Created dynamic web applications using React and Django.",
        "Automated document form filling for efficiency.",
        "Implemented security enhancements in web applications.",
      ],
    },
    {
      id: 2,
      role: "Intern - Backend Software Developer",
      company: "Sybrid – a Lakson Group Company",
      period: "Aug - Oct 2024",
      description:
        "Contributed to backend API development, optimization, and troubleshooting while collaborating with cross-functional teams.",
      achievements: [
        "Collaborated with a dynamic team to design, develop, and maintain RESTful APIs.",
        "Assisted in troubleshooting and optimizing API integrations to enhance performance.",
        "Gained valuable hands-on experience in API development and cross-team collaboration.",
      ],
    },
  ];

  const education: Education[] = [
    {
      id: 1,
      degree: "B.S. Software Engineering",
      institution: "SIR SYED UNIVERSITY OF ENGINEERING AND TECHNOLOGY",
      year: "2026 (Expected)",
      description: "Specializing in Software Development and Data Processing.",
    },
  ];

  const skills: Skill[] = [
    {
      category: "Technical Skills",
      items: [
        "Python",
        "Java",
        "Django",
        "React",
        "Web Scraping",
        "REST APIs",
        "SQL/NoSQL Databases",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Problem-Solving",
        "Teamwork",
        "Critical Thinking",
        "Time Management",
      ],
    },
  ];

  const [detailedView, setDetailedView] = useState(false);

  return (
    <section className="section resume">
      <h2>Resume</h2>

      {/* View Toggle */}
      <div className="view-toggle">
        <button
          className={!detailedView ? "active" : ""}
          onClick={() => setDetailedView(false)}
        >
          Compact
        </button>
        <button
          className={detailedView ? "active" : ""}
          onClick={() => setDetailedView(true)}
        >
          Detailed
        </button>
      </div>

      <div className="resume-grid">
        {/* Experience */}
        <div className="resume-section">
          <h3 className="section-heading">Professional Experience</h3>
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <h4>{exp.role}</h4>
              <div className="experience-meta">
                <span className="company">{exp.company}</span>
                <span className="period">{exp.period}</span>
              </div>
              <p className="experience-description">{exp.description}</p>
              {detailedView && (
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="resume-section">
          <h3 className="section-heading">Education</h3>
          {education.map((edu) => (
            <div key={edu.id} className="education-item">
              <h4>{edu.degree}</h4>
              <div className="education-meta">
                <span className="institution">{edu.institution}</span>
                <span className="year">{edu.year}</span>
              </div>
              {edu.description && (
                <p className="education-description">{edu.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="resume-section">
          <h3 className="section-heading">Skills & Expertise</h3>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-group">
                <h4 className="skill-category">{skillGroup.category}</h4>
                <div className="skill-tags">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*Resume Download */}
      <div className="resume-links">
        <a
          href="https://github.com/Hassan-V"
          className="github-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub: github.com/Hassan-V
        </a>
        <a href="/files/resume.pdf" className="download-btn" download>
          <span className="download-icon">📄</span> Download Full Resume (PDF)
        </a>
      </div>
    </section>
  );
};

export default Resume;
