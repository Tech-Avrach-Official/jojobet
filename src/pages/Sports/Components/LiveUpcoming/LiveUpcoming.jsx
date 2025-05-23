import React, { useState } from 'react'
import SportsCarouselName from './SportsCarouselName';
import LiveContent from './LiveContent';

const LiveUpcoming = () => {
     const [activeTab, setActiveTab] = useState("live");
  return (
    <div className="w-full ">
      {/* Live Button */}
      <div className='flex w-full overflow-hidden'>
        <div
        onClick={() => setActiveTab("live")}
        className={`relative flex-1 text-center py-2 cursor-pointer ${
          activeTab === "live"
            ? "bg-[#588036] text-white border-b-4 border-white"
            : "bg-[#1a1a1a] text-gray-400"
        }`}
      >
        <span className="font-medium">
          Live<sup className="text-[10px] ml-1">185</sup>
        </span>
        {activeTab === "live" && (
          <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-2 bg-white rotate-45"></div>
        )}
      </div>

      {/* Upcoming Button */}
      <div
        onClick={() => setActiveTab("upcoming")}
        className={`relative flex-1 text-center py-2 cursor-pointer ${
          activeTab === "upcoming"
            ? "bg-[#588036] text-white border-b-4 border-white"
            : "bg-[#1a1a1a] text-gray-400"
        }`}
      >
        <span className="font-medium">Upcoming</span>
        {activeTab === "upcoming" && (
          <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-2 bg-white rotate-45"></div>
        )}
      </div>
      </div>

      <div>
        <SportsCarouselName/>
      </div>

      <div>
        {
          activeTab === "live" ? 
          <div>
            <LiveContent/>
          </div> : <div>Upcoming</div>
        }
      </div>
    </div>
  )
}

export default LiveUpcoming