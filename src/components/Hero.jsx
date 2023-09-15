import React from 'react'
import HeroIlustration from '../assets/ilustrations/Ilustration-hero.png'
import { Button } from "@material-tailwind/react";

const Hero = () => {

  return (

    <div className='w-full lg:flex lg:mt-[5.5rem] justify-center items-center'>
      <div className='lg:max-w-[1200px] mx-auto w-full h-[52.75rem] md:h-[36rem] lg:h-[32rem] bg-gradient-to-br from-blue to-purple rounded-br-[12.5rem] lg:rounded-2xl lg:rounded-br-[12.5rem]'>
        <section className='md:flex flex-row-reverse items-center justify-between md:h-full w-full px-4 md:px-8 md:pt-20 lg:pt-0 lg:px-[4.438rem]'>

          <figure className='flex items-center pt-[5.5rem] md:pt-0 lg:pl-10'>
            <img className='object-contain md:w-[20rem] lg:w-[28rem]' src={HeroIlustration} alt="Cliente feliz administrando su pagina web" />
          </figure>

          <div className='mt-10 md:mt-0 md:w-[22rem] lg:w-[35rem]'>
            <h1 className='font-bold text-white text-[1.875rem] lg:text-5xl leading-10 lg:leading-[3.5rem]'>
              La presencia digital <br /> que tu negocio 
              <span className='text-green'> necesita</span> para <span className='text-green'> llegar a todos lados</span></h1>
            <p className='mt-6 md:mt-4 font-normal text-base lg:text-lg text-white'>Ofrecemos desarrollo de páginas web a medida para negocios que buscan impulsar su transformación digital.</p>
            <Button className='hover:scale-[102%] duration-100 ease-in-out lowercase bg-white text-blue mt-8 md:mt-6 py-2 font-semibold font-jost text-base'>
              <span className='uppercase'>V</span>er servicios
            </Button>
          </div>

        </section>
      </div>
    </div>

  )
}

export default Hero