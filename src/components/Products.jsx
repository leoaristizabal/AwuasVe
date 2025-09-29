import React from 'react'
import { BiDollar } from 'react-icons/bi';
import {CiHeart, CiRuler } from 'react-icons/ci';
import Carousel from 'react-multi-carousel';
import { BsCircleFill } from 'react-icons/bs';


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


const Product = ({ image, name, price, description, modelo }) => {
    return (
        <div  className='cursor-pointer'>
            <div className='bg-blue1 relative overflow-hidden rounded-t-lg'>
                <img className="rounded-t-lg hoverImg" src={image} alt='' />
                <div className='absolute flex justify-between top-4 left-4 right-4'>
                    <p className='bg-orange1 rounded-md px-4 py-1 text-white text-sm'>Productos</p>
                    <button className='bg-orange1  rounded-md px-2 '>
                        <CiHeart className='text-white text-xl' />
                    </button>
                </div>
            </div>
            <div className='border border-[#ebe6de] rounded-b-lg relative'>
                <div className='absolute w-full h-5 -top-5 bg-white rounded-t-[20px]'></div>
                <div className='bg-white bg-opacity-80 px-6'>

                    {/*<div className='flex items-center gap-4 justify-between relative'>
                        
                        <span className='flex gap-2 shadow px-4 py-1 absolute -top-8 right-0 z-10 bg-white rounded-lg'>
                            <div className='relative'>
                                <CiCamera size={24} />
                                <button className='bg-blue1 text-xs rounded-full text-white w-4 h-4 flex items-center justify-center absolute top-0 right-0'>5</button>
                            </div>
                            <IoVideocamOutline size={24} />
                        </span>
                    </div>*/}
                    <div className='flex flex-row gap-2 items-center'>
                        <h4 className='text-xl font-semibold py-2 hover:text-orange1'>{name}</h4>

                    </div>
                    {/*} <span className='flex justify-start mb-4'>
                            {[...Array(5)].map((_, index) => (
                                <MdStar key={index} className='text-orange1 text-xl' />
                            ))}
                        </span> ESTRELLASSSSS*/}

                    <div className='flex items-center gap-4'>
                        <span className='flex items-center mb-4 gap-2'>
                            <p className='text-gray-600 text-xs '>{description}</p>
                        </span>

                    </div>
                    <span className='flex items-center mt-0 mb-2 gap-2'>
                        <p className='text-gray-800 text-xs'>{modelo}</p>
                    </span>

                    <div className='flex justify-between border-t py-2'>
                        <div className='flex items-center gap-1'>
                            <BiDollar className='text-orange1 font-bold text-xl' />
                            <h4 className='text-gray-800 text-xl -ml-1 font-bold'>{price}</h4>
                        </div>
                        <div className='flex items-center gap-2'>
                            <BsCircleFill className='text-[#070c57] text-xm' />
                            <BsCircleFill className='text-[#ff0000] text-xm' />
                            <BsCircleFill className='text-[#ffa500] text-xm' />
                            <BsCircleFill className='text-[#808080] text-xm' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


const Products = ({ }) => {
    return (
        <section className='container max-w-[1320px] mx-auto px-8 py-12' >
            <div className="relative px-8 w-fit py-2 flex items-center justify-center">
                <span className='bg-blue1 rounded-md bg-opacity-70 absolute w-full h-full z-10'>
                </span>
                <h6 className='text-white z-20 relative font-semibold'>Catalogo</h6>
            </div>
            <h3 className='lg:text-5xl text-3xl font-bold pb-8 py-4 text-gray-700'>Nuestros Productos</h3>
            <div>
                <Carousel
                    responsive={responsives}
                    infinite
                    autoPlay={true}
                    itemClass='px-2 pb-4'>

                    <Product image='/termopitillo.png' name="Termo Con Pitillo" modelo='20 Oz' description="Ideal para bebidas frías y calientes, fácil de usar en movimiento." price="17" />
                    <Product image='toallapeq.png' name="Toalla Sport" modelo="60cm X 30cm" description="Ligera y absorbente, perfecta para entrenamientos intensos." price="15" />
                    <Product image='termomag.png' name="Termo Tapa Magnética" modelo='25 Oz' description="Mantén tus bebidas seguras y a la temperatura ideal por más tiempo." price="20" />
                    <Product image='toallafde.png' name="Toalla Grande" modelo='120cm x 60cm' description="Máximo confort y suavidad para después de la ducha." price="20" />   
                    <Product image='jersey.png' name="Jersey Playero" modelo='Tallas S - XL' description="Comodidad y estilo para cualquier ocasión casual, playera o deportiva" price="20" />
                </Carousel>

            </div>
        </section>
    )
}

export default Products