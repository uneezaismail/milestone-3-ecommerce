"use client"

import { useCart } from '@/components/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const CartPage: React.FC = () => {
  const { cart, removeItem, updateQuantity } = useCart();

   return (
    <div
className={`p-2 md:p-4 max-w-4xl mx-auto min-h-screen pt-32 md:pt-32 space-y-6 ${
  cart.length === 0 ? " flex items-center justify-center" : ""
}`}
>
{cart.length === 0 ? (
  <div className="text-center">
    <p className="text-gray-500 text-lg">Your cart is empty.</p>
    <Link href="/shop">
      <button className="mt-4 bg-indigo-500 hover:bg-indigo-800 p-4 text-white">
        Continue Shopping
      </button>
    </Link>
  </div>
) :  (
  <>
    <h2 className="text-2xl font-bold">Shopping Cart</h2>
    {cart.map((item) => (
      <div
        key={item.id}
        className="flex items-center justify-between border p-2 py-6 md:p-4 rounded-md bg-white shadow-md"
      >
        {/* Image */}
        <Image
          src={item.image}
          alt={item.name}
          width={80}
          height={80}
          unoptimized
          className="sm:w-20 sm:h-20"
        />

        {/* Item Details */}
        <div className="flex-1 px-4">
          <h3 className="text-xs md:text-lg font-medium">{item.name}</h3>
          <p className="text-xs sm:text-base text-gray-500">
            ${(item.price * item.quantity).toFixed(2)} 
          </p>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <button
           onClick={() => updateQuantity(item.id, -1)}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, 1)}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            +
          </button>
        </div>

        {/* Remove Button */}
        <button
          onClick={() => removeItem(item.id)}
          className="text-red-500 sm:size-5 hover:text-red-700 ml-4"
        >
          <FaTrashAlt size={16} />
        </button>
      </div>
    ))}
          <div className="flex flex-col items-center">
      <Link href="/shop">
        <button className="bg-indigo-500 hover:bg-indigo-800 p-4 text-white">
          Continue Shopping
        </button>
      </Link>
    </div>
  </>
      )}
    

</div>
  );
};

export default CartPage;













 
