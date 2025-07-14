import React, { useState, useEffect } from 'react';
import { Home, User, Code, Briefcase, FolderOpen, Phone, Award, BookOpen } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  language: string;
}

const Header: React.FC<HeaderProps> = ({ darkMode, language }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'research', 'certifications', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', icon: Home, emoji: '🏠' },
    { id: 'about', icon: User, emoji: '👩‍💻' },
    { id: 'skills', icon: Code, emoji: '🛠️' },
    { id: 'experience', icon: Briefcase, emoji: '💼' },
    { id: 'projects', icon: FolderOpen, emoji: '📁' },
    { id: 'research', icon: BookOpen, emoji: '📚' },
    { id: 'certifications', icon: Award, emoji: '🏆' },
    { id: 'contact', icon: Phone, emoji: '📞' }
  ];

  return (
    <header className={`hidden md:block fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      scrolled 
        ? darkMode 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-800' 
          : 'bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-200'
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-center">
          <div className={`flex space-x-2 p-2 rounded-full transition-all duration-300 ${
            darkMode 
              ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700' 
              : 'bg-white/50 backdrop-blur-sm border border-gray-200'
          }`}>
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative p-3 rounded-full transition-all duration-300 hover:scale-110 group ${
                    activeSection === item.id
                      ? darkMode
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                        : 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                      : darkMode
                        ? 'hover:bg-gray-700 text-gray-300 hover:text-white'
                        : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                  }`}
                  title={item.id.charAt(0).toUpperCase() + item.id.slice(1)}
                >
                  <span className="text-lg">{item.emoji}</span>
                  
                  {/* Tooltip */}
                  <div className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap ${
                    darkMode 
                      ? 'bg-gray-800 text-white border border-gray-700' 
                      : 'bg-white text-gray-900 border border-gray-200 shadow-lg'
                  }`}>
                    {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;