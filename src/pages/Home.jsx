import React, { useState } from 'react';
import produk from '../assets/product.png';
import { motion, AnimatePresence } from 'framer-motion';

import '../App.css';
import { Link } from 'react-router-dom';

import facialwash1 from '../assets/image/product/facialwash-1.png';
import daycream1 from '../assets/image/product/daycream-1.png';
import nightcream1 from '../assets/image/product/nightcream-1.png';

import facialwash2 from '../assets/image/product/facialwash-2.png';
import daycream2 from '../assets/image/product/daycream-2.png';
import nightcream2 from '../assets/image/product/nightcream-2.png';

import facialwash3 from '../assets/image/product/facialwash-3.png';
import daycream3 from '../assets/image/product/daycream-3.png';
import nightcream3 from '../assets/image/product/nightcream-3.png';




const Home = () => {
  const [activeProduct, setActiveProduct] = useState("facial-wash");

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15, // jeda antar anak
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const products = {
    "facial-wash": {
      title: "Facial Wash",
      slug: "facialwash",
      slogan: "Untuk Kulit Bersih, Lembut, Dan Cerah",
      description:
        "Acial Wash Untuk Perawatan Kulit Sehat Yang Membersihkan Dengan Lembut Serta Melembapkan Sambil Mencerahkan & Meratakan Tone.",
      image: facialwash1,
      icon: facialwash2,
      bgColor: "bg-[#fdd6e5]", // pink muda
      textColor: "text-[#660f81]",
      button: {
        border: "border-[#660f81]",
        text: "text-[#660f81]",
        hover: "hover:bg-[#660f81] hover:text-white",
        bgColor: "bg-[#660f81]",
      },
    },
    "day-cream": {
      title: "Day Cream",
      slug: "daycream",
      slogan: "Untuk Melindungi & Mencerahkan Seharian",
      description:
        "Noor Beauty Day Cream Menjaga Kulit Tetap Sehat, Cerah, Dan Terlindungi Dari Sinar Matahari Serta Polusi. Cocok Untuk Perawatan Harian Agar Wajah Tampak Segar Dan Bercahaya.",
      image: daycream1,
      icon: daycream2,
      bgColor: "bg-[#fff4db]", // krem
      textColor: "text-[#e1a400]",
      button: {
        border: "border-[#e1a400]",
        text: "text-[#e1a400]",
        hover: "hover:bg-[#e1a400] hover:text-white",
        bgColor: "bg-[#e1a400]",
      },
    },
    "night-cream": {
      title: "Night Cream",
      slug: "nightcream",
      slogan: "Untuk Menutrisi Kulit Saat Kamu Tidur",
      description:
        "Noor Beauty Night Cream Membantu Menjaga Kelembapan Kulit Saat Tidur, Sambil Menutrisi Dan Memperbaiki Kulit Sepanjang Malam. Bangun Dengan Kulit Yang Terasa Lembut, Segar, Dan Lebih Sehat.",
      image: nightcream1,
      icon: nightcream2,
      bgColor: "bg-[#fefaf2]",
      textColor: "text-[#e1a400]",
      button: {
        border: "border-[#e1a400]",
        text: "text-[#e1a400]",
        hover: "hover:bg-[#e1a400] hover:text-white",
        bgColor: "bg-[#e1a400]",
      },
    },
  };


  const productList = [
    {
      title: "Facial Wash",
      description: "Membersihkan Tanpa Bikin Kulit Kering",
      image: facialwash3,
    },
    {
      title: "Day Cream",
      description: "Melindungi & Mencerahkan Seharian",
      image: daycream3,
    },
    {
      title: "Night Cream",
      description: "Nutrisi Intensif Saat Kamu Tidur",
      image: nightcream3,
    },
  ];

  const data = products[activeProduct];

  return (
    <>
      <section>

        <div className=" py-20 flex flex-col md:flex-row px-10 md:px-30 h-screen bg-gradient-to-b from-[#fffefd] to-[#fff4db] justify-center gap-10 lg:flex lg:items-center lg:justify-center">
          <div className="lg:w-1/2 space-y-6">
            <motion.p

              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}

              className="text-xs text-blue-900 font-bold uppercase font-nunito">Featured</motion.p>
            <motion.h1

              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}

              className="relative text-4xl md:text-7xl font-nunito text-transparent stroke-text leading-tight">
              <span className='absolute -left-6'>“</span> Glow Like Never<br className="" />
              Before”
            </motion.h1>
            <p className="text-gray-700 text-base">
              Discover skincare crafted with love and nature — for luminous, healthy, and confident skin
            </p>
            <div className="flex items-center gap-6">
             <button className="relative overflow-hidden bg-pink-200 text-sm text-[#8d0c48] py-2 px-4 rounded group  ">
              <span className="relative z-10 transition duration-300 group-hover:text-white">
                Read more
              </span>
              <span className="absolute left-0 top-0 w-0 h-full bg-red-400 transition-all duration-500 ease-in-out group-hover:w-full z-0" />
            </button>

              <div className="text-lg flex gap-4">
                <span>←</span>
                <span>→</span>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
            <img src={produk} alt="Produk" className="w-[300px] md:w-[400px] rounded-xl shadow-lg" />
          </motion.div>
        </div>
      </section>


      <section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}

          className="flex flex-col md:flex-row h-[80vh]">
          {/* Sidebar Kiri */}
          <motion.div
            className="bg-[#f285b4] justify-center w-full md:w-1/3 py-2 px-4 md:pl-10 flex flex-row md:flex-col gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {Object.keys(products).map((key) => (
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: key * 2, ease: 'easeOut' }}

                key={key}
                onClick={() => setActiveProduct(key)}

                className="flex flex-col justify-center items-center w-max p-2 rounded-full flex-shrink-0"
              >
                <div className="font-nunito flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
                  <img
                    src={products[key].icon}
                    alt={products[key].title}
                    className={`w-20 h-20 md:w-28 md:h-28 object-contain rounded-full border-2 px-2 border-amber-300
            transition duration-300 ease-in-out hover:scale-90
            ${activeProduct === key ? "bg-pink-300 glow-pulse" : ""}
          `}
                  />
                  <p className="text-sm mt-1 text-white">{products[key].title}</p>
                </div>
              </motion.button>
            ))}
          </motion.div>


          {/* Konten Kanan */}
          <div className={`w-full md:w-2/3 relative flex flex-col md:flex-row items-center justify-center px-6 md:px-30 py-10
            ${data.bgColor} transition-all duration-500 ease-in-out`}> {/* Added transition here */}
            {/* Gambar */}
            <motion.img
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, fade: 'easeIn' }}

              src={data.image}
              alt={data.title}
              className="w-40 md:w-60 md:absolute md:-left-24 mb-6 md:mb-0 rounded-md object-contain
              transition-all duration-500 ease-in-out transform scale-100 opacity-100" // Added transition here
            />

            {/* Deskripsi */}
            <div className="font-nunito w-full md:w-full flex flex-col gap-8 md:pl-40 justify-center items-center md:items-start text-center md:text-left
              transition-all duration-500 ease-in-out"> {/* Added transition here */}
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, fade: 'easeIn' }}

                className={`italic font-AnsteryScript text-2xl md:text-5xl transition-all duration-500 ease-in-out transform scale-100 opacity-100" ${data.textColor}`}>{data.slogan}</motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, fade: 'easeOut' }}
                className={`text-4xl md:text-7xl font-bold transition-all duration-500 ease-in-out transform scale-100 opacity-100" ${data.textColor}`}>{data.title}</motion.h1>
              <motion.p

                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, fade: 'easeIn' }}

                className={`text-base md:text-xl leading-relaxed ${data.textColor} max-w-xl`}>{data.description}</motion.p>
              <Link to={`/${data.slug}`} >
                <button
                  className={`relative overflow-hidden border px-5 py-2 rounded-full font-semibold z-10 group
                ${data.button.border} ${data.button.text} 
                `}
                >
                  <span className="relative z-20 transition duration-300 group-hover:text-white">See Detail</span>
                  <span
                    className={`absolute left-0 top-0 h-full w-0 ${data.button.bgColor} z-10 group-hover:w-full transition-all duration-500 ease-in-out1`}
                  />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>


      <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-[#f7f5f2] to-[#F3EBDE]">
        <h2 className="font-nunito font-extrabold text-center text-3xl md:text-4xl text-purple-800 mb-12">
          Your Glow Starts Here
        </h2>

        <div className="font-nunito grid grid-cols-1 md:grid-cols-3 gap-8">
          {productList.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center rounded-lg p-6   transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-48 h-auto mb-4 rounded-md transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-xl font-bold text-purple-800">{product.title}</h3>
              <p className="text-sm text-gray-700 mt-2 mb-4">{product.description}</p>
              <a
                href="https://wa.me/6282295616146?text=Halo%20kak%2C%20saya%20tertarik%20dengan%20produknya.%20Boleh%20dijelaskan%20lebih%20lanjut%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="relative overflow-hidden border-2 border-purple-800 text-purple-800 px-5 py-2 rounded-full group">
                  <span className="relative z-10 transition duration-300 group-hover:text-white">
                    Coba Sekarang
                  </span>
                  <span className="absolute left-0 top-0 w-0 h-full bg-purple-800 transition-all duration-500 ease-in-out group-hover:w-full z-0" />
                </button>
              </a>

            </div>
          ))}

        </div>
      </section>


    </>
  );
};

export default Home;
