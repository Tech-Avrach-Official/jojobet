// import image18 from "../assets/Footer/18.png"
// import DMCA from "../assets/Footer/DMCA.png"
// import Gcb from "../assets/Footer/Gcb.png"
// import Laliga from "../assets/Footer/Laliga.png"
// import ratings from "../assets/Footer/ratings.png"
// import sponsor from "../assets/Footer/sponsor.png"
// import telegram from "../assets/Footer/Telegram.png"
// import Thai from "../assets/Footer/Thai.png"
// import Tyson from "../assets/Footer/Tyson.png"
// import Worldsnooker from "../assets/Footer/WorldSnooker.png"
// import XLogo from "../assets/Footer/XLogo.png"
// import logo from "../assets/Footer/logo.png"

// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white w-full ">
//       {/* Top Section */}
//       <div className=" w-full px-8 pr-12   py-8 lg:py-12">
//         {/* Desktop Layout */}
//         <div className="hidden lg:flex    w-full">
//           {/* Left Section - Logo and Social */}
//           <div className="flex flex-col items-start">
//             <div className="mb-8">
//               <img
//                 src= {logo}
//                 alt="JojoBet Logo"
//                 className="h-14 w-auto"
//               />
//             </div>
//             <div className="flex gap-3">
//               <img
//                 src={XLogo}
//                 alt="Telegram"
//                 className="w-10 h-10 hover:opacity-80 transition-opacity cursor-pointer"
//               />
//               <img
//                 src={telegram}
//                 alt="Twitter"
//                 className="w-10 h-10 hover:opacity-80 transition-opacity cursor-pointer"
//               />
//             </div>
//           </div>

//           {/* Center Section - Terms */}
//           <div className="flex-1 text-center px-8">
//             <h3 className="text-yellow-400 text-lg font-semibold leading-tight">
//               GENERAL TERMS AND CONDITIONS
//             </h3>
//           </div>

//           {/* Right Section - Sponsors */}
//           <div className="flex flex-col items-end  ">
//             <h3 className="text-white text-xl font-semibold mb-8">Sponsors</h3>
//             <div className="grid grid-cols-2 gap-6 items-center">
//               <img
//                 src={Tyson}
//                 alt="Mike Tyson"
//                 className="h-12 w-auto justify-self-center hover:opacity-80 transition-opacity"
//               />
//               <img
//                 src={sponsor}
//                 alt="Sponsor"
//                 className="h-12 w-auto justify-self-center hover:opacity-80 transition-opacity"
//               />
//               <img
//                 src={Worldsnooker}
//                 alt="Formula Sponsor"
//                 className="h-12 w-auto justify-self-center hover:opacity-80 transition-opacity"
//               />
//               <img
//                 src={Laliga}
//                 alt="La Liga"
//                 className="h-12 w-auto justify-self-center hover:opacity-80 transition-opacity"
//               />
//               <div className="col-span-2 flex justify-center mt-4">
//                 <img
//                   src={Thai}
//                   alt="Thai Fight"
//                   className="h-16 w-auto hover:opacity-80 transition-opacity"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Tablet Layout */}
//         <div className="hidden sm:block lg:hidden">
//           {/* Logo */}
//           <div className="text-center mb-8">
//             <img
//               src={logo}
//               alt="JojoBet Logo"
//               className="h-12 w-auto mx-auto"
//             />
//           </div>

//           {/* Social Icons */}
//           <div className="flex justify-center gap-4 mb-8">
//            <img
//                 src={XLogo}
//                 alt="Telegram"
//                 className="w-10 h-10 hover:opacity-80 transition-opacity cursor-pointer"
//               />
//               <img
//                 src={telegram}
//                 alt="Twitter"
//                 className="w-10 h-10 hover:opacity-80 transition-opacity cursor-pointer"
//               />
//           </div>

//           {/* Terms Title */}
//           <div className="text-center mb-10">
//             <h3 className="text-yellow-400 text-xl font-semibold leading-tight">
//               GENERAL TERMS AND CONDITIONS
//             </h3>
//           </div>

//           {/* Sponsors */}
//           <div className="text-center">
//             <h3 className="text-white text-xl font-semibold mb-8">Sponsors</h3>
//             <div className="flex flex-wrap justify-center items-center gap-6 max-w-2xl mx-auto">
//               <img
//                 src={Tyson}
//                 alt="Mike Tyson"
//                 className="h-12 w-auto hover:opacity-80 transition-opacity"
//               />
//               <img
//                 src={sponsor}
//                 alt="Sponsor"
//                 className="h-12 w-auto hover:opacity-80 transition-opacity"
//               />
//               <img
//                 src={Worldsnooker}
//                 alt="Formula Sponsor"
//                 className="h-12 w-auto hover:opacity-80 transition-opacity"
//               />
//               <img
//                 src={Laliga}
//                 alt="La Liga"
//                 className="h-12 w-auto hover:opacity-80 transition-opacity"
//               />
//               <img
//                 src={Thai}
//                 alt="Thai Fight"
//                 className="h-16 w-auto hover:opacity-80 transition-opacity"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Mobile Layout */}
//         <div className="block sm:hidden">
//           {/* Logo */}
//           <div className="text-center mb-6">
//             <img
//               src={logo}
//               alt="JojoBet Logo"
//               className="h-10 w-auto mx-auto"
//             />
//           </div>

