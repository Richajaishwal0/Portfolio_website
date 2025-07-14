import React, { useState, useEffect } from 'react';
import { Moon, Sun, Globe } from 'lucide-react';
import SideNavigation from './components/SideNavigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import CursorTrail from './components/CursorTrail';
import InteractiveBackground from './components/InteractiveBackground';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedLanguage = localStorage.getItem('language');
    
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'hi' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <div className={`min-h-screen transition-all duration-700 ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white' 
        : 'bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 text-gray-900'
    }`}>
      <CursorTrail darkMode={darkMode} />
      <InteractiveBackground darkMode={darkMode} />
      
      {/* Theme and Language Toggles - Bottom Right */}
      <div className="fixed bottom-24 right-6 z-50 flex flex-col space-y-3">
        <button
          onClick={toggleTheme}
          className={`p-4 rounded-full backdrop-blur-md border-2 transition-all duration-500 hover:scale-125 hover:rotate-12 group ${
            darkMode 
              ? 'bg-purple-800/30 border-purple-400/50 hover:bg-purple-700/40 hover:border-purple-300' 
              : 'bg-orange-200/30 border-orange-400/50 hover:bg-orange-300/40 hover:border-orange-500'
          } shadow-2xl hover:shadow-purple-500/25`}
        >
          {darkMode ? (
            <Sun size={24} className="text-amber-300 group-hover:text-amber-200 transition-colors duration-300" />
          ) : (
            <Moon size={24} className="text-purple-700 group-hover:text-purple-800 transition-colors duration-300" />
          )}
        </button>
        
        <button
          onClick={toggleLanguage}
          className={`p-4 rounded-full backdrop-blur-md border-2 transition-all duration-500 hover:scale-125 hover:rotate-12 group ${
            darkMode 
              ? 'bg-purple-800/30 border-purple-400/50 hover:bg-purple-700/40 hover:border-purple-300' 
              : 'bg-orange-200/30 border-orange-400/50 hover:bg-orange-300/40 hover:border-orange-500'
          } shadow-2xl hover:shadow-purple-500/25`}
        >
          <Globe size={24} className={`${darkMode ? 'text-cyan-300 group-hover:text-cyan-200' : 'text-orange-700 group-hover:text-orange-800'} transition-colors duration-300`} />
        </button>
      </div>

      <SideNavigation darkMode={darkMode} language={language} />
      
      <div className="ml-0 lg:ml-20">
        <Hero darkMode={darkMode} language={language} />
        <About darkMode={darkMode} language={language} />
        <Skills darkMode={darkMode} language={language} />
        <Experience darkMode={darkMode} language={language} />
        <Projects darkMode={darkMode} language={language} />
        <Research darkMode={darkMode} language={language} />
        <Certifications darkMode={darkMode} language={language} />
        <Contact darkMode={darkMode} language={language} />
      </div>
    </div>
  );
}

export default App;