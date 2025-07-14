import React from 'react';
import { Code, Database, Wrench, Brain, Globe, Star } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
  language: string;
}

const Skills: React.FC<SkillsProps> = ({ darkMode, language }) => {
  const content = {
    en: {
      title: "Technical Skills",
      subtitle: "Technologies and tools I work with"
    },
    hi: {
      title: "तकनीकी कौशल",
      subtitle: "तकनीकें और उपकरण जिनके साथ मैं काम करती हूँ"
    }
  };

  const t = content[language as keyof typeof content];

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      emoji: '💻',
      skills: [
        { name: 'Python', level: 95, icon: '🐍' },
        { name: 'C', level: 85, icon: '⚡' },
        { name: 'C++', level: 85, icon: '🔧' },
        { name: 'JavaScript', level: 80, icon: '🟨' },
        { name: 'DSA', level: 90, icon: '🧮' }
      ],
      color: darkMode ? 'from-purple-500 to-pink-500' : 'from-orange-500 to-red-500'
    },
    {
      title: 'Frameworks & Libraries',
      icon: Star,
      emoji: '📚',
      skills: [
        { name: 'Pandas', level: 90, icon: '🐼' },
        { name: 'NumPy', level: 85, icon: '🔢' },
        { name: 'Matplotlib', level: 80, icon: '📊' },
        { name: 'Tailwind CSS', level: 85, icon: '🎨' }
      ],
      color: darkMode ? 'from-cyan-500 to-blue-500' : 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Databases',
      icon: Database,
      emoji: '🗄️',
      skills: [
        { name: 'MySQL', level: 85, icon: '🐬' },
        { name: 'MongoDB', level: 80, icon: '🍃' }
      ],
      color: darkMode ? 'from-green-500 to-emerald-500' : 'from-green-500 to-teal-500'
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      emoji: '🛠️',
      skills: [
        { name: 'Git & GitHub', level: 90, icon: '🐙' },
        { name: 'VS Code', level: 95, icon: '💙' },
        { name: 'Jupyter Notebook', level: 85, icon: '📓' },
        { name: 'Google Colab', level: 80, icon: '🔬' },
        { name: 'Anaconda', level: 75, icon: '🐍' }
      ],
      color: darkMode ? 'from-yellow-500 to-orange-500' : 'from-yellow-500 to-amber-500'
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      emoji: '🤖',
      skills: [
        { name: 'Supervised ML', level: 85, icon: '📈' },
        { name: 'Unsupervised ML', level: 80, icon: '🔍' },
        { name: 'Python ML', level: 90, icon: '🧠' }
      ],
      color: darkMode ? 'from-indigo-500 to-purple-500' : 'from-purple-500 to-pink-500'
    },
    {
      title: 'Web Development',
      icon: Globe,
      emoji: '🌐',
      skills: [
        { name: 'HTML', level: 90, icon: '🏗️' },
        { name: 'CSS', level: 85, icon: '🎨' },
        { name: 'Node.js', level: 75, icon: '🟢' },
        { name: 'AI Integration', level: 80, icon: '🤖' }
      ],
      color: darkMode ? 'from-rose-500 to-pink-500' : 'from-red-500 to-rose-500'
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className={`text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r ${
            darkMode 
              ? 'from-purple-400 to-cyan-400' 
              : 'from-orange-600 to-red-600'
          } bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 cursor-default`}>
            {t.title}
          </h2>
          <p className={`text-2xl max-w-3xl mx-auto transition-all duration-500 hover:scale-105 ${
            darkMode ? 'text-slate-300' : 'text-gray-600'
          }`}>
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer group ${
                darkMode 
                  ? 'bg-slate-800/50 border-2 border-slate-700/50 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/25' 
                  : 'bg-white/50 border-2 border-gray-200/50 hover:border-orange-400/50 hover:shadow-2xl hover:shadow-orange-500/25'
              } backdrop-blur-sm`}
            >
              <div className="flex items-center mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} mr-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                  <span className="text-3xl">{category.emoji}</span>
                </div>
                <h3 className={`text-2xl font-bold transition-all duration-300 group-hover:scale-105 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                        <span className={`font-medium transition-all duration-300 group-hover:scale-105 ${
                          darkMode ? 'text-slate-300' : 'text-gray-700'
                        }`}>
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-sm font-bold transition-all duration-300 group-hover:scale-110 ${
                        darkMode ? 'text-slate-400' : 'text-gray-500'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full rounded-full h-3 ${
                      darkMode ? 'bg-slate-700' : 'bg-gray-200'
                    } overflow-hidden`}>
                      <div
                        className={`h-3 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out group-hover:animate-pulse`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Achievements with Enhanced Styling */}
        <div className="mt-12 md:mt-16 lg:mt-20 text-center">
          <h3 className={`text-3xl font-bold mb-12 transition-all duration-500 hover:scale-105 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            🏆 Special Achievements
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              '5⭐ Python - HackerRank',
              '5⭐ Java - HackerRank', 
              '5⭐ C++ - HackerRank',
              'Postman Student Expert',
              'GSSoC Extended 2024',
              'Hacktoberfest 2024'
            ].map((achievement, index) => (
              <div
                key={index}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 cursor-pointer group ${
                  darkMode 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg shadow-purple-500/25' 
                    : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white shadow-lg shadow-orange-500/25'
                } hover:shadow-2xl`}
              >
                <span className="group-hover:scale-110 transition-transform duration-300">
                  {achievement}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;