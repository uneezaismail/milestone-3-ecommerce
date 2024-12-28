"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/cards/ProductCard";

interface Product {
    id: number;
    image: string;
    name: string;
    price: number;
    description: string;
  }


const FeaturedCars = () => {
      
    const [products, setProducts] = useState<Product[]>([]);
    
    useEffect(() => {
      async function fetchProducts() {
        try {
          const res = await fetch('/api/products'); 
          console.log(res)
          if (!res.ok) {
              throw new Error("Failed to fetch product data")
          }

          const data= await res.json()
          console.log(data)
          setProducts(data);
      } catch (error) {
          console.error("Failed to fetch: " + error)
      }
      }
      fetchProducts();
    }, []);
    
  return (
    <section className="py-28 w-full  flex flex-col items-center gap-y-10">
      <div className="gap-y-4  flex flex-col items-center">
      <p className='text-gray-600'>checkout the Featured Cars</p>
        <h4 className="text-4xl text-gray-700">Featured Cars</h4>
        <hr className="h-[3px] w-20 bg-blue-600 mt-6" />
      </div>
      <div className="grid max-w-7xl grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
             {products.map((item,i) => (
         <Link key={i} href={`/ProductDetail/${item.id}`}>         
             <ProductCard product={item} />
           </Link>
         
        ))}
      </div>
    </section>
  );
};

export default FeaturedCars;
