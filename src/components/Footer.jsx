// Footer.jsx
import React from 'react';
import logo from '../assets/image/logo-noor.png';
import bunga from '../assets/image/flower-footer.png';
import love from '../assets/image/footer/heart.png';
import wa from '../assets/image/footer/footer-wa.png';
import ig from '../assets/image/footer/ig.png';
import tiktok from '../assets/image/footer/tiktok.png';
const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-purple-100 to-white py-12 relative overflow-hidden" style={{ backgroundColor: '#fcf8f0' }}>
            {/* Background elements */}



            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex text-[#B69544] flex-col md:flex-row justify-between items-start md:items-center text-brown-800 relative z-10">
                {/* Product Section */}
                <div className="mb-8 md:mb-0 md:w-1/3 justify-center flex flex-col items-center">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-6 " >Product</h3>
                    <div className="space-y-4 md:space-y-10 text-start">
                        <div className="flex gap-2  md:justify-start text-lg md:text-xl">
                            <img src={love} alt="heart-icon" className="m w-6 h-6" />
                            <p>Facial Wash</p>
                        </div>
                        <div className="flex gap-2  md:justify-start text-lg md:text-xl">
                            <img src={love} alt="heart-icon" className="m w-6 h-6" />
                            <p>Day Cream</p>
                        </div>

                        <div className="flex gap-2  md:justify-start text-lg md:text-xl">
                            <img src={love} alt="heart-icon" className="m w-6 h-6" />
                            <p>Night Cream</p>
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
                    <button className="px-6 py-3 border  rounded-full hover:bg-orange-50 transition-colors duration-300" style={{ borderColor: '#E59400', color: '#E59400' }}>
                        Order Now Our Product
                    </button>
                </div>

                {/* Contact Section */}

                <div className="w-full md:w-1/3 flex justify-start md:justify-center flex-col items-start md:items-center  "> {/* Menambahkan kembali text-center/left seperti sebelumnya, dan menghilangkan justify-end/items-end dari parent */}
                    <h3 className="text-2xl md:text-3xl font-semibold mb-6 " >contact</h3>
                    <div className="space-y-4 md:ml-40"> 
                        <div className="flex items-center justify-start md:justify-start text-lg md:text-sm">
                           <img className='mr-2 w-6' src={wa} alt="" />
                          
                            <div className="flex flex-col text-md">
                                <span>Admin - 1</span>
                                <span>+62 822-4930-3425</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-start md:justify-start text-lg md:text-sm">
                           <img className='mr-2 w-6' src={wa} alt="" />
                            <div className="flex flex-col">
                                <span>Admin - 2</span>
                                <span>+62 822-9561-6146</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-start md:justify-start text-lg md:text-sm">
                           <img className='mr-2 w-6' src={wa} alt="" />
                            <div className="flex flex-col">
                                <span>Admin - 3</span>
                                <span>+62 811-2822-266</span>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center justify-start md:justify-start text-lg md:text-sm mt-6">
                            <img src={ig} alt="Instagram icon" className="w-6" />
                            <a href="https://instagram.com/noorbeautycare.id" target="_blank" rel="noopener noreferrer" className="hover:underline">@noorbeautycare.id</a>
                            <img src={tiktok} alt="tiktok icon" className="w-6" />
                            <a href="https://tiktok.com/@noorbeautycare" target="_blank" rel="noopener noreferrer" className="hover:underline">noorbeautycare</a>
                        </div>
                    </div>
                </div>

            </div>

            {/* Copyright Section */}
            <div className="text-center mt-12 pt-8 border-t border-orange-200 text-brown-700" style={{ borderColor: '#F0EAD6', color: '#B38B6D' }}>
                &copy; 2025 All Rights Reserved - Noor Beauty Care
            </div>
        </footer>

        
        
    );
};

export default Footer;