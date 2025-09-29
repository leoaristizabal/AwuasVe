import React, { useState } from 'react'
import { IoArrowForward } from 'react-icons/io5';
import Carousel from 'react-multi-carousel'

import 'react-multi-carousel/lib/styles.css';

const responsive = {
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
const ImagesCarrusel = ({ image, lugar }) => {
    return (
        <div className=' relative group overflow-hidden rounded-[10px] shadow-lg cursor-pointer' >
            <img src={image} alt={lugar} className='w-full h-[350px] object-cover rounded-[10px] transition-transform duration-700 ease-in-out group-hover:scale-125' />
            <span className='absolute bg-orange1 bg-opacity-60 text-white rounded-lg px-5 text-xs top-5 right-5 group-hover:bg-opacity-90 font-bold leading-8 whitespace-pre transition-opacity duration-300'>@Repam1995</span>
            <div className='absolute bg-black bottom-0 w-full bg-opacity-50 py-5 flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:bg-opacity-80'>
                <p className='text-orange1 text-xl text-center font-bold flex flex-col'>Ponemos Manos a la Obra
                    <span className='text-white text-center text-2xl group-hover:text-gray-800'>{lugar}</span>
                </p>
                <div className='absolute -top-5 right-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                    <button className='bg-orange1 text-white p-2 rounded-full'>
                        <IoArrowForward className='text-xl' />
                    </button>
                </div>
            </div>
        </div>
    )
}

const Actividades = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleAfterChange = (_, state) => {
        setCurrentSlide(state.currentSlide)
    }

    return (
        <div className=' max-w-[1320px] mx-auto pt-22'>
            <div className='py-16'>
                <div className='flex flex-col items-center'>
                    <div className='relative w-fit px-8 py-2 flex items-center justify-center'>
                        <span className='bg-orange1 rounded-md bg-opacity-70 absolute w-full h-full '></span>
                        <h6 className='text-white relative font-semibold '>Cómo Podemos Ayudarte</h6>
                    </div>
                    <h3 className='lg:text-5xl text-3xl font-bold pb-8 text-center text-gray-700 py-4 '>Nuestros Servicios</h3>
                </div>
                <div className='py-8'>
                    <Carousel
                        responsive={responsive}
                        infinite
                        autoPlay={true}
                        itemClass="px-2"
                        rtl={true} >
                        <ImagesCarrusel lugar="Lorem ipsum" image="/image1.png" />
                        <ImagesCarrusel lugar="Lorem Ipsum Dolor" image="/image2.png" />
                        <ImagesCarrusel lugar="Lorem Ipsu Dolor" image="/image3.png" />
                        <ImagesCarrusel lugar="Lorem Ipsu Dolor" image="/image4.png" />
                        <ImagesCarrusel lugar="Lorem Ipsu Dolor" image="/image5.png" />
                        <ImagesCarrusel lugar="Lorem Ipsu Dolor" image="/image6.jpg" />
                    </Carousel>

                </div>
            </div>
        </div>
    )
}

export default Actividades