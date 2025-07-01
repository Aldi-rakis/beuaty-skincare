import React from 'react'
import Facialwash from '../assets/image/facialwash-detail.png'
import { motion } from 'framer-motion'

const DetailFacialWash = () => {
  return (
   <>
 
 <section>
  <div className="pt-20 h-screen flex flex-col md:flex-row px-6 sm:px-10 md:px-20  bg-[#FDF9F2] justify-center gap-10 items-center">
    
    {/* Gambar */}
    <motion.div
     initial={{ opacity: 0, x: -50 }}
     whileInView={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.5 }}
     className="w-full md:w-1/2">
      <img src={Facialwash} alt="Facial Wash" className="w-full max-w-md mx-auto" />
    </motion.div>

    {/* Konten Teks */}
    <div className="w-full md:w-1/2 flex font-nunito flex-col gap-5 px-2">
      <motion.h1
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#FE78B3] drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
        Facial Wash
      </motion.h1>

      <motion.p
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5 }}
       className="text-[#000] text-base sm:text-lg md:text-xl">
        Facial wash untuk perawatan kulit sehat yang membersihkan dengan lembut + melembapkan sambil mencerahkan & meratakan tone.
      </motion.p>

      <motion.p
       initial={{ opacity: 0, x: 30 }}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5 }}
       className="text-2xl sm:text-3xl font-bold text-[#FE78B3] drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
        Ingredient
      </motion.p>

      <motion.p 
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      
      className="text-[#000] text-sm sm:text-base md:text-xl">
        Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sodium Chloride, Glycerin, Cocamide DEA, DMDM Hydantoin,
        Niacinamide, Sodium PCA, Glycyrrhiza Glabra (Licorice) Root Extract, Panthenol, Polyquaternium-7,
        Tetrasodium EDTA, Coconut Fatty Acid Diethanolamide, Propylene Glycol, CI 14720, Lactic Acid,
        C12-18 Fatty Acids Methyl Esters, CI 42090, Sodium Hydroxide.
      </motion.p>
    </div>
  </div>
</section>


     <section className="bg-[#FDF9F2] px-6 pb-12 font-nunito">
         <h2 className="mb-4 text-2xl md:text-3xl font-bold text-center text-gray-900">
            Product Highlights
          </h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Text Area */}
        <div className="flex-1 space-y-6">
         
          <motion.p
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
           
           className="text-gray-700 leading-relaxed">
            Sensasi Yang Kamu Rasakan Seperti Membilas Hari Yang Panjang — Segar, Ringan, Dan Menenangkan.
            Kulit Terasa Bersih, Halus, Dan Tetap Lembap Tanpa Rasa Kering Atau Tertarik
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            {/* Glow Benefits */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Glow-Boosting Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Brightening</li>
                <li>Hydration</li>
                <li>Soothing</li>
              </ul>
            </div>

            {/* Texture */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Texture:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Gel</li>
                <li>Ringan Dan Lembut</li>
                <li>Tidak Terlalu Berbusa</li>
                <li>Segar Dikulit</li>
              </ul>
            </div>
          </div>

          <button className="bg-[#FECFCF] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#fcbaba] transition">
            Coba Sekarang
          </button>
        </div>

        {/* Image Area */}
        <div className="flex-1 relative">
          <div className="relative w-full max-w-sm mx-auto">
            {/* Background color blocks */}
            <div className="absolute top-4 left-4 w-full h-full bg-pink-200 rounded-lg -z-10"></div>
            <div className="absolute top-8 left-8 w-full h-full bg-pink-300 rounded-lg -z-20"></div>

            <img
              src={Facialwash}
              alt="Produk Facial Wash"
              className="relative z-10 w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default DetailFacialWash
