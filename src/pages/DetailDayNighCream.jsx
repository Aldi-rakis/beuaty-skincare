import React from 'react'
import Daycream from '../assets/image/daycream-detail.png'
import Daycream2 from '../assets/image/daycream-detail2.png'
import Nightcream from '../assets/image/nightcrem-detail.png'
import Nightcream2 from '../assets/image/nightcream-detail2.png'
import { motion } from 'framer-motion'
const DetailNightCream = () => {

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };
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
            <img src={Nightcream} alt="Facial Wash" className="w-full max-w-md mx-auto" />
          </motion.div>

          {/* Konten Teks */}
          <div className="w-full md:w-1/2 flex font-nunito flex-col gap-5 px-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}

              className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#DAA854] drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
              Night Cream
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}

              className="text-[#DAA854] text-base sm:text-lg md:text-xl">
              Night cream ini diformulasikan khusus untuk menjaga kelembapan kulit selama Anda tidur. Dengan kandungan yang menutrisi, membantu memperbaiki lapisan kulit, membuatnya terasa lebih halus, lembut, dan tampak segar di pagi hari.            </motion.p>

            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}

              className="text-2xl sm:text-3xl font-bold text-[#DAA854] drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
              Ingredient
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}

              className="text-[#DAA854] text-sm sm:text-base md:text-xl">
              Niacinamide, Tranexamic Acid, Lactic Acid, Glycolic Acid, Salicylic Acid, 3-O-Ethyl Ascorbic Acid (Vitamin C), Panthenol, Allantoin, Hyaluronic Acid Complex, Hydrolyzed Collagen, Bisabolol, Tetrahydro diferuloylmethane, Tocopheryl Acetate (Vitamin E).            </motion.p>
          </div>
        </div>
      </section>


      <section className="bg-[#FDF9F2] px-6 pb-12 font-nunito">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-2xl md:text-3xl font-bold text-center text-gray-900">
          Product Highlights
        </motion.h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

          {/* Text Area */}
          <div className="flex-1 space-y-6">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}

              className="text-gray-700 leading-relaxed">
              Tekstur ringan yang cepat meresap tanpa rasa lengket. Memberikan kelembapan maksimal, menjadikan kulit terasa halus, lembut, dan nyaman sepanjang hari.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Glow Benefits */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Glow-Boosting Benefits</h3>
                <motion.ul
                  className="list-disc list-inside text-gray-700 space-y-1"
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }} // agar animasi hanya terjadi sekali saat scroll masuk
                >
                  {[
                    "Deep Hydration",
                    "Brightens & Evens Skin Tone",
                    "Soothes & Calms Skin",
                    "Overnight Skin Renewal",
                    "Antioxidant Protection",
                  ].map((text, index) => (
                    <motion.li key={index} variants={itemVariants}>
                      {text}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* Texture */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Texture:</h3>
                <motion.ul
                  className="list-disc list-inside text-gray-700 space-y-1"
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                >
                  {[
                    "Gel",
                    "Halus dan Lembut",
                    "Gampang diblend",
                    "Lebih lembut dan tidak kering",
                    "Segar di kulit",
                  ].map((text, index) => (
                    <motion.li key={index} variants={itemVariants}>
                      {text}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>

            <a

              href="https://wa.me/6282295616146?text=Halo%20Kak%2C%20saya%20tertarik%20produk%20Night%20Cream%20Noor%20Beauty%20nya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                initial={{ opacity: 0, x: -20, scale: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-[#FECFCF] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#fcbaba] transition">
                Coba Sekarang
              </motion.button>
            </a>

          </div>

          {/* Image Area */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-sm mx-auto">
              {/* Background color blocks */}
              <div className="absolute top-4 left-4 w-full h-full bg-pink-200 rounded-lg -z-10"></div>
              <div className="absolute top-8 left-8 w-full h-full bg-pink-300 rounded-lg -z-20"></div>

              <motion.img
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                src={Nightcream2}
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

export default DetailNightCream
