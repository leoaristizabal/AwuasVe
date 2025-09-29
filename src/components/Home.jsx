import React from 'react';
import TypewriterComponent from 'typewriter-effect';

export const Slogan = {
  slogan: [
    "¡Ponemos Manos a la Obra por ti!",
    "¡Tu Éxito es Nuestro Servicio",
    "Soluciones a tu Medida",
    "Amplio Stock de Productos",
    "Servicios Especializados",
  ]
}

const Home = () => {
  return (
    <div>
      <section className='relative top-0 h-[110vh]' data-aos='fade-down' data-aos-delay="300" data-aos-duration='3000' > {/** */}
        <video className='absolute z-0 h-full w-full object-cover' src='/videobg11111.mp4' autoPlay loop muted></video>
        <div className='flex flex-col justify-center items-center relative z-10 lg:h-full h-screen max-w-[1320px] px-6 xl:pt-0 pt-16 mx-auto '>
          <img src="./logoHOME.png" className=' md:w-45 xl:max-w-[480px] max-w-[320px]' alt="" />
          
          <div className="text-white text-center font-extrabold text-lg lg:text-xl uppercase pt-2 pb-0">
          <TypewriterComponent options={{
              strings: Slogan.slogan,
              autoStart: true,
              loop: true,
              delaySpeed: 5,
            }}
            />
            </div>
          
        </div>

      </section>
    </div>
  );
};

export default Home;
