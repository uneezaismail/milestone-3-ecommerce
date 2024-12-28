import Image from 'next/image';
import React from 'react';

interface Clientdata {
  image:string,
  text:string,
  name: string,
  place:string
}

const ClientCard = ({image, text, name,place}: Clientdata) => {
  return (
    <div className="w-[350px] flex flex-col items-center my-10 px-8 justify-evenly border h-80 mx-auto group hover:bg-indigo-600 transition-colors duration-300">
      {/* Image */}
      <div className="relative w-14 h-14">
        <Image
          src={image}
          alt="client-1"
          fill
          objectFit="cover"
          className="rounded-full"
        />
      </div>

      {/* Description */}
      <p className="text-gray-500 leading-loose group-hover:text-white transition-colors duration-300">
        {text}
      </p>

      {/* Name and Location */}
      <div className="flex flex-col gap-2 font-semibold text-gray-600 items-center group-hover:text-white transition-colors duration-300">
        <span>{name}</span>
        <span>{place}</span>
      </div>
    </div>
  );
};

export default ClientCard;
