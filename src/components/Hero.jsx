import React from 'react';
import Photo1 from '../assets/photo1.jpg';

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
         {/* Image Section */}
         <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
        <img
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-full border-4 border-red-950"
          src={Photo1}
          alt="Description of photo"
        />
      </div>
      {/* Text Section */}
      <div className="text-center md:text-left md:w-1/2 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">DERYA LACIN MAES</h1>
        <p className="text-lg text-gray-700 w-full md:w-[30rem] mx-auto md:mx-0 ">
          {/* Hello! I have gained experience in various sectors, including the automotive industry and plastic production, where I worked as an accountant. Holding a bachelor's degree in economics, I taught myself programming (Swift, JavaScript, HTML) and gained experience in digital marketing by helping my brother manage his business.

          Passionate about web development, I completed a training course in web development (Python, HTML, CSS, JavaScript) at Bruxelles Formation and am currently an intern at Becode, where I continue to improve my skills. I am seeking an internship to grow in this field and re-enter the job market. */}
       
   
J'ai acquis des expériences dans différents secteurs, notamment dans l'automobile et la production de plastique, où j'ai occupé des postes de réceptionniste et de comptable. Titulaire d'un bachelor en économie, je me suis formée en autodidacte à la programmation (Swift, JavaScript, HTML) et j'ai acquis de l'expérience en marketing numérique en aidant mon frère à gérer son entreprise.

Passionnée par le développement web, j'ai suivi une formation en développement web (Python, HTML, CSS, JavaScript) et continue de perfectionner mes compétences. Je suis à la recherche d'un stage pour évoluer dans ce domaine et réintégrer le marché du travail.
       
        </p>
      </div>

   
    </section>
  );
}

export default Hero;
