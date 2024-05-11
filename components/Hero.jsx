"use client";

import Image from "next/image";
import Button from "./Button";
import HeroLogo from "../public/Hero-img.svg";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Hero = () => {
  const ImageHeroRef = useRef(null);
  const TextHeroRef = useRef(null);

  useEffect(() => {
    const imageHero = ImageHeroRef.current;
    const textHero = TextHeroRef.current;
    gsap.fromTo(
      imageHero,
      { opacity: 0, x: 400 },
      { opacity: 1, x: 0, duration: 1 }
    );
    gsap.fromTo(
      textHero,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 2 }
    );
  });

  return (
    <section
      className="max-container mt-[100px] padding-container flex flex-col gap-20 py-10 md:gap-40 
    lg:py-5 lg:flex-row"
    >
      <div
        className="relative flex justify-center  flex-1 flex-col xl:w-1/2"
        ref={TextHeroRef}
      >
        <p className="text-center lg:text-left regular-20 mt-2 text-gray-30 xl:max-w-[520px]">
          Procurando uma CONTABILIDADE?
        </p>
        <h1 className="text-[#1b2f53] text-center lg:text-left font-bold bold-52 lg:bold-52">
          Temos um time <span className="text-[#67d7f9]">especializado </span>
          para cuidar da sua empresa
        </h1>

        <div className="mt-10 flex flex-col items-center w-full gap-3 lg:flex-row">
          <Link href={"https://1tdy9ja9kmz.typeform.com/to/pHh0yPEs"}>
            <Button
              type="button"
              title="MONTAR MEU PLANO!"
              variant="btn_green"
            />
          </Link>
        </div>
      </div>

      <div className="relative flex flex-1 items-center " ref={ImageHeroRef}>
        <div className="flex-1">
          <Image src={HeroLogo} className="w-full" alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
