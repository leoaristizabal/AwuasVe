import React, { useState } from 'react';
import { FaBookReader } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaTree } from 'react-icons/fa';
import { FaPersonCircleCheck } from 'react-icons/fa6';
import { IoIosCut } from 'react-icons/io';
import { PiTestTubeFill } from 'react-icons/pi';

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
  { title: "Poda, Tala y Rocería", icon: <IoIosCut/> },
  { title: "Servicios Ambientales", icon: <FaTree /> },
  { title: "Asesoría Especializadas", icon: <FaBookReader/> },
  { title: "Alto Stock de Productos", icon: < PiTestTubeFill  /> },
  { title: "Gestion de Personal", icon: <FaPersonCircleCheck /> },
];

const HomeCarrusel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleAfterChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section >
      <div className='relative z-10 max-w-[1320px] px-6 mx-auto py-4'>
        <Carousel 
          responsive={responsives} 
          infinite 
          autoPlay={true} 
          itemClass="px-2"
          afterChange={handleAfterChange}
        >
          {TiposAventuras.map((item, index) => (
            <div key={index} className="group border rounded-lg">
              <div className={`cursor-pointer p-8 rounded-lg flex flex-col justify-center items-start bg-orange1 gap-4 ${
                currentSlide % TiposAventuras.length === index 
                  ? 'bg-blue1 bg-opacity-75 text-white' 
                  : 'bg-white bg-center text-blue1 group-hover:bg-orange1 group-hover:bg-opacity-60 group-hover:text-white'
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
