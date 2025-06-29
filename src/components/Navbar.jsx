// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import logo from "../assets/image/logo-noor.png";
import externalLinkblack from "../assets/image/external-link-black.png";

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [closing, setClosing] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // klik apapun set menu open jadi false
 
const handleClickOutside = () => {
  setClosing(true); // tambahkan class animasi keluar

  setTimeout(() => {
    setMenuOpen(false);
    setClosing(false); // reset class
  }, 300); // delay sesuai durasi animasi
};


  return (
    <header className='fixed font-nunito top-0 w-full z-50 transition-all duration-300 bg-[#EEE6D9] shadow-md'>
      
      <div className=" mx-10 lg:mx-32   flex justify-end md:justify-c items-center text-center py-2 ">
        

        <div className="w-full md:w-1/3 justify-end md:justify-start flex items-start" >
          <div className="md:hidden ">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl focus:outline-none"
            >
              ☰
            </button>
          </div>
          <nav className="hidden  md:flex gap-14 items-center text-lg font-medium text-[#4A108B]">
            <Link to="/" className={`hover:text-blue-400 ${currentPath === "/" ? "text-blue-400 " : ""}`}>Home</Link>
            <Link to="/facialwash" className={`hover:text-blue-400 ${currentPath === "/tentang" ? "text-[#4A108B] " : ""}`}>Detail</Link>
          <Link to="/resseler" className={`hover:text-blue-400 ${currentPath === "/tentang" ? "text-[#4A108B] " : ""}`}>Resseler</Link>
          </nav>

        </div>

       

        <div className="w-1/3 justify-center hidden md:flex">
          <img className="w-20" src={logo} alt="" />
        </div>

         <div className="w-1/3 text-[#4A108B] gap-4 hidden md:flex text-center justify-end  text-md md:text-md">
        
<p className="py-1 font-nunito text-purple-800 relative w-max cursor-pointer transition duration-300 ease-in-out hover:text-[#4A108B] hover:scale-105">
  Contact
  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#4A108B] transition-all duration-500 ease-in-out hover:w-full"></span>
</p>
<p className="relative px-2 py-1 border border-[#4A108B] rounded font-nunito text-[#4A108B] overflow-hidden group w-max cursor-pointer">
  <span className="relative z-10 transition duration-300 group-hover:text-white">
    Order
  </span>
  <span className="absolute left-0 top-0 w-0 h-full bg-[#4A108B] transition-all duration-500 ease-in-out group-hover:w-full z-0" />
</p>

        </div>

      </div>

      {menuOpen && (
        <div
          className={`md:hidden bg-[#EEE6D9] px-4 pb-4 text-black transform transition-all duration-300 ease-in-out origin-top ${
            menuOpen ? "scale-y-100" : "scale-y-0 h-0 overflow-hidden"
          }
          ${closing ? 'translate-y-[-10px] opacity-0' : ''}`
          
        } 
          onClick={handleClickOutside}
        >          <Link to="/" className="block py-2 border-b border-gray-600 hover:bg-gray-100">Beranda</Link>
          <Link to="/facialwash" className="block py-2 border-b border-gray-600 hover:bg-gray-100">Detail</Link>
          <Link to="/resseler" className="block py-2 border-b border-gray-600 hover:bg-gray-100">Resseler</Link>
          
        </div>
      )}
    </header>
  );
};

export default Navbar;
