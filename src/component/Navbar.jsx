import { FaAndroid, FaApple } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/download.svg";
import { Menu } from "lucide-react";
import SideNavbar from "./SideNavbar";

export default function Navbar() {
  const navLinks = [
    { name: "Price Boost", path: "/price-boost" },
    { name: "Aviator", path: "/aviator" },
    { name: "Poker Klas", path: "/poker-klas" },
    { name: "Sports", path: "/sports" },
    { name: "Live Sports", path: "/live-sports" },
    { name: "Live Games", path: "/live-games" },
    { name: "Live Casino", path: "/live-casino" },
    { name: "Live Lotto", path: "/live-lotto" },
    { name: "Promotions", path: "/promotions" },
    { name: "Request Discount", path: "/request-discount" },
    { name: "Tournaments", path: "/tournaments" },
  ];

  return (
    <nav>
      <div className="hidden lg:block bg-[rgb(35,66,9)] text-white font-sans border-b-[rgb(249,196,8)] border-b-4">
        <div className="flex items-center justify-between px-6">
          <div className="w-[20%] flex items-center">
            <img src={logo} alt="JojoBET Logo" className="w-44" />
          </div>

          <div className="w-[80%]">
            <div className="flex items-center justify-end py-3">
              {/* App icons */}
              <div className="flex items-center space-x-2">
                <div className="border-yellow-400 p-1 border-[3px] rounded-lg">
                  <FaAndroid className="text-yellow-400 text-2xl" />
                </div>
                <div className="border-yellow-400 p-1 border-[3px] rounded-lg">
                  <FaApple className="text-yellow-400 text-2xl" />
                </div>
              </div>

              {/* Auth buttons */}
              <div className="flex flex-row gap-4 px-5  border-r-2 border-gray-600">
                <Link to="/register">
                  <button className="bg-[rgb(249,196,8)] text-[rgb(35,66,9)] rounded-lg text-sm font-semibold px-3 py-2">
                    REGISTER
                  </button>
                </Link>
                <Link to="/login">
                  <button className="flex items-center justify-center text-white text-sm  font-semibold py-2">
                    LOG IN
                  </button>
                </Link>
              </div>

              {/* Language icon */}
              <div className="bg-[#2e5014] py-1 px-3 ml-5 rounded-md">
                <MdLanguage className="text-white text-2xl" />
              </div>
            </div>
            <div className="w-full flex justify-end">
              <div className="border-t border-gray-600 w-full" />
            </div>

            <div>
              <ul className="overflow-x-auto flex items-center justify-center gap-6 text-sm xl:text-md font-medium px-4">
                {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className="border-b-4 whitespace-nowrap border-transparent hover:text-[rgb(249,196,8)] hover:border-[rgb(249,196,8)] pb-2 pt-2 transition-all duration-200"
                  >
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* For Mobile */}

      <div className="lg:hidden bg-[rgb(35,66,9)] text-white font-sans border-b-[rgb(249,196,8)] border-b-4">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div>
              {/* <Menu size={34} strokeWidth={3} className="text-yellow-400 font-bold" /> */}
              <SideNavbar/>
            </div>
           <div>
             <img src={logo} alt="JojoBET Logo" className="w-28" />
           </div>
          </div>

          <div>
            <div className="flex items-center justify-end py-2">
              {/* App icons */}
              <div className="flex items-center space-x-2">
                <div className="border-yellow-400 p-1 border-[2px] rounded-lg">
                  <FaAndroid className="text-yellow-400 text-lg" />
                </div>
                <div className="border-yellow-400 p-1 border-[2px] rounded-lg">
                  <FaApple className="text-yellow-400 text-lg" />
                </div>
              </div>

              {/* Auth buttons */}
              <div className="flex flex-row">
                <Link to="/login">
                  <button className="mx-2 flex items-center justify-center text-white text-sm  font-semibold py-2">
                    LOG IN
                  </button>
                </Link>
                <Link to="/register">
                  <button className="bg-[rgb(249,196,8)] text-[rgb(35,66,9)] rounded-lg text-sm font-semibold px-2 py-1.5">
                    REGISTER
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}