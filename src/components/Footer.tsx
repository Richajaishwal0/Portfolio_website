import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800/80 backdrop-blur-sm border-t border-gray-700">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-300 flex items-center justify-center md:justify-start space-x-2">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>and</span>
              <Code size={16} className="text-blue-500" />
              <span>by John Doe</span>
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2024 John Doe. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;