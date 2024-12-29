// src/components/Projects.js
import React from 'react';

function Projects() {
  return (
    <div className="projects-page container mx-auto p-4">
      <h2 className="text-4xl text-center font-bold mb-6">Mes Projets</h2>

      <p className="text-center text-lg mb-6">
      Découvrez certains des projets sur lesquels j'ai travaillé. Cliquez sur les titres pour les voir.
      </p>

      {/* Project Links */}
      <div className="project-links mt-8">


      <h3 className="text-2xl font-semibold mb-4">
          <a href="https://github.com/AntMerinoAguilar/Code-GuardianRoute/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Project 1: Hackathon Orange travaille en groupe.
          </a>
        </h3>
        <h3 className="text-2xl font-semibold mb-4">
          <a href="https://ocean2024d.github.io/tmdbSLider1/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Project 2: Clone De Netflix
          </a>
        </h3>
        <h3 className="text-2xl font-semibold mb-4">
          <a href="https://ocean2024d.github.io/Bistro-ThemeForest-Exercise/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Project 3: Bistro
          </a>
        </h3>
        <h3 className="text-2xl font-semibold mb-4">
          <a href="https://ocean2024d.github.io/starWars/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Project 6: Star Wars
          </a>
        </h3>
        <h3 className="text-2xl font-semibold mb-4">
          <a href="https://ocean2024d.github.io/food/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Project 4: Recipé
          </a>
        </h3>
        <h3 className="text-2xl font-semibold mb-4">
          <a href="https://ocean2024d.github.io/stok/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Project 5: Gestion des stocks
          </a>
        </h3>
        <h3 className="text-2xl font-semibold mb-4">
          <a href="https://ocean2024d.github.io/UltimateProject/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Project 6: Ultimate Project
          </a>
        </h3>
        <h3 className="text-2xl font-semibold mb-4">
          <a href="https://ocean2024d.github.io/react-form//" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Project 6: Form
          </a>
        </h3>
        <h3 className="text-2xl font-semibold mb-4">
          <a href="https://ocean2024d.github.io/git-react-test/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Project 6: Todo
          </a>
        </h3>
        <h3 className="text-2xl font-semibold mb-4">
          <a href="https://ocean2024d.github.io/tictactoe/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Project 6: Tic Tac Toe
          </a>
        </h3>
        <h3 className="text-2xl font-semibold mb-4">
          <a href="https://ocean2024d.github.io/slide-menu/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Project 6: Slide Menu
          </a>
        </h3>
        
      </div>
    </div>
  );
}

export default Projects;
