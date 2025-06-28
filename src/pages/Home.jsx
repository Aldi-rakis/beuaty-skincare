import React, { useState } from 'react';
import produk from '../assets/product.png';

import '../App.css';

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



  const products = {
    "facial-wash": {
      title: "Facial Wash",
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
      },
    },
    "day-cream": {
      title: "Day Cream",
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
      },
    },
    "night-cream": {
      title: "Night Cream",
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

        <div className=" py-20 flex flex-col md:flex-row px-10 md:px-30 h-screen bg-[#f2efef] justify-center gap-10 lg:flex lg:items-center lg:justify-center">
          <div className="lg:w-1/2 space-y-6">
            <p className="text-xs text-blue-900 font-bold uppercase font-nunito">Featured</p>
            <h1 className="relative text-4xl md:text-7xl font-nunito text-transparent stroke-text leading-tight">
              <span className='absolute -left-6'>“</span> Glow Like Never<br className="" />
              Before”
            </h1>
            <p className="text-gray-700 text-base">
              Discover skincare crafted with love and nature — for luminous, healthy, and confident skin
            </p>
            <div className="flex items-center gap-6">
              <button className="bg-pink-200 text-sm text-red-700 py-2 px-4 rounded">
                Read more
              </button>
              <div className="text-lg flex gap-4">
                <span>←</span>
                <span>→</span>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
            <img src={produk} alt="Produk" className="w-[300px] md:w-[400px] rounded-xl shadow-lg" />
          </div>
        </div>
      </section>


      <section>
        <div className="flex flex-col  md:flex-row h-[80vh]">
          {/* Sidebar Kiri */}
          <div className="bg-[#f285b4] justify-center w-full md:w-1/3 py-2 px-4 md:pl-10 flex flex-row md:flex-col gap-4 md:gap-6">
            {Object.keys(products).map((key) => (
              <button
                key={key}
                onClick={() => setActiveProduct(key)}
                className="flex flex-col justify-center items-center w-max p-2 rounded-full flex-shrink-0"
              >
                <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
                  <img
                    src={products[key].icon}
                    alt={products[key].title}
                    className={`w-20 h-20 md:w-28 md:h-28 object-contain rounded-full border-2 px-2 border-amber-300 
            transition duration-300 ease-in-out hover:scale-90
            ${activeProduct === key ? " bg-pink-300 glow-pulse" : ""}
          `}
                  />
                  <p className="text-sm mt-1 text-white">{products[key].title}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Konten Kanan */}
          <div className={`w-full md:w-2/3 relative flex flex-col md:flex-row items-center justify-center px-6 md:px-30 py-10 ${data.bgColor}`}>
            {/* Gambar */}
            <img
              src={data.image}
              alt={data.title}
              className="w-40 md:w-60 md:absolute md:-left-24 mb-6 md:mb-0 rounded-md object-contain"
            />

            {/* Deskripsi */}
            <div className="w-full md:w-full flex flex-col gap-8 md:pl-40 justify-center items-center md:items-start text-center md:text-left">
              <p className={`italic font-AnsteryScript text-2xl md:text-5xl ${data.textColor}`}>{data.slogan}</p>
              <h2 className={`text-4xl md:text-7xl font-bold ${data.textColor}`}>{data.title}</h2>
              <p className="text-base md:text-xl leading-relaxed text-black max-w-xl">{data.description}</p>
              <button
                className={`border px-5 py-2 rounded-full font-semibold transition ${data.button.border} ${data.button.text} ${data.button.hover}`}
              >
                See Detail
              </button>
            </div>
          </div>

        </div>

      </section>


      <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-[#f7f5f2] to-[#F3EBDE]">
  <h2 className="font-nunito font-extrabold text-center text-3xl md:text-4xl text-purple-800 mb-12">
    Your Glow Starts Here
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {productList.map((product, index) => (
      <div
        key={index}
        className="flex flex-col items-center text-center rounded-lg p-6"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-48 h-auto mb-4 rounded-md"
        />
        <h3 className="text-xl font-bold text-purple-800">{product.title}</h3>
        <p className="text-sm text-gray-700 mt-2 mb-4">{product.description}</p>
        <button className="border-2 border-purple-800 text-purple-800 px-5 py-2 rounded-full hover:bg-purple-800 hover:text-white transition">
          Coba Sekarang
        </button>
      </div>
    ))}
  </div>
</section>


    </>
  );
};

export default Home;
