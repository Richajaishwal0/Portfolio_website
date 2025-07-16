import React, { useEffect, useState } from "react";
import {
  Code,
  Database,
  Wrench,
  Brain,
  Globe,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

interface SkillsProps {
  darkMode: boolean;
  language: string;
}

const Skills: React.FC<SkillsProps> = ({ darkMode, language }) => {
  const content = {
    en: {
      title: "Technical Skills",
      subtitle: "Technologies and tools I work with",
    },
    hi: {
      title: "तकनीकी कौशल",
      subtitle: "तकनीकें और उपकरण जिनके साथ मैं काम करती हूँ",
    },
  };

  const t = content[language as keyof typeof content];

  const skillCategories = [
    // 1. Programming Languages
    {
      title: "Programming Languages",
      icon: Code,
      emoji: "💻",
      skills: [
        { name: "Python", level: 95, icon: "🐍" },
        { name: "C", level: 85, icon: "⚡" },
        { name: "C++", level: 85, icon: "🔧" },
        { name: "JavaScript", level: 80, icon: "🟨" },
        { name: "DSA", level: 90, icon: "🧮" },
      ],
      color: darkMode
        ? "from-purple-500 to-pink-500"
        : "from-orange-500 to-red-500",
    },
    // 2. Tools & Platforms
    {
      title: "Tools & Platforms",
      icon: Wrench,
      emoji: "🛠️",
      skills: [
        { name: "Git & GitHub", level: 90, icon: "🐙" },
        { name: "VS Code", level: 95, icon: "💙" },
        { name: "Jupyter Notebook", level: 85, icon: "📓" },
        { name: "Google Colab", level: 80, icon: "🔬" },
        { name: "Anaconda", level: 75, icon: "🐍" },
      ],
      color: darkMode
        ? "from-yellow-500 to-orange-500"
        : "from-yellow-500 to-amber-500",
    },
    // 3. Web Development
    {
      title: "Web Development",
      icon: Globe,
      emoji: "🌐",
      skills: [
        { name: "HTML", level: 90, icon: "🏗️" },
        { name: "CSS", level: 85, icon: "🎨" },
        { name: "Node.js", level: 75, icon: "🟢" },
        { name: "AI Integration", level: 80, icon: "🤖" },
      ],
      color: darkMode
        ? "from-rose-500 to-pink-500"
        : "from-red-500 to-rose-500",
    },
    // 4. Frameworks & Libraries
    {
      title: "Frameworks & Libraries",
      icon: Star,
      emoji: "📚",
      skills: [
        { name: "Pandas", level: 90, icon: "🐼" },
        { name: "NumPy", level: 85, icon: "🔢" },
        { name: "Matplotlib", level: 80, icon: "📊" },
        { name: "Tailwind CSS", level: 85, icon: "🎨" },
      ],
      color: darkMode
        ? "from-cyan-500 to-blue-500"
        : "from-blue-500 to-indigo-500",
    },
    // 5. Machine Learning
    {
      title: "Machine Learning",
      icon: Brain,
      emoji: "🤖",
      skills: [
        { name: "Supervised ML", level: 85, icon: "📈" },
        { name: "Unsupervised ML", level: 80, icon: "🔍" },
        { name: "Python ML", level: 90, icon: "🧠" },
      ],
      color: darkMode
        ? "from-indigo-500 to-purple-500"
        : "from-purple-500 to-pink-500",
    },
  ];

  // Responsive: detect screen size
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1200);
      setIsLaptop(width >= 1200);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Timeline scroll ref
  const timelineRef = React.useRef<HTMLDivElement>(null);

  // Scroll handler for arrows
  const scrollTimeline = (dir: "left" | "right") => {
    if (timelineRef.current) {
      const scrollAmount = 300;
      timelineRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Custom scrollbar hide CSS
  const hideScrollbar = {
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  };

  // Animation variants for entrance
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.15,
        type: "spring",
      },
    }),
  };

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2
            className={`text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r ${
              darkMode
                ? "from-purple-400 to-cyan-400"
                : "from-orange-600 to-red-600"
            } bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 cursor-default`}
          >
            {t.title}
          </h2>
          <p
            className={`text-2xl max-w-3xl mx-auto transition-all duration-500 hover:scale-105 ${
              darkMode ? "text-slate-300" : "text-gray-600"
            }`}
          >
            {t.subtitle}
          </p>
        </div>

        {/* Responsive Layout */}
        {isMobile ? (
          // Mobile/Tablet: Grid or stacked cards
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                className={`relative rounded-2xl p-6 shadow-xl border-2 group transition-all duration-500 cursor-pointer backdrop-blur-lg overflow-hidden ${
                  darkMode
                    ? "bg-slate-800/70 border-purple-700/40 text-white"
                    : "bg-white/80 border-orange-200/70 text-gray-900"
                }`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={idx}
              >
                <div className="flex flex-col items-center mb-4">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl border-4 mb-2 transition-all duration-500 ${
                      darkMode
                        ? "bg-gradient-to-br from-purple-600 to-cyan-600 border-purple-300"
                        : "bg-gradient-to-br from-orange-400 to-red-400 border-orange-200"
                    }`}
                  >
                    <span className="text-3xl drop-shadow-lg">
                      {category.emoji}
                    </span>
                  </div>
                  <category.icon
                    size={22}
                    className={`mb-2 ${
                      darkMode ? "text-purple-300" : "text-orange-500"
                    }`}
                  />
                  <h3 className="text-lg font-bold tracking-tight mb-2">
                    <span
                      className={`border-b-2 pb-0.5 ${
                        darkMode ? "border-cyan-400" : "border-orange-400"
                      } transition-all duration-300`}
                    >
                      {category.title}
                    </span>
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className={`px-3 py-1 rounded-full text-sm font-semibold shadow border flex items-center gap-1 transition-all duration-300 ${
                        darkMode
                          ? "bg-gradient-to-r from-purple-500/30 to-cyan-500/30 text-purple-200 border-purple-400/30 hover:bg-purple-500/50 hover:text-cyan-100"
                          : "bg-gradient-to-r from-orange-400/30 to-red-400/30 text-orange-800 border-orange-400/30 hover:bg-orange-400/50 hover:text-white"
                      }`}
                    >
                      <span className="mr-1 text-base">{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
                <div
                  className={`mt-4 text-xs font-semibold tracking-wide ${
                    darkMode ? "text-cyan-200" : "text-orange-600"
                  }`}
                >
                  Phase {idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        ) : isTablet ? (
          // Tablet: Horizontal Timeline with custom arrows
          <div className="relative w-full pb-12">
            {/* Arrow Buttons */}
            <button
              className="absolute left-0 top-1/2 z-20 -translate-y-1/2 bg-gradient-to-br from-purple-700/80 to-cyan-700/80 hover:from-purple-500 hover:to-cyan-500 text-white rounded-full p-3 shadow-lg transition-all duration-300 focus:outline-none"
              style={{ display: "flex" }}
              onClick={() => scrollTimeline("left")}
              aria-label="Scroll left"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              className="absolute right-0 top-1/2 z-20 -translate-y-1/2 bg-gradient-to-br from-purple-700/80 to-cyan-700/80 hover:from-purple-500 hover:to-cyan-500 text-white rounded-full p-3 shadow-lg transition-all duration-300 focus:outline-none"
              style={{ display: "flex" }}
              onClick={() => scrollTimeline("right")}
              aria-label="Scroll right"
            >
              <ChevronRight size={28} />
            </button>
            <div
              ref={timelineRef}
              className="flex items-center justify-start overflow-x-auto relative px-4 md:px-8 lg:px-16"
              style={{ ...hideScrollbar, minWidth: "0" }}
            >
              <div
                className="absolute left-0 right-0 top-1/2 h-2 z-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full shadow-lg blur-[2px] opacity-80"
                style={{ transform: "translateY(-50%)" }}
              />
              {skillCategories.map((category, idx) => (
                <motion.div
                  key={idx}
                  className="relative z-10 flex flex-col items-center w-48 mx-2 group"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={idx}
                >
                  <div className="relative mb-4">
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center shadow-2xl border-4 transition-all duration-500 ${
                        darkMode
                          ? "bg-gradient-to-br from-purple-600 to-cyan-600 border-purple-300"
                          : "bg-gradient-to-br from-orange-400 to-red-400 border-orange-200"
                      } group-hover:scale-110 group-hover:shadow-[0_0_32px_8px_rgba(168,139,250,0.4)]`}
                    >
                      <span className="text-4xl drop-shadow-lg">
                        {category.emoji}
                      </span>
                    </div>
                    <div
                      className={`absolute inset-0 rounded-full pointer-events-none z-0 ${
                        darkMode
                          ? "bg-purple-400/30 blur-2xl"
                          : "bg-orange-400/20 blur-2xl"
                      }`}
                    />
                  </div>
                  <div
                    className={`relative w-full rounded-2xl p-6 shadow-2xl border-2 transition-all duration-500 backdrop-blur-lg ${
                      darkMode
                        ? "bg-slate-900/70 border-purple-700/40 text-white"
                        : "bg-white/80 border-orange-200/70 text-gray-900"
                    } group-hover:scale-105 group-hover:shadow-[0_8px_32px_0_rgba(168,139,250,0.25)]`}
                  >
                    <div className="flex items-center mb-2">
                      <category.icon
                        size={22}
                        className={`mr-2 ${
                          darkMode ? "text-purple-300" : "text-orange-500"
                        }`}
                      />
                      <h3 className="text-lg font-bold tracking-tight">
                        <span
                          className={`border-b-2 pb-0.5 ${
                            darkMode ? "border-cyan-400" : "border-orange-400"
                          } transition-all duration-300`}
                        >
                          {category.title}
                        </span>
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2 justify-center">
                      {category.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className={`px-3 py-1 rounded-full text-sm font-semibold shadow border flex items-center gap-1 transition-all duration-300 ${
                            darkMode
                              ? "bg-gradient-to-r from-purple-500/30 to-cyan-500/30 text-purple-200 border-purple-400/30 hover:bg-purple-500/50 hover:text-cyan-100"
                              : "bg-gradient-to-r from-orange-400/30 to-red-400/30 text-orange-800 border-orange-400/30 hover:bg-orange-400/50 hover:text-white"
                          }`}
                        >
                          <span className="mr-1 text-base">{skill.icon}</span>
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-4 mt-4 shadow-lg ${
                      darkMode
                        ? "bg-cyan-400 border-purple-400"
                        : "bg-orange-400 border-red-400"
                    }`}
                  />
                  <div
                    className={`mt-2 text-xs font-semibold tracking-wide ${
                      darkMode ? "text-cyan-200" : "text-orange-600"
                    }`}
                  >
                    Phase {idx + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          // Laptop/Desktop: Horizontal Timeline, no arrows, space-around
          <div className="relative w-full pb-12">
            <div
              className="flex items-center justify-around relative px-4 md:px-8 lg:px-16"
              style={{ minWidth: "0" }}
            >
              <div
                className="absolute left-0 right-0 top-1/2 h-2 z-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full shadow-lg blur-[2px] opacity-80"
                style={{ transform: "translateY(-50%)" }}
              />
              {skillCategories.map((category, idx) => (
                <motion.div
                  key={idx}
                  className="relative z-10 flex flex-col items-center w-48 mx-2 group"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={idx}
                >
                  <div className="relative mb-4">
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center shadow-2xl border-4 transition-all duration-500 ${
                        darkMode
                          ? "bg-gradient-to-br from-purple-600 to-cyan-600 border-purple-300"
                          : "bg-gradient-to-br from-orange-400 to-red-400 border-orange-200"
                      } group-hover:scale-110 group-hover:shadow-[0_0_32px_8px_rgba(168,139,250,0.4)]`}
                    >
                      <span className="text-4xl drop-shadow-lg">
                        {category.emoji}
                      </span>
                    </div>
                    <div
                      className={`absolute inset-0 rounded-full pointer-events-none z-0 ${
                        darkMode
                          ? "bg-purple-400/30 blur-2xl"
                          : "bg-orange-400/20 blur-2xl"
                      }`}
                    />
                  </div>
                  <div
                    className={`relative w-full rounded-2xl p-6 shadow-2xl border-2 transition-all duration-500 backdrop-blur-lg ${
                      darkMode
                        ? "bg-slate-900/70 border-purple-700/40 text-white"
                        : "bg-white/80 border-orange-200/70 text-gray-900"
                    } group-hover:scale-105 group-hover:shadow-[0_8px_32px_0_rgba(168,139,250,0.25)]`}
                  >
                    <div className="flex items-center mb-2">
                      <category.icon
                        size={22}
                        className={`mr-2 ${
                          darkMode ? "text-purple-300" : "text-orange-500"
                        }`}
                      />
                      <h3 className="text-lg font-bold tracking-tight">
                        <span
                          className={`border-b-2 pb-0.5 ${
                            darkMode ? "border-cyan-400" : "border-orange-400"
                          } transition-all duration-300`}
                        >
                          {category.title}
                        </span>
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2 justify-center">
                      {category.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className={`px-3 py-1 rounded-full text-sm font-semibold shadow border flex items-center gap-1 transition-all duration-300 ${
                            darkMode
                              ? "bg-gradient-to-r from-purple-500/30 to-cyan-500/30 text-purple-200 border-purple-400/30 hover:bg-purple-500/50 hover:text-cyan-100"
                              : "bg-gradient-to-r from-orange-400/30 to-red-400/30 text-orange-800 border-orange-400/30 hover:bg-orange-400/50 hover:text-white"
                          }`}
                        >
                          <span className="mr-1 text-base">{skill.icon}</span>
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-4 mt-4 shadow-lg ${
                      darkMode
                        ? "bg-cyan-400 border-purple-400"
                        : "bg-orange-400 border-red-400"
                    }`}
                  />
                  <div
                    className={`mt-2 text-xs font-semibold tracking-wide ${
                      darkMode ? "text-cyan-200" : "text-orange-600"
                    }`}
                  >
                    Phase {idx + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
