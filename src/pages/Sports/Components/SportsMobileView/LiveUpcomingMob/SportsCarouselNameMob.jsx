import React, { useState } from "react";

const sports = {
  en: [
    { name: "Football" },
    { name: "Basketball" },
    { name: "American Football" },
    { name: "Volleyball" },
    { name: "Cricket" },
    { name: "Badminton" },
    { name: "Lacrosse" },
    { name: "Table Tennis" },
    { name: "Hockey" },
    { name: "Boxing" },
    { name: "Football" },
    { name: "Basketball" },
    { name: "American Football" },
    { name: "Volleyball" },
    { name: "Cricket" },
    { name: "Badminton" },
    { name: "Lacrosse" },
    { name: "Table Tennis" },
    { name: "Hockey" },
    { name: "Boxing" },
  ],
};

const SportsCarouselNameMob = () => {
  const [activeSport, setActiveSport] = useState("Football"); // default active

  return (
    <div className="w-full mt-3 text-white bg-[#242424]">
      <div className="flex overflow-x-auto scrollbar-hide">
        {sports.en.map((sport, index) => {
          const isActive = activeSport === sport.name;
          return (
            <div
              key={index}
              onClick={() => setActiveSport(sport.name)}
              className={`flex-shrink-0 cursor-pointer text-xs px-4 py-2 whitespace-nowrap border-b-2 ${
                isActive
                  ? "text-[#588036] border-[#588036] bg-[#2C2C2C]"
                  : "text-[#bababa] border-[#6A6A6A]"
              }`}
            >
              <span className="font-medium">{sport.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SportsCarouselNameMob;
