import React from 'react'
import { BiDollarCircle, BiMoneyWithdraw } from 'react-icons/bi'
import { IoArrowForward } from 'react-icons/io5'
import { RiBtcFill } from 'react-icons/ri'
import { SiZelle } from 'react-icons/si'
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';   


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

const MetodosPago = [
    { title: "Pago Movil", icon: <BiMoneyWithdraw /> },
    { title: "USDT", icon: <RiBtcFill /> },
    { title: "Cash", icon: <BiDollarCircle /> },
    { title: "Zelle", icon: <SiZelle /> },
    { title: "Banesco Panamá", icon: <BiDollarCircle /> },

]

const Pagomovill = () => {
    return (
        <div>
            <div className='relative z-20 max-w-[1320px] px-6 mx-auto my-4'>
                <div className='lg:text-3xl text-xl font-bold pb-8 text pb-4 text-blue1 text-opacity-50 flex '>
                    Métodos de Pago
                    <IoArrowForward className='ml-2 mt-2 -mb-2' />
                </div>
                    <div className=' px-2 w-[200px] h-[1px] -mt-5 mx-2 mb-8  bg-gray-400'></div>

                <Carousel
                    responsive={responsives}
                    infinite
                    autoPlay={true}
                    itemClass="px-2"
                    
                    >

                    {MetodosPago.map((item, index) => (
                        <div key={index} className='group border rounded-lg'>
                            <div className='bg-[url(/patronbg4.svg)] bg-blue1 bg-opacity-20 shadow-lg bg-cover cursor-pointer p-8 rounded-lg lg:flex-row justify-center items-start'>
                                <div className='flex flex-row justify-center items-center mx-4 text-gray-400 lg:text-[20px] font-bold'>
                                    <div className='font-bold text-[30px]'>{item.icon}</div>
                                    <h3 className='pl-1'>{item.title}</h3>

                                </div>
                            </div>

                        </div>
                    ))}

                </Carousel>
            </div>
        </div>
    )
}

export default Pagomovill