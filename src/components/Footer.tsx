import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>&copy; {currentYear} Rashid Ali. All rights reserved.</p>
          <small className="theme-indicator">Current theme: {theme}</small>
        </div>
        
        <div className="social-links">
          <a href="https://github.com/Hassan-V" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/rashidalihassan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
