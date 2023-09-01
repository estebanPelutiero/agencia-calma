import React from 'react'
import Diseño from '../assets/ilustrations/diseñosPersonalizados.png';
import Responsive from '../assets/ilustrations/responsive.png';
import Asesoria from '../assets/ilustrations/asesoria.png';
import Whatsapp from '../assets/icons/whatsapp.svg';
import { Button } from "@material-tailwind/react";

const WhatWeOffer = () => {

  return (

    <main className='lg:max-w-[1200px] h-fit mx-auto mt-[5.5rem] text-black'>

      <section className='px-4 md:px-8 lg:px-0'>

        <h2 className='text-xl md:text-[2rem] md:leading-[2.875rem] lg:text-[2.5rem] lg:leading-[3.5rem] text-center font-medium'>
          Ayudamos a nuestros clientes a <span className='text-blue'>maximizar el potencial de sus negocios</span> a través del uso efectivo de la tecnología.
        </h2>

        {/* Card 1 */}

        <article className='flex flex-col md:flex-row md:justify-between items-center mt-24 text-center'>

          <figure className='w-[18.125rem] lg:w-[26rem] mb-12 md:m-0'>
            <img src={Diseño} alt="Diseños personalizados" />
          </figure>

          <div className='md:w-[21.688rem] lg:w-[37.5rem] md:text-start'>
            <h3 className='text-[2.5rem] lg:text-7xl leading-10 mb-4'>
              Diseños Personalizados
            </h3>
            <p className='text-base lg:text-xl font-normal'>
             Ofrecemos una visión única de tu producto. Queremos que tu negocio destaque con una página hecha a la medida de tu idea.
            </p>
          </div>

        </article>

        {/* Card 2 */}

        <article className='flex flex-col md:flex-row-reverse md:justify-between items-center mt-24 text-center'>

          <figure className='w-[18.125rem] lg:w-[26rem] mb-12 md:m-0'>
            <img src={Responsive} alt="Páginas web aptas para todos los dispositivos" />
          </figure>

          <div className='md:w-[21.688rem] lg:w-[37.5rem] md:text-start'>
            <h3 className='text-[2.5rem] lg:text-7xl leading-10 mb-4'>
              Apta para todos los dispositivos
            </h3>
            <p className='text-base lg:text-xl font-normal'>
              ¿Sabías que el 50% del trafico de internet proviene 
              de celulares? Aseguramos que tu página sea accesible
              desde cualquier dispositivo.
            </p>
          </div>

        </article>

        {/* Card 3 */}

        <article className='flex flex-col md:flex-row md:justify-between items-center mt-24 text-center'>

          <figure className='w-[18.125rem] lg:w-[26rem] mb-12 md:m-0'>
            <img src={Asesoria} alt="Asesoría gratuita" />
          </figure>

          <div className='md:w-[21.688rem] lg:w-[37.5rem] md:text-start'>
            <h3 className='text-[2.5rem] lg:text-7xl leading-10 mb-4'>
              Asesoría gratuita
            </h3>
            <p className='text-base lg:text-xl font-normal'>
              Podes agendar una llamada para quitarte dudas 
              y recibir consejo sobre que estilo de pagina es mejor
              para tu negocio, sin cargo.
            </p>
            <div className='w-full flex justify-center md:justify-start'>
              <a href="#"><Button className='text-base font-medium mt-7 py-2 lowercase font-jost bg-gradient-to-br from-blue to-purple flex items-center'> <span className='uppercase'>I</span>r al chat <img className='w-6 ml-4' src={Whatsapp} alt="" /> </Button></a>
            </div>
          </div>


        </article>

      </section>

    </main>
  )
}

export default WhatWeOffer