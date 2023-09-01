import { Button } from '@material-tailwind/react'
import React from 'react'
import LandingDesk from '../assets/ilustrations/hablemosDesk.png';
import LandingMobile from '../assets/ilustrations/hablemosMobile.png';

const LandingExplain = () => {
  return (
    <section className='lg:max-w-[1200px] h-fit mx-auto mt-40 text-black'>

      <h3 className='text-3xl mb-4 hidden md:block lg:hidden text-start px-8'>
        Ahora hablemos...
        ¿Que es una landing page? <br />
        ¿Para que sirve?
      </h3>

      <div className='md:flex flex-row-reverse md:items-center justify-between px-4 md:px-8 lg:px-0'>

        <figure className='flex justify-center mb-7 md:mb-0'>
          <img className='hidden md:block md:w-[19rem] lg:w-[30rem]' src={LandingDesk} alt="Persona curiosa explorando" />
          <img className='md:hidden' src={LandingMobile} alt="Persona curiosa explorando" />
        </figure>

        <div className='text-start md:w-[23rem] lg:w-[38.75rem]'>
          <h3 className='text-3xl lg:text-5xl mb-4 lg:mb-10 md:hidden lg:block'>
            Ahora hablemos... <br />
            ¿Que es una landing page? <br />
            ¿Para que sirve?
          </h3>
          <p className='text-base lg:text-xl mb-8 lg:mb-12'>
            Es una página web sencilla que concentra toda su información relevante en una única sección. <br />
            Con una landing page los visitantes podrán encontrar rápidamente todo lo que necesitan de sus productos o servicios, y contactarse
            para adquirirlos.
          </p>

          <Button className='py-2 px-7 lowercase bg-gradient-to-br from-blue to-purple text-white font-jost font-medium text-base'><span className='uppercase'>V</span>er Precio</Button>
        </div>

      </div>

    </section>
  )
}

export default LandingExplain