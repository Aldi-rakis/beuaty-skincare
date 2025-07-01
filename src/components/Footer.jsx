// Footer.jsx
import React from 'react';
import logo from '../assets/image/logo-noor.png';
import bunga from '../assets/image/flower-footer.png';
import love from '../assets/image/footer/heart.png';
import wa from '../assets/image/footer/footer-wa.png';
import ig from '../assets/image/footer/ig.png';
import tiktok from '../assets/image/footer/tiktok.png';
import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#fdfbf8] to-[#fcf8f0] pt-12 relative overflow-hidden" style={{ backgroundColor: '#fcf8f0' }}>
            {/* Background elements */}



            <div className="font-nunito max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex text-[#B69544] flex-col md:flex-row justify-between items-start md:items-center text-brown-800 relative z-10">
                {/* Product Section */}
                <div className="mb-8 md:mb-0 md:w-1/3 justify-center flex flex-col">

                    <h3 className="text-2xl md:text-3xl font-semibold mb-6">Product</h3>

                    <div className="space-y-4 md:space-y-10 text-start">
                        <div className="flex gap-2 md:justify-start text-lg md:text-xl items-center group">
                            <img src={love} alt="heart-icon" className="w-6 h-6" />
                            <Link
                                to="/facialwash"
                                className="transition group-hover:underline group-hover:scale-105 group-hover:[#B69544] cursor-pointer"
                            >
                                Facial Wash
                            </Link>
                        </div>

                        <div className="flex gap-2 md:justify-start text-lg md:text-xl items-center group">
                            <img src={love} alt="heart-icon" className="w-6 h-6" />
                            <Link
                                to="/daycream"
                                className="transition group-hover:underline group-hover:scale-105 group-hover:[#B69544] cursor-pointer"
                            >
                                Day Cream
                            </Link>
                        </div>

                        <div className="flex gap-2 md:justify-start text-lg md:text-xl items-center group">
                            <img src={love} alt="heart-icon" className="w-6 h-6" />
                            <Link
                                to="/nightcream"
                                className="transition group-hover:underline group-hover:scale-105 group-hover:text-[#B69544] cursor-pointer"
                            >
                                Night Cream
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Noor Beauty Care Section (Centered) */}
                <div className="mb-8 md:mb-0 w-full md:w-1/3 flex flex-col justify-start md:justify-center items-start md:items-center ">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4 " >Noor Beauty Care</h3>
                    <div className="mb-6">
                        {/* Placeholder for Noor Beauty Care Logo */}
                        <img src={logo} alt="Noor Beauty Care Logo" className="w-32 md:w-48 mx-auto" />
                    </div>
                    <a
                        href="https://wa.me/6282295616146?text=Halo%20Kak%2C%20saya%20tertarik%20dengan%20produknya%20Noor%20Beauty%20Care.%20Boleh%20dijelaskan%20lebih%20lanjut%3F"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            className="relative overflow-hidden px-6 py-3 border rounded-full 
               text-[#E59400] border-[#E59400] group
               transition-all duration-500 ease-in-out
               hover:scale-105 hover:opacity-90"
                        >
                            <span className="relative z-10">Order Now Our Product</span>
                            <span
                                className="absolute inset-0 bg-orange-50 w-0 group-hover:w-full 
                 transition-all duration-500 ease-in-out z-0"
                            ></span>
                        </button>
                    </a>


                </div>

                {/* Contact Section */}

                <div className="w-full md:w-1/3 flex justify-end md:justify-end flex-col items-start md:items-center  "> {/* Menambahkan kembali text-center/left seperti sebelumnya, dan menghilangkan justify-end/items-end dari parent */}


                    <div className="space-y-4 md:ml-60">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-semibold mb-6 " >contact</h3>
                        </div>
                        {/* Kontak Admin */}
                        {[
                            { name: "Admin - 1", phone: "+62 822-4930-3425" },
                            { name: "Admin - 2", phone: "+62 822-9561-6146" },
                            { name: "Admin - 3", phone: "+62 811-2822-266" },
                        ].map((admin, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-start text-lg md:text-sm group transition hover:scale-[1.02]"
                            >
                                <img className="mr-2 w-6" src={wa} alt="WA Icon" />
                                <div className="flex flex-col text-md  group-hover:text-[#E59400] transition">
                                    <span className="font-semibold group-hover:underline">{admin.name}</span>
                                    <span className="group-hover:text-[#E59400]">{admin.phone}</span>
                                </div>
                            </div>
                        ))}

                        {/* Sosmed */}
                        <div className="flex gap-4 items-center justify-start text-lg md:text-sm mt-6">
                            <div className="mr-6 flex items-center gap-2 group transition hover:scale-[1.05]">
                                <img src={ig} alt="Instagram icon" className="w-6" />
                                <a
                                    href="https://instagram.com/noorbeautycare.id"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#E59400] transition font-medium"
                                >
                                    @noorbeautycare.id
                                </a>
                            </div>
                            <div className=" flex items-center gap-2 group transition hover:scale-[1.05]">
                                <img src={tiktok} alt="Tiktok icon" className="w-6" />
                                <a
                                    href="https://tiktok.com/@noorbeautycare"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#E59400] transition font-medium"
                                >
                                    noorbeautycare
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* Copyright Section */}
            <div className="text-center items-center flex justify-center bg-[#F4E9D8] mt-12 py-4 border-t border-orange-200 text-brown-700" style={{ borderColor: '#B69544', color: '#B69544' }}>
                <p>  &copy; 2025 All Rights Reserved - Noor Beauty Care</p>
            </div>
        </footer>



    );
};

export default Footer;