// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import logo from "../assets/image/logo-noor.png";

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
          <nav className="hidden md:flex gap-14 items-center text-sm font-medium text-[#4A108B]">
            <Link to="/" className={`hover:text-blue-400 ${currentPath === "/" ? "text-blue-400 " : ""}`}>Home</Link>
            <Link to="/tentang" className={`hover:text-blue-400 ${currentPath === "/tentang" ? "text-[#4A108B] " : ""}`}>Detail</Link>
          <Link to="/tentang" className={`hover:text-blue-400 ${currentPath === "/tentang" ? "text-[#4A108B] " : ""}`}>Resseler</Link>
          </nav>

        </div>

       

        <div className="w-1/3 justify-center hidden md:flex">
          <img className="w-20" src={logo} alt="" />
        </div>

         <div className="w-1/3 text-[#4A108B] gap-4 hidden md:flex text-center justify-end  text-md md:text-md">
        
           <p className="font-nunito">Contact</p>
           <p className="font-nunito">Order</p>


        </div>

      </div>

      {menuOpen && (
        <div
          className={`md:hidden bg-white px-4 pb-4 text-black transform transition-all duration-300 ease-in-out origin-top ${
            menuOpen ? "scale-y-100" : "scale-y-0 h-0 overflow-hidden"
          }
          ${closing ? 'translate-y-[-10px] opacity-0' : ''}`
          
        } 
          onClick={handleClickOutside}
        >          <Link to="/" className="block py-2 border-b border-gray-600 hover:bg-gray-100">Beranda</Link>
          <Link to="/tentang" className="block py-2 border-b border-gray-600 hover:bg-gray-100">Tentang Kami</Link>
          <Link to="/layanan" className="block py-2 border-b border-gray-600 hover:bg-gray-100">Layanan</Link>
          <a href="https://desaarmadab3.com/khs/" target="_blank" rel="noopener noreferrer" className=" py-2 flex items-center gap-2 hover:bg-gray-100">
            Other Site <span><img className="w-4" src={externalLinkblack} alt="" /></span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
