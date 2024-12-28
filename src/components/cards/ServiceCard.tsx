import React from 'react';

interface ServiceCardProps {
  data: {
    icon: React.ElementType;
    title: string;
    description: string;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ data }) => {
  const { icon: Icon, title, description } = data;

  return (
    <div className="w-[350px] flex flex-col items-center  px-8 justify-evenly border h-72 md:h-96 mx-auto group hover:bg-indigo-600 transition-colors duration-300">
      <Icon size={60} className="text-gray-700 group-hover:text-white transition-colors duration-300" />
      <div className="flex flex-col items-center gap-y-4">
        <h4 className="text-xl font-medium text-gray-800 group-hover:text-white transition-colors duration-300">
          {title}
        </h4>
        <p className="text-gray-500 text-center leading-loose group-hover:text-white transition-colors duration-300">
          {description}
        </p>
      </div>
      <span className="h-1 w-6 bg-blue-800 group-hover:bg-white transition-colors duration-300"></span>
    </div>
  );
};

export default ServiceCard;
