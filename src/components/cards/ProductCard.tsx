"use client";

import Image from 'next/image';
import React from 'react';

interface Product {
  id:number
  image: string;
  name: string;
  price: number;
  description: string;
}

const ProductCard = ({ product }: { product: Product }) => {

  return (
    <div className="w-[350px] sm:w-[250px] lg:w-[250px] xl:w-[280px] mx-auto flex flex-col gap-y-3 md:gap-y-6  rounded-lg">
      <div className="w-full border">
        {/* Image Container */}
        <div className="flex items-center justify-center w-full h-52 border-b">
          <Image
            src={product.image}
            alt="product-image"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex items-center flex-wrap text-gray-500 p-3 text-xs gap-2 prose">
          <span>Model: 2017</span>
          <span>3100 Mi</span>
          <span>240HP</span>
          <span>Automatic</span>
        </div>
      </div>

      {/* Product Description */}
      <div className="flex flex-col gap-y-2">
        <h3 className="font-medium text-[#444a57]"> {product.name} </h3>
        <span className="text-gray-700 text-[13px] font-medium">${product.price}</span>
        <p className='text-[13px] text-gray-500 leading-loose'>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
