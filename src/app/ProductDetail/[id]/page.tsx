'use client';
import Image from 'next/image';
import { useState, useEffect, use } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  model: string;
  engine: string;
  transmission: string;
  fuelEconomy: string;
  interior: string;
  safetyFeatures: string;
  performance: string;
  dimensions: string;
}

function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const [product, setProduct] = useState<Product | null>(null);
  

    // fetch dynamic products 
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`/api/products/${id}`);
          if (!response.ok) throw new Error('Failed to fetch product');
          setProduct(await response.json());
        } catch (error) {
          console.error("Failed to fetch product: " + error)
        }
      };
      fetchProduct();
    }, [id]);
  

//    post product to cart 
    const addToCart = async () => {
      if (!product) return;
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: product.id,
          title: product.name,
          image:product.image,
          price: product.price,
        }),
      });
  
      if (response.ok) {
        alert(`${product.name} added to cart!`);
      } else {
        alert('Failed to add product to cart.');
      }
    };
  
    if (!product) return <div></div>;

  return (
    <div className="max-w-7xl  mx-auto px-2 my-20 md:my-28">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image and Info */}
        <div className="w-full sm:w-[90%] bg-gray-100 p-6  md:w-2/3 flex items-center">
        <Image 
        src={product.image} 
        alt={product.name} 
        width={1920} // Matches the full width (w-full)
        height={1080} // Adjusted for aspect ratio, update to fit actual image dimensions
        className="object-cover rounded-md" 
      />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-2/3 flex flex-col gap-2 sm:gap-4">
          <h1 className="text-2xl sm:text-3xl font-semibold">{product.name}</h1>
          <p className="text-xl text-gray-600">${product.price}</p>
          <p className="mt-2 sm:mt-4 text-gray-700">{product.description}</p>

          {/* Specifications */}
          <div className="mt-2 sm:mt-6">
            <h2 className="font-semibold text-lg text-gray-800">Specifications</h2>
            <ul className="list-none mt-4 space-y-2">
              <li><strong>Model:</strong> {product.model}</li>
              <li><strong>Engine:</strong> {product.engine}</li>
              <li><strong>Transmission:</strong> {product.transmission}</li>
              <li><strong>Fuel Economy:</strong> {product.fuelEconomy}</li>
              <li><strong>Interior:</strong> {product.interior}</li>
              <li><strong>Safety Features:</strong> {product.safetyFeatures}</li>
              <li><strong>Performance:</strong> {product.performance}</li>
              <li><strong>Dimensions:</strong> {product.dimensions}</li>
            </ul>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={addToCart}
            className="mt-6 px-6 py-3 bg-[#272e6c] hover:bg-indigo-950 text-white rounded-md shadow-md  transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
