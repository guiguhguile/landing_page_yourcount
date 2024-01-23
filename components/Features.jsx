import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="w-full mb-[100px]">
      <div className="max-container lg:px-[200px] ">
        <div className="w-[100%] padding-container flexCenter">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            {FEATURES.map((feature, index) => (
              <FeatureItem
                key={index}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ title, icon, description }) => {
  return (
    <div className="flex w-full gap-5 shadow-lg bg-primary-blue flex-1 p-10 padding-container items-center justify-center rounded-[50px]">
      <div className="w-[100%] flexCenter gap-3 flex-col">
        <div className="rounded-full p-2 lg:p-2 ">
          <Image src={icon} alt="map" width={60} height={60} />
        </div>
        <h2 className="text-2xl max-w-[240px] text-white font-boldcapitalize text-center">
          {title}
        </h2>
        <p className="text-center text-[#f1f1f1] ">{description}</p>
      </div>
    </div>
  );
};

export default Features;
