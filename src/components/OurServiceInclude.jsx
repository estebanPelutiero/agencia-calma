import React from 'react'
import {
  Hosting,
  Cerfiticate,
  Domain,
  Email,
  Responsive,
  Design,
  Whatsapp,
  Link
} from '../assets/icons';

const OurServiceInclude = () => {
  return (
    <section className='lg:max-w-[1200px] h-fit mx-auto mt-40 text-black'>

      <h3 className='text-3xl text-start px-4 md:px-8 lg:px-0 mb-8'>Nuestro servicio incluye</h3>

        <div className='px-4 md:px-8 lg:px-0 flex flex-wrap justify-between gap-y-4 lg:gap-y-8 md:gap-x-2'>

        <article className='cardShadow rounded-2xl flex flex-col justify-between items-center bg-gradient-to-br from-green to-lightBlue w-[10.688rem] h-44'>
          <figure className='h-fit'>
              <img className='mt-8' src={Hosting} alt="Hosting" />
          </figure>
          <h4 className='text-white text-center mb-8 text-base font-medium w-[65%]'>
            Hosting por 1 año
          </h4>
        </article>

        <article className='cardShadow rounded-2xl flex flex-col justify-between items-center bg-gradient-to-br from-green to-lightBlue w-[10.688rem] h-44'>
          <figure className='h-fit'>
              <img className='mt-8' src={Cerfiticate} alt="Cerfiticate" />
          </figure>
          <h4 className='text-white text-center mb-8 text-base font-medium w-[65%]'>
            Certificado SSL por 1 año
          </h4>
        </article>

        <article className='cardShadow rounded-2xl flex flex-col justify-between items-center bg-gradient-to-br from-green to-lightBlue w-[10.688rem] h-44'>
          <figure className='h-fit'>
              <img className='mt-8' src={Domain} alt="Domain" />
          </figure>
          <h4 className='text-white text-center mb-8 text-base font-medium w-[65%]'>
            Dominio personalizado
          </h4>
        </article>

        <article className='cardShadow rounded-2xl flex flex-col justify-between items-center bg-gradient-to-br from-green to-lightBlue w-[10.688rem] h-44'>
          <figure className='h-fit'>
              <img className='mt-8' src={Email} alt="Email" />
          </figure>
          <h4 className='text-white text-center mb-8 text-base font-medium w-[65%]'>
            Email personalizado
          </h4>
        </article>

        <article className='cardShadow rounded-2xl flex flex-col justify-between items-center bg-gradient-to-br from-green to-lightBlue w-[10.688rem] h-44'>
          <figure className='h-fit'>
              <img className='mt-8' src={Responsive} alt="Responsive" />
          </figure>
          <h4 className='text-white text-center mb-8 text-base font-medium w-[65%]'>  
            Apta para todos los dispositivos
          </h4>
        </article>

        <article className='cardShadow rounded-2xl flex flex-col justify-between items-center bg-gradient-to-br from-green to-lightBlue w-[10.688rem] h-44'>
          <figure className='h-fit'>
              <img className='mt-8' src={Design} alt="Design" />
          </figure>
          <h4 className='text-white text-center mb-8 text-base font-medium w-[65%]'>
            Diseño único
          </h4>
        </article>

        <article className='cardShadow rounded-2xl flex flex-col justify-between items-center bg-gradient-to-br from-green to-lightBlue w-[10.688rem] h-44'>
          <figure className='h-fit'>
              <img className='mt-8' src={Whatsapp} alt="Whatsapp" />
          </figure>
          <h4 className='text-white text-center mb-8 text-base font-medium w-[65%]'>
            Botón de Whatsapp
          </h4>
        </article>

        <article className='cardShadow rounded-2xl flex flex-col justify-between items-center bg-gradient-to-br from-green to-lightBlue w-[10.688rem] h-44'>
          <figure className='h-fit'>
              <img className='mt-8' src={Link} alt="Link" />
          </figure>
          <h4 className='text-white text-center mb-8 text-base font-medium w-[65%]'>
            Link a redes sociales
          </h4>
        </article>

      </div>
    </section>
  )
}

export default OurServiceInclude