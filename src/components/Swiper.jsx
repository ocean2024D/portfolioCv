import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import starWars from '../assets/starWars.png';
import Photo1 from '../assets/photo1.jpg';
import Stok from '../assets/projeStok.png';
import Form from '../assets/Form.png';
import bistro from '../assets/bistro.png';
import movie from '../assets/Movie.png';
import food from '../assets/food.png';
import todo from '../assets/todo.png';

function SwiperComponent() {
  const slides = [
    { src: movie, link: 'https://ocean2024d.github.io/tmdbSLider1/', alt: 'TMDB Slider' },
    { src: bistro, link: 'https://ocean2024d.github.io/Bistro-ThemeForest-Exercise/', alt: 'Bistro Theme' },
    { src: food, link: 'https://ocean2024d.github.io/food/', alt: 'Food Project' },
    { src: Stok, link: 'https://ocean2024d.github.io/stok/', alt: 'Stok Project' },
    { src: todo, link: 'https://ocean2024d.github.io/react-form/', alt: 'To-Do App' },
    { src: starWars, link: 'https://ocean2024d.github.io/starWars/', alt: 'Star Wars Project' },
  ];

  return (
    <div className="swiper-container">
      <Swiper
        className="bg-black"
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        modules={[Pagination, Navigation, Autoplay]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <a href={slide.link} target="_blank" rel="noopener noreferrer">
              <img
                className="w-full h-auto object-cover"
                src={slide.src}
                alt={slide.alt}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperComponent;
