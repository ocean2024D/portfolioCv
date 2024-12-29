import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { FaMoon, FaSun } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Resume from './components/Resume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Projects from './components/Projects';
import SwiperComponent from './components/Swiper';
import 'swiper/css';

function App() {
  const contentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
  });

  const [isNightMode, setIsNightMode] = useState(false);

  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
    document.body.classList.toggle('night-mode', !isNightMode);
    document.body.classList.toggle('day-mode', isNightMode);
  };

  return (
    <>
      <div className="flex justify-center mt-6">
        <button
          onClick={toggleTheme}
          className="bg-amber-950 text-white px-4 py-2 rounded-xl shadow-md hover:bg-amber-800 transition duration-300"
        >
          {isNightMode ? (
            <>
              <FaSun className="inline mr-2" /> Passer au mode jour
            </>
          ) : (
            <>
              <FaMoon className="inline mr-2" /> Passer au mode nuit
            </>
          )}
        </button>
      </div>

      <Router basename="/portfolio">
        <div className="bg-blue-500 text-white p-4">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

function Home() {
  return (
    <div>
      <Hero />
      <SwiperComponent />
    </div>
  );
}

export default App;
