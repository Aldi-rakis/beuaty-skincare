import React from 'react'
import bunga from '../assets/image/bunga.png';
import checkIcon from '../assets/image/checkbox.png';

import rp from '../assets/image/benefit/rp.png';
import box from '../assets/image/benefit/box.png';
import play from '../assets/image/benefit/play.png';
import chart from '../assets/image/benefit/chart.png';
import grad from '../assets/image/benefit/grad.png';
import bag from '../assets/image/benefit/bag.png';
import mitra from '../assets/image/benefit/mitra.png';
import { motion } from 'framer-motion';

import { FaCheckCircle } from 'react-icons/fa'; // Ikon checklist dari react-icons
import { view } from 'framer-motion/client';


const Contact = () => {

  const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
    viewport: { once: false },
  }),
};

  const leftFeatures = [
    "Menambah Penghasilan Halal & Berkah",
    "Membantu Sesama Lewat Produk Skincare Yang Bermanfaat",
    "Menjadi Bagian Dari Brand Yang Menjunjung Kualitas & Kejujuran",
  ];

  const rightFeatures = [
    "Margin Untung Tinggi Hingga 4 Juta/Bulan",
    "Tanpa Target, Tanpa Ribet",
    "Cocok Untuk Pemula & Ibu Rumah Tangga",
  ];


  const benefits = [
    {
      icon: rp,
      title: "Raih Profit Hingga 4 Juta/Bulan",
      description: "Semakin Rajin Jualan, Semakin Besar Untungnya! Cocok Buat Kamu Yang Mau Cuan Dari Rumah."
    },
    {
      icon: box,
      title: "Produk Premium, Pelanggan Auto Repeat Order!",
      description: "Skincare Dengan Ingredients Berkualitas Tinggi, Sudah Terbukti Banyak Dicari Dan Dicintai Konsumen."
    },
    {
      icon: play,
      title: "Konten Jualan Siap Pakai, Gak Pusing Mikir",
      description: "Desain Feed, Caption, Sampai Ide Konten Harian — Semua Disiapkan! Tinggal Posting, Langsung Closing"
    },
    {
      icon: chart,
      title: "Gratis Training & Bimbingan Langsung Dari Mentor",
      description: "Belajar Bareng Komunitas Aktif Yang Selalu Support. Kamu Akan Dibimbing Dari Nol"
    },
    {
      icon: grad,
      title: "Tanpa Target, Bisa Dropship, 100% Fleksibel!",
      description: "Cocok Banget Buat Pemula, Mahasiswa, Atau Ibu Rumah Tangga. Bisa Dikerjakan Dari Mana Saja, Tanpa Tekanan."
    },
    {
      icon: bag,
      title: "Tambah Uang Jajan Anda Tanpa Ribet!",
      description: "Gak Perlu Stok Barang, Gak Perlu Pengalaman. Cukup Modal Niat Dan HP, Kamu Udah Bisa Mulai Jualan"
    }
  ];
  return (
    <>
      <section>
        <div className='bg-[#FDF9F2] relative flex flex-col justify-center items-center min-h-screen'>

          <div className='z-[0] absolute top-10 rounded-full blur-3xl left-0 w-100 h-100 bg-gradient-to-b from-[#F3F5E2] to-[#FFDBE5]'>
          </div>

          <div className='z-[0] absolute top-10 right-0 rounded-full blur-3xl w-100 h-100 bg-gradient-to-b from-[#F3F5E2] to-[#FFDBE5]'>
          </div>

          <div className='z-20 my-4 flex flex-col justify-center items-center text-center gap-4'>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className='text-[#4A108B] font-nunito font-bold text-2xl lg:text-6xl lg:mt-12'>NOOR BEAUTY CARE </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className='text-[#4A108B] font-nunito font-bold text-xl lg:text-4xl'>RESELLER PACKAGE</motion.h2>
          </div>

          <motion.div
            className="z-20 my-4 font-nunito flex flex-col justify-center items-center text-center gap-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#4A108B] font-nunito font-bold text-xl lg:text-4xl">
              Jalan Cuan yang Berkah & Bermanfaat
            </h2>
            <h3 className="text-[#4A108B] mx-10 lg:mx-60 xl:mx-120 font-nunito font-medium text-md lg:text-2xl">
              Bersama Noor Beauty Care, kami membuka kesempatan buat kamu yang ingin mendapatkan
            </h3>
          </motion.div>

          <div className="mx-10  bg-gradient-to-b from-[#FEF6D1] to-[#FFDBE5] border-4 border-white rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              {/* Left Box Image */}
              <img src={bunga} alt="box" className="w-30 h-auto hidden md:block" />

              <ul className="font-nunito grid grid-cols-1 sm:grid-cols-2 mx-2 gap-y-5 gap-x-8">
                {[...leftFeatures, ...rightFeatures].map((text, index) => (
                  <li key={index} className="flex items-start gap-2 mx-0 ">
                    <img src={checkIcon} alt="check" className="w-5 h-5 mt-1" />
                    <p className="text-purple-800 font-semibold text-md md:text-lg">
                      {text}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Right Box Image */}
              <img src={bunga} alt="box" className="w-30 h-auto hidden md:block" />
            </div>
          </div>

        </div>

      </section>

      <section className="font-nunito px-6 sm:px-10 md:px-20 lg:px-40 py-16 bg-gradient-to-br from-[#fce8f1] to-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-purple-800 mb-12">
          Kenapa Harus Gabung?
        </h2>

        <div className="flex flex-wrap justify-center gap-y-10 gap-x-6 sm:gap-x-10">
        {benefits.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      delay: index * 0.2,
      ease: 'easeOut',
    }}
    viewport={{ once: false }}
    className="flex w-full sm:w-[45%] lg:w-[30%] gap-4 items-start"
  >
    <img
      src={item.icon}
      alt={item.title}
      className="w-8 h-8 sm:w-10 sm:h-10 mt-1"
    />
    <div>
      <h3 className="font-semibold text-md md:text-lg mb-1 text-black">
        {item.title}
      </h3>
      <p className="text-sm text-gray-700 leading-relaxed">
        {item.description}
      </p>
    </div>
  </motion.div>
))}
        </div>
      </section>



      <section className="bg-gradient-to-b from-[#fff6f8] to-white py-16 px-6 md:px-20">
     <motion.div
  className="flex flex-col-reverse md:flex-row items-center justify-between gap-10"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {/* Gambar */}
  <motion.div
    custom={0}
    variants={textVariants}
    className="w-full md:w-1/2 flex justify-center"
  >
    <motion.img
    initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
      src={mitra}
      alt="Join Reseller"
      className="rounded-3xl w-80 md:w-[350px]"
    />
  </motion.div>

  {/* Teks */}
  <motion.div
    custom={1}
    variants={textVariants}
    className="w-full md:w-1/2"
  >
    <motion.h2
      custom={1.2}
      variants={textVariants}
      className="text-2xl md:text-3xl font-bold text-purple-800 mb-4 text-center md:text-left leading-relaxed"
    >
      Daftar Sekarang & Raih Kesempatan <br />
      <span className="text-purple-800">Jadi Mitra Sukses!</span>
    </motion.h2>

    <motion.p
      custom={1.4}
      variants={textVariants}
      className="text-lg text-purple-700 font-semibold mb-6 text-center md:text-left"
    >
      Dapatkan Harga Spesial & <br /> Keuntungan Yang Besar
    </motion.p>

    <motion.ul
      custom={1.6}
      variants={textVariants}
      className="space-y-4 mb-8"
    >
      {[
        "Harga Lebih Murah",
        "Support Promosi",
        "Untung Tiap Penjualan",
      ].map((text, index) => (
        <motion.li
          key={index}
          custom={1.7 + index * 0.1}
          variants={textVariants}
          className="flex items-center gap-3 text-purple-800"
        >
          <FaCheckCircle className="text-xl text-purple-800" />
          <span className="text-md">{text}</span>
        </motion.li>
      ))}
    </motion.ul>

    <motion.div
      custom={2.1}
      variants={textVariants}
      className="text-center md:text-left"
    >
      <button className="bg-purple-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition">
        Klik Untuk Gabung Reseller
      </button>
    </motion.div>
  </motion.div>
</motion.div>
      </section>




    </>
  )
}

export default Contact
