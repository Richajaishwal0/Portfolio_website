import React, { useState } from "react";
import { Award, Calendar, ExternalLink, CheckCircle } from "lucide-react";
import {
  FaPersonBooth,
  FaPencilRuler,
  FaTableTennis,
  FaCode,
  FaVideo,
} from "react-icons/fa";

interface CertificationsProps {
  darkMode: boolean;
  language: string;
}

const Certifications: React.FC<CertificationsProps> = ({
  darkMode,
  language,
}) => {
  const content = {
    en: {
      title: "Certifications & Achievements",
      subtitle: "Professional certifications and learning milestones",
    },
    hi: {
      title: "प्रमाणपत्र और उपलब्धियां",
      subtitle: "व्यावसायिक प्रमाणपत्र और सीखने के मील के पत्थर",
    },
  };

  const t = content[language as keyof typeof content];

  const certifications = [
    {
      title: "IT Backbone: Networking, Servers & Cloud",
      issuer: "Professional Certification",
      year: "2024",
      icon: "🌐",
      description:
        "Comprehensive understanding of IT infrastructure, networking protocols, server management, and cloud technologies.",
      skills: [
        "Networking",
        "Server Management",
        "Cloud Computing",
        "IT Infrastructure",
      ],
      color: darkMode
        ? "from-purple-500 to-pink-500"
        : "from-orange-500 to-red-500",
    },
    {
      title: "Software Development Insights",
      issuer: "LinkedIn Learning",
      year: "2024",
      icon: "💻",
      description:
        "Advanced software development methodologies, best practices, and industry insights for modern development.",
      skills: [
        "Software Development",
        "Best Practices",
        "Methodologies",
        "Industry Insights",
      ],
      color: darkMode
        ? "from-cyan-500 to-blue-500"
        : "from-blue-500 to-indigo-500",
      link: "https://www.linkedin.com/in/richa-jaishwal/details/certifications/1721742991553/single-media-viewer/?profileId=ACoAAEhvmsYB7E6StheGLMv6b32dfxzKgPJuJzA",
    },
    {
      title: "Public Speaking Mastery",
      issuer: "Udemy",
      year: "2024",
      icon: "🎤",
      description:
        "Professional communication skills, presentation techniques, and public speaking confidence building.",
      skills: [
        "Public Speaking",
        "Communication",
        "Presentation",
        "Confidence Building",
      ],
      color: darkMode
        ? "from-green-500 to-emerald-500"
        : "from-green-500 to-teal-500",
      link: "https://www.linkedin.com/in/richa-jaishwal/details/certifications/885375065/multiple-media-viewer/?profileId=ACoAAEhvmsYB7E6StheGLMv6b32dfxzKgPJuJzA&treasuryMediaId=1727462229113",
    },
    {
      title: "Front-End Development",
      issuer: "Datafair",
      year: "2024",
      icon: "🎨",
      description:
        "Modern front-end development techniques, responsive design, and user interface best practices.",
      skills: ["HTML/CSS", "JavaScript", "Responsive Design", "UI/UX"],
      color: darkMode
        ? "from-yellow-500 to-orange-500"
        : "from-yellow-500 to-amber-500",
      link: "https://www.linkedin.com/in/richa-jaishwal/details/certifications/1721659948602/single-media-viewer/?profileId=ACoAAEhvmsYB7E6StheGLMv6b32dfxzKgPJuJzA",
    },
    {
      title: "Artificial Intelligence",
      issuer: "Infosys",
      year: "2024",
      icon: "🤖",
      description:
        "Comprehensive AI fundamentals, machine learning algorithms, and practical AI implementation.",
      skills: [
        "AI Fundamentals",
        "Machine Learning",
        "Neural Networks",
        "AI Implementation",
      ],
      color: darkMode
        ? "from-indigo-500 to-purple-500"
        : "from-purple-500 to-pink-500",
    },
    {
      title: "Python Basics",
      issuer: "HackerRank",
      year: "2024",
      icon: "🐍",
      description:
        "Python programming fundamentals, data structures, algorithms, and problem-solving techniques.",
      skills: [
        "Python Programming",
        "Data Structures",
        "Algorithms",
        "Problem Solving",
      ],
      color: darkMode
        ? "from-rose-500 to-pink-500"
        : "from-red-500 to-rose-500",
    },
    {
      title: "Competitive Programming",
      issuer: "LeetCode, MorphX, HackerRank",
      year: "2024",
      icon: "🏆",
      description:
        "Advanced problem-solving skills and competitive coding experience across platforms.",
      skills: [
        "Problem Solving",
        "Competitive Coding",
        "Data Structures",
        "Algorithms",
      ],
      color: darkMode
        ? "from-blue-500 to-indigo-500"
        : "from-blue-500 to-indigo-500",
    },
  ];

  const [openModal, setOpenModal] = useState<string | null>(null);
  const [cpIndex, setCpIndex] = useState(0);
  const cpFiles = [
    { type: "image", src: "/leetcode.jpg", label: "LeetCode" },
    { type: "pdf", src: "/morphx.pdf", label: "MorphX" },
    { type: "image", src: "/hr.jpg", label: "HackerRank" },
  ];

  const certFileMap: Record<string, { type: "image" | "pdf"; src: string }> = {
    "Python Basics": { type: "pdf", src: "/python_basic certificate.pdf" },
    "IT Backbone: Networking, Servers & Cloud": {
      type: "image",
      src: "/Networking.jpg",
    },
    "Artificial Intelligence": { type: "image", src: "/ai-intern.jpg" },
    "Postman Student Expert": { type: "image", src: "/Postman_API.jpg" },
  };

  return (
    <>
      <section id="certifications" className="py-16 sm:py-20 md:py-24 lg:py-32">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {certifications.map((cert, index) => {
              const isLinked = !!cert.link;
              const CardWrapper = isLinked ? "a" : "div";
              const cardProps = isLinked
                ? {
                    href: cert.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: `p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer group ${
                      darkMode
                        ? "bg-slate-800/50 border-2 border-slate-700/50 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/25"
                        : "bg-white/50 border-2 border-gray-200/50 hover:border-orange-400/50 hover:shadow-2xl hover:shadow-orange-500/25"
                    } backdrop-blur-sm`,
                  }
                : {
                    onClick: () => {
                      if (cert.title === "Competitive Programming") {
                        setOpenModal("Competitive Programming");
                        setCpIndex(0);
                      } else {
                        setOpenModal(cert.title);
                      }
                    },
                    className: `p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer group ${
                      darkMode
                        ? "bg-slate-800/50 border-2 border-slate-700/50 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/25"
                        : "bg-white/50 border-2 border-gray-200/50 hover:border-orange-400/50 hover:shadow-2xl hover:shadow-orange-500/25"
                    } backdrop-blur-sm`,
                  };
              return (
                <CardWrapper key={index} {...cardProps}>
                  <div className="flex items-start space-x-6 mb-6">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${cert.color} group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                    >
                      <span className="text-3xl">{cert.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3
                          className={`font-bold text-lg transition-all duration-300 group-hover:scale-105 ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {cert.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <CheckCircle
                            size={18}
                            className={
                              darkMode ? "text-green-400" : "text-green-600"
                            }
                          />
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span
                          className={`text-sm transition-all duration-300 group-hover:scale-105 ${
                            darkMode ? "text-slate-400" : "text-gray-600"
                          }`}
                        >
                          {cert.issuer}
                        </span>
                        <span
                          className={`text-sm px-3 py-1 rounded-full font-medium ${
                            darkMode
                              ? "bg-slate-700 text-slate-300"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p
                    className={`text-lg mb-6 leading-relaxed transition-all duration-300 group-hover:scale-105 ${
                      darkMode ? "text-slate-300" : "text-gray-700"
                    }`}
                  >
                    {cert.description}
                  </p>

                  <div className="space-y-4">
                    <h4
                      className={`text-sm font-semibold transition-all duration-300 group-hover:scale-105 ${
                        darkMode ? "text-slate-200" : "text-gray-800"
                      }`}
                    >
                      Key Skills:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`text-sm px-3 py-2 rounded-full font-medium transition-all duration-300 hover:scale-110 ${
                            darkMode
                              ? "bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-300 border border-purple-500/50"
                              : "bg-gradient-to-r from-orange-500/30 to-red-500/30 text-orange-800 border border-orange-500/50"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardWrapper>
              );
            })}
          </div>

          {/* Learning Philosophy */}
          <div
            className={`mt-16 p-10 rounded-2xl text-center transition-all duration-500 hover:scale-105 cursor-pointer ${
              darkMode
                ? "bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-2 border-purple-500/30"
                : "bg-gradient-to-r from-orange-600/20 to-red-600/20 border-2 border-orange-500/30"
            } backdrop-blur-sm hover:shadow-2xl`}
          >
            <h3
              className={`text-3xl font-bold mb-6 transition-all duration-300 hover:scale-105 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              🎯 Continuous Learning Philosophy
            </h3>
            <p
              className={`text-xl max-w-4xl mx-auto transition-all duration-300 hover:scale-105 ${
                darkMode ? "text-slate-300" : "text-gray-700"
              }`}
            >
              "I believe in continuous learning and staying updated with the
              latest technologies. Each certification represents not just
              knowledge gained, but a commitment to excellence and professional
              growth in the ever-evolving field of technology."
            </p>
          </div>

          {/* Modal for certifications */}
          {openModal &&
            openModal !== "Competitive Programming" &&
            certFileMap[openModal] && (
              <>
                <div
                  className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
                  onClick={() => setOpenModal(null)}
                />
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                  <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-4 w-[340px] sm:w-[400px] flex flex-col items-center border border-gray-200 dark:border-slate-700">
                    <button
                      className="absolute top-2 right-2 text-2xl text-gray-700 dark:text-gray-200 hover:text-red-500 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenModal(null);
                      }}
                      aria-label="Close"
                    >
                      ×
                    </button>
                    <h4 className="text-lg font-bold mb-2 text-center text-gray-900 dark:text-white">
                      {openModal} Certificate
                    </h4>
                    {certFileMap[openModal].type === "image" ? (
                      <img
                        src={certFileMap[openModal].src}
                        alt={openModal + " Certificate"}
                        className="rounded-lg shadow-md max-h-64 w-auto"
                      />
                    ) : (
                      <iframe
                        src={certFileMap[openModal].src}
                        title={openModal + " Certificate"}
                        className="rounded-lg shadow-md w-full h-64"
                      />
                    )}
                  </div>
                </div>
              </>
            )}
          {/* Modal for Competitive Programming (carousel) */}
          {openModal === "Competitive Programming" && (
            <>
              <div
                className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
                onClick={() => setOpenModal(null)}
              />
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-4 w-[340px] sm:w-[400px] flex flex-col items-center border border-gray-200 dark:border-slate-700">
                  <button
                    className="absolute top-2 right-2 text-2xl text-gray-700 dark:text-gray-200 hover:text-red-500 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenModal(null);
                    }}
                    aria-label="Close"
                  >
                    ×
                  </button>
                  <h4 className="text-lg font-bold mb-2 text-center text-gray-900 dark:text-white">
                    Competitive Programming Certificate
                  </h4>
                  <div className="flex items-center justify-center w-full mb-2">
                    <button
                      className="px-2 py-1 text-lg font-bold text-gray-500 hover:text-gray-900 dark:hover:text-white disabled:opacity-30"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCpIndex(
                          (cpIndex - 1 + cpFiles.length) % cpFiles.length
                        );
                      }}
                      disabled={cpFiles.length <= 1}
                    >
                      ‹
                    </button>
                    <span className="mx-2 text-sm text-gray-700 dark:text-gray-200">
                      {cpFiles[cpIndex].label}
                    </span>
                    <button
                      className="px-2 py-1 text-lg font-bold text-gray-500 hover:text-gray-900 dark:hover:text-white disabled:opacity-30"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCpIndex((cpIndex + 1) % cpFiles.length);
                      }}
                      disabled={cpFiles.length <= 1}
                    >
                      ›
                    </button>
                  </div>
                  {cpFiles[cpIndex].type === "image" ? (
                    <img
                      src={cpFiles[cpIndex].src}
                      alt={cpFiles[cpIndex].label + " Certificate"}
                      className="rounded-lg shadow-md max-h-64 w-auto"
                    />
                  ) : (
                    <iframe
                      src={cpFiles[cpIndex].src}
                      title={cpFiles[cpIndex].label + " Certificate"}
                      className="rounded-lg shadow-md w-full h-64"
                    />
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      {/* Extra Curricular Activities Section */}
      <section
        id="extra-curricular"
        className="py-16 sm:py-20 md:py-24 lg:py-32"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 cursor-default">
              Extra Curricular Activities
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Dancing */}
            <div className="flex flex-col items-center p-8 rounded-2xl shadow-xl border-2 border-purple-400/60 bg-gradient-to-br from-purple-700/40 to-pink-500/30 hover:scale-105 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden cursor-pointer">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <FaPersonBooth className="text-white text-4xl drop-shadow-lg" />
              </span>
              <span className={`text-xl font-bold mb-2 drop-shadow ${darkMode ? 'text-white' : 'text-gray-900'}`}>Dancing</span>
              <span className={`text-base text-center font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Expressing creativity and energy through various dance forms.</span>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-pink-400/20 rounded-full blur-2xl animate-pulse" />
            </div>
            {/* Sketching */}
            <div className="flex flex-col items-center p-8 rounded-2xl shadow-xl border-2 border-orange-300/60 bg-gradient-to-br from-orange-400/40 to-yellow-300/30 hover:scale-105 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 shadow-lg mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                <FaPencilRuler className="text-white text-4xl drop-shadow-lg" />
              </span>
              <span className={`text-xl font-bold mb-2 drop-shadow ${darkMode ? 'text-white' : 'text-gray-900'}`}>Sketching</span>
              <span className={`text-base text-center font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Bringing imagination to life with pencil and paper.</span>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-orange-300/20 rounded-full blur-2xl animate-pulse" />
            </div>
            {/* Playing Badminton */}
            <div className="flex flex-col items-center p-8 rounded-2xl shadow-xl border-2 border-blue-400/60 bg-gradient-to-br from-blue-700/40 to-green-400/30 hover:scale-105 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-blue-400 shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                <FaTableTennis className="text-white text-4xl drop-shadow-lg" />
              </span>
              <span className={`text-xl font-bold mb-2 drop-shadow ${darkMode ? 'text-white' : 'text-gray-900'}`}>Playing Badminton</span>
              <span className={`text-base text-center font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Staying active and competitive on the court.</span>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl animate-pulse" />
            </div>
            {/* Coding */}
            <div className="flex flex-col items-center p-8 rounded-2xl shadow-xl border-2 border-cyan-400/60 bg-gradient-to-br from-cyan-400/40 to-blue-400/30 hover:scale-105 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 shadow-lg mb-4 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
                <FaCode className="text-white text-4xl drop-shadow-lg" />
              </span>
              <span className={`text-xl font-bold mb-2 drop-shadow ${darkMode ? 'text-white' : 'text-gray-900'}`}>Coding</span>
              <span className={`text-base text-center font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Building solutions and exploring new technologies.</span>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl animate-pulse" />
            </div>
            {/* Creating Content */}
            <div className="flex flex-col items-center p-8 rounded-2xl shadow-xl border-2 border-pink-400/60 bg-gradient-to-br from-pink-400/40 to-purple-400/30 hover:scale-105 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <FaVideo className="text-white text-4xl drop-shadow-lg" />
              </span>
              <span className={`text-xl font-bold mb-2 drop-shadow ${darkMode ? 'text-white' : 'text-gray-900'}`}>Creating Content</span>
              <span className={`text-base text-center font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Sharing knowledge and creativity through digital media.</span>
              <a href="https://youtube.com/@grow_with_richa?si=GYbMjvD6R59CrqH1" target="_blank" rel="noopener noreferrer" className="mt-4 text-pink-200 underline font-semibold hover:text-pink-400 transition-colors">Visit my YouTube channel</a>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-purple-400/20 rounded-full blur-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certifications;
