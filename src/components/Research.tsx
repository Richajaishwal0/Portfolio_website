import React from "react";
import { BookOpen, Award, ExternalLink, TrendingUp } from "lucide-react";

interface ResearchProps {
  darkMode: boolean;
  language: string;
}

const Research: React.FC<ResearchProps> = ({ darkMode, language }) => {
  const content = {
    en: {
      title: "Research & Publications",
      subtitle: "Academic contributions and research work",
    },
    hi: {
      title: "अनुसंधान और प्रकाशन",
      subtitle: "शैक्षणिक योगदान और अनुसंधान कार्य",
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section
      id="research"
      className={`py-16 sm:py-20 md:py-24 lg:py-32 ${
        darkMode ? "bg-slate-800/20" : "bg-white/20"
      } backdrop-blur-sm`}
    >
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

        <div className="max-w-6xl mx-auto">
          {/* Featured Research Paper */}
          <div
            className={`p-8 md:p-10 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer group ${
              darkMode
                ? "bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-2 border-purple-500/30 hover:border-purple-400/50"
                : "bg-gradient-to-r from-orange-600/20 to-red-600/20 border-2 border-orange-500/30 hover:border-orange-400/50"
            } backdrop-blur-sm mb-12 md:mb-16 lg:mb-16 hover:shadow-2xl hover:shadow-purple-500/25`}
          >
            <div className="flex items-start space-x-8">
              <div
                className={`p-6 rounded-2xl ${
                  darkMode
                    ? "bg-gradient-to-r from-purple-500 to-pink-600"
                    : "bg-gradient-to-r from-orange-500 to-red-600"
                } group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
              >
                <BookOpen size={40} className="text-white" />
              </div>

              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-6">
                  <h3
                    className={`text-3xl font-bold transition-all duration-300 group-hover:scale-105 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    IEEE CYBERCOM Publication
                  </h3>
                  <div
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 group-hover:scale-105 ${
                      darkMode
                        ? "bg-green-600/30 text-green-300"
                        : "bg-green-600/30 text-green-800"
                    }`}
                  >
                    Published
                  </div>
                </div>

                <h4
                  className={`text-2xl font-semibold mb-6 transition-all duration-300 group-hover:scale-105 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  "Automatic Detection of Leaf Diseases in Hibiscus Plants Using Live Image Dataset with UI"
                </h4>

                <p
                  className={`text-lg mb-8 leading-relaxed transition-all duration-300 group-hover:scale-105 ${
                    darkMode ? "text-slate-300" : "text-gray-700"
                  }`}
                >
                  This research presents an innovative approach to automated plant disease detection using convolutional neural networks (CNN) with a focus on hibiscus plants. The system achieved remarkable accuracy in identifying various leaf diseases through live image processing.
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                  <div
                    className={`text-center p-6 rounded-2xl transition-all duration-500 hover:scale-110 cursor-pointer ${
                      darkMode ? "bg-slate-800/50" : "bg-white/50"
                    }`}
                  >
                    <div className="text-4xl mb-3">🎯</div>
                    <div
                      className={`text-3xl font-bold mb-2 ${
                        darkMode ? "text-green-400" : "text-green-600"
                      }`}
                    >
                      97.21%
                    </div>
                    <div
                      className={`text-sm ${
                        darkMode ? "text-slate-400" : "text-gray-600"
                      }`}
                    >
                      Accuracy
                    </div>
                  </div>

                  <div
                    className={`text-center p-6 rounded-2xl transition-all duration-500 hover:scale-110 cursor-pointer ${
                      darkMode ? "bg-slate-800/50" : "bg-white/50"
                    }`}
                  >
                    <div className="text-4xl mb-3">🧠</div>
                    <div
                      className={`text-xl font-bold mb-2 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      CNN Model
                    </div>
                    <div
                      className={`text-sm ${
                        darkMode ? "text-slate-400" : "text-gray-600"
                      }`}
                    >
                      Architecture
                    </div>
                  </div>

                  <div
                    className={`text-center p-6 rounded-2xl transition-all duration-500 hover:scale-110 cursor-pointer ${
                      darkMode ? "bg-slate-800/50" : "bg-white/50"
                    }`}
                  >
                    <div className="text-4xl mb-3">📱</div>
                    <div
                      className={`text-xl font-bold mb-2 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Live UI
                    </div>
                    <div
                      className={`text-sm ${
                        darkMode ? "text-slate-400" : "text-gray-600"
                      }`}
                    >
                      Interface
                    </div>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="mb-8">
                  <h5
                    className={`text-lg font-semibold mb-4 transition-all duration-300 group-hover:scale-105 ${
                      darkMode ? "text-slate-200" : "text-gray-800"
                    }`}
                  >
                    Technologies & Methods:
                  </h5>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "CNN",
                      "Deep Learning",
                      "Image Processing",
                      "Python",
                      "TensorFlow",
                      "Computer Vision",
                      "UI Development",
                    ].map((tech, index) => (
                      <span
                        key={index}
                        className={`text-sm px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-110 ${
                          darkMode
                            ? "bg-purple-600/30 text-purple-300 border border-purple-500/50"
                            : "bg-orange-600/30 text-orange-800 border border-orange-500/50"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <a
                    href="https://ieeexplore.ieee.org/document/10803253"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 px-6 py-3 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 ${
                      darkMode
                        ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/25"
                        : "bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-500/25"
                    } hover:shadow-2xl`}
                  >
                    <ExternalLink size={20} />
                    <span>View Publication</span>
                  </a>

                  <div className="flex items-center space-x-3">
                    <Award
                      size={20}
                      className={
                        darkMode ? "text-yellow-400" : "text-yellow-600"
                      }
                    />
                    <span
                      className={`text-lg font-medium ${
                        darkMode ? "text-slate-300" : "text-gray-700"
                      }`}
                    >
                      IEEE CYBERCOM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research Impact */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16 lg:mb-16">
            <div
              className={`text-center p-8 rounded-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer ${
                darkMode ? "bg-slate-800/30" : "bg-white/30"
              } backdrop-blur-sm hover:shadow-2xl`}
            >
              <TrendingUp
                size={40}
                className={`mx-auto mb-6 ${
                  darkMode ? "text-green-400" : "text-green-600"
                }`}
              />
              <h4
                className={`font-bold text-xl mb-3 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                High Impact
              </h4>
              <p className={`${darkMode ? "text-slate-400" : "text-gray-600"}`}>
                97.21% accuracy in disease detection
              </p>
            </div>

            <div
              className={`text-center p-8 rounded-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer ${
                darkMode ? "bg-slate-800/30" : "bg-white/30"
              } backdrop-blur-sm hover:shadow-2xl`}
            >
              <BookOpen
                size={40}
                className={`mx-auto mb-6 ${
                  darkMode ? "text-purple-400" : "text-purple-600"
                }`}
              />
              <h4
                className={`font-bold text-xl mb-3 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                IEEE Publication
              </h4>
              <p className={`${darkMode ? "text-slate-400" : "text-gray-600"}`}>
                Published in prestigious conference
              </p>
            </div>

            <div
              className={`text-center p-8 rounded-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer ${
                darkMode ? "bg-slate-800/30" : "bg-white/30"
              } backdrop-blur-sm hover:shadow-2xl`}
            >
              <Award
                size={40}
                className={`mx-auto mb-6 ${
                  darkMode ? "text-cyan-400" : "text-cyan-600"
                }`}
              />
              <h4
                className={`font-bold text-xl mb-3 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Innovation
              </h4>
              <p className={`${darkMode ? "text-slate-400" : "text-gray-600"}`}>
                Novel approach to plant disease detection
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
