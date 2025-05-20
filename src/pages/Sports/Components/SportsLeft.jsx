import React from "react";
import sponshership from "../../../assets/Sports/sponshership.gif";
import x from "../../../assets/Sports/x.gif";
import flag from "../../../assets/Sports/flag.png";
import basketball from "../../../assets/Sports/basketball.svg";

import {
  Search,
  PlayCircle,
  Clock,
  Flame,
  CalendarDays,
  ListOrdered,
  LayoutGrid,
  Play,
  Link,
  LogsIcon,
  BadgeHelp,
} from "lucide-react";

// const iconMap = {
//   search: Search,
//   live: PlayCircle,
//   next: Clock,
//   popular: Flame,
//   today: CalendarDays,
//   results: ListOrdered,
//   calendar: LayoutGrid
// };

const SportsLeft = () => {
  const menuItems = [
    { icon: Search, label: "Search" },
    { icon: PlayCircle, label: "Live" },
    { icon: Clock, label: "Next Events" },
    { icon: Flame, label: "Popular Events" },
    { icon: CalendarDays, label: "Today's Match" },
    { icon: ListOrdered, label: "Results Page" },
    { icon: LayoutGrid, label: "Live Calendar" },
  ];

  return (
    <div className="w-full h-full pb-10 bg-[#1B2612]">
      <div className="w-full flex flex-col gap-1">
        <img
          src={sponshership}
          className="w-full border border-yellow-500"
          alt=""
        />
        <img
          src={sponshership}
          className="w-full border border-yellow-500"
          alt=""
        />
        <img
          src={sponshership}
          className="w-full border border-yellow-500"
          alt=""
        />
        <img src={x} className="w-full" alt="" />
      </div>
      <div>
        <SidebarMenu items={menuItems} />
      </div>
    </div>
  );
};

export default SportsLeft;

