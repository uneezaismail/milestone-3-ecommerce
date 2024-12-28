import React from "react";


import { RiPoliceCarFill } from 'react-icons/ri';
import { FaTools, FaRegLifeRing } from 'react-icons/fa';
import ServiceCard from "./cards/ServiceCard";

export const serviceCardData = [
  {
    icon: RiPoliceCarFill,
    title: "Police Car Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, dolores.",
  },
  {
    icon: FaTools,
    title: "Car Repair Warranty",
    description: "Get the best repair services with guaranteed quality for your vehicle.",
  },
  {
    icon: FaRegLifeRing,
    title: "Insurance Support",
    description: "We offer complete assistance and support for your car insurance needs.",
  },
];
const Services = () => {
  return (
    <section className="py-16 md:py-28  flex flex-col items-center  gap-y-10">
      <div className="gap-y-4  flex flex-col items-center">
        <h4 className="text-4xl text-gray-700">Our Services</h4>
        <hr className="h-[3px] w-20 bg-blue-600 mt-3 md:mt-6" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {serviceCardData.map((item, index) => (
        <ServiceCard key={index} data={item} />
      ))}
        
      </div>
    </section>
  );
};

export default Services;
