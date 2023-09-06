import React, { useEffect, useState } from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import {
  Hosting,
  Cerfiticate,
  Domain,
  Email,
  Responsive,
  Design,
  Whatsapp,
  Link,
} from "../assets/icons";
import { useSplide } from "../useSplide";

const Carousel = () => {
  const numberOfSlides = useSplide();

  const [ratio, setRatio] = useState('');

  useEffect(() => {

    if (numberOfSlides == 5) {
        setRatio(0.25)
    } else if (numberOfSlides == 3) {
        setRatio(0.5)
    } else {
        setRatio(0.8)
    }

  }, [numberOfSlides])


  const splideOptions = {
    type: "slide",
    perPage: numberOfSlides,
    autoplay: true,
    interval: 1000,
    perMove: 3,
    arrows: false,
    heightRatio: ratio,
  };

  return (
    <section className="lg:max-w-[1200px] h-fit mx-auto px-4 md:px-8 lg:px-0">
        <Splide hasTrack={ false } options={splideOptions} aria-label="Nuestro servicio incluye">

            <SplideTrack>

                <SplideSlide className="flex justify-center items-center">
                    <article className="cardShadow rounded-2xl flex flex-col justify-between items-center bg-gradient-to-br from-green to-lightBlue w-[10.688rem] h-44">
                    <figure className="h-fit">
                        <img className="mt-8" src={Hosting} alt="Hosting" />
                    </figure>
                    <h4 className="text-white text-center mb-8 text-base font-medium w-[65%]">
                        Hosting por 1 año
                    </h4>
                    </article>
                </SplideSlide>

                <SplideSlide className="flex justify-center items-center">
                    <article className="cardShadow rounded-2xl flex flex-col justify-between items-center bg-gradient-to-br from-green to-lightBlue w-[10.688rem] h-44">
                    <figure className="h-fit">
                        <img className="mt-8" src={Cerfiticate} alt="Hosting" />
                    </figure>
                    <h4 className="text-white text-center mb-8 text-base font-medium w-[65%]">
                        Certificado SSL por 1 año
                    </h4>
                    </article>
                </SplideSlide>

                <SplideSlide className="flex justify-center items-center">
                    <article className="cardShadow rounded-2xl flex flex-col justify-between items-center bg-gradient-to-br from-green to-lightBlue w-[10.688rem] h-44">
                    <figure className="h-fit">
                        <img className="mt-8" src={Domain} alt="Hosting" />
                    </figure>
                    <h4 className="text-white text-center mb-8 text-base font-medium w-[65%]">
                        Dominio personalizado
                    </h4>
                    </article>
                </SplideSlide>

                <SplideSlide className="flex justify-center items-center">
                    <article className="cardShadow rounded-2xl flex flex-col justify-between items-center bg-gradient-to-br from-green to-lightBlue w-[10.688rem] h-44">
                    <figure className="h-fit">
                        <img className="mt-8" src={Email} alt="Hosting" />
                    </figure>
                    <h4 className="text-white text-center mb-8 text-base font-medium w-[65%]">
                        Email personalizado
                    </h4>
                    </article>
                </SplideSlide>

                <SplideSlide className="flex justify-center items-center">
                    <article className="cardShadow rounded-2xl flex flex-col justify-between items-center bg-gradient-to-br from-green to-lightBlue w-[10.688rem] h-44">
                    <figure className="h-fit">
                        <img className="mt-8" src={Responsive} alt="Hosting" />
                    </figure>
                    <h4 className="text-white text-center mb-8 text-base font-medium w-[65%]">
                        Apta para todos los dispositivos
                    </h4>
                    </article>
                </SplideSlide>

                <SplideSlide className="flex justify-center items-center">
                    <article className="cardShadow rounded-2xl flex flex-col justify-between items-center bg-gradient-to-br from-green to-lightBlue w-[10.688rem] h-44">
                    <figure className="h-fit">
                        <img className="mt-8" src={Design} alt="Hosting" />
                    </figure>
                    <h4 className="text-white text-center mb-8 text-base font-medium w-[65%]">
                        Diseño único
                    </h4>
                    </article>
                </SplideSlide>

                <SplideSlide className="flex justify-center items-center">
                    <article className="cardShadow rounded-2xl flex flex-col justify-between items-center bg-gradient-to-br from-green to-lightBlue w-[10.688rem] h-44">
                    <figure className="h-fit">
                        <img className="mt-8" src={Whatsapp} alt="Hosting" />
                    </figure>
                    <h4 className="text-white text-center mb-8 text-base font-medium w-[65%]">
                        Botón de Whatsapp
                    </h4>
                    </article>
                </SplideSlide>
                
                <SplideSlide className="flex justify-center items-center">
                    <article className="cardShadow rounded-2xl flex flex-col justify-between items-center bg-gradient-to-br from-green to-lightBlue w-[10.688rem] h-44">
                    <figure className="h-fit">
                        <img className="mt-8" src={Link} alt="Hosting" />
                    </figure>
                    <h4 className="text-white text-center mb-8 text-base font-medium w-[65%]">
                        Link a redes sociales
                    </h4>
                    </article>
                </SplideSlide>

            </SplideTrack>

            <div className="splide__progress">
                <div className="splide__progress__bar" />
            </div>

        </Splide>
    </section>
  );
};

export default Carousel;
