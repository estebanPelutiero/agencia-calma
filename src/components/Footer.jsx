import React from 'react';
import Logo from '../assets/icons/logo.svg';
import Whatsapp from '../assets/icons/whatsapp.svg';
import Github from '../assets/icons/github.svg';
import Linkedin from '../assets/icons/linkedin.svg';
import Instagram from '../assets/icons/instagram.svg';

const Footer = () => {
  return (
    <footer className='w-full bg-gradient-to-br from-blue to-purple text-white mt-40 h-52 lg:h-40'>

      <div className='flex flex-col md:flex-row items-center justify-evenly md:justify-between lg:max-w-[1200px] px-4 md:px-8 lg:px-0 h-full mx-auto'>

        <div className='flex items-center'>
          <img className='w-10' src={Logo} alt="Agencia Calma - Diseño y Desarrollo Web" />
          <p className='px-2 font-normal text-lg'>Agencia Calma</p>
        </div>

        <div className='flex'>
          <img className='w-5 mx-2' src={Whatsapp} alt="" />
          <img className='w-5 mx-2' src={Github} alt="" />
          <img className='w-5 mx-2' src={Linkedin} alt="" />
          <img className='w-5 mx-2' src={Instagram} alt="" />
        </div>

      </div>

    </footer>
  )
}

export default Footer