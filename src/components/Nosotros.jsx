import React from 'react'
import Acordion from './Acordion';
import { BsPlay } from 'react-icons/bs';

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


const Nosotros = () => {
    return (
        <div>
            <section>
                <div className="max-w-[1320px] lg:mx-auto lg:mt-20 mx-2 my-10 flex flex-col lg:flex-row bg-orange1 bg-opacity-80 bg-center rounded-lg shadow-xl">
                    <div className="w-full relative lg:w-1/2 lg:mt-0 z-10 lg:px-0 px-0">
                        <img src="./logo blanco.png" alt="" className='w-full h-64 lg:h-full  rounded-md object-cover' />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className='bg-orange1 animate-pulse text-white rounded-full p-8'>
                                <BsPlay size={30} />
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 py-12 lg:px-12 px-3">
                        <div className="relative w-fit px-8 py-2 flex items-center justify-center">
                            <span className='bg-orange1 rounded-md bg-opacity-75 absolute w-full h-full z-10'>
                            </span>
                            <h6 className='text-white z-20 relative font-bold'>@Repam1995</h6>
                        </div>
                        <h3 className='lg:text-5xl text-3xl font-extrabold pb-8 py-4'>Sobre Nosotros

                        </h3>
                        <Acordion />
                    </div>
                </div>
            </section>
            
     
        </div>
    )
}

export default Nosotros