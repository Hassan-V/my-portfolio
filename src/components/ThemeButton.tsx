import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    
    console.log('Current localStorage theme:', localStorage.getItem('theme'));
    console.log('Current theme state:', theme);
    
    toggleTheme();
    
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    document.documentElement.classList.add(`${newTheme}-theme`);
  };
  
  return (
    <button 
      className="theme-toggle"
      onClick={handleToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      data-theme={theme}
    >
      <span>{theme === 'light' ? '🌙' : '☀️'}</span>
    </button>
  );
};

export default ThemeButton;
