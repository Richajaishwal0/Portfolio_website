import React, { useState, useEffect } from "react";

interface SideNavigationProps {
  darkMode: boolean;
  language: string;
}

const SideNavigation: React.FC<SideNavigationProps> = ({
  darkMode,
  language,
}) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "research",
        "certifications",
        "extra-curricular",
        "contact",
      ];
      const currentSection = sections.find((section) => {
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", emoji: "🏠", label: "Home" },
    { id: "about", emoji: "👩‍💻", label: "About" },
    { id: "skills", emoji: "🛠️", label: "Skills" },
    { id: "experience", emoji: "💼", label: "Experience" },
    { id: "projects", emoji: "📁", label: "Projects" },
    { id: "research", emoji: "📚", label: "Research" },
    { id: "certifications", emoji: "🏆", label: "Certifications" },
    { id: "extra-curricular", emoji: "✨", label: "Extra Curricular" },
    { id: "contact", emoji: "📞", label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Side Navigation */}
      <nav
        className={`fixed left-0 top-0 h-full w-20 z-50 hidden lg:flex flex-col items-center justify-center transition-all duration-700 ${
          darkMode
            ? "bg-gradient-to-b from-purple-900/20 via-slate-900/40 to-purple-900/20"
            : "bg-gradient-to-b from-orange-200/20 via-rose-100/40 to-orange-200/20"
        } backdrop-blur-xl border-r-2 ${
          darkMode ? "border-purple-500/30" : "border-orange-400/30"
        }`}
      >
        <div className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative group p-4 rounded-2xl transition-all duration-500 hover:scale-125 hover:rotate-12 ${
                activeSection === item.id
                  ? darkMode
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 shadow-2xl shadow-purple-500/50 scale-110"
                    : "bg-gradient-to-r from-orange-500 to-red-500 shadow-2xl shadow-orange-500/50 scale-110"
                  : darkMode
                  ? "hover:bg-purple-800/50 hover:shadow-lg hover:shadow-purple-400/25"
                  : "hover:bg-orange-300/50 hover:shadow-lg hover:shadow-orange-400/25"
              }`}
              title={item.label}
            >
              <span
                className={`text-2xl transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.7)] group-hover:text-pink-400 dark:group-hover:text-cyan-300 ${
                  activeSection === item.id ? "filter drop-shadow-lg" : ""
                }`}
              >
                {item.emoji}
              </span>

              {/* Tooltip */}
              <div
                className={`absolute left-full ml-4 top-1/2 transform -translate-y-1/2 px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none ${
                  darkMode
                    ? "bg-purple-800/90 text-white border border-purple-600/50"
                    : "bg-orange-100/90 text-gray-900 border border-orange-300/50"
                } backdrop-blur-sm shadow-xl`}
              >
                {item.label}
                <div
                  className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 rotate-45 ${
                    darkMode
                      ? "bg-purple-800/90 border-l border-b border-purple-600/50"
                      : "bg-orange-100/90 border-l border-b border-orange-300/50"
                  }`}
                />
              </div>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav
        className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-all duration-700 ${
          darkMode
            ? "bg-gradient-to-r from-purple-900/30 via-slate-900/50 to-purple-900/30"
            : "bg-gradient-to-r from-orange-200/30 via-rose-100/50 to-orange-200/30"
        } backdrop-blur-xl border-t-2 ${
          darkMode ? "border-purple-500/30" : "border-orange-400/30"
        }`}
      >
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative p-3 rounded-xl transition-all duration-500 hover:scale-110 ${
                activeSection === item.id
                  ? darkMode
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/50"
                    : "bg-gradient-to-r from-orange-500 to-red-500 shadow-lg shadow-orange-500/50"
                  : darkMode
                  ? "hover:bg-purple-800/50"
                  : "hover:bg-orange-300/50"
              }`}
            >
              <span
                className={`text-xl transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.7)] group-hover:text-pink-400 dark:group-hover:text-cyan-300 ${
                  activeSection === item.id ? "filter drop-shadow-lg" : ""
                }`}
              >
                {item.emoji}
              </span>

              {activeSection === item.id && (
                <div
                  className={`absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                    darkMode ? "bg-cyan-400" : "bg-yellow-400"
                  } animate-pulse`}
                />
              )}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default SideNavigation;
