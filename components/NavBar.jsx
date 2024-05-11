"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(null);
  const [selected, setSelected] = useState("")

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 30 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "lg:top-0 bg-white shadow-2xl  " : "lg:top-0"
      }  w-full fixed z-30 py-4  top-0  transition-all`}
    >
      <nav className="max-container padding-container flexCenter lg:flexBetween">
        <Link href="/">
          <Image src="/logonova.svg" alt="logo" width={194} height={79} />
        </Link>

        <ul className="hidden h-full gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-[#1b2f53] flexCenter cursor-pointer pb-1.5 transition-all hover:text-secundary-blue link link-underline "
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Link
            href={
              "https://api.whatsapp.com/send/?phone=559281214434&text=Gostaria%20de%20mais%20informações%20sobre%20a%20Your%20Count"
            }
          >
            <Button
              type="button"
              title="QUERO MAIS INFORMAÇÕES"
              variant="btn_green"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
