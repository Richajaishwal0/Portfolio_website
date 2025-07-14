import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, User } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
  language: string;
}

const Contact: React.FC<ContactProps> = ({ darkMode, language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const content = {
    en: {
      title: "Get In Touch",
      subtitle: "Let's connect and discuss opportunities",
      form: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        send: "Send Message"
      },
      info: {
        email: "Email Me",
        phone: "Call Me",
        location: "Location"
      }
    },
    hi: {
      title: "संपर्क करें",
      subtitle: "आइए जुड़ें और अवसरों पर चर्चा करें",
      form: {
        name: "पूरा नाम",
        email: "ईमेल पता",
        subject: "विषय",
        message: "संदेश",
        send: "संदेश भेजें"
      },
      info: {
        email: "ईमेल करें",
        phone: "कॉल करें",
        location: "स्थान"
      }
    }
  };

  const t = content[language as keyof typeof content];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess('');
    setError('');
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSuccess('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to send message.');
      }
    } catch (err) {
      setError('Failed to send message.');
    }
    setLoading(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      emoji: '📧',
      label: t.info.email,
      value: 'richajaishwalhome@gmail.com',
      link: 'mailto:richajaishwalhome@gmail.com',
      color: darkMode ? 'from-purple-500 to-pink-500' : 'from-orange-500 to-red-500'
    },
    {
      icon: Phone,
      emoji: '📱',
      label: t.info.phone,
      value: '+91 87788 23268',
      link: 'tel:+918778823268',
      color: darkMode ? 'from-cyan-500 to-blue-500' : 'from-blue-500 to-indigo-500'
    },
    {
      icon: MapPin,
      emoji: '📍',
      label: t.info.location,
      value: 'Chennai, India',
      link: 'https://maps.google.com/?q=Chennai,India',
      color: darkMode ? 'from-green-500 to-emerald-500' : 'from-green-500 to-teal-500'
    }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      emoji: '💻',
      link: 'https://github.com/richajaishwal0', 
      label: 'GitHub',
      color: darkMode ? 'hover:text-purple-300' : 'hover:text-orange-600'
    },
    { 
      icon: Linkedin, 
      emoji: '💼',
      link: 'https://linkedin.com/in/richa-jaishwal', 
      label: 'LinkedIn',
      color: darkMode ? 'hover:text-cyan-300' : 'hover:text-blue-600'
    },
    { 
      icon: Mail, 
      emoji: '✉️',
      link: 'mailto:richajaishwalhome@gmail.com', 
      label: 'Email',
      color: darkMode ? 'hover:text-pink-300' : 'hover:text-red-600'
    },
    { 
      icon: Phone, 
      emoji: '📞',
      link: 'tel:+918778823268', 
      label: 'Phone',
      color: darkMode ? 'hover:text-green-300' : 'hover:text-green-600'
    }
  ];

  return (
    <section id="contact" className={`py-16 sm:py-20 md:py-24 lg:py-32 ${
      darkMode ? 'bg-slate-800/20' : 'bg-white/20'
    } backdrop-blur-sm`}>
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

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h3 className={`text-3xl font-bold mb-8 transition-all duration-500 hover:scale-105 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                📞 Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-6 p-6 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 cursor-pointer group ${
                        darkMode 
                          ? 'bg-slate-800/50 hover:bg-slate-700/50 border-2 border-slate-700/50 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/25' 
                          : 'bg-white/50 hover:bg-gray-50/50 border-2 border-gray-200/50 hover:border-orange-400/50 hover:shadow-2xl hover:shadow-orange-500/25'
                      } backdrop-blur-sm`}
                    >
                      <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${info.color} group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                        <span className="text-3xl">{info.emoji}</span>
                      </div>
                      <div>
                        <p className={`text-lg font-medium transition-all duration-300 group-hover:scale-105 ${
                          darkMode ? 'text-slate-400' : 'text-gray-600'
                        }`}>
                          {info.label}
                        </p>
                        <p className={`font-bold text-xl transition-all duration-300 group-hover:scale-105 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className={`text-2xl font-bold mb-6 transition-all duration-500 hover:scale-105 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                🌐 Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center space-x-3 p-6 rounded-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 cursor-pointer group ${
                        darkMode 
                          ? 'bg-slate-800/50 hover:bg-slate-700/50 border-2 border-slate-700/50 hover:shadow-2xl' 
                          : 'bg-white/50 hover:bg-gray-50/50 border-2 border-gray-200/50 hover:shadow-2xl'
                      } backdrop-blur-sm ${social.color}`}
                      aria-label={social.label}
                    >
                      <span className="text-3xl group-hover:scale-125 transition-transform duration-500">{social.emoji}</span>
                      <span className="font-bold text-lg group-hover:scale-110 transition-transform duration-300">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <div className={`p-8 rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer ${
              darkMode 
                ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-2 border-purple-500/30' 
                : 'bg-gradient-to-r from-orange-600/20 to-red-600/20 border-2 border-orange-500/30'
            } backdrop-blur-sm hover:shadow-2xl`}>
              <h3 className={`text-2xl font-bold mb-4 transition-all duration-300 hover:scale-105 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                🚀 Ready to collaborate?
              </h3>
              <p className={`mb-6 text-lg transition-all duration-300 hover:scale-105 ${
                darkMode ? 'text-slate-300' : 'text-gray-700'
              }`}>
                I'm always open to discussing new opportunities, innovative projects, 
                and ways to contribute to meaningful technology solutions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="mailto:richajaishwalhome@gmail.com"
                  className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 ${
                    darkMode 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg shadow-purple-500/25' 
                      : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg shadow-orange-500/25'
                  } hover:shadow-2xl`}
                >
                  Let's Talk
                </a>
                <a
                  href="https://linkedin.com/in/richa-jaishwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 rounded-full font-bold text-lg border-2 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 ${
                    darkMode 
                      ? 'border-purple-400 hover:border-purple-300 hover:bg-purple-600/20 hover:text-purple-200' 
                      : 'border-orange-400 hover:border-orange-500 hover:bg-orange-500/20 hover:text-orange-700'
                  } backdrop-blur-sm hover:shadow-2xl`}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-10 rounded-2xl transition-all duration-500 hover:scale-105 ${
            darkMode 
              ? 'bg-slate-800/50 border-2 border-slate-700/50' 
              : 'bg-white/50 border-2 border-gray-200/50'
          } backdrop-blur-sm hover:shadow-2xl`}>
            <h3 className={`text-3xl font-bold mb-8 transition-all duration-300 hover:scale-105 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              💌 Send Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className={`block text-lg font-medium mb-3 ${
                    darkMode ? 'text-slate-300' : 'text-gray-700'
                  }`}>
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-6 py-4 rounded-2xl border-2 transition-all duration-500 hover:scale-105 focus:scale-105 ${
                      darkMode 
                        ? 'bg-slate-700/50 border-slate-600 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 text-white placeholder-slate-400' 
                        : 'bg-white/50 border-gray-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 text-gray-900 placeholder-gray-500'
                    } backdrop-blur-sm`}
                    placeholder="Richa Jaishwal"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-lg font-medium mb-3 ${
                    darkMode ? 'text-slate-300' : 'text-gray-700'
                  }`}>
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-6 py-4 rounded-2xl border-2 transition-all duration-500 hover:scale-105 focus:scale-105 ${
                      darkMode 
                        ? 'bg-slate-700/50 border-slate-600 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 text-white placeholder-slate-400' 
                        : 'bg-white/50 border-gray-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 text-gray-900 placeholder-gray-500'
                    } backdrop-blur-sm`}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className={`block text-lg font-medium mb-3 ${
                  darkMode ? 'text-slate-300' : 'text-gray-700'
                }`}>
                  {t.form.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-6 py-4 rounded-2xl border-2 transition-all duration-500 hover:scale-105 focus:scale-105 ${
                    darkMode 
                      ? 'bg-slate-700/50 border-slate-600 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 text-white placeholder-slate-400' 
                      : 'bg-white/50 border-gray-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 text-gray-900 placeholder-gray-500'
                  } backdrop-blur-sm`}
                  placeholder="Project Collaboration"
                />
              </div>
              
              <div>
                <label htmlFor="message" className={`block text-lg font-medium mb-3 ${
                  darkMode ? 'text-slate-300' : 'text-gray-700'
                }`}>
                  {t.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  className={`w-full px-6 py-4 rounded-2xl border-2 transition-all duration-500 hover:scale-105 focus:scale-105 resize-none ${
                    darkMode 
                      ? 'bg-slate-700/50 border-slate-600 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 text-white placeholder-slate-400' 
                      : 'bg-white/50 border-gray-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 text-gray-900 placeholder-gray-500'
                  } backdrop-blur-sm`}
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              {success && (
                <div className="text-green-500 font-semibold text-center">{success}</div>
              )}
              {error && (
                <div className="text-red-500 font-semibold text-center">{error}</div>
              )}
              <button
                type="submit"
                className={`w-full flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl font-bold text-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 ${
                  darkMode 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg shadow-purple-500/25' 
                    : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg shadow-orange-500/25'
                } hover:shadow-2xl`} 
                disabled={loading}
              >
                <Send size={24} />
                <span>{loading ? 'Sending...' : t.form.send}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;