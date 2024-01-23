"use client";

import Image from "next/image";
import { CONTACTS } from "@/constants";
import { DropdownForm } from "@/constants";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [enterprise, setEnterprise] = useState("");
  const [invoicing, setInvoicing] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      email: email,
      phone: phone,
      enterprise: enterprise,
      invoicing: invoicing,
    };

    emailjs
      .send(
        "service_wvdn5zd",
        "template_pz5isgi",
        templateParams,
        "yrlIt991TXgp2iqyE"
      )
      .then(
        (response) => {
          console.log("email enviado");
          setName("");
          setEmail("");
          setPhone("");
          setEnterprise("");
          setInvoicing("");
        },
        (err) => {
          console.log("Erro", err);
        }
      );
  };

  return (
    <section className="w-full bg-[#1b2f53] mb-10" id="form">
      <div className="max-container padding-container flex flex-col items-center gap-20 py-10 pb-32 md:gap-40 lg:py-20 lg:flex-row">
        <div className="z-20 flex w-full flex-col lg:w-[50%]">
          <div className="relative flex flex-col lg:items-start items-center">
            <h2 className="font-bold text-[35px] lg:text-left text-center leading-[120%] text-white ">
              Acabar com a burocracia leva menos de um minuto
            </h2>

            <div className="h-[4px] lg:w-[250px] w-[200px]  bg-[#1cbae9] mt-5"></div>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-1 lg:mg-20 lg:gap-20">
            {CONTACTS.map((feature) => (
              <ContactItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
        <div className="lg:w-[50%]">
          <form
            className="flex-1  p-8 rounded-[20px] border-2 border-white"
            onSubmit={sendEmail}
          >
            <div className="space-y-5 mt-5 mb-5">
              <input
                className="w-full outline-none bg-white p-3  rounded"
                type="text"
                placeholder="Qual seu nome?"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="w-full outline-none bg-white p-3 rounded"
                type="email"
                placeholder="E-mail corporativo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="w-full outline-none bg-white p-3 rounded"
                type="tel"
                placeholder="Seu Telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                className="w-full outline-none bg-white p-3 rounded"
                type="tel"
                placeholder="Nome da empresa"
                value={enterprise}
                onChange={(e) => setEnterprise(e.target.value)}
              />
              <select
                className="w-full p-3 outline-none rounded"
                value={invoicing}
                onChange={(e) => setInvoicing(e.target.value)}
              >
                <option value="">Qual é o faturamento mensal?</option>
                {DropdownForm.map((title) => (
                  <option value={title}>{title}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="text-white mt-6 w-full bg-[#1cbae9] p-3 mb-3 rounded"
            >
              RECEBER MAIS INFORMAÇÕES
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ title, icon, description }) => {
  return (
    <li className="flex w-full flex-1 flex-row gap-5 p-5  items-center bg-primary-blue border rounded-[20px]">
      <div className="">
        <Image src={icon} alt="map" width={100} height={100} />
      </div>
      <div className="flex flex-col">
        <h2 className="text-white text-[15px] text-center lg:text-left font-bold lg:text-[25px] lg:font-bold  capitalize">
          {title}
        </h2>
        <p className="regular-16 mt-5  text-center lg:text-left  text-white lg:mt-[10px] lg:bg-none">
          {description}
        </p>
      </div>
    </li>
  );
};

export default Form;
