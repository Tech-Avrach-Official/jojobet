import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import img51 from "../../../assets/gameImages/51.jpg"
import img52 from "../../../assets/gameImages/52.jpg"
import img53 from "../../../assets/gameImages/53.png"
import img54 from "../../../assets/gameImages/54.jpg"
import img55 from "../../../assets/gameImages/55.jpg"
import img56 from "../../../assets/gameImages/56.jpg"
import img57 from "../../../assets/gameImages/50.jpg"

const SeatIndicator = ({ occupied }) => {
  return (
    <div
      className={`w-4 h-4 rounded-full flex items-center justify-center mx-px ${
        occupied ? "bg-white" : "bg-gray-800 border border-white/20"
      }`}
    >
      <svg
        className={`w-2.5 h-2.5 ${occupied ? "text-black" : "text-white/30"}`}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    </div>
  );
};

SeatIndicator.propTypes = {
  occupied: PropTypes.bool.isRequired,
};

const CasinoCard = ({
  title,
  betRange,
  seats,
  bgImage,
  hasEvolution,
  isTableFull,
  highlightCard,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative h-32 sm:h-36 transition-all duration-300 ${
          isHovered ? "blur-sm" : ""
        }`}
      >
        <img src={bgImage} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>

        {hasEvolution && (
          <div
            className={`absolute top-1 right-1 px-1.5 py-0.5 rounded text-xs text-white font-semibold 
            ${highlightCard ? "bg-yellow-500" : "bg-yellow-500 opacity-0"} 
            ${isHovered ? "opacity-100 z-10" : ""} 
            transition-all duration-300`}
          >
            Evolution
          </div>
        )}

        {isTableFull && (
          <div className="absolute top-1/3 left-0 right-0 text-center text-white text-xs font-bold">
            TABLE FULL - BET BEHIND
          </div>
        )}

        <div className="absolute bottom-9 left-0 right-0 flex justify-center">
          {seats.map((occupied, index) => (
            <SeatIndicator key={index} occupied={occupied} />
          ))}
        </div>

        <div className="absolute bottom-2 left-2 sm:left-6 text-white font-bold text-xs sm:text-sm">
          {betRange}
        </div>
      </div>

      <div className="text-white py-1 px-2 text-left font-bold text-xs sm:text-sm truncate">
        {title}
      </div>

      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 
        ${isHovered || highlightCard ? "opacity-100" : "opacity-0 bg-black/50"} 
        ${isHovered ? "scale-100" : "scale-90"}`}
      >
        <button className="px-4 sm:px-6 py-1.5 sm:py-2 font-semibold text-xs sm:text-sm text-white bg-yellow-500 transition-all duration-300">
          PLAY NOW!
        </button>
      </div>
    </div>
  );
};

CasinoCard.propTypes = {
  title: PropTypes.string.isRequired,
  betRange: PropTypes.string,
  seats: PropTypes.arrayOf(PropTypes.bool),
  bgImage: PropTypes.string,
  hasEvolution: PropTypes.bool,
  isTableFull: PropTypes.bool,
  highlightCard: PropTypes.bool,
};

CasinoCard.defaultProps = {
  betRange: "",
  seats: [false, false, false, true, true, true],
  bgImage: "/api/placeholder/400/320",
  hasEvolution: true,
  isTableFull: false,
  highlightCard: false,
};

export default function Playmatrix() {
  const [showAllGamesOnMobile, setShowAllGamesOnMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const isDesktop = windowWidth >= 1024;

  const casinoGames = [
    {
      title: "Jojo VIP BJ1",
      betRange: "₺500-2,000,000",
      seats: [false, false, false, true, true, true],
      bgImage:img51,
    },
    {
      title: "Jojo VIP BJ2",
      betRange: "₺500-2,000,000",
      seats: [false, false, false, false, false, false],
      bgImage:img52,
    },
    {
      title: "Jojo Blackjack3",
      betRange: "₺200-2,000,000",
      seats: [true, true, true, true, true, true],
      bgImage:img53,
    },
    {
      title: "Jojo Blackjack4",
      betRange: "₺200-2,000,000",
      isTableFull: true,
      seats: [true, true, true, true, true, true],
      bgImage:img54,
    },
    {
      title: "Jojo Blackjack5",
      betRange: "₺200-2,000,000",
      seats: [false, false, true, true, true, false],
      bgImage:img55,
    },
    {
      title: "Jojo Blackjack6",
      betRange: "₺50-2,000,000",
      seats: [true, true, true, false, true, true],
      bgImage:img56,
    },
    {
      title: "Jojo Blackjack7",
      betRange: "₺50-2,000,000",
      seats: [true, false, true, true, true, true],
      bgImage:img57,
        
    },
   
  ];

  const displayedGames =
    isDesktop || showAllGamesOnMobile ? casinoGames : casinoGames.slice(0, 4);
  const totalGames = casinoGames.length;
  const hiddenGames = totalGames - 4;

  return (
    <div className="h-auto lg:p-8 md:p-6 p-4 bg-[#1e1e20] text-white">
      <div className="flex justify-between items-center mb-4">
       <Link>
        <h1 className="text-xl md:text-2xl font-bold ml-4 uppercase hover:text-yellow-500 ">PlayMatrix
</h1>
</Link>
        <button className="text-gray-400 hover:text-white flex items-center text-sm md:text-lg font-semibold lg:block hidden">
          See all{" "}
          <span className="ml-1 text-sm md:text-lg font-bold px-1.5 py-0.5 rounded">
            {totalGames}
          </span>
          <span className="ml-1">›</span>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-2 md:gap-3">
        {displayedGames.map((game, index) => (
          <CasinoCard
            key={index}
            title={game.title}
            betRange={game.betRange}
            seats={game.seats}
            bgImage={game.bgImage}
            isTableFull={game.isTableFull}
            hasEvolution={game.hasEvolution}
            highlightCard={game.highlightCard}
          />
        ))}
      </div>

      {!isDesktop && !showAllGamesOnMobile && hiddenGames > 0 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAllGamesOnMobile(true)}
            className="px-8 sm:px-18 py-2 md:px-32 md:py-3 bg-transparent  border-yellow-500 border-2  hover:text-yellow-300   hover:border-yellow-300 text-yellow-500 font-semibold rounded-md transition-colors duration-300"
          >
            Show more 
          </button>
        </div>
      )}
    </div>
  );
}
