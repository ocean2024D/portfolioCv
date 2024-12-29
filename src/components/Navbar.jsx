import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md">
      {/* Logo */}
      <img
        className="w-[350px] h-auto md:w-[400px] object-cover"
        src={logo}
        alt="Logo"
      />

      {/* Hamburger Icon for mobile */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          ></path>
        </svg>
      </button>

      {/* Navigation Links */}
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex flex-col md:flex-row items-center md:gap-8 gap-6 mt-4 md:mt-0`}
      >
        <ul className="flex flex-col md:flex-row gap-6 md:gap-8">
          <li>
            <Link to="/" className="text-gray-200 hover:text-red-400">Accueil</Link> {/* Ana sayfaya yönlendir */}
          </li>
          <li>
            <Link to="/resume" className="text-gray-200 hover:text-red-400">Cv</Link> {/* CV sayfasına yönlendir */}
          </li>
       
          <li>
            <Link to="/projects" className="text-gray-200 hover:text-red-400">Projets</Link> {/* Projects sayfasına yönlendir */}
          </li>
          <li>
            <Link to="/contact" className="text-gray-200 hover:text-red-400">Contact</Link> {/* Contact sayfasına yönlendir */}
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-10 md:mt-0">
          {/* GitHub Icon */}
          <a href="https://github.com/ocean2024D" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub className="text-xl" />
          </a>
          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/derya-bxl/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
            <FaLinkedinIn className="text-xl" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
