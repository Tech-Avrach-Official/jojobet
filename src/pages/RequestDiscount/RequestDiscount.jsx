import React from 'react';
import { FaHome, FaTelegramPlane } from 'react-icons/fa';
// import logo from '../assets/jojobet-discount.png'; 

export default function RequestDiscount() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-evenly bg-[#003300] py-10 px-4 text-white font-sans">
      {/* Logo */}
      <div className="flex flex-col items-center">
        <img src={"https://jojodiscount46.com/assets/logo.png"} alt="Jojobet Discount" className="w-[480px] h-auto" />
        <div className="h-1 w-32 bg-yellow-400 my-4"></div>
        <p className="text-center text-2xl sm:text-2xl font-light">
          DISCOUNT TALEP SAYFASINA <br /> HOŞGELDİNİZ
        </p>
      </div>

      {/* Input and Buttons */}
      <div className="flex flex-col items-center mt-8 w-full max-w-md">
        <div className=' w-full p-4 mb-4 border-4 border-dashed border-yellow-400'>
        <input
          type="text"
          placeholder="Kullanıcı Adınız"
          className="w-full px-4 py-3 text-black placeholder-yellow-700 bg-yellow-300 focus:outline-none"
        />
        </div>
        <div className="flex flex-wrap justify-center gap-4 w-full">
          <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold px-6 py-2 w-40">
            TALEP ET
          </button>
          <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold px-6 py-2 w-40">
            TALEP KONTROL
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center mt-10">
        <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold px-6 py-2 mb-4">
          KURALLAR
        </button>
        <div className="flex gap-4">
          <div className="border border-yellow-400 p-3 text-yellow-400">
            <FaHome size={20} />
          </div>
          <div className="border border-yellow-400 p-3 text-yellow-400">
            <FaTelegramPlane size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
