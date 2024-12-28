import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#2a2d54] text-white py-10 md:py-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-5">
        {/* Section 1 */}
        <div>
          <h2 className="text-2xl font-semibold">CARVILLA</h2>
          <p className="text-sm mt-4 leading-relaxed text-[#cfd0e3]">
            We bring you the finest cars from around the world. Dedicated to quality and performance.
          </p>
          <p className="mt-4 text-[#d9dbf2]">name@domain.com</p>
          <p className="text-[#d9dbf2]">+1 (222) 1234567890</p>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="text-sm font-medium mb-4">ABOUT Carvilla</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about-us" className="text-sm hover:text-gray-300 text-[#cfd0e3]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-sm hover:text-gray-300 text-[#cfd0e3]">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="text-sm hover:text-gray-300 text-[#cfd0e3]">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-sm hover:text-gray-300 text-[#cfd0e3]">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-sm font-medium mb-4">TOP BRANDS</h3>
          <div className="grid font-light grid-cols-2 text-[#cfd0e3] gap-y-2">
            <Link href="/brands/bmw" className="text-sm hover:text-gray-300">
              BMW
            </Link>
            <Link href="/brands/ferrari" className="text-sm hover:text-gray-300">
              Ferrari
            </Link>
            <Link href="/brands/lamborghini" className="text-sm hover:text-gray-300">
              Lamborghini
            </Link>
            <Link href="/brands/porsche" className="text-sm hover:text-gray-300">
              Porsche
            </Link>
            <Link href="/brands/camaro" className="text-sm hover:text-gray-300">
              Camaro
            </Link>
            <Link href="/brands/land-rover" className="text-sm hover:text-gray-300">
              Land Rover
            </Link>
            <Link href="/brands/audi" className="text-sm hover:text-gray-300">
              Audi
            </Link>
            <Link href="/brands/aston-martin" className="text-sm hover:text-gray-300">
              Aston Martin
            </Link>
            <Link href="/brands/infiniti" className="text-sm hover:text-gray-300">
              Infiniti
            </Link>
            <Link href="/brands/mercedes" className="text-sm hover:text-gray-300">
              Mercedes
            </Link>
            <Link href="/brands/nissan" className="text-sm hover:text-gray-300">
              Nissan
            </Link>
            <Link href="/brands/opel" className="text-sm hover:text-gray-300">
              Opel
            </Link>
          </div>
        </div>

        {/* Section 4 */}
        <div>
          <h3 className="text-sm font-medium mb-4">NEWSLETTER</h3>
          <p className="text-sm mb-4 text-[#cfd0e3]">
            Subscribe to get the latest news, updates, and information.
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Add Email"
              className="w-full px-4 py-2 text-sm bg-[#1d224f] text-white shadow-indigo-950 shadow-lg rounded focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 relative right-16 text-white rounded-r-md hover:bg-gray-400"
            >
              ➔
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-500 text-gray-300 pt-5 text-center text-sm">
        © Copyright. Designed And Developed By Themesine.
      </div>
    </footer>
  );
};

export default Footer;
