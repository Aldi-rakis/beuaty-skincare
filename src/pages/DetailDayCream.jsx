import React from 'react'
import Daycream from '../assets/image/daycream-detail.png'
import Daycream2 from '../assets/image/daycream-detail2.png'

const DetailDayCream = () => {
  return (
   <>
 
 <section>
  <div className="pt-20 h-screen flex flex-col md:flex-row px-6 sm:px-10 md:px-20  bg-[#FDF9F2] justify-center gap-10 items-center">
    
    {/* Gambar */}
    <div className="w-full md:w-1/2">
      <img src={Daycream} alt="Facial Wash" className="w-full max-w-md mx-auto" />
    </div>

    {/* Konten Teks */}
    <div className="w-full md:w-1/2 flex font-nunito flex-col gap-5 px-2">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#DAA854] drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
        Day Cream
      </h1>

      <p className="text-[#DAA854] text-base sm:text-lg md:text-xl">
        Day Cream menjaga kulit tetap sehat, cerah, dan terlindungi dari sinar matahari serta polusi. Cocok untuk perawatan harian agar wajah tampak segar dan bercahaya.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-[#DAA854] drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
        Ingredient
      </h2>

      <p className="text-[#DAA854] text-sm sm:text-base md:text-xl">
        Niacinamide, Centella Asiatica Extract, Glycyrrhiza Glabra (Licorice) Root Extract, Panthenol, 3-O-Ethyl Ascorbic Acid (Vitamin C), Titanium Dioxide, Zinc Oxide, Tocopheryl Acetate (Vitamin E), Salicylic Acid, Allantoin, Dimethicone.
      </p>
    </div>
  </div>
</section>


     <section className="bg-[#FDF9F2] px-6 pb-12">
         <h2 className="mb-4 text-2xl md:text-3xl font-bold text-center text-gray-900">
            Product Highlights
          </h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Text Area */}
        <div className="flex-1 space-y-6">
         
          <p className="text-gray-700 leading-relaxed">
           Tekstur ringan yang cepat meresap tanpa rasa lengket. Memberikan kelembapan maksimal, menjadikan kulit terasa halus, lembut, dan nyaman sepanjang hari.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Glow Benefits */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Glow-Boosting Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Hydrates & Moisturizes</li>
                <li>Brightens Skin</li>
                <li> Protects from Sun Damage</li>
               <li> Soothes & Repairs</li>
                <li>Antioxidant Rich</li>
              </ul>
            </div>

            {/* Texture */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Texture:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Gel</li>
                <li>Ringan dan Lembut</li>
                <li>Tidak terlalu berbusa</li>
                <li>Lebih lembut dan tidak kering</li>
                <li>Segar dikulit</li>
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
              src={Daycream2}
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

export default DetailDayCream