//           {/* Social Icons */}
//           <div className="flex justify-center gap-4 mb-6">
//             <img
//               src={telegram}
//               alt="Telegram"
//               className="w-8 h-8 hover:opacity-80 transition-opacity cursor-pointer"
//             />
//             <img
//               src={XLogo
//               }
//               alt="Twitter"
//               className="w-8 h-8 hover:opacity-80 transition-opacity cursor-pointer"
//             />
//           </div>

//           {/* Terms Title */}
//           <div className="text-center mb-8">
//             <h3 className="text-yellow-400 text-lg font-semibold leading-tight">
//               GENERAL TERMS AND CONDITIONS
//             </h3>
//           </div>

//           {/* Sponsors */}
//           <div className="text-center">
//             <h3 className="text-white text-lg font-semibold mb-6">Sponsors</h3>
//             <div className="flex flex-wrap justify-center items-center gap-4 max-w-xs mx-auto">
//               <img
//                 src={Tyson}
//                 alt="Mike Tyson"
//                 className="h-10 w-auto hover:opacity-80 transition-opacity"
//               />
//               <img
//                 src={sponsor}
//                 alt="Sponsor"
//                 className="h-10 w-auto hover:opacity-80 transition-opacity"
//               />
//               <img
//                 src={Worldsnooker}
//                 alt="Formula Sponsor"
//                 className="h-10 w-auto hover:opacity-80 transition-opacity"
//               />
//               <img
//                 src={Laliga}
//                 alt="La Liga"
//                 className="h-10 w-auto hover:opacity-80 transition-opacity"
//               />
//               <img
//                 src={Thai}
//                 alt="Thai Fight"
//                 className="h-12 w-auto hover:opacity-80 transition-opacity"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="border-t border-gray-800">
//         <div className="pl-12   py-6 sm:py-8">
//           {/* Contact Info */}
//           <div className="flex max-w-md flex-wrap justify-center lg:ml-60   sm:gap-6 lg:gap-4 text-xs mb-4 ">
//             <div className="flex items-center gap-1">
//               <span className="text-white font-semibold">Support</span>
//               <span>support@jojobet.com</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <span className="text-white font-semibold">Partners</span>
//               <span>partners@jojobet.com</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <span className="text-white font-semibold">Press</span>
//               <span>press@jojobet.com</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <span className="text-white font-semibold">Complaints</span>
//               <span>skayate@jojobet.com</span>
//             </div>
//           </div>

//           {/* Description Text - Compact and Clear */}
//           <div className="w-full   flex  lg:flex-row sm:flex-col md:flex-col  gap-2">
//           <div className="text-gray-300 px-4  lg:px-0 text-xs leading-relaxed max-w-4xl  text-left sm:text-center mb-8 space-y-1">
//             <p>
//               Jojobet is a betting and games of chance platform that aims for the firsts in the betting industry and prioritises user satisfaction and quality service.

// We offer you the opportunity to play fun games with different unique betting options and the highest odds of the market for all sports branches worldwide and we make it our mission to bring a brand new understanding of entertainment.

// We offer you a real casino experience with over 125 types of sports, more than 40,000 betting options every month in the live betting section, as well as our casino with a wide variety of casino. Blackjack, roulette, baccarat and slot games that distribute the most jackpots in the market, you can be a partner in the big win by trying your luck.

// While we aim for our members to spend time in a pleasant environment with our constantly updated promotions, we provide uninterrupted service 24 hours a day, 7 days a week with our experienced team.

// Jojobet operates under the Curaçao Government under the Curaçao Gaming Control Board (OGL/2024/920/0382) Licence issued under the laws of Dutch Curaçao. Jojobet® is a trademark of Coinbar N.V. It serves with Curaçao Gaming Control Board licence information.

//             </p>

//             <p className="font-medium">
//               Please Bet Responsibly. Jojobet® 2025 | All Rights Reserved.
//             </p>
//           </div>

