import React, { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeDebug: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  useEffect(() => {
    console.log('ThemeDebug component detected theme change:', theme);
    
    document.body.setAttribute('data-theme', theme);
    
  }, [theme]);
  
  const debugStyles: React.CSSProperties = {
    position: 'fixed',
    bottom: 10,
    right: 10,
    padding: '5px 10px',
    background: theme === 'dark' ? '#fff' : '#000',
    color: theme === 'dark' ? '#000' : '#fff',
    fontSize: '12px',
    borderRadius: '4px',
    zIndex: 9999,
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
  };
  
  return (
    <div style={debugStyles} onClick={toggleTheme}>
      Theme: {theme}
    </div>
  );
};

export default ThemeDebug;
