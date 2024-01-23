import Link from "next/link";
import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="w-full ">
      <div className="max-contauiner padding-container flex justify-center items-center flex-col p-5">
        <Link href={"#nav"}>
          <div className="flex justify-center items-center mb-2 gap-5">
            <button className="bg-secundary-blue rounded-[100px] w-10 h-10 flex justify-center items-center">
              <IoIosArrowUp color={"#ffff"} size={25} />
            </button>
            <span className="text-secundary-blue font-bold hover:scale-105 ">
              Retornar ao topo
            </span>
          </div>
        </Link>
        <div className="bg-[#a7a7a7] h-[1px] w-[50%]"></div>
        <span className=" mt-2 lg:max-w-[600px] text-center max-w-[400px]">
          Your Count | Todos os direitos reservados | Copyright &copy; 2024
        </span>
      </div>
    </footer>
  );
};

export default Footer;
