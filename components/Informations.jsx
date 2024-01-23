"use client";

import React from "react";
import Button from "./Button";
import card from "../public/Carousel1.svg";
import card2 from "../public/Carousel2.svg";
import card3 from "../public/Carousel3.svg";
import card4 from "../public/Carousel4.svg";
import card5 from "../public/Carousel5.svg";
import card6 from "../public/Carousel6.svg";

import Slide from "./Slide";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import SlideMobile from "./SlideMobile";
const imageItemsDesktop = [
  <Image src={card} className="w-full h-full" alt="card" />,
  <Image src={card2} className="w-full h-full" alt="card" />,
  <Image src={card3} className="w-full h-full" alt="card" />,
  <Image src={card4} className="w-full h-full" alt="card" />,
  <Image src={card5} className="w-full h-full" alt="card" />,
  <Image src={card6} className="w-full h-full" alt="card" />,
];

const Informations = () => {
  return (
    <section
      className="w-full mb-[50px] mt-[100px] overflow-hidden "
      id="informations"
    >
      <div className="max-container padding-container flex flex-col items-center">
        <h1 className="text-3xl text-center max-w-[700px] mb-[20px]">
          A Your Count estrutura a contabilidade da sua empresa com soluções
          personalizadas
        </h1>
        <div className="h-[4px] w-[150px] rounded-full  bg-secundary-blue mb-6"></div>

        <span className="text-lg text-primary-blue text-center max-w-[500px] mb-[20px]">
          Descubra todos os serviços que oferecemos para impulsionar os
          resultados do seu negócio
        </span>

        <Slide items={imageItemsDesktop} />

        <div className="hidden lg:flex">
          <Link href={"#form"}>
            <Button
              type="button"
              title="AGENDAR UMA REUNIÃO"
              variant="btn_green"
            />
          </Link>
        </div>
      </div>
      <div className="w-full max-w-[300px] m-auto mt-10 ">
        <div className="lg:hidden ">
          <SlideMobile />
          <div className="mt-10">
            <Link href={"#form"}>
              <Button
                type="button"
                title="AGENDAR UMA REUNIÃO"
                variant="btn_green"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Informations;
