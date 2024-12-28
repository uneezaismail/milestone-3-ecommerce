"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


   
 const menuItems = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/Allproduct" },
    { name: "About", link: "/about" },
  ];

  const icons = [
    { icon: <AiOutlineShoppingCart size={24} />, link: "/cart" },
    { icon: <FaRegHeart size={24} />, link: "/" }
  ]

  const backgroundColor =
  pathname.startsWith('/ProductDetail/')  || pathname === '/cart' || pathname === '/shop' || pathname === '/about' || pathname === '/Allproduct' || isScrolled ? 'bg-black' : 'bg-transparent';

 
  return (
    <header
      className={`fixed top-0 md:p-2 w-full z-50 transition-colors duration-300 ${backgroundColor}
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        
          <div className="flex items-center gap-2">
            <button
        className="md:hidden text-white"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <AiOutlineMenu size={28} />
      </button>
      <span className="text-white text-2xl font-bold">CARVILLA</span>
          </div>

        
          <nav className="hidden md:flex items-center space-x-10">
            {menuItems.map((item,index)=>(
                <Link key={index} href={item.link} className="text-white font-medium text-lg  hover:border-b-indigo-500 hover:border-b">{item.name}</Link>        
        ))}
          </nav>

          <ul className="flex items-center gap-x-4 sm:gap-x-6">
        {icons.map((item, index) => (
          <Link key={index} href={item.link}>
            <li className="p-1 font-poppins hover:bg-white rounded-full text-white cursor-pointer hover:text-blue-800">{item.icon}</li>
          </Link>
        ))}
      </ul>
         

      {isSidebarOpen && (
        <div className="fixed transition-transform ease duration-300 top-0 left-0 h-full w-[70%] bg-white shadow-lg z-50 flex flex-col p-6">
          <button
            className="self-end mb-6"
            onClick={() => setIsSidebarOpen(false)}
          >
           <FaTimes/>
          </button>
          <ul className="flex flex-col items-start gap-y-4">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.link}>
                <li
                  className="text-lg font-medium cursor-pointer"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
        </div>
      </div>
    </header>
  );
};

export default Header;