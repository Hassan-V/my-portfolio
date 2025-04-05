import React, { useState } from 'react';
import ThemeButton from './ThemeButton';

interface HeaderProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  resumeRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
}

const Header: React.FC<HeaderProps> = ({ 
  scrollToSection, 
  aboutRef,
  projectsRef,
  resumeRef,
  contactRef
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleNavClick = (ref: React.RefObject<HTMLDivElement | null>) => {
    scrollToSection(ref);
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">Rashid Ali</div>
      
      <div className="nav-controls">
        <ThemeButton />
        
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      <nav className={mobileMenuOpen ? 'open' : ''}>
        <ul>
          <li onClick={() => handleNavClick(aboutRef)}>About</li>
          <li onClick={() => handleNavClick(projectsRef)}>Projects</li>
          <li onClick={() => handleNavClick(resumeRef)}>Resume</li>
          <li onClick={() => handleNavClick(contactRef)}>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
