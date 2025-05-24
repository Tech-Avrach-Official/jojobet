import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { List, LockKeyhole } from "lucide-react";
import flag from "../../../../assets/Sports/flag.png";

const LiveContentMob = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="w-full h-full py-3">
      {/* Left Section */}
      <div className="px-3">
        <div className="flex items-center justify-between">
          <div className="text-white text-xs">Filters</div>
          <div className="flex items-center text-white gap-4">
            <span
              className={`text-xs ${enabled ? "text-[#588036]" : "text-white"}`}
            >
              Streamed events only
            </span>
            <Switch checked={enabled} onCheckedChange={setEnabled} />
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="w-[40%] text-xs text-[#6b6b6b]">Events</div>
         <div className="w-[60%] ">
             <div className="text-[12px] text-center leading-3 text-[#6b6b6b]">Home Draw Away <br /> ordinary Time</div>
         </div>
        </div>
      </div>
      <div>
        <Demo />
        <Demo />
        <Demo />
      </div>
      <div>
        <p className="text-sm font-bold text-center text-[#6b6b6b] py-2 px-3">See more</p>
      </div>
    </div>
  );
};

export default LiveContentMob;

const Demo = () => {
  return (
    <div>
      <div className="flex items-center gap-2 py-2 px-3">
        <img src={flag} className="w-4 rounded-full" alt="" />
        <p className="text-[12px] text-[#6b6b6b]">BASKET Cup</p>
      </div>
      <div className="w-full mt-[2px] flex justify-between gap-1 hover:bg-[#343333] duration-300 cursor-pointer bg-[#242424] py-1">
        <div className="w-[40%]">
          <div className="pl-3 flex items-start justify-between w-full text-white rounded-lg">
            {/* Teams and Scores */}
            <div className="flex-1">
              <p className="text-white text-xs leading-tight font-normal">
                CB Alginet
              </p>
              <p className="text-white text-xs leading-tight font-normal">
                Jaen CB
              </p>
              <span className="text-gray-400 text-xs mt-1 line-clamp-1">
                +60 / Time Left 10', Halftime
              </span>
            </div>
            <div className="text-right">
              <p className="text-yellow-400 leading-tight text-xs font-bold">74</p>
              <p className="text-yellow-400 leading-tight text-xs font-bold">53</p>
            </div>
          </div>
        </div>

        {/* Odds */}
        <div className="w-[60%] pr-1">
          <div>
            <div className="grid grid-cols-3 h-14 gap-1">
              {/* First Odds Box */}
              <div className="group border border-[#2d2d2d] hover:border-[#474747] duration-300 h-full">
                <div className="relative bg-[#1E1E1E] h-[calc(100%-0.25rem)] flex items-center justify-center">
                  {/* Green triangle */}
                  <div className="absolute -rotate-90 top-[1px] right-[1px]">
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-green-500"></div>
                  </div>

                  <span className="group-hover:text-[#ffffff] duration-300  text-yellow-400 font-bold text-xs">
                    1.85
                  </span>
                </div>
                <div className="h-1 bg-[#1A1A1A]"></div>
              </div>
              <div className="group border border-[#2d2d2d] hover:border-[#474747] duration-300 h-full">
                <div className="relative bg-[#1E1E1E] h-[calc(100%-0.25rem)] flex items-center justify-center">
                  {/* Green triangle */}
                  <div className="absolute bottom-[1px] right-[1px]">
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-red-500"></div>
                  </div>

                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-400 font-bold text-xs">
                    1.85
                  </span>
                </div>
                <div className="h-1 bg-[#1A1A1A]"></div>
              </div>
              <div className="group border border-[#2d2d2d] hover:border-[#474747] duration-300 h-full">
                <div className="relative bg-[#1E1E1E] h-[calc(100%-0.25rem)] flex items-center justify-center">
                  {/* Green triangle */}
                  <div className="absolute bottom-[1px] right-[1px]">
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-red-500"></div>
                  </div>

                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-400 font-bold text-xs">
                    1.85
                  </span>
                </div>
                <div className="h-1 bg-[#1A1A1A]"></div>
              </div>

              {/* Second Odds Box */}
            </div>
          </div>    
        </div>
      </div>
      <div className="w-full mt-[2px] flex justify-between gap-1 hover:bg-[#343333] duration-300 cursor-pointer bg-[#242424] py-1">
        <div className="w-[40%]">
          <div className="pl-3 flex items-start justify-between w-full text-white rounded-lg">
            {/* Teams and Scores */}
            <div className="flex-1">
              <p className="text-white text-xs leading-tight font-normal">
                CB Alginet
              </p>
              <p className="text-white text-xs leading-tight font-normal">
                Jaen CB
              </p>
              <span className="text-gray-400 text-xs mt-1 line-clamp-1">
                +60 / Time Left 10', Halftime
              </span>
            </div>
            <div className="text-right">
              <p className="text-yellow-400 leading-tight text-xs font-bold">74</p>
              <p className="text-yellow-400 leading-tight text-xs font-bold">53</p>
            </div>
          </div>
        </div>

        {/* Odds */}
        <div className="w-[60%] pr-1">
          <div>
            <div className="grid grid-cols-3 h-14 gap-1">
              {/* First Odds Box */}
              <div className="cursor-not-allowed opacity-40 border border-[#2d2d2d] h-full">
                <div className="relative bg-[#1E1E1E] h-[calc(100%-0.25rem)] flex items-center justify-center">
                  {/* Green triangle */}
                  

                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-400 font-bold text-sm">
                   <LockKeyhole className="w-4 h-4" />
                  </span>
                </div>
                <div className="h-1 bg-[#1A1A1A]"></div>
              </div>
              <div className="group border border-[#2d2d2d] hover:border-[#474747] duration-300 h-full">
                <div className="relative bg-[#1E1E1E] h-[calc(100%-0.25rem)] flex items-center justify-center">
                  {/* Green triangle */}
                  <div className="absolute bottom-[1px] right-[1px]">
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-red-500"></div>
                  </div>

                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-400 font-bold text-xs">
                    1.85
                  </span>
                </div>
                <div className="h-1 bg-[#1A1A1A]"></div>
              </div>
              <div className="group border border-[#2d2d2d] hover:border-[#474747] duration-300 h-full">
                <div className="relative bg-[#1E1E1E] h-[calc(100%-0.25rem)] flex items-center justify-center">
                  {/* Green triangle */}
                  <div className="absolute bottom-[1px] right-[1px]">
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-red-500"></div>
                  </div>

                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-400 font-bold text-xs">
                    1.85
                  </span>
                </div>
                <div className="h-1 bg-[#1A1A1A]"></div>
              </div>

              {/* Second Odds Box */}
            </div>
          </div>    
        </div>
      </div>
     
    </div>
  );
};
