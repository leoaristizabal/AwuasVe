import React, { useState } from 'react';
import {FaSnowflake } from 'react-icons/fa';;
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BiEdit, BiMedal } from 'react-icons/bi';
import {SiTrustpilot } from 'react-icons/si';
import { DiModernizr } from 'react-icons/di';


const responsives = {
  superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
  },
  desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
  },
  tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
  },
  mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
  },
};

const TiposAventuras = [
  { title: "Materiales de Primera", icon: <BiMedal/> },
  { title: "+6h Frío, +4h Calor", icon: <FaSnowflake /> },
  { title: "Comfort + Durabilidad", icon: <SiTrustpilot/> },
  { title: "Diseños Modernos", icon: <DiModernizr/> },
  { title: "Termos Personalizables", icon: <BiEdit /> },
];

const HomeCarrusel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleAfterChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section >
      <div className='relative z-10 max-w-[1320px] px-6 mx-auto xl:-mt-28 -mt-48'>
        <Carousel 
          responsive={responsives} 
          infinite 
          autoPlay={true} 
          itemClass="px-2"
          afterChange={handleAfterChange}
        >
          {TiposAventuras.map((item, index) => (
            <div key={index} className="group border rounded-lg">
              <div className={`cursor-pointer p-8 rounded-lg flex flex-col justify-center items-start gap-4 ${
                currentSlide % TiposAventuras.length === index 
                  ? 'bg-blue1 bg-opacity-80 text-white' 
                  : 'bg-white bg-center text-blue1 group-hover:bg-blue1 group-hover:bg-opacity-60 group-hover:text-white'
              }`}>
                <p className={`font-bold text-lg ${
                  currentSlide % TiposAventuras.length === index
                    ? 'text-white'
                    : 'text-blue1 group-hover:text-white'
                }`}>
                  {item.title}
                </p>

                <span className={`text-6xl ${
                  currentSlide % TiposAventuras.length === index
                    ? 'text-white'
                    : 'text-blue1 group-hover:text-white'
                }`}>
                  {item.icon}
                </span>

                <p className={`${
                  currentSlide % TiposAventuras.length === index
                    ? 'text-white'
                    : 'text-blue1 group-hover:text-white'
                }`}>
                  Lorem ipsum dolor sit, amet consectetur
                </p>
              </div>
            </div>
          ))}
        </Carousel>

      </div>
    </section>
  );
};

export default HomeCarrusel;
