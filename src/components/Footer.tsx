// added a link and some section and styled the footer section

import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-2">
      <div className="container mx-auto px-4 flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between items-center text-sm md:text-base">
        <p className="text-center mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} vedantabanerjee
        </p>
        <p className='text-gray-300 pr-10 text-center hidden md:inline'>version 1.0.5 - alpha build</p>
        <a
          href="https://github.com/vedantabanerjee/greenindia_app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-white hover:text-gray-400 transition duration-300 pr-5 justify-center"
        >
          <FaGithub className="mr-2" />
          <span>GitHub Repository</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
