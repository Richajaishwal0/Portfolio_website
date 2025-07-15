import React, { useState } from 'react';
import { Briefcase, Award, Users, Code } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
  language: string;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode, language }) => {
  const content = {
    en: {
      title: "Experience & Achievements",
      subtitle: "Professional journey and accomplishments"
    },
    hi: {
      title: "अनुभव और उपलब्धियां",
      subtitle: "व्यावसायिक यात्रा और उपलब्धियां"
    }
  };

  const t = content[language as keyof typeof content];

  const experiences = [
    {
      icon: Briefcase,
      emoji: '🚀',
      title: 'Infosys Springboard Internship (AI)',
      duration: '2 Months',
      type: 'Internship',
      description: 'Worked on real-world AI projects and gained hands-on experience with artificial intelligence applications.',
      highlights: [
        'Real-world AI project implementation',
        'Machine learning model development',
        'Industry best practices exposure'
      ],
      color: darkMode ? 'from-purple-500 to-pink-600' : 'from-orange-500 to-red-600'
    },
    {
      icon: Award,
      emoji: '🏆',
      title: 'Competitive Programming Excellence',
      duration: 'Ongoing',
      type: 'Achievement',
      description: 'Participated in 7+ coding competitions on Unstop platform and received appreciation from senior engineers.',
      highlights: [
        '7+ coding competitions (Unstop)',
        'Appreciated by senior engineers',
        'Consistent performance improvement'
      ],
      color: darkMode ? 'from-cyan-500 to-blue-600' : 'from-blue-500 to-indigo-600'
    },
    {
      icon: Code,
      emoji: '⭐',
      title: 'HackerRank 5-Star Achievement',
      duration: '2024',
      type: 'Certification',
      description: 'Achieved 5-star rating in Python, Java & C++ on HackerRank platform, demonstrating strong programming skills.',
      highlights: [
        '5-star Python rating',
        '5-star Java rating',
        '5-star C++ rating'
      ],
      color: darkMode ? 'from-green-500 to-emerald-600' : 'from-green-500 to-teal-600'
    },
    {
      icon: Users,
      emoji: '🔧',
      title: 'Postman Student Expert',
      duration: '2024',
      type: 'Certification',
      description: 'Certified as Postman Student Expert, specializing in API testing and development workflows.',
      highlights: [
        'API testing expertise',
        'Development workflow optimization',
        'Industry-standard tools proficiency'
      ],
      color: darkMode ? 'from-yellow-500 to-orange-600' : 'from-yellow-500 to-amber-600'
    }
  ];

  const openSourceContributions = [
    {
      title: 'GSSoC Extended 2024',
      description: 'Contributed PRs, bug fixes, and enhancements across multiple projects',
      icon: '🌟',
      stats: 'Multiple PRs merged'
    },
    {
      title: 'Hacktoberfest 2024',
      description: '3+ accepted PRs, documentation fixes, and GitHub community participation',
      icon: '🎃',
      stats: '3+ PRs accepted'
    }
  ];

  const [showGssocModal, setShowGssocModal] = useState(false);
  const [showHacktoberModal, setShowHacktoberModal] = useState(false);
  const [openExpModal, setOpenExpModal] = useState<string | null>(null);
  const [cpExpIndex, setCpExpIndex] = useState(0);
  const cpExpFiles = [
    { type: 'image', src: '/leetcode.jpg', label: 'LeetCode' },
    { type: 'pdf', src: '/morphx.pdf', label: 'MorphX' },
    { type: 'image', src: '/hr.jpg', label: 'HackerRank' },
  ];
  const expFileMap: Record<string, { type: 'image' | 'pdf', src: string }> = {
    'Infosys Springboard Internship (AI)': { type: 'image', src: '/ai-intern.jpg' },
    'HackerRank 5-Star Achievement': { type: 'image', src: '/hr.jpg' },
    'Postman Student Expert': { type: 'image', src: '/Postman_API.jpg' },
  };

  return (
    <section id="experience" className={`py-16 sm:py-20 md:py-24 lg:py-32 ${
      darkMode ? 'bg-slate-800/20' : 'bg-white/20'
    } backdrop-blur-sm`}>
      <div>
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

          {/* Professional Experience */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16 lg:mb-20">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div
                  key={index}
                  className={`relative p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer group ${
                    darkMode 
                      ? 'bg-slate-800/50 border-2 border-slate-700/50 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/25' 
                      : 'bg-white/50 border-2 border-gray-200/50 hover:border-orange-400/50 hover:shadow-2xl hover:shadow-orange-500/25'
                  } backdrop-blur-sm`}
                  onClick={() => {
                    if (exp.title === 'Infosys Springboard Internship (AI)') setOpenExpModal(exp.title);
                    if (exp.title === 'Competitive Programming Excellence') { setOpenExpModal(exp.title); setCpExpIndex(0); }
                    if (exp.title === 'HackerRank 5-Star Achievement') setOpenExpModal(exp.title);
                    if (exp.title === 'Postman Student Expert') setOpenExpModal(exp.title);
                  }}
                >
                  <div className="flex items-start space-x-6 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${exp.color} group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      <span className="text-3xl">{exp.emoji}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className={`text-xl font-bold transition-all duration-300 group-hover:scale-105 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {exp.title}
                        </h3>
                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                          darkMode 
                            ? 'bg-slate-700 text-slate-300' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      <p className={`text-sm mb-4 transition-all duration-300 group-hover:scale-105 ${
                        darkMode ? 'text-slate-400' : 'text-gray-500'
                      }`}>
                        {exp.duration}
                      </p>
                    </div>
                  </div>
                  
                  <p className={`text-lg mb-6 leading-relaxed transition-all duration-300 group-hover:scale-105 ${
                    darkMode ? 'text-slate-300' : 'text-gray-700'
                  }`}>
                    {exp.description}
                  </p>
                  
                  <div className="space-y-3">
                    {exp.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          darkMode ? 'bg-purple-400' : 'bg-orange-500'
                        } group-hover:scale-125 transition-transform duration-300`} />
                        <span className={`text-sm transition-all duration-300 group-hover:scale-105 ${
                          darkMode ? 'text-slate-400' : 'text-gray-600'
                        }`}>
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Open Source Contributions */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <h3 className={`text-3xl font-bold text-center mb-12 transition-all duration-500 hover:scale-105 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              🌟 Open-Source Contributions
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {openSourceContributions.map((contrib, index) => (
                <div
                  key={index}
                  className={`relative p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer group ${
                    darkMode 
                      ? 'bg-gradient-to-r from-green-600/20 to-blue-600/20 border-2 border-green-500/30 hover:border-green-400/50' 
                      : 'bg-gradient-to-r from-green-600/20 to-blue-600/20 border-2 border-green-500/30 hover:border-green-400/50'
                  } backdrop-blur-sm hover:shadow-2xl hover:shadow-green-500/25`}
                  onClick={() => {
                    if (contrib.title === 'GSSoC Extended 2024') setShowGssocModal(true);
                    if (contrib.title === 'Hacktoberfest 2024') setShowHacktoberModal(true);
                  }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-4xl group-hover:scale-125 transition-transform duration-500">{contrib.icon}</span>
                    <h4 className={`font-bold text-xl transition-all duration-300 group-hover:scale-105 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {contrib.title}
                    </h4>
                  </div>
                  <p className={`text-lg mb-4 transition-all duration-300 group-hover:scale-105 ${
                    darkMode ? 'text-slate-300' : 'text-gray-700'
                  }`}>
                    {contrib.description}
                  </p>
                  <div className={`text-sm px-4 py-2 rounded-full inline-block font-medium transition-all duration-300 group-hover:scale-105 ${
                    darkMode 
                      ? 'bg-green-600/30 text-green-300' 
                      : 'bg-green-600/30 text-green-800'
                  }`}>
                    {contrib.stats}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '2+', label: 'Months Internship', icon: '💼' },
              { number: '7+', label: 'Competitions', icon: '🏆' },
              { number: '3+', label: 'Open Source PRs', icon: '🔧' },
              { number: '5⭐', label: 'HackerRank Rating', icon: '⭐' }
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center p-8 rounded-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer group ${
                  darkMode 
                    ? 'bg-slate-800/30 border-2 border-slate-700/50 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/25' 
                    : 'bg-white/30 border-2 border-gray-200/50 hover:border-orange-400/50 hover:shadow-2xl hover:shadow-orange-500/25'
                } backdrop-blur-sm`}
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-500">{stat.icon}</div>
                <div className={`text-4xl font-bold mb-2 transition-all duration-300 group-hover:scale-110 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {stat.number}
                </div>
                <div className={`text-lg transition-all duration-300 group-hover:scale-105 ${
                  darkMode ? 'text-slate-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Modal for Experience & Achievements cards */}
      {openExpModal && openExpModal !== 'Competitive Programming Excellence' && expFileMap[openExpModal] && (
        <>
          <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm" onClick={() => setOpenExpModal(null)} />
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-4 w-[340px] sm:w-[400px] flex flex-col items-center border border-gray-200 dark:border-slate-700">
              <button
                className="absolute top-2 right-2 text-2xl text-gray-700 dark:text-gray-200 hover:text-red-500 transition-colors"
                onClick={e => { e.stopPropagation(); setOpenExpModal(null); }}
                aria-label="Close"
              >
                ×
              </button>
              <h4 className="text-lg font-bold mb-2 text-center text-gray-900 dark:text-white">{openExpModal} Certificate</h4>
              {expFileMap[openExpModal].type === 'image' ? (
                <img src={expFileMap[openExpModal].src} alt={openExpModal + ' Certificate'} className="rounded-lg shadow-md max-h-64 w-auto" />
              ) : (
                <iframe src={expFileMap[openExpModal].src} title={openExpModal + ' Certificate'} className="rounded-lg shadow-md w-full h-64" />
              )}
            </div>
          </div>
        </>
      )}
      {/* Modal for Competitive Programming Excellence (carousel) */}
      {openExpModal === 'Competitive Programming Excellence' && (
        <>
          <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm" onClick={() => setOpenExpModal(null)} />
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-4 w-[340px] sm:w-[400px] flex flex-col items-center border border-gray-200 dark:border-slate-700">
              <button
                className="absolute top-2 right-2 text-2xl text-gray-700 dark:text-gray-200 hover:text-red-500 transition-colors"
                onClick={e => { e.stopPropagation(); setOpenExpModal(null); }}
                aria-label="Close"
              >
                ×
              </button>
              <h4 className="text-lg font-bold mb-2 text-center text-gray-900 dark:text-white">Competitive Programming Certificates</h4>
              <div className="flex items-center justify-center w-full mb-2">
                <button
                  className="px-2 py-1 text-lg font-bold text-gray-500 hover:text-gray-900 dark:hover:text-white disabled:opacity-30"
                  onClick={e => { e.stopPropagation(); setCpExpIndex((cpExpIndex - 1 + cpExpFiles.length) % cpExpFiles.length); }}
                  disabled={cpExpFiles.length <= 1}
                >
                  ‹
                </button>
                <span className="mx-2 text-sm text-gray-700 dark:text-gray-200">{cpExpFiles[cpExpIndex].label}</span>
                <button
                  className="px-2 py-1 text-lg font-bold text-gray-500 hover:text-gray-900 dark:hover:text-white disabled:opacity-30"
                  onClick={e => { e.stopPropagation(); setCpExpIndex((cpExpIndex + 1) % cpExpFiles.length); }}
                  disabled={cpExpFiles.length <= 1}
                >
                  ›
                </button>
              </div>
              {cpExpFiles[cpExpIndex].type === 'image' ? (
                <img src={cpExpFiles[cpExpIndex].src} alt={cpExpFiles[cpExpIndex].label + ' Certificate'} className="rounded-lg shadow-md max-h-64 w-auto" />
              ) : (
                <iframe src={cpExpFiles[cpExpIndex].src} title={cpExpFiles[cpExpIndex].label + ' Certificate'} className="rounded-lg shadow-md w-full h-64" />
              )}
            </div>
          </div>
        </>
      )}
      {/* GSSoC Modal and Backdrop rendered outside main content for clarity */}
      {showGssocModal && (
        <>
          <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm" onClick={() => setShowGssocModal(false)} />
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-4 w-[340px] sm:w-[400px] flex flex-col items-center border border-gray-200 dark:border-slate-700">
              <button
                className="absolute top-2 right-2 text-2xl text-gray-700 dark:text-gray-200 hover:text-red-500 transition-colors"
                onClick={e => { e.stopPropagation(); setShowGssocModal(false); }}
                aria-label="Close"
              >
                ×
              </button>
              <h4 className="text-lg font-bold mb-2 text-center text-gray-900 dark:text-white">GSSoC Certificates</h4>
              <img src="./Richa_Kumari_Jaishwal_Badge_Contributor_GSSoC2024-Extd.png" alt="Richa Kumari Jaishwal GSSoC Badge" className="mb-2 rounded-lg shadow-md max-h-40 w-auto" />
              <img src="./gssoc_badge.jpg" alt="GSSoC Badge" className="rounded-lg shadow-md max-h-32 w-auto" />
            </div>
          </div>
        </>
      )}
      {/* Hacktoberfest Modal and Backdrop */}
      {showHacktoberModal && (
        <>
          <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm" onClick={() => setShowHacktoberModal(false)} />
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-4 w-[340px] sm:w-[400px] flex flex-col items-center border border-gray-200 dark:border-slate-700">
              <button
                className="absolute top-2 right-2 text-2xl text-gray-700 dark:text-gray-200 hover:text-red-500 transition-colors"
                onClick={e => { e.stopPropagation(); setShowHacktoberModal(false); }}
                aria-label="Close"
              >
                ×
              </button>
              <h4 className="text-lg font-bold mb-2 text-center text-gray-900 dark:text-white">Hacktoberfest Certificate</h4>
              <img src="./hb.png" alt="Hacktoberfest Certificate" className="rounded-lg shadow-md max-h-64 w-auto" />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Experience;