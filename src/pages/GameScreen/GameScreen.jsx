import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

export default function GameScreen() {
  const [time, setTime] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setLoading(false);
      setShowPopup(true);
    }, 3000);

    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearTimeout(loaderTimer);
      clearInterval(timeInterval);
    };
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-GB');
  };

  return (
    <div className="h-screen w-screen bg-[#1a1a1a] flex items-center justify-center relative">
      {/* Close Button */}
      {showPopup && (
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-white text-4xl z-50"
          aria-label="Close"
        >
          <IoMdClose />
        </button>
      )}

      <div className="relative w-[90%] h-[90%] bg-[#12151b] border border-[#1f1f1f]">
        {/* Side Toggle */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#1f1f1f] p-1 rounded-r">
          <div className="text-white">⇄</div>
        </div>

        {/* Bottom Bar */}
        <div className="absolute bottom-0 left-0 w-full bg-[#1f1f1f] flex items-center justify-between px-4 py-2">
          <div className="flex gap-2">
            <button className="bg-[#f6c700] text-black px-4 py-1 font-bold">Login</button>
            <button className="border border-white text-white px-4 py-1">Register</button>
          </div>
          <div className="text-white font-mono">{formatTime(time)}</div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-white"></div>
            <div className="w-5 h-5 bg-[#2f2f2f]"></div>
            <div className="w-5 h-5 bg-[#2f2f2f]"></div>
            <div className="w-5 h-5 bg-[#2f2f2f]"></div>
            <div className="w-5 h-5 border border-white flex items-center justify-center">
              <span className="text-white text-xs">⤢</span>
            </div>
            <div className="w-5 h-5 border border-white flex items-center justify-center">
              <span className="text-white text-xs">⛶</span>
            </div>
          </div>
        </div>

        {/* Loader or Popup in Center Only */}
        <div className="absolute inset-0 flex items-center justify-center z-40">
          {loading ? (
            <div className="text-white text-lg font-semibold">Loading...</div>
          ) : (
            <div className="text-center bg-[#1a1a1a] p-6 rounded-lg shadow-lg border border-gray-700">
              <p className="text-white text-lg font-semibold mb-4 px-4">
                Teknik bir sorun oluştu. Lütfen canlı desteğe başvurun.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full">
                Canlı Desteğe Git
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
