import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ArrowDown,
} from "lucide-react";

interface HeroProps {
  darkMode: boolean;
  language: string;
}

const Hero: React.FC<HeroProps> = ({ darkMode, language }) => {
  const content = {
    en: {
      greeting: "Hello, I'm",
      name: "Richa Jaishwal",
      title: "Computer Science Student & Full-Stack Developer",
      subtitle: "Passionate about AI, Machine Learning & Intelligent Solutions",
      cta1: "View My Work",
      cta2: "Get In Touch",
      downloadCV: "Download CV",
    },
    hi: {
      greeting: "नमस्ते, मैं हूँ",
      name: "रिचा जैश्वाल",
      title: "कंप्यूटर साइंस छात्रा और फुल-स्टैक डेवलपर",
      subtitle: "AI, मशीन लर्निंग और इंटेलिजेंट सॉल्यूशन्स में रुचि",
      cta1: "मेरा काम देखें",
      cta2: "संपर्क करें",
      downloadCV: "CV डाउनलोड करें",
    },
  };

  const t = content[language as keyof typeof content];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/richajaishwal0",
      label: "GitHub",
      color: darkMode ? "hover:text-purple-300" : "hover:text-orange-600",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/richa-jaishwal",
      label: "LinkedIn",
      color: darkMode ? "hover:text-cyan-300" : "hover:text-blue-600",
    },
    {
      icon: Mail,
      href: "mailto:richajaishwalhome@gmail.com",
      label: "Email",
      color: darkMode ? "hover:text-pink-300" : "hover:text-red-600",
    },
    {
      icon: Phone,
      href: "tel:+918778823268",
      label: "Phone",
      color: darkMode ? "hover:text-green-300" : "hover:text-green-600",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-20"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Profile Photo Placeholder with Enhanced Styling */}
          <div className="mb-12 flex justify-center">
            <div
              className={`relative group cursor-pointer transition-all duration-700 hover:scale-110`}
            >
              <div
                className={`w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 max-w-full rounded-full border-4 transition-all duration-700 ${
                  darkMode
                    ? "border-purple-400 bg-gradient-to-br from-purple-600/30 to-pink-600/30 shadow-2xl shadow-purple-500/25"
                    : "border-orange-400 bg-gradient-to-br from-orange-400/30 to-red-400/30 shadow-2xl shadow-orange-500/25"
                } flex items-center justify-center backdrop-blur-sm hover:shadow-3xl `}
              >
                <img
                  src="/profile.png" // Replace with actual image path
                  alt="Your Photo"
                  className="w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 max-w-full rounded-full object-cover transition-all duration-500 group-hover:scale-100"
                />

                {/* Animated Ring */}
                <div
                  className={`absolute inset-0 rounded-full border-2 ${
                    darkMode ? "border-purple-400/50" : "border-orange-400/50"
                  } animate-spin`}
                  style={{ animationDuration: "8s" }}
                />
              </div>
            </div>
          </div>

          <div
            className={`text-2xl mb-6 transition-all duration-500 ${
              darkMode ? "text-purple-300" : "text-orange-600"
            } animate-pulse`}
          >
            {t.greeting}
          </div>

          <h1
            className={`text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r ${
              darkMode
                ? "from-purple-400 via-pink-500 to-cyan-400"
                : "from-orange-500 via-red-500 to-yellow-500"
            } bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-500 cursor-default`}
          >
            {t.name}
          </h1>

          <h2
            className={`text-3xl md:text-4xl mb-6 font-light transition-all duration-500 hover:scale-105 ${
              darkMode ? "text-slate-300" : "text-gray-700"
            }`}
          >
            {t.title}
          </h2>

          <p
            className={`text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-500 hover:scale-105 ${
              darkMode ? "text-slate-400" : "text-gray-600"
            }`}
          >
            {t.subtitle}
          </p>

          {/* Academic Info with Enhanced Styling */}
          <div
            className={`inline-flex items-center space-x-3 px-6 py-4 rounded-full mb-12 transition-all duration-500 hover:scale-105 cursor-pointer ${
              darkMode
                ? "bg-purple-800/30 border-2 border-purple-400/50 hover:bg-purple-700/40"
                : "bg-orange-200/30 border-2 border-orange-400/50 hover:bg-orange-300/40"
            } backdrop-blur-md shadow-xl hover:shadow-2xl`}
          >
            <span className="text-3xl animate-bounce">🎓</span>
            <span
              className={`font-medium ${
                darkMode ? "text-slate-200" : "text-gray-800"
              }`}
            >
              Amrita Vishwa Vidyapeetham, Chennai | CGPA: 8.86/10
            </span>
          </div>

          {/* Social Links with Enhanced Animations */}
          <div className="flex justify-center space-x-6 mb-16">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-5 rounded-full border-2 transition-all duration-500 hover:scale-125 hover:-translate-y-2 hover:rotate-12 group ${
                    darkMode
                      ? "border-purple-400/50 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-400/50"
                      : "border-orange-400/50 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-400/50"
                  } backdrop-blur-sm ${social.color}`}
                  aria-label={social.label}
                >
                  <IconComponent
                    size={28}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
              );
            })}
          </div>

          {/* CTA Buttons with Enhanced Styling */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 mb-20">
            <button
              onClick={() => scrollToSection("projects")}
              className={`px-10 py-5 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-2xl group ${
                darkMode
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-purple-500/50"
                  : "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white shadow-orange-500/50"
              } hover:shadow-3xl`}
            >
              <span className="group-hover:scale-110 transition-transform duration-300">
                {t.cta1}
              </span>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className={`px-10 py-5 rounded-full font-bold text-lg border-2 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 group ${
                darkMode
                  ? "border-purple-400 hover:border-purple-300 hover:bg-purple-600/20 hover:text-purple-200"
                  : "border-orange-400 hover:border-orange-500 hover:bg-orange-500/20 hover:text-orange-700"
              } backdrop-blur-sm hover:shadow-2xl`}
            >
              <span className="group-hover:scale-110 transition-transform duration-300">
                {t.cta2}
              </span>
            </button>

            <button
              className={`flex items-center space-x-3 px-8 py-5 rounded-full font-bold text-lg border-2 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 group ${
                darkMode
                  ? "border-cyan-400 hover:border-cyan-300 hover:bg-cyan-600/20 hover:text-cyan-200"
                  : "border-green-500 hover:border-green-400 hover:bg-green-500/20 hover:text-green-700"
              } backdrop-blur-sm hover:shadow-2xl`}
            >
              <a
                href="/Resume_final.pdf"
                download
                className="flex items-center space-x-3"
              >
                <Download
                  size={24}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <span className="group-hover:scale-110 transition-transform duration-300">
                  {t.downloadCV}
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator with Enhanced Animation */}
      <button
        onClick={() => scrollToSection("about")}
        className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-500 hover:scale-125 ${
          darkMode
            ? "text-purple-400 hover:text-purple-200"
            : "text-orange-600 hover:text-orange-800"
        } animate-bounce hover:animate-pulse`}
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
