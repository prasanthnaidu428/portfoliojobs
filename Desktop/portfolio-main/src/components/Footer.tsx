import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p className="flex items-center gap-2">
              © 2024 Epili Ashok Kumar. Made with <Heart className="h-4 w-4 text-red-500" /> in India
            </p>
          </div>
          
          <div className="flex gap-4">
            <a
              href="https://github.com/EPILIASHOKKUMAR"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/eppiliashok-kumar-5089712b0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:eppiliashokkumara@gmail.com"
              className="p-2 text-gray-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;