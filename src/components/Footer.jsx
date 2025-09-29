import React from 'react'
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className=' bg-[url(/patronbg4.svg)] bg-blue1 bg-opacity-10 bg-center'>
      <div className="footer-top">
        <div className="container px-8 py-8 max-w-[1320px] mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 ">
              <img src='./logofooter.png' className="lg:w-64 w-48 my-4" alt="Logo" />
              <div className="footer-social-links flex mt-8 text-2xl gap-4">
                <a className='hover:text-4xl text-blue1 ' href="https://www.instagram.com/repam1995/">
                  <FaInstagram />
                </a>
                <a className='hover:text-4xl text-blue1 ' href="#">
                  <FaFacebook />
                </a>
                <a className='hover:text-4xl text-blue1 ' href="#">
                  <FaTiktok />
                </a>
                <a className='hover:text-4xl text-blue1 ' href="#">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
            
            <div className="w-full lg:w-1/4 lg:ml-auto">
              <h6 className="text-gray-800 font-bold text-md mt-4 mb-2">CONTACTO</h6>
              <a href="#" className="flex hover:text-lg hover:text-blue1  items-center gap-2 footer-link block mb-1">
                <FaWhatsapp /> +58 4245989755
              </a>
              <a className="flex items-center hover:text-lg hover:text-blue1  gap-2 footer-link block mb-1">
                <FaPhone /> +58 4245989755
              </a>
              <a href="mailto:rep.am1995@gmail.com" className="flex items-center gap-2 hover:text-lg hover:text-blue1  footer-link block mb-1">
                <FaEnvelope /> Correo@repam1995.com
              </a>
              <p className="footer-link hover:text-blue1  block hover:text-blue1 hover:text-lg mb-1">
                <a className="flex items-center hover:text-lg  gap-2 footer-link" href="https://www.instagram.com/repam1995/">
                  <FaInstagram /> @Repam1995
                </a>
              </p>
              <p className="mb-0">Caracas, Venezuela.</p>
            </div>

            <div className="w-full lg:w-1/4 ">
              <h6 className="text-gray-800 font-bold text-md mt-3 mb-2">HORARIO</h6>
              <p className="mb-1">Lunes - Viernes: 9:00am - 4:00pm</p>
              <p className="mb-1">Sábados: Cerrado</p>
              <p>Domingo : Cerrado</p>
              <p className="mt-4">
                <a className="footer-link" href="/PrivacyPolicyLaCapital.pdf">POLÍTICAS DE PRIVACIDAD</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom mt-8">
        <div className="container mx-auto">
          <div className="flex justify-center mb-6 items-center">
            <div>
              <p className="mb-0">
                Copyright 2024 © Designed by
                <a className="hover:text-blue1  ml-1" href="https://avocodesign.vercel.app/">AvocoDesign.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
