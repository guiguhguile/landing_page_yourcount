import React from "react";
import Hero from "../public/nave.svg";
import Image from "next/image";

const Explain = () => {
  return (
    <section className="w-full mb-[100px]">
      <div className="max-container padding-container">
        <div className="w-full flex-col flexCenter gap-10">
          <div className="w-[90%] bg-[#f1f1f1] shadow-md gap-20 padding-container py-[100px] flexCenter lg:flex-row flex-col rounded-[50px]">
            <div className="max-w-[400px] lg:">
              <h1 className="text-3xl lg:text-left text-center text-primary-blue ">
                Você pode personalizar seu plano de acordo as necessidades da
                sua empresa
              </h1>
              <div className="w-full lg:flexStart flexCenter">
                <div className="bg-secundary-blue h-[3px] w-[100px] mt-5 "></div>
              </div>

              <p className="text-md text-primary-blue mt-5 lg:text-left text-center">
                Obtenha um braço extra para fortalecer sua equipe ou opte por
                terceirizar completamente suas necessidades contábeis com a Your
                Count. Dessa forma, você elimina preocupações com contratação,
                gestão de equipe, riscos trabalhistas e outras burocracias.
              </p>
            </div>
            <div className="max-w-[350px]">
              <Image src={Hero} width={600} height={600} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explain;
