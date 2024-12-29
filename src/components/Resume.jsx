import React, { useState } from 'react';
import photo1 from '../assets/photo1.jpg';
import { FaEnvelope, FaLinkedin, FaGithub, FaCar, FaPython, FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaMoon, FaSun } from 'react-icons/fa';

function Resume() {
 
  return (
    <>
      <div className="flex flex-col lg:flex-row rounded-3xl bg-slate-300 text-gray-700 justify-center gap-10 m-6 p-6 max-w-screen-lg mx-auto">
        {/* Left side - Profile Info */}
        <section className="flex flex-col items-center lg:items-start lg:w-1/3 bg-amber-100 p-6 rounded-3xl shadow-lg max-w-full">
          {/* Image */}
          <img
            className="w-[150px] lg:w-[300px] h-[150px] lg:h-[300px] rounded-full border-4 border-red-950 object-cover shadow-xl mb-6"
            src={photo1}
            alt="Photo of Derya Lacin Maes"
          />
          {/* Name  */}
          <div className="text-center lg:text-left mb-6">
            <ul>
              <li className="text-4xl lg:text-6xl mt-4">DERYA LACIN MAES</li>
              <li className="text-2xl lg:text-3xl text-amber-950">Développeuse Full-Stack</li>
            </ul>
          </div>
          {/* Contact information */}
          <ul className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <li className="text-xl flex items-center gap-2">
              <FaEnvelope />
              <a href="mailto:deryalacin@gmail.com">deryalacin@gmail.com</a>
            </li>
            <li className="text-xl flex items-center gap-2">
              <FaLinkedin />
              <a href="https://www.linkedin.com/in/derya-bxl/">linkedin.com/in/derya-bxl</a>
            </li>
            <li className="text-xl flex items-center gap-2">
              <FaGithub />
              <a href="https://github.com/ocean2024D">github.com/ocean2024D</a>
            </li>
          </ul>
        </section>

        {/* Right side  */}
        <section className="w-full lg:w-2/3 lg:ml-4">
          <div className="p-4 row text-xl text-gray-900 rounded-3xl">
            <h2 className="text-red-950 text-3xl lg:text-4xl">Langages de programmation et outils :</h2>
            <hr />
            <ul>
              <li><FaPython className="inline mr-2" />Python</li>
              <li><FaHtml5 className="inline mr-2" />HTML | <FaCss3 className="inline mr-2" />CSS | SCSS</li>
              <li><FaJs className="inline mr-2" />JavaScript</li>
              <li><FaReact className="inline mr-2" />React | <FaNode className="inline mr-2" />Node</li>
            </ul>
          </div>

          <div className="p-4 row text-xl text-gray-900 rounded-3xl">
            <h2 className="text-red-950 text-3xl lg:text-4xl">Expérience :</h2>
            <hr />
            <ul>
              <li>2024-2025 | Becode | Stagiaire Développeuse Full-Stack</li>
              <li>2002-2008 | Gokkusagi Plastik ve Kalip Sanayii LTD STI | Comptable</li>
              <li>1998-2000 | Aktas Oto Sanayii Ve Tic. A.S (FIAT SERVICE) | Réceptionniste</li>
            </ul>
          </div>

          <div className="p-4 row text-xl text-gray-900 rounded-3xl">
            <h2 className="text-red-950 text-3xl lg:text-4xl">
              <FaCar className="inline mr-2" /> Permis de conduire :
            </h2>
            <hr />
            <ul>
              <li>B</li>
            </ul>
          </div>

          <div className="p-4 row text-xl text-gray-900 rounded-3xl">
            <h2 className="text-red-950 text-3xl lg:text-4xl">Langues :</h2>
            <hr />
            <ul>
              <li>Français : Avancé</li>
              <li>Turc : Langue maternelle</li>
              <li>Anglais : Intermédiaire</li>
              <li>Néerlandais : Pré-intermédiaire</li>
            </ul>
          </div>

          <div className="p-4 row text-xl text-gray-900 rounded-3xl">
            <h2 className="text-red-950 text-3xl lg:text-4xl">Etudes :</h2>
            <hr />
            <ul>
              <li>2024 | Bruxelles Formation | Développeur Web</li>
              <li>2004-2009 | Université d'Anatolie, Turquie | Licence en Sciences Économiques</li>
            </ul>
          </div>
        </section>
      </div>


    </>
  );
}

export default Resume;
