import React from "react";
import { Link } from "react-router-dom";
import livesupport from "../../../../assets/Sports/livesupport.svg";
import casino from "../../../../assets/Sports/casino.svg";
import mid from "../../../../assets/Sports/mid.svg";
import livecasino from "../../../../assets/Sports/livecasino.svg";
import jojobet from "../../../../assets/Sports/jojobet.svg";

const tabItems = [
  {
    label: "Live Support",
    icon: livesupport,
    to: "/sportsbook",
  },
  {
    label: "Arama Yap",
    icon: casino,
    to: "/search",
  },
  {
    label: "",
    icon: mid,
    to: "/bet-slip",
    // center: true, // special styling for center item
  },
  {
    label: "Live Casino",
    icon: livecasino,
    to: "/bet-slip",
  },
  {
    label: "35.000.000",
    icon: jojobet,
    to: "/live",
  },
];

const TabBottomBar = () => {
  return (
    <div className="bg-[#151516] rounded-t-md grid grid-cols-5 items-center justify-center py-2 mt-5 w-full">
      {tabItems.map((item, index) => (
        <Link to={item.to} key={index}>
          <div
            className={`flex flex-col items-center ${
              item.center ? "pt-2" : ""
            }`}
          >
            <img src={item.icon} alt={item.label} className="w-8 h-8 mx-auto" />
            {item.label && (
              <p className="text-white text-center text-[10px] mt-1">
                {item.label}
              </p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TabBottomBar;
