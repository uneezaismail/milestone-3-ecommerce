'use client';
import Image from 'next/image';
import React from 'react';

function AboutPage() {
  return (
    <div className="bg-gray-50 py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">About Us</h1>
        <p className="mt-4 text-xl text-gray-600">Your trusted partner in premium car sales</p>

        <div className="mt-12 grid gap-16 sm:grid-cols-1 lg:grid-cols-2">
          {/* Mission and Vision */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
            <p className="text-gray-700">
              At <span className='text-indigo-900 font-medium'>CarVilla</span> , we strive to offer the best cars at unbeatable prices. Our mission is to provide a wide range of vehicles, ensuring quality, performance, and style, while making the car-buying experience as seamless as possible.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
            <p className="text-gray-700">
              We aim to redefine the car buying experience, focusing on customer satisfaction and providing an easy, transparent, and personalized shopping journey with the latest technology and best deals.
            </p>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our team is dedicated to helping you find the perfect vehicle. We are experts in the automotive industry, providing top-tier customer service to ensure your satisfaction.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Image src="/client-1.png" alt="John Doe" width={128} height={128} className=" rounded-full object-cover shadow-lg" />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">John Doe</h3>
                <p className="text-gray-600">Sales Manager</p>
              </div>

              <div className="flex flex-col items-center">
                <Image src="/client-2.png" alt="Jane Smith" width={128} height={128} className=" rounded-full object-cover shadow-lg" />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Jane Smith</h3>
                <p className="text-gray-600">Customer Support Lead</p>
              </div>

              <div className="flex flex-col items-center">
                <Image src="/client-3.png" alt="Tom Williams" width={128} height={128} className=" rounded-full object-cover shadow-lg" />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Tom Williams</h3>
                <p className="text-gray-600">Marketing Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
