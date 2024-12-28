import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LatestCar = () => {
  
  const carId = 6; 

  return (
    <section className='py-28 bg-[#F8F9Fb] flex flex-col items-center gap-y-10'>
        <div className='gap-y-4 flex flex-col items-center'>
            <p className='text-gray-600'>Explore the latest additions</p>
            <h4 className='text-2xl md:text-4xl text-gray-700'>Newest Cars in Our Collection</h4>
            <hr className='h-[2px] w-20 bg-blue-600 mt-3 md:mt-6'/>        
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
           
            <div className="items-center justify-center">
                <Image
                  src={"/latest-car-1.png"}
                  alt="A sleek BMW car"
                  width={400}
                  height={400}
                  className="object-contain lg:w-[900px] lg:h-[400px] md:max-w-2xl"
                />
            </div>

            <div className='w-full p-4 md:max-w-md space-y-8'>
                <h3 className='text-3xl text-gray-800 font-medium'>BMW Series 3 Wagon</h3>
                <p className='text-gray-500 leading-8'>
                    Experience the luxury and performance of the BMW Series 3 Wagon. Combining elegant design, advanced features, and unparalleled comfort, this car is a masterpiece crafted for modern driving.
                </p>
                <p className='text-gray-500 leading-8'>From cutting-edge technology to its sleek appearance, the Series 3 Wagon is built to turn heads and deliver an unforgettable ride every time.</p>
                
                <Link href={`/ProductDetail/${carId}`}> 
                  <button className='text-white mt-6 rounded-md px-8 py-4 bg-indigo-500  hover:bg-indigo-700'>
                    View Details
                  </button> 
                </Link>
            </div>
        </div>
    </section>
  )
}

export default LatestCar
