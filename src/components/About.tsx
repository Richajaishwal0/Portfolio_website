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
        darkMode ? "bg-slate-800/20" : "bg-white/20"
      } backdrop-blur-sm`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
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

          {/* Ongoing Projects Section - Redesigned */}
          <div className="mb-8">
            <p
              className={`text-xl md:text-2xl text-center max-w-3xl mx-auto mb-8 transition-all duration-500 ${
                darkMode ? "text-slate-200" : "text-gray-700"
              }`}
            >
              {t.description}
            </p>
          </div>

          {/* Highlights Section (Academic Excellence, etc.) - Restored and Enhanced */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 md:mb-16 lg:mb-20">
            {t.highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={index}
                  className={`p-8 rounded-2xl shadow-xl border transition-all duration-500 group hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${
                    darkMode
                      ? "from-purple-900/60 via-slate-900/80 to-pink-900/60 border-purple-700/40"
                      : "from-orange-100/80 via-rose-100/90 to-yellow-100/80 border-orange-300/40"
                  } backdrop-blur-2xl flex flex-col items-center text-center`}
                >
                  <div className="mb-6 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br from-pink-400 to-purple-400 dark:from-orange-400 dark:to-pink-400 shadow-lg">
                      <IconComponent size={36} className="text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl md:text-2xl mb-3 text-white group-hover:text-pink-200 transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-base text-slate-300 dark:text-slate-200 group-hover:text-white transition-colors duration-300">
                    {highlight.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
