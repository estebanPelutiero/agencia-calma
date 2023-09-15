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
import { Button } from "@material-tailwind/react";

const Carousel = () => {
  const numberOfSlides = useSplide();

  const [ratio, setRatio] = useState("");

  useEffect(() => {
    if (numberOfSlides == 5) {
      setRatio(0.25);
    } else if (numberOfSlides == 3) {
      setRatio(0.4);
    } else {
      setRatio(0.8);
    }
  }, [numberOfSlides]);

  const splideOptions = {
    perPage: numberOfSlides,
    autoplay: true,
    interval: 1000,
    perMove: 3,
    arrows: false,
    easing: "linear",
    heightRatio: ratio,
    gap: "1rem",
  };

  return (
    <section className="z-0 lg:max-w-[1200px] h-fit mx-auto px-4 md:px-8 lg:px-0 mt-20 md:mt-40">
      <h3 className="text-3xl md:text-4xl lg:text-5xl text-black text-center font-normal lg:mb-14">
        Nuestro Servicio incluye
      </h3>

      <Splide options={splideOptions} aria-label="Nuestro servicio incluye">
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
      </Splide>

      <div className="w-full flex flex-col justify-between items-center mt-14">
        <h3 className="text-center leading-10 mb-12 h-fit flex items-end text-2xl md:text-4xl text-black">Hacé despegar tu negocio desde $ 75.000</h3>
        <Button className="hover:scale-[102%] duration-100 ease-in-out lowercase bg-gradient-to-br from-blue to-purple text-white py-2 font-semibold font-jost text-base text-center">
          <span className="uppercase">C</span>onseguí tu web ya
        </Button>
      </div>
    </section>
  );
};

export default Carousel;
