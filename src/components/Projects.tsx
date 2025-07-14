import React from "react";
import {
  ExternalLink,
  Github,
  Play,
  Code,
  Database,
  Brain,
} from "lucide-react";

interface ProjectsProps {
  darkMode: boolean;
  language: string;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode, language }) => {
  const content = {
    en: {
      title: "Featured Projects",
      subtitle: "Innovative solutions and technical implementations",
    },
    hi: {
      title: "चुनिंदा प्रोजेक्ट्स",
      subtitle: "नवाचार समाधान और तकनीकी कार्यान्वयन",
    },
  };

  const t = content[language as keyof typeof content];

  const projects = [
    {
      title: "Flight Reservation System",
      description:
        "Tkinter-based GUI application that reduced reservation time by 40% and boosted user satisfaction by 25%. Features intuitive interface and efficient booking management.",
      tech: ["Python", "Tkinter", "GUI", "Database"],
      image:
        "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      demo: "https://drive.google.com/file/d/1zbjJGHWQ68MXlsgAyTrh-ehM3UOaYQ7A/view?usp=drive_link",
      // videoPlaceholder: true, // Remove placeholder
      category: "Desktop Application",
      icon: "✈️",
      impact: {
        time: "40% faster reservations",
        satisfaction: "25% user satisfaction boost",
      },
    },
    {
      title: "AI-Powered Text Summarizer",
      description:
        "Advanced text summarization tool using Hugging Face, Node.js, and Express.js. Improved reading efficiency by 50% and saved 20+ minutes per task.",
      tech: ["Hugging Face", "Node.js", "Express.js", "AI/ML"],
      image:
        "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Richajaishwal0/AI_text_Summarize_App",
      demo: "#",
      // linkPlaceholder: true, // Remove placeholder
      category: "AI/ML",
      icon: "📝",
      impact: {
        efficiency: "50% reading efficiency",
        time: "20+ minutes saved per task",
      },
    },
    {
      title: "AI Market Maven",
      description:
        "Python machine learning project with 95% accurate sales forecasting capabilities. Successfully reduced overstock by 15% through intelligent predictions.",
      tech: ["Python", "Machine Learning", "Data Analysis", "Forecasting"],
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      github:
        "https://github.com/Richajaishwal0/Market_Maven-AI-for-salesforcasting-in-supermarket",
      demo: "#",
      // linkPlaceholder: true, // Remove placeholder
      category: "Machine Learning",
      icon: "📈",
      impact: {
        accuracy: "95% forecasting accuracy",
        reduction: "15% overstock reduction",
      },
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Desktop Application":
        return <Code size={20} />;
      case "AI/ML":
        return <Brain size={20} />;
      case "Machine Learning":
        return <Database size={20} />;
      default:
        return <Code size={20} />;
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-32">
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
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer group ${
                darkMode
                  ? "bg-slate-800/50 border-2 border-slate-700/50 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/25"
                  : "bg-white/50 border-2 border-gray-200/50 hover:border-orange-400/50 hover:shadow-2xl hover:shadow-orange-500/25"
              } backdrop-blur-sm`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-6 left-6">
                  <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2">
                    {getCategoryIcon(project.category)}
                    <span className="text-sm text-white font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="absolute top-6 right-6">
                  <span className="text-3xl group-hover:scale-125 transition-transform duration-500">
                    {project.icon}
                  </span>
                </div>

                {/* Video/Link Placeholder Overlay */}
              </div>

              <div className="p-8">
                <h3
                  className={`text-2xl font-bold mb-4 transition-all duration-300 group-hover:scale-105 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-lg mb-6 leading-relaxed transition-all duration-300 group-hover:scale-105 ${
                    darkMode ? "text-slate-300" : "text-gray-700"
                  }`}
                >
                  {project.description}
                </p>

                {/* Impact Metrics */}
                <div className="mb-6 space-y-3">
                  {Object.entries(project.impact).map(
                    ([key, value], impactIndex) => (
                      <div
                        key={impactIndex}
                        className={`text-sm px-3 py-2 rounded-full inline-block mr-3 mb-2 font-medium transition-all duration-300 group-hover:scale-105 ${
                          darkMode
                            ? "bg-green-600/30 text-green-300"
                            : "bg-green-600/30 text-green-800"
                        }`}
                      >
                        ✅ {value}
                      </div>
                    )
                  )}
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`text-sm px-3 py-2 rounded-full font-medium transition-all duration-300 group-hover:scale-105 ${
                        darkMode
                          ? "bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-300 border border-purple-500/50"
                          : "bg-gradient-to-r from-orange-500/30 to-red-500/30 text-orange-800 border border-orange-500/50"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 transition-all duration-300 hover:scale-110 ${
                      darkMode
                        ? "text-slate-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Github size={20} />
                    <span className="font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className={`flex items-center space-x-2 transition-all duration-300 hover:scale-110 ${
                      darkMode
                        ? "text-slate-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {/* Use Play icon for demo, ExternalLink for live */}
                    <Play size={20} />
                    <span className="font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Projects Section - moved from About */}
        <div className="mt-16 mb-12">
          <div
            className={`p-6 rounded-3xl shadow-2xl border-2 transition-all duration-500 bg-gradient-to-br ${
              darkMode
                ? "from-purple-900/60 via-slate-900/80 to-pink-900/60 border-purple-700/40"
                : "from-orange-100/80 via-rose-100/90 to-yellow-100/80 border-orange-300/40"
            } backdrop-blur-2xl relative overflow-hidden`}
          >
            <h3 className="text-2xl md:text-3xl font-extrabold flex items-center gap-3 mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 dark:from-orange-500 dark:via-red-400 dark:to-yellow-400 animate-pulse">
              <span className="text-3xl md:text-4xl">🚧</span> Upcoming Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Sentiment Analysis Project Card */}
              <div
                className={`rounded-2xl p-6 shadow-xl border transition-all duration-500 group hover:scale-[1.03] hover:shadow-2xl bg-gradient-to-br ${
                  darkMode
                    ? "from-purple-800/60 via-pink-900/40 to-cyan-900/30 border-purple-500/30"
                    : "from-orange-200/80 via-yellow-100/80 to-pink-100/80 border-orange-300/30"
                } relative overflow-hidden`}
              >
                <img
                  src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&fit=crop&w=800&q=80"
                  alt="Sentiment Analysis Project"
                  className="w-full h-40 object-cover rounded-xl mb-4 shadow-md"
                />
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">💡</span>
                  <span className="font-bold text-lg md:text-xl tracking-tight">
                    Sentiment Analysis for Skill Recommendation and Job Matching
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {[
                    "Python",
                    "Streamlit",
                    "NLP",
                    "scikit-learn",
                    "pandas",
                    "NLTK/spaCy",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 text-white shadow-md border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="list-disc ml-6 text-base text-slate-700 dark:text-slate-200 space-y-1 mb-2">
                  <li>
                    Web app using sentiment analysis & NLP to recommend skills
                    and match users with job roles.
                  </li>
                  <li>
                    Analyzes user input (career goals, resume, job descriptions)
                    for personalized learning paths.
                  </li>
                  <li>
                    Interactive UI with Streamlit, ML models for
                    sentiment/intent analysis.
                  </li>
                  <li>
                    Recommends targeted skills/courses based on
                    emotional/contextual data.
                  </li>
                  <li>Enhances job readiness and candidate-job alignment.</li>
                </ul>
                <div className="absolute right-2 top-2 opacity-10 text-7xl pointer-events-none select-none animate-spin-slow">
                  💡
                </div>
                {/* Demo and Code Links */}
                <div className="flex space-x-6 mt-4">
                  <a
                    href="#" // TODO: Replace with actual code link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 transition-all duration-300 hover:scale-110 ${
                      darkMode
                        ? "text-slate-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Github size={20} />
                    <span className="font-medium">Code</span>
                  </a>
                  <a
                    href="#" // TODO: Replace with actual demo link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 transition-all duration-300 hover:scale-110 ${
                      darkMode
                        ? "text-slate-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Play size={20} />
                    <span className="font-medium">Demo</span>
                  </a>
                </div>
              </div>
              {/* Trip Planner Project Card */}
              <div
                className={`rounded-2xl p-6 shadow-xl border transition-all duration-500 group hover:scale-[1.03] hover:shadow-2xl bg-gradient-to-br ${
                  darkMode
                    ? "from-cyan-900/40 via-purple-900/40 to-pink-900/30 border-cyan-500/30"
                    : "from-yellow-100/80 via-orange-100/80 to-pink-100/80 border-yellow-300/30"
                } relative overflow-hidden`}
              >
                <img
                  src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&fit=crop&w=800&q=80"
                  alt="Trip Planner Project"
                  className="w-full h-40 object-cover rounded-xl mb-4 shadow-md"
                />
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🌍</span>
                  <span className="font-bold text-lg md:text-xl tracking-tight">
                    Trip Planner Website
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {[
                    "React.js",
                    "Node.js",
                    "JavaScript",
                    "Express",
                    "MongoDB (optional)",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-orange-400 to-pink-400 text-white shadow-md border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="list-disc ml-6 text-base text-slate-700 dark:text-slate-200 space-y-1 mb-2">
                  <li>
                    Full-stack platform to organize and optimize travel plans.
                  </li>
                  <li>
                    Search/add destinations, get dynamic itineraries, save/view
                    trip plans with a dashboard.
                  </li>
                  <li>
                    Features in progress: user authentication, route
                    suggestions, budget management.
                  </li>
                  <li>
                    Frontend: React.js (responsive); Backend: Node.js/Express;
                    MongoDB planned for persistence.
                  </li>
                </ul>
                <div className="absolute left-2 bottom-2 opacity-10 text-7xl pointer-events-none select-none animate-bounce">
                  🌍
                </div>
                {/* Demo and Code Links */}
                <div className="flex space-x-6 mt-4">
                  <a
                    href="#" // TODO: Replace with actual code link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 transition-all duration-300 hover:scale-110 ${
                      darkMode
                        ? "text-slate-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Github size={20} />
                    <span className="font-medium">Code</span>
                  </a>
                  <a
                    href="#" // TODO: Replace with actual demo link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 transition-all duration-300 hover:scale-110 ${
                      darkMode
                        ? "text-slate-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Play size={20} />
                    <span className="font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Stats */}
        <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {[
            { number: "3", label: "Major Projects", icon: "🚀" },
            { number: "95%", label: "ML Accuracy", icon: "🎯" },
            { number: "40%", label: "Efficiency Boost", icon: "⚡" },
            { number: "15%", label: "Cost Reduction", icon: "💰" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer group ${
                darkMode
                  ? "bg-slate-800/30 border-2 border-slate-700/50 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/25"
                  : "bg-white/30 border-2 border-gray-200/50 hover:border-orange-400/50 hover:shadow-2xl hover:shadow-orange-500/25"
              } backdrop-blur-sm`}
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-500">
                {stat.icon}
              </div>
              <div
                className={`text-4xl font-bold mb-2 transition-all duration-300 group-hover:scale-110 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {stat.number}
              </div>
              <div
                className={`text-lg transition-all duration-300 group-hover:scale-105 ${
                  darkMode ? "text-slate-400" : "text-gray-600"
                }`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
