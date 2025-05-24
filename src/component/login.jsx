import React, { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import XLogo from "../assets/Footer/XLogo.png";
import Telegram from "../assets/Footer/Telegram.png";
const LoginPopup = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Login submitted:", formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white  w-full max-w-sm mx-6 overflow-hidden">
        <div className="bg-[#27490a] text-white px-6 py-4 relative">
          <h2 className="text-xl font-semibold text-center">Welcome</h2>
          <button
            onClick={onClose}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200"
          >
            <X
              className="bg-black/20 hover:bg-yellow-500 hover:text-black rounded-full "
              size={20}
            />
          </button>
          <div className="text-center text-sm mt-2">
            No account yet?{" "}
            <span className="text-yellow-400 cursor-pointer hover:underline">
              Register now
            </span>
          </div>
        </div>

        <div className="px-6 py-6">
          <div className="space-y-6">
            <div>
              <label className="block text-gray-600 text-sm mb-2">
                *Username or Email Address
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Please enter your username or email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#27490a] focus:border-transparent text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 text-sm mb-2">
                *Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Please enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="text-sm text-gray-600 leading-relaxed mt-20">
              Our current address is{" "}
              <span className="text-[#27490a] font-medium">
                www.jojobet1023.com
              </span>{" "}
              In the next update our address will be{" "}
              <span className="text-[#27490a] font-medium">
                www.jojobet1024.com
              </span>{" "}
              For always up to current address:
              <a
                href="https://dub.pro/jojoyagit"
                className="text-orange-400 hover:underline ml-1"
              >
                https://dub.pro/jojoyagit
              </a>
            </div>

            <div className="flex space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={XLogo}
                  alt="X (Twitter)"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={Telegram}
                  alt="Telegram"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-3 rounded-md transition-colors duration-200"
            >
              Log in
            </button>

            <div className="text-center">
              <a href="#" className="text-yellow-500 hover:underline text-sm">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPopup;
