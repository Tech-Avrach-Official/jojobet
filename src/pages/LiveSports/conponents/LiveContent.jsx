import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { List, LockKeyhole } from "lucide-react";
import flag from "../../../assets/Sports/flag.png"; // Adjust the path as necessary

const LiveContent = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="w-full py-3">
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
        <div className="flex items-center justify-between mt-6 mb-2">
          <div className="w-[30%] text-xs text-[#6b6b6b]">Events</div>
         <div className="w-[70%] grid grid-cols-3">
             <div className="text-xs text-center text-[#6b6b6b]">Home Away</div>
          <div className="text-xs text-center text-[#6b6b6b]">Over/Under</div>
          <div className="flex items-center justify-end gap-10 font-medium text-xs text-[#6b6b6b]">
            <p>Asian Handicap</p>
            <List className="w-5 h-5 cursor-pointer" />
          </div>
         </div>
        </div>
      </div>
      <div>
        <Demo />
        <Demo />
        <Demo />
      </div>
    </div>
  );
};

export default LiveContent;

const Demo = () => {
  return (
    <div>
      <div className="flex items-center gap-2 py-2 px-3">
        <img src={flag} className="w-4 rounded-full" alt="" />
        <p className="text-[12px] text-[#6b6b6b]">BASKET Cup</p>
      </div>
      <div className="w-full mt-[2px] flex justify-between gap-1 hover:bg-[#343333] duration-300 cursor-pointer bg-[#242424] py-1">
        <div className="w-[30%]">
          <div className="pl-3 flex items-start justify-between w-full text-white rounded-lg">
            {/* Teams and Scores */}
            <div className="flex-1">
              <p className="relative text-white text-sm leading-tight font-medium">
                CB Alginet
                <span className="absolute top-1/2 -translate-y-1/2 left-[-8px] bg-yellow-500 w-1.5 h-1.5 rounded-full"></span>
              </p>
              <p className="text-white text-sm leading-tight font-medium">
                Jaen CB
              </p>
              <span className="text-gray-400 text-xs mt-2">
                +60 / Time Left 10', Halftime
              </span>
            </div>
            <div className="text-right">
              <p className="text-yellow-400 leading-tight text-base font-bold">74</p>
              <p className="text-yellow-400 leading-tight text-base font-bold">53</p>
            </div>
          </div>
        </div>

        {/* Odds */}
        <div className="w-[70%] grid grid-cols-3 gap-4 pr-1">
          <div>
            <div className="grid grid-cols-2 gap-1">
              {/* First Odds Box */}
              <div className="group border border-[#2d2d2d] hover:border-[#474747] duration-300 h-16">
                <div className="relative bg-[#1E1E1E] h-[calc(100%-0.25rem)] flex items-center justify-center">
                  {/* Green triangle */}
                  <div className="absolute -rotate-90 top-[1px] right-[1px]">
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-green-500"></div>
                  </div>

                  <span className="group-hover:text-[#ffffff] duration-300  text-yellow-400 font-bold text-sm">
                    1.85
                  </span>
                </div>
                <div className="h-1 bg-[#1A1A1A]"></div>
              </div>
              <div className="group border border-[#2d2d2d] hover:border-[#474747] duration-300 h-16">
                <div className="relative bg-[#1E1E1E] h-[calc(100%-0.25rem)] flex items-center justify-center">
                  {/* Green triangle */}
                  <div className="absolute bottom-[1px] right-[1px]">
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-red-500"></div>
                  </div>

                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-400 font-bold text-sm">
                    1.85
                  </span>
                </div>
                <div className="h-1 bg-[#1A1A1A]"></div>
              </div>

              {/* Second Odds Box */}
            </div>
          </div>
          <div>
            <div className="flex gap-1">
              {/* First Odds Box */}
              <div className="w-[42.5%] group  border border-[#2d2d2d] hover:border-[#474747] duration-300 h-16">
                <div className="relative bg-[#1E1E1E] h-[calc(100%-0.25rem)] flex items-center justify-center">
                  {/* Green triangle */}
                  <div className="absolute -rotate-90 top-[1px] right-[1px]">
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-green-500"></div>
                  </div>

                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-400 font-bold text-sm">
                    1.85
                  </span>
                </div>
                <div className="h-1 bg-[#1A1A1A]"></div>
              </div>
              <div className="w-[15%] flex items-center">
                <p className="text-[#6b6b6b] text-xs font-medium">165.5</p>
              </div>
              <div className="w-[42.5%] group  border border-[#2d2d2d] hover:border-[#474747] duration-300 h-16">
                <div className="relative bg-[#1E1E1E] h-[calc(100%-0.25rem)] flex items-center justify-center">
                  {/* Green triangle */}
                  <div className="absolute bottom-[1px] right-[1px]">
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-red-500"></div>
                  </div>

                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-400 font-bold text-sm">
                    1.85
                  </span>
                </div>
                <div className="h-1 bg-[#1A1A1A]"></div>
              </div>

              {/* Second Odds Box */}
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-1">
              {/* First Odds Box */}
              <div className="group border border-[#2d2d2d] hover:border-[#474747] duration-300 h-16">
                <div className="relative bg-[#1E1E1E] h-[calc(100%-0.25rem)] flex items-center justify-center">
                  {/* Green triangle */}
                  

                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-400 font-bold text-sm">
                    1.85
                  </span>
                </div>
                <div className="h-1 bg-[#1A1A1A]"></div>
              </div>
              <div className="group border border-[#2d2d2d] hover:border-[#474747] duration-300 h-16">
                <div className="relative bg-[#1E1E1E] h-[calc(100%-0.25rem)] flex flex-col items-center justify-center">
                  {/* Green triangle */}
                  

                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-600 font-medium text-[10px]">
                    +1.85
                  </span>
                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-400 font-bold text-sm">
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
      <div className="w-full mt-[2px] flex justify-between gap-1 hover:bg-[#343333] duration-200 cursor-pointer bg-[#242424] py-1">
        <div className="w-[30%]">
          <div className="pl-3 flex items-start justify-between w-full text-white rounded-lg">
            {/* Teams and Scores */}
            <div className="flex-1">
              <p className="relative text-white text-sm leading-tight font-medium">
                CB Alginet
                <span className="absolute top-1/2 -translate-y-1/2 left-[-8px] bg-yellow-500 w-1.5 h-1.5 rounded-full"></span>
              </p>
              <p className="text-white text-sm leading-tight font-medium">
                Jaen CB
              </p>
              <span className="text-gray-400 text-xs mt-2">
                +60 / Time Left 10', Halftime
              </span>
            </div>
            <div className="text-right">
              <p className="text-yellow-400 leading-tight text-base font-bold">74</p>
              <p className="text-yellow-400 leading-tight text-base font-bold">53</p>
            </div>
          </div>
        </div>

        {/* Odds */}
        <div className="w-[70%] grid grid-cols-3 gap-4 pr-1">
          <div>
            <div className="grid grid-cols-2 gap-1">
              {/* First Odds Box */}
              <div className="group border border-[#2d2d2d] hover:border-[#474747] duration-300 h-16">
                <div className="relative bg-[#1E1E1E] h-[calc(100%-0.25rem)] flex items-center justify-center">
                  {/* Green triangle */}
                  <div className="absolute -rotate-90 top-[1px] right-[1px]">
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-green-500"></div>
                  </div>

                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-400 font-bold text-sm">
                    1.85
                  </span>
                </div>
                <div className="h-1 bg-[#1A1A1A]"></div>
              </div>
              <div className="group border border-[#2d2d2d] hover:border-[#474747] duration-300 h-16">
                <div className="relative bg-[#1E1E1E] h-[calc(100%-0.25rem)] flex items-center justify-center">
                  {/* Green triangle */}
                  <div className="absolute bottom-[1px] right-[1px]">
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-red-500"></div>
                  </div>

                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-400 font-bold text-sm">
                    1.85
                  </span>
                </div>
                <div className="h-1 bg-[#1A1A1A]"></div>
              </div>

              {/* Second Odds Box */}
            </div>
          </div>
          <div>
            <div className="flex gap-1">
              {/* First Odds Box */}
              <div className="w-[42.5%] group border border-[#2d2d2d] hover:border-[#474747] duration-300 h-16">
                <div className="relative bg-[#1E1E1E] h-[calc(100%-0.25rem)] flex items-center justify-center">
                  {/* Green triangle */}
                  <div className="absolute -rotate-90 top-[1px] right-[1px]">
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-green-500"></div>
                  </div>

                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-400 font-bold text-sm">
                    1.85
                  </span>
                </div>
                <div className="h-1 bg-[#1A1A1A]"></div>
              </div>
              <div className="w-[15%] flex items-center">
                <p className="text-[#6b6b6b] text-xs font-medium">165.5</p>
              </div>
              <div className="w-[42.5%] group border border-[#2d2d2d] hover:border-[#474747] duration-300 h-16">
                <div className="relative bg-[#1E1E1E] h-[calc(100%-0.25rem)] flex items-center justify-center">
                  {/* Green triangle */}
                  <div className="absolute bottom-[1px] right-[1px]">
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-red-500"></div>
                  </div>

                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-400 font-bold text-sm">
                    1.85
                  </span>
                </div>
                <div className="h-1 bg-[#1A1A1A]"></div>
              </div>

              {/* Second Odds Box */}
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-1">
              {/* First Odds Box */}
              <div className="cursor-not-allowed opacity-40 border border-[#2d2d2d] h-16">
                <div className="relative bg-[#1E1E1E] h-[calc(100%-0.25rem)] flex items-center justify-center">
                  {/* Green triangle */}
                  

                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-400 font-bold text-sm">
                   <LockKeyhole className="w-4 h-4" />
                  </span>
                </div>
                <div className="h-1 bg-[#1A1A1A]"></div>
              </div>
              <div className="group border border-[#2d2d2d] hover:border-[#474747] duration-300 h-16">
                <div className="relative bg-[#1E1E1E] h-[calc(100%-0.25rem)] flex flex-col items-center justify-center">
                  {/* Green triangle */}
                  

                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-600 font-medium text-[10px]">
                    +1.85
                  </span>
                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-400 font-bold text-sm">
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
      <div className="w-full mt-[2px] flex justify-between gap-1 hover:bg-[#343333] duration-200 cursor-pointer bg-[#242424] py-1">
        <div className="w-[30%]">
          <div className="pl-3 flex items-start justify-between w-full text-white rounded-lg">
            {/* Teams and Scores */}
            <div className="flex-1">
              <p className="relative text-white text-sm leading-tight font-medium">
                CB Alginet
                <span className="absolute top-1/2 -translate-y-1/2 left-[-8px] bg-yellow-500 w-1.5 h-1.5 rounded-full"></span>
              </p>
              <p className="text-white text-sm leading-tight font-medium">
                Jaen CB
              </p>
              <span className="text-gray-400 text-xs mt-2">
                +60 / Time Left 10', Halftime
              </span>
            </div>
            <div className="text-right">
              <p className="text-yellow-400 leading-tight text-base font-bold">74</p>
              <p className="text-yellow-400 leading-tight text-base font-bold">53</p>
            </div>
          </div>
        </div>

        {/* Odds */}
        <div className="w-[70%] grid grid-cols-3 gap-4 pr-1">
          <div>
            <div className="grid grid-cols-3 gap-1">
              {/* First Odds Box */}
              <div className="group border border-[#2d2d2d] hover:border-[#474747] duration-300 h-16">
                <div className="relative bg-[#1E1E1E] h-[calc(100%-0.25rem)] flex items-center justify-center">
                  {/* Green triangle */}
                  <div className="absolute -rotate-90 top-[1px] right-[1px]">
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-green-500"></div>
                  </div>

                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-400 font-bold text-sm">
                    1.85
                  </span>
                </div>
                <div className="h-1 bg-[#1A1A1A]"></div>
              </div>
              <div className="group border border-[#2d2d2d] hover:border-[#474747] duration-300 h-16">
                <div className="relative bg-[#1E1E1E] h-[calc(100%-0.25rem)] flex items-center justify-center">
                  {/* Green triangle */}
                  <div className="absolute bottom-[1px] right-[1px]">
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-red-500"></div>
                  </div>

                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-400 font-bold text-sm">
                    1.85
                  </span>
                </div>
                <div className="h-1 bg-[#1A1A1A]"></div>
              </div>
              <div className="group border border-[#2d2d2d] hover:border-[#474747] duration-300 h-16">
                <div className="relative bg-[#1E1E1E] h-[calc(100%-0.25rem)] flex items-center justify-center">
                  {/* Green triangle */}
                  <div className="absolute bottom-[1px] right-[1px]">
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-red-500"></div>
                  </div>

                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-400 font-bold text-sm">
                    1.85
                  </span>
                </div>
                <div className="h-1 bg-[#1A1A1A]"></div>
              </div>

              {/* Second Odds Box */}
            </div>
          </div>
          <div>
            <div className="flex gap-1">
              {/* First Odds Box */}
              <div className="w-[42.5%] group border border-[#2d2d2d] hover:border-[#474747] duration-300 h-16">
                <div className="relative bg-[#1E1E1E] h-[calc(100%-0.25rem)] flex items-center justify-center">
                  {/* Green triangle */}
                  <div className="absolute -rotate-90 top-[1px] right-[1px]">
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-green-500"></div>
                  </div>

                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-400 font-bold text-sm">
                    1.85
                  </span>
                </div>
                <div className="h-1 bg-[#1A1A1A]"></div>
              </div>
              <div className="w-[15%] flex items-center">
                <p className="text-[#6b6b6b] text-xs font-medium">165.5</p>
              </div>
              <div className="w-[42.5%] group border border-[#2d2d2d] hover:border-[#474747] duration-300 h-16">
                <div className="relative bg-[#1E1E1E] h-[calc(100%-0.25rem)] flex items-center justify-center">
                  {/* Green triangle */}
                  <div className="absolute bottom-[1px] right-[1px]">
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-red-500"></div>
                  </div>

                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-400 font-bold text-sm">
                    1.85
                  </span>
                </div>
                <div className="h-1 bg-[#1A1A1A]"></div>
              </div>

              {/* Second Odds Box */}
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-1">
              {/* First Odds Box */}
              <div className="cursor-not-allowed opacity-40 border border-[#2d2d2d] h-16">
                <div className="relative bg-[#1E1E1E] h-[calc(100%-0.25rem)] flex items-center justify-center">
                  {/* Green triangle */}
                  

                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-400 font-bold text-sm">
                   <LockKeyhole className="w-4 h-4" />
                  </span>
                </div>
                <div className="h-1 bg-[#1A1A1A]"></div>
              </div>
              <div className="group border border-[#2d2d2d] hover:border-[#474747] duration-300 h-16">
                <div className="relative bg-[#1E1E1E] h-[calc(100%-0.25rem)] flex flex-col items-center justify-center">
                  {/* Green triangle */}
                  

                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-600 font-medium text-[10px]">
                    +1.85
                  </span>
                  <span className="group-hover:text-[#ffffff] duration-300 text-yellow-400 font-bold text-sm">
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
