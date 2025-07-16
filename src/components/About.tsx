import React from "react";
import { GraduationCap, Code, Brain, Trophy } from "lucide-react";

interface AboutProps {
  darkMode: boolean;
  language: string;
}

const About: React.FC<AboutProps> = ({ darkMode, language }) => {
  const content = {
    en: {
      title: "About Me",
      subtitle: "Passionate Computer Science Student & Developer",
      description:
        "I'm Richa Jaishwal, a Computer Science student at Amrita Vishwa Vidyapeetham, Chennai. With a strong academic foundation (CGPA: 8.86/10) and a passion for developing intelligent and efficient solutions, I specialize in full-stack development, machine learning, and algorithmic programming.",
      highlights: [
        {
          icon: GraduationCap,
          title: "Academic Excellence",
          desc: "CGPA: 8.86/10 at Amrita Vishwa Vidyapeetham",
        },
        {
          icon: Code,
          title: "Full-Stack Development",
          desc: "Proficient in modern web technologies",
        },
        {
          icon: Brain,
          title: "Machine Learning",
          desc: "Specialized in AI and intelligent solutions",
        },
        {
          icon: Trophy,
          title: "Competitive Programming",
          desc: "5-star rating on HackerRank",
        },
      ],
    },
    hi: {
      title: "मेरे बारे में",
      subtitle: "उत्साही कंप्यूटर साइंस छात्रा और डेवलपर",
      description:
        "मैं रिचा जैश्वाल हूँ, अमृता विश्व विद्यापीठम, चेन्नई में कंप्यूटर साइंस की छात्रा। मजबूत शैक्षणिक आधार (CGPA: 8.86/10) और बुद्धिमान और कुशल समाधान विकसित करने के जुनून के साथ, मैं फुल-स्टैक डेवलपमेंट, मशीन लर्निंग और एल्गोरिदमिक प्रोग्रामिंग में विशेषज्ञता रखती हूँ।",
      highlights: [
        {
          icon: GraduationCap,
          title: "शैक्षणिक उत्कृष्टता",
          desc: "अमृता विश्व विद्यापीठम में CGPA: 8.86/10",
        },
        {
          icon: Code,
          title: "फुल-स्टैक डेवलपमेंट",
          desc: "आधुनिक वेब तकनीकों में दक्ष",
        },
        {
          icon: Brain,
          title: "मशीन लर्निंग",
          desc: "AI और बुद्धिमान समाधानों में विशेषज्ञ",
        },
        {
          icon: Trophy,
          title: "प्रतियोगी प्रोग्रामिंग",
          desc: "HackerRank पर 5-स्टार रेटिंग",
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section
      id="about"
      className={`py-16 sm:py-20 md:py-24 lg:py-32 ${
        darkMode ? "bg-slate-800/20" : "bg-orange-50/60"
      } backdrop-blur-sm`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start text-left pl-0 md:pl-8 mb-12 md:mb-16 lg:mb-20 w-full md:gap-x-12">
            <div className="w-full md:w-1/2">
              <h2
                className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${
                  darkMode
                    ? "from-purple-400 to-cyan-400"
                    : "from-orange-700 to-pink-600"
                } bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 cursor-default`}
              >
                {t.title}
              </h2>
              <p
                className={`text-2xl mb-4 transition-all duration-500 hover:scale-105 ${
                  darkMode ? "text-slate-300" : "text-orange-800"
                }`}
              >
                {t.subtitle}
              </p>
              <p
                className={`text-xl md:text-2xl mb-8 transition-all duration-500 ${
                  darkMode ? "text-slate-200" : "text-orange-900"
                }`}
              >
                {t.description}
              </p>
            </div>
            <div className="w-full flex w-full md:w-1/2 h-full items-center justify-center mt-6 md:mt-0">
              <div className="w-full max-w-md">
                <h3 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${
                  darkMode
                    ? "from-purple-400 to-cyan-400"
                    : "from-orange-700 to-pink-600"
                } bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 cursor-default`}>Education</h3>
                <div className="relative pl-6 border-l-4 border-cyan-400/80">
                  {/* Timeline Dot and Entry */}
                  <div className="mb-10">
                    <div className="absolute -left-3 w-6 h-6 bg-cyan-500 shadow-lg shadow-cyan-400/60 rounded-full border-4 border-white"></div>
                    <div className={`mb-1 text-sm sm:text-base ${darkMode ? 'text-white' : 'text-orange-700'}`}>Present<br className="hidden sm:block"/>2023 - 2027</div>
                    <div className={`font-bold text-lg sm:text-xl mb-1 drop-shadow-md ${darkMode ? 'text-white' : 'text-orange-900'}`}>Amrita Vishwa Vidyapeetham, Chennai Campus<br /></div>
                    <div className={`text-sm sm:text-lg ${darkMode ? 'text-white' : 'text-orange-800'}`}>B-Tech - Computer Science and Engineering <br/>CGPA : <span className={`${darkMode ? 'text-white font-bold' : 'text-orange-700 font-bold'}`}>8.86 /10</span></div>
                  </div>
                  <div className="mb-10">
                    <div
                      className="absolute -left-3 w-6 h-6 bg-cyan-400 rounded-full border-4 border-white"
                      style={{ top: "90px" }}
                    ></div>
                    <div className={`mb-1 text-sm sm:text-base ${darkMode ? 'text-white' : 'text-orange-700'}`}>2023</div>
                    <div className={`font-bold text-lg sm:text-xl mb-1 drop-shadow-md ${darkMode ? 'text-white' : 'text-orange-900'}`}>Kantipur International College</div>
                    <div className={`text-sm sm:text-lg ${darkMode ? 'text-white' : 'text-orange-800'}`}>Biology: GPA : <span className={`${darkMode ? 'text-white font-bold' : 'text-orange-700 font-bold'}`}>3.67 / 4</span></div>
                  </div>
                  <div>
                    <div
                      className="absolute -left-3 w-6 h-6 bg-cyan-400 rounded-full border-4 border-white"
                      style={{ top: "180px" }}
                    ></div>
                    <div className={`mb-1 text-sm sm:text-base ${darkMode ? 'text-white' : 'text-orange-700'}`}>2021</div>
                    <div className={`font-bold text-lg sm:text-xl mb-1 drop-shadow-md ${darkMode ? 'text-white' : 'text-orange-900'}`}>Kantipur Secondary School</div>
                    <div className={`text-sm sm:text-lg ${darkMode ? 'text-white' : 'text-orange-800'}`}>School : GPA : <span className={`${darkMode ? 'text-white font-bold' : 'text-orange-700 font-bold'}`}>3.95 / 4</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
