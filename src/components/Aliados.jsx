import React from 'react'
import Carousel from 'react-multi-carousel';

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
const Aliados = () => {
    return (
        <section className=' max-w-[1600px] mx-auto pt-22'>
        <div className='py-16'>
            <div className='flex flex-col items-center'>
                <div className='relative w-fit px-8 py-2 flex items-center justify-center'>
                </div>
                <h3 className='lg:text-2xl text-lg font-bold pb-8 text-center text-blue1 text-opacity-60 py-4 '>¿Dónde Encontrar Nuestros Productos?</h3>
            </div>
                <Carousel responsive={responsives} infinite autoPlay={true} itemClass='px-0' transitionDuration={750} 
                    rtl={true}>
                    <div className='h-[260px] relative overflow-hidden cursor-pointer'>
                        <img src='/aliados1.jpg' className='rounded-lg h-full object-cover hoverImg' alt="" />
                    </div>
                    <div className='h-[260px] relative overflow-hidden cursor-pointer'>
                        <img src='/aliados2.jpg' className='rounded-lg h-full object-cover hoverImg' alt="" />
                    </div>
                    <div className='h-[260px] relative overflow-hidden cursor-pointer'>
                        <img src='/aliados3.jpg' className='rounded-lg h-full object-cover hoverImg' alt="" />
                    </div>
                    <div className='h-[260px] relative overflow-hidden cursor-pointer'>
                        <img src='/aliados4.jpg' className='rounded-lg h-full object-cover hoverImg' alt="" />
                    </div>
                    <div className='h-[260px] relative overflow-hidden cursor-pointer'>
                        <img src='/aliados5.jpg' className='rounded-lg h-full object-cover hoverImg' alt="" />
                    </div>
                </Carousel>
            </div>
        </section>
    )
}

export default Aliados