const SidebarMenu = ({ items }) => {
  return (
    <div className="w-full">
      {/* {items.map((item, index) => {
        // const IconComponent = iconMap[item.icon];
        return (
          <div
            key={index}
            className="flex items-center gap-3 px-4 py-3 border-b border-green-800 hover:bg-green-900 cursor-pointer"
          >
            {item.icon && <item.icon size={18} />}
            <span className="text-sm">{item.label}</span>
          </div>
        );
      })} */}

      <div>
        <div className="w-full bg-[#32471F] flex items-center gap-3 cursor-pointer">
          <div className="bg-[#263619] flex items-center gap-3 px-2 py-3 cursor-pointer">
            <Search className="text-white" size={18} />
          </div>
          <span className="w-full text-xs text-white">Search</span>
        </div>
        <div>
          <div className="w-full bg-[#1B2612] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#1A2115] flex items-center gap-3 px-2 py-3 cursor-pointer">
              <PlayCircle className="text-white" size={18} />
            </div>
            <span className="w-full text-xs text-white">Live</span>
          </div>
          <div className="w-full bg-[#1B2612] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#1A2115] flex items-center gap-3 px-2 py-3 cursor-pointer">
              <PlayCircle className="text-white" size={18} />
            </div>
            <span className="w-full text-xs text-white">Live</span>
          </div>
          <div className="w-full bg-[#1B2612] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#1A2115] flex items-center gap-3 px-2 py-3 cursor-pointer">
              <PlayCircle className="text-white" size={18} />
            </div>
            <span className="w-full text-xs text-white">Live</span>
          </div>
          <div className="w-full bg-[#1B2612] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#1A2115] flex items-center gap-3 px-2 py-3 cursor-pointer">
              <PlayCircle className="text-white" size={18} />
            </div>
            <span className="w-full text-xs text-white">Live</span>
          </div>
          <div className="w-full bg-[#1B2612] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#1A2115] flex items-center gap-3 px-2 py-3 cursor-pointer">
              <PlayCircle className="text-white" size={18} />
            </div>
            <span className="w-full text-xs text-white">Live</span>
          </div>
          <div className="w-full bg-[#1B2612] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#1A2115] flex items-center gap-3 px-2 py-3 cursor-pointer">
              <PlayCircle className="text-white" size={18} />
            </div>
            <span className="w-full text-xs text-white">Live</span>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full bg-[#32471F] flex items-center gap-3 cursor-pointer">
          <div className="bg-[#263619] flex items-center gap-3 px-2 py-3 cursor-pointer">
            <Link className="text-white" size={18} />
          </div>
          <span className="w-full text-sm font-medium text-gray-200">
            Quick Links
          </span>
        </div>
        <div>
          <div className="w-full bg-[#1B2612] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#1A2115] flex items-center gap-3 px-2 py-3 cursor-pointer">
              <img src={flag} className="w-[1.40rem] rounded-full" alt="" />
            </div>
            <span className="w-full text-xs text-white">Championship</span>
          </div>
          <div className="w-full bg-[#1B2612] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#1A2115] flex items-center gap-3 px-2 py-3 cursor-pointer">
              <img src={flag} className="w-[1.40rem] rounded-full" alt="" />
            </div>
            <span className="w-full text-xs text-white">Championship</span>
          </div>
          <div className="w-full bg-[#1B2612] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#1A2115] flex items-center gap-3 px-2 py-3 cursor-pointer">
              <img src={flag} className="w-[1.40rem] rounded-full" alt="" />
            </div>
            <span className="w-full text-xs text-white">Championship</span>
          </div>
          <div className="w-full bg-[#1B2612] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#1A2115] flex items-center gap-3 px-2 py-3 cursor-pointer">
              <img src={flag} className="w-[1.40rem] rounded-full" alt="" />
            </div>
            <span className="w-full text-xs text-white">Championship</span>
          </div>
          <div className="w-full bg-[#1B2612] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#1A2115] flex items-center gap-3 px-2 py-3 cursor-pointer">
              <img src={flag} className="w-[1.40rem] rounded-full" alt="" />
            </div>
            <span className="w-full text-xs text-white">Championship</span>
          </div>
          <div className="w-full bg-[#1B2612] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#1A2115] flex items-center gap-3 px-2 py-3 cursor-pointer">
              <img src={flag} className="w-[1.40rem] rounded-full" alt="" />
            </div>
            <span className="w-full text-xs text-white">Championship</span>
          </div>
          <div className="w-full bg-[#1B2612] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#1A2115] flex items-center gap-3 px-2 py-3 cursor-pointer">
              <img src={flag} className="w-[1.40rem] rounded-full" alt="" />
            </div>
            <span className="w-full text-xs text-white">Championship</span>
          </div>
          <div className="w-full bg-[#1B2612] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#1A2115] flex items-center gap-3 px-2 py-3 cursor-pointer">
              <img src={flag} className="w-[1.40rem] rounded-full" alt="" />
            </div>
            <span className="w-full text-xs text-white">Championship</span>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full bg-[#32471F] flex items-center gap-3 cursor-pointer">
          <div className="bg-[#263619] flex items-center gap-3 px-2 py-3 cursor-pointer">
            <LogsIcon className="text-white" size={18} />
          </div>
          <span className="w-full text-sm font-medium text-gray-200">
            All Sports
          </span>
        </div>
        <div>
          <div className="w-full bg-[#1B2612] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#1A2115] flex items-center gap-3 px-[0.4rem] py-3 cursor-pointer">
              <img
                src={basketball}
                className="w-[1.65rem] rounded-full"
                alt=""
              />
            </div>
            <span className="w-full text-xs text-white">Basketball</span>
          </div>
          <div className="w-full bg-[#1B2612] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#1A2115] flex items-center gap-3 px-[0.4rem] py-3 cursor-pointer">
              <img
                src={basketball}
                className="w-[1.65rem] rounded-full"
                alt=""
              />
            </div>
            <span className="w-full text-xs text-white">Basketball</span>
          </div>
          <div className="w-full bg-[#1B2612] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#1A2115] flex items-center gap-3 px-[0.4rem] py-3 cursor-pointer">
              <img
                src={basketball}
                className="w-[1.65rem] rounded-full"
                alt=""
              />
            </div>
            <span className="w-full text-xs text-white">Basketball</span>
          </div>
          <div className="w-full bg-[#1B2612] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#1A2115] flex items-center gap-3 px-[0.4rem] py-3 cursor-pointer">
              <img
                src={basketball}
                className="w-[1.65rem] rounded-full"
                alt=""
              />
            </div>
            <span className="w-full text-xs text-white">Basketball</span>
          </div>
          <div className="w-full bg-[#1B2612] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#1A2115] flex items-center gap-3 px-[0.4rem] py-3 cursor-pointer">
              <img
                src={basketball}
                className="w-[1.65rem] rounded-full"
                alt=""
              />
            </div>
            <span className="w-full text-xs text-white">Basketball</span>
          </div>
          <div className="w-full bg-[#1B2612] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#1A2115] flex items-center gap-3 px-[0.4rem] py-3 cursor-pointer">
              <img
                src={basketball}
                className="w-[1.65rem] rounded-full"
                alt=""
              />
            </div>
            <span className="w-full text-xs text-white">Basketball</span>
          </div>
          <div className="w-full bg-[#1B2612] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#1A2115] flex items-center gap-3 px-[0.4rem] py-3 cursor-pointer">
              <img
                src={basketball}
                className="w-[1.65rem] rounded-full"
                alt=""
              />
            </div>
            <span className="w-full text-xs text-white">Basketball</span>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full bg-[#588036] flex items-center gap-3 cursor-pointer">
          <div className="bg-[#517531] flex items-center gap-3 px-2 py-3 cursor-pointer">
            <PlayCircle className="text-white" size={18} />
          </div>
          <span className="w-full text-sm font-medium text-gray-200">
            Live Sports
          </span>
        </div>
        <div>
          <div className="w-full bg-[#283819] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#2D3F1C] flex items-center gap-3 px-[0.4rem] py-3 cursor-pointer">
              <img
                src={basketball}
                className="w-[1.65rem] rounded-full"
                alt=""
              />
            </div>
            <span className="w-full text-xs text-white">Basketball</span>
          </div>
          <div className="w-full bg-[#283819] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#2D3F1C] flex items-center gap-3 px-[0.4rem] py-3 cursor-pointer">
              <img
                src={basketball}
                className="w-[1.65rem] rounded-full"
                alt=""
              />
            </div>
            <span className="w-full text-xs text-white">Basketball</span>
          </div>
          <div className="w-full bg-[#283819] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#2D3F1C] flex items-center gap-3 px-[0.4rem] py-3 cursor-pointer">
              <img
                src={basketball}
                className="w-[1.65rem] rounded-full"
                alt=""
              />
            </div>
            <span className="w-full text-xs text-white">Basketball</span>
          </div>
          <div className="w-full bg-[#283819] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#2D3F1C] flex items-center gap-3 px-[0.4rem] py-3 cursor-pointer">
              <img
                src={basketball}
                className="w-[1.65rem] rounded-full"
                alt=""
              />
            </div>
            <span className="w-full text-xs text-white">Basketball</span>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div className="w-full bg-[#283819] flex items-center gap-3 cursor-pointer">
          <div className="bg-[#273519] flex items-center gap-3 px-2 py-3 cursor-pointer">
            <BadgeHelp className="text-white" size={18} />
          </div>
          <span className="w-full text-sm font-medium text-gray-200">
            Help & Support
          </span>
        </div>
        <div>
          <div className="w-full bg-[#1B2612] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#1A2115] flex items-center gap-3 px-2 py-3 cursor-pointer">
              <PlayCircle className="text-white" size={18} />
            </div>
            <span className="w-full text-xs text-white">Betting Rules</span>
          </div>
        </div>
        <div>
          <div className="w-full bg-[#1B2612] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#1A2115] flex items-center gap-3 px-2 py-3 cursor-pointer">
              <PlayCircle className="text-white" size={18} />
            </div>
            <span className="w-full text-xs text-white">Cash Out</span>
          </div>
        </div>
        <div>
          <div className="w-full bg-[#1B2612] border-t border-dashed border-[#616160]  flex items-center gap-3 cursor-pointer">
            <div className="bg-[#1A2115] flex items-center gap-3 px-2 py-3 cursor-pointer">
              <PlayCircle className="text-white" size={18} />
            </div>
            <span className="w-full text-xs text-white">Bet Builder Rules</span>
          </div>
        </div>
      </div>
    </div>
  );
};
