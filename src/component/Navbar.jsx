import { FaAndroid, FaApple } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/download.svg";

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
    <nav className="bg-[rgb(35,66,9)] text-white font-sans py-4 border-b-[rgb(249,196,8)] border-b-4">
      <div className="flex items-center justify-between px-6 py-2">
        <div className="flex items-center pt-2">
          <img src={logo} alt="JojoBET Logo" className="h-12 w-auto" />
        </div>

        <div className="flex items-center space-x-4">
          {/* App icons */}
          <div className="flex items-center space-x-2">
            <div className="border-yellow-400 p-1 border-2 rounded-lg">
              <FaAndroid className="text-yellow-400 text-xl" />
            </div>
            <div className="border-yellow-400 p-1 border-2 rounded-lg">
              <FaApple className="text-yellow-400 text-xl" />
            </div>
          </div>

          {/* Auth buttons */}
          <div className="flex flex-row space-x-4 px-4 border-r-2 border-gray-600">
            <Link to="/register">
              <button className="bg-[rgb(249,196,8)] text-[rgb(35,66,9)] font-semibold px-3 py-1 rounded">
                REGISTER
              </button>
            </Link>
            <Link to="/login">
              <button className="text-white font-bold">LOG IN</button>
            </Link>
          </div>

          {/* Language icon */}
          <div className="bg-[#2e5014] p-1 rounded">
            <MdLanguage className="text-white text-xl" />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-end mt-2">
        <div className="border-t border-gray-600 w-3/4" />
      </div>

      {/* Navigation Links */}
      <ul className="flex justify-end space-x-6 text-md font-normal mt-2 px-4 mb-2">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="hover:text-[rgb(249,196,8)] hover:border-b-4 hover:border-[rgb(249,196,8)] pb-1 border-transparent"
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}