//           {/* Bottom Logos */}
//           <div className="flex  flex-row w-full  flex-wrap justify-center items-start    gap-10">
//             <img
//               src={image18}
//               alt="18+"
//               className="h-16  w-auto"
//             />
//             <img
//               src={ratings}
//               alt="5 Stars Rating"
//               className="h-16 w-auto"
//             />
//             <img
//               src={Gcb}
//               alt="GCB"
//               className="h-16 w-auto"
//             />
//             <img
//               src={DMCA}
//               alt="DMCA Protected"
//               className="h-16 w-auto"
//             />
//           </div>
// </div>
//           {/* Visitor Counter */}
//           <div className="text-center">
//             <span className="text-gray-400 text-sm">1.0.880</span>
//           </div>
//         </div>
//       </div>

//     </footer>
//   );
// };

// export default Footer;

import image18 from "../assets/Footer/18.png";
import DMCA from "../assets/Footer/DMCA.png";
import Gcb from "../assets/Footer/Gcb.png";
import Laliga from "../assets/Footer/Laliga.png";
import ratings from "../assets/Footer/ratings.png";
import sponsor from "../assets/Footer/sponsor.png";
import telegram from "../assets/Footer/Telegram.png";
import Thai from "../assets/Footer/Thai.png";
import Tyson from "../assets/Footer/Tyson.png";
import Worldsnooker from "../assets/Footer/WorldSnooker.png";
import XLogo from "../assets/Footer/XLogo.png";
import logo from "../assets/Footer/logo.png";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full ">
      <div className=" w-full px-8 pr-12   py-8 lg:py-12">
        <div className="hidden lg:flex    w-full">
          <div className="flex flex-col items-start">
            <div className="mb-8">
              <img src={logo} alt="JojoBet Logo" className="h-14 w-auto" />
            </div>
            <div className="flex gap-3">
              <img
                src={telegram}
                alt="Telegram"
                className="w-8 h-8 hover:opacity-80 transition-opacity cursor-pointer"
              />
              <img
                src={XLogo}
                alt="Twitter"
                className="w-8 h-8 hover:opacity-80 transition-opacity cursor-pointer"
              />
            </div>
          </div>

          <div className="flex-1 text-left ml-20 pr-10 ">
            <h3 className="text-yellow-400 text-md  font-normal leading-tight">
              GENERAL TERMS AND CONDITIONS
            </h3>
          </div>

          <div className="flex flex-col items-end  ">
            <h3 className="text-white text-xl font-semibold mb-8">Sponsors</h3>
            <div className="grid grid-cols-2 gap-8 items-center">
              <img
                src={Tyson}
                alt="Mike Tyson"
                className="h-10 w-auto justify-self-center hover:opacity-80 transition-opacity"
              />
              <img
                src={sponsor}
                alt="Sponsor"
                className="h-10 w-auto justify-self-center hover:opacity-80 transition-opacity"
              />
              <img
                src={Worldsnooker}
                alt="Formula Sponsor"
                className="h-10 w-auto justify-self-center hover:opacity-80 transition-opacity"
              />
              <img
                src={Laliga}
                alt="La Liga"
                className="h-10 w-auto justify-self-center hover:opacity-80 transition-opacity"
              />
              <div className="col-span-2 flex justify-center mt-4">
                <img
                  src={Thai}
                  alt="Thai Fight"
                  className="h-12 w-auto hover:opacity-80 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block lg:hidden">
          <div className="text-center mb-8">
            <img
              src={logo}
              alt="JojoBet Logo"
              className="h-12 w-auto mx-auto"
            />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-8">
            <img
              src={telegram}
              alt="Telegram"
              className="w-10 h-10 hover:opacity-80 transition-opacity cursor-pointer"
            />
            <img
              src={XLogo}
              alt="Twitter"
              className="w-10 h-10 hover:opacity-80 transition-opacity cursor-pointer"
            />
          </div>

          {/* Terms Title */}
          <div className="text-center mb-10">
            <h3 className="text-yellow-400 text-xl font-semibold leading-tight">
              GENERAL TERMS AND CONDITIONS
            </h3>
          </div>

          {/* Sponsors */}
          <div className="text-center">
            <h3 className="text-white text-xl font-semibold mb-8">Sponsors</h3>
            <div className="flex flex-wrap justify-center items-center gap-6 max-w-2xl mx-auto">
              <img
                src={Tyson}
                alt="Mike Tyson"
                className="h-10 w-auto hover:opacity-80 transition-opacity"
              />
              <img
                src={sponsor}
                alt="Sponsor"
                className="h-10 w-auto hover:opacity-80 transition-opacity"
              />
              <img
                src={Worldsnooker}
                alt="Formula Sponsor"
                className="h-10 w-auto hover:opacity-80 transition-opacity"
              />
              <img
                src={Laliga}
                alt="La Liga"
                className="h-10 w-auto hover:opacity-80 transition-opacity"
              />
              <img
                src={Thai}
                alt="Thai Fight"
                className="h-12 w-auto hover:opacity-80 transition-opacity"
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block sm:hidden">
          {/* Logo */}
          <div className="text-center mb-6">
            <img
              src={logo}
              alt="JojoBet Logo"
              className="h-10 w-auto mx-auto"
            />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-6">
            <img
              src={telegram}
              alt="Telegram"
              className="w-8 h-8 hover:opacity-80 transition-opacity cursor-pointer"
            />
            <img
              src={XLogo}
              alt="Twitter"
              className="w-8 h-8 hover:opacity-80 transition-opacity cursor-pointer"
            />
          </div>

          {/* Terms Title */}
          <div className="text-center mb-8">
            <h3 className="text-yellow-400 text-lg font-semibold leading-tight">
              GENERAL TERMS AND CONDITIONS
            </h3>
          </div>

          {/* Sponsors */}
          <div className="text-center">
            <h3 className="text-white text-lg font-semibold mb-6">Sponsors</h3>
            <div className="flex flex-wrap justify-center items-center gap-4 max-w-xs mx-auto">
              <img
                src={Tyson}
                alt="Mike Tyson"
                className="h-10 w-auto hover:opacity-80 transition-opacity"
              />
              <img
                src={sponsor}
                alt="Sponsor"
                className="h-10 w-auto hover:opacity-80 transition-opacity"
              />
              <img
                src={Worldsnooker}
                alt="Formula Sponsor"
                className="h-10 w-auto hover:opacity-80 transition-opacity"
              />
              <img
                src={Laliga}
                alt="La Liga"
                className="h-10 w-auto hover:opacity-80 transition-opacity"
              />
              <img
                src={Thai}
                alt="Thai Fight"
                className="h-12 w-auto hover:opacity-80 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="px-4 sm:px-8  lg:pl-12 py-6 sm:py-8">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center lg:justify-start lg:ml-60 gap-2 sm:gap-4 lg:gap-4 text-xs mb-4">
            <div className="flex items-center gap-1 justify-center sm:justify-start">
              <span className="text-white font-semibold">Support</span>
              <span className="break-all">support@jojobet.com</span>
            </div>
            <div className="flex items-center gap-1 justify-center sm:justify-start">
              <span className="text-white font-semibold">Partners</span>
              <span className="break-all">partners@jojobet.com</span>
            </div>
            <div className="flex items-center gap-1 justify-center sm:justify-start">
              <span className="text-white font-semibold">Press</span>
              <span className="break-all">press@jojobet.com</span>
            </div>
            <div className="flex items-center gap-1 justify-center sm:justify-start">
              <span className="text-white font-semibold">Complaints</span>
              <span className="break-all">skayate@jojobet.com</span>
            </div>
          </div>

          {/* Description Text and Logos Container */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="text-gray-300 max-w-5xl text-xs sm:text-xs leading-relaxed flex-1 text-center sm:text-left lg:text-left space-y-3 sm:space-y-2">
              <p>
                Jojobet is a betting and games of chance platform that aims for
                the firsts in the betting industry and prioritises user
                satisfaction and quality service. <br></br>
                We offer you the opportunity to play fun games with different
                unique betting options and the highest odds of the market for
                all sports branches worldwide and we make it our mission to
                bring a brand new understanding of entertainment.<br></br>
                We offer you a real casino experience with over 125 types of
                sports, more than 40,000 betting options every month in the live
                betting section, as well as our casino with a wide variety of
                casino. Blackjack, roulette, baccarat and slot games that
                distribute the most jackpots in the market, you can be a partner
                in the big win by trying your luck.<br></br>
                While we aim for our members to spend time in a pleasant
                environment with our constantly updated promotions, we provide
                uninterrupted service 24 hours a day, 7 days a week with our
                experienced team. <br></br>
                Jojobet operates under the Curaçao Government under the Curaçao
                Gaming Control Board (OGL/2024/920/0382) Licence issued under
                the laws of Dutch Curaçao. Jojobet® is a trademark of Coinbar
                N.V. It serves with Curaçao Gaming Control Board licence
                information.<br></br>
              </p>
            </div>

            <div className="flex flex-row flex-wrap justify-center lg:justify-start lg:flex-row lg:items-start items-center gap-4 lg:gap-6 lg:min-w-fit">
              <img
                src={image18}
                alt="18+"
                className="h-12 sm:h-14 lg:h-16 w-auto"
              />
              <img
                src={ratings}
                alt="5 Stars Rating"
                className="h-12 sm:h-14 lg:h-12 w-auto"
              />
              <img
                src={Gcb}
                alt="GCB"
                className="h-12 sm:h-14 lg:h-12 w-auto"
              />
              <img
                src={DMCA}
                alt="DMCA Protected"
                className="h-12 sm:h-14 lg:h-16 w-auto"
              />
            </div>
          </div>

          <div className="text-center mt-6">
            <span className="text-gray-400 text-xs">1.0.880</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
