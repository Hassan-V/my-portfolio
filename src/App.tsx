import { useRef } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeDebug from './components/ThemeDebug';

function App() {
  // Refs for smooth scrolling
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Scroll to section handler - updated to handle null safely
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <SEO 
        title="Rashid Ali | Developer Portfolio"
        description="Full-stack developer specializing in React, Rust, Go and more"
      />
      
      <Header 
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        resumeRef={resumeRef}
        contactRef={contactRef}
      />
      
      <main>
        <div ref={aboutRef}>
          <About />
        </div>
        
        <div ref={projectsRef}>
          <Projects />
        </div>
        
        <div ref={resumeRef}>
          <Resume />
        </div>
        
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      
      <Footer />
      
      {/* Add debug component for development */}
      <ThemeDebug />
    </ThemeProvider>
  );
}

export default App;
