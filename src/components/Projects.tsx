import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Play,
  Code,
  Database,
  Brain,
  Server,
  Globe,
  Layers,
} from "lucide-react";

interface ProjectsProps {
  darkMode: boolean;
  language: string;
}

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Web Dev", value: "web" },
  { label: "AI", value: "ai" },
  { label: "DevOps", value: "devops" },
  { label: "MERN Stack", value: "mern" },
];

const CATEGORY_MAP: Record<string, string> = {
  "Web Dev": "web",
  AI: "ai",
  DevOps: "devops",
  "MERN Stack": "mern",
};

const sampleProjects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with React, Vite, and Tailwind CSS.",
    tech: ["React", "Vite", "Tailwind"],
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&fit=crop&w=800&q=80",
    github: "#",
    demo: "#",
    category: "Web Dev",
    icon: <Globe size={20} />,
  },
  {
    title: "AI Text Summarizer",
    description:
      "Summarize long articles using Hugging Face transformers and Node.js backend.",
    tech: ["Hugging Face", "Node.js", "Express.js", "AI/ML"],
    image:
      "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "#",
    demo: "#",
    category: "AI",
    icon: <Brain size={20} />,
  },
  {
    title: "Skill Recommendation System",
    description:
      "Web app using sentiment analysis & NLP to recommend skills and match users with job roles.",
    tech: [
      "Python",
      "Streamlit",
      "NLP",
      "scikit-learn",
      "pandas",
      "NLTK/spaCy",
    ],
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&fit=crop&w=800&q=80",
    github: "#",
    demo: "#",
    category: "AI",
    icon: <Brain size={20} />,
  },
  {
    title: "Trip Planner Website",
    description:
      "Full-stack platform to organize and optimize travel plans. Features in progress: user authentication, route suggestions, budget management.",
    tech: [
      "React.js",
      "Node.js",
      "JavaScript",
      "Express",
      "MongoDB (optional)",
    ],
    image:
      "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&fit=crop&w=800&q=80",
    github: "#",
    demo: "#",
    category: "MERN Stack",
    icon: <Layers size={20} />,
  },
  {
    title: "Market Maven",
    description:
      "Python machine learning project with 95% accurate sales forecasting capabilities. Reduced overstock by 15% through intelligent predictions.",
    tech: ["Python", "Machine Learning", "Data Analysis", "Forecasting"],
    image:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "#",
    demo: "#",
    category: "AI",
    icon: <Brain size={20} />,
  },
];

const Projects: React.FC<ProjectsProps> = ({ darkMode, language }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Responsive font for modern look
  const fontClass = "font-sans";

  // Filter logic
  const filteredProjects =
    activeFilter === "all"
      ? sampleProjects
      : sampleProjects.filter((p) => CATEGORY_MAP[p.category] === activeFilter);

  return (
    <section
      id="projects"
      className={`py-16 sm:py-20 md:py-24 lg:py-32 ${
        darkMode ? "bg-slate-800/20" : "bg-white/20"
      } backdrop-blur-sm`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Title */}
        <div className="text-center mb-10 md:mb-14">
          <h2
            className={`text-5xl md:text-7xl font-extrabold tracking-tight mb-4 ${fontClass}`}
          >
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${
                darkMode
                  ? "from-purple-400 to-cyan-400"
                  : "from-orange-600 to-red-600"
              }`}
            >
              MY
            </span>{" "}
            <span className={darkMode ? "text-white" : "text-gray-900"}>
              WORKS
            </span>
          </h2>
        </div>
        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-12">
          {FILTERS.map((filter, idx) => (
            <React.Fragment key={filter.value}>
              <button
                className={`relative px-4 py-2 text-lg md:text-xl font-semibold transition-all duration-200 focus:outline-none ${
                  activeFilter === filter.value
                    ? darkMode
                      ? "text-cyan-400 font-bold scale-110"
                      : "text-orange-600 font-bold scale-110"
                    : darkMode
                    ? "text-slate-300 hover:text-purple-300 hover:scale-105"
                    : "text-gray-600 hover:text-orange-600 hover:scale-105"
                } ${fontClass}`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
                {activeFilter === filter.value && (
                  <span
                    className={`absolute left-0 right-0 -bottom-1 h-1 rounded-full animate-fade-in bg-gradient-to-r ${
                      darkMode
                        ? "from-purple-400 to-cyan-400"
                        : "from-orange-600 to-red-600"
                    }`}
                  />
                )}
              </button>
              {idx < FILTERS.length - 1 && (
                <span className={darkMode ? "text-slate-500" : "text-gray-400"}>
                  |
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-300 group backdrop-blur-md hover:scale-[1.03] hover:shadow-2xl cursor-pointer border ${
                darkMode
                  ? "bg-slate-800/50 border-slate-700/50 hover:border-purple-400/50 hover:shadow-purple-500/25"
                  : "bg-white/50 border-gray-200/50 hover:border-orange-400/50 hover:shadow-orange-500/25"
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2">
                  {project.icon}
                  <span className="text-sm text-white font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3
                  className={`text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-200 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-lg mb-4 group-hover:text-purple-200 transition-colors duration-200 ${
                    darkMode ? "text-slate-300" : "text-gray-700"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs px-3 py-1 rounded-full font-semibold border ${
                        darkMode
                          ? "bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-300 border-purple-500/50"
                          : "bg-gradient-to-r from-orange-500/30 to-red-500/30 text-orange-800 border-orange-500/50"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-6 mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 transition-all duration-200 hover:scale-110 ${
                      darkMode
                        ? "text-slate-300 hover:text-cyan-400"
                        : "text-gray-600 hover:text-orange-600"
                    }`}
                  >
                    <Github size={20} />
                    <span className="font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 transition-all duration-200 hover:scale-110 ${
                      darkMode
                        ? "text-slate-300 hover:text-purple-300"
                        : "text-gray-600 hover:text-orange-600"
                    }`}
                  >
                    <Play size={20} />
                    <span className="font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
