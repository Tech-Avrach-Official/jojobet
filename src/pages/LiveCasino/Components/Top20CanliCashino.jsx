import { useState, useEffect } from "react";

import img31 from "../../../assets/gameImages/31.jpg"
import img32 from "../../../assets/gameImages/32.jpg"
import img33 from "../../../assets/gameImages/33.png"
import img34 from "../../../assets/gameImages/34.jpg"
import img35 from "../../../assets/gameImages/35.jpg"
import img36 from "../../../assets/gameImages/36.jpg"
import img37 from "../../../assets/gameImages/37.jpg"


const SpecialTag = ({ text, color }) => {
  return (
    <div
      className={`px-1.5 py-0.5 rounded text-xs text-white font-semibold ${color}`}
    >
      {text}
    </div>
  );
};

const NumberDisplay = ({ numbers }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % numbers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [numbers.length]);

  return (
    <div className="absolute bottom-6 left-4 right-0 flex justify-start gap-1 p-1">
      {numbers.map((num, index) => {
        const isActive = index === activeIndex;

        let bgColor = "bg-black text-white";
        if (isActive) {
          if (num.value === 0) {
            bgColor = "bg-green-600 text-white";
          } else if (num.value % 2 === 0) {
            bgColor = "bg-black text-white";
          } else {
            bgColor = "bg-red-600 text-white";
          }
        } else {
          bgColor = " text-white text-sm font-semibold";
        }

        return (
          <div
            key={index}
            className={`${bgColor} w-6 h-6 flex items-center justify-center text-xs transition-colors duration-300`}
          >
            {num.value}
          </div>
        );
      })}
    </div>
  );
};

const SeatAvailability = ({ totalSeats, availableSeats }) => {
  const seats = Array(totalSeats).fill(2);

  return (
    <div className="absolute bottom-6 left-4 right-0 flex justify-start gap-1 ">
      {seats.map((_, index) => {
        const isAvailable = index < availableSeats;

        return (
          <div
            key={index}
            className={`w-4 h-4 rounded-full border ${
              isAvailable ? "bg-white" : "bg-gray-700"
            } border-gray-600`}
          />
        );
      })}
    </div>
  );
};

const CasinoCard = ({
  title,
  image,
  specialTag,
  tagColor,
  isNew,
  numbers,
  showNumbers,
  seats,
  bettingRange,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-36">
          <div className="w-full h-full relative">
            <img
              src={image}
              alt={title}
              className={`w-full h-full object-cover transition-all duration-300 ${
                isHovered ? "blur-sm" : ""
              }`}
            />
          </div>

          {isNew && (
            <div className="absolute top-28 right-0 bg-yellow-600 text-white px-2 py-0.5 text-xs font-bold">
              NEW
            </div>
          )}

          {specialTag && (
            <div
              className={`absolute top-0 right-0 transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <SpecialTag text={specialTag} color={tagColor} />
            </div>
          )}

          {!isHovered && showNumbers && numbers && numbers.length > 0 && (
            <NumberDisplay numbers={numbers} />
          )}

          {!isHovered && seats && (
            <SeatAvailability
              totalSeats={seats.total}
              availableSeats={seats.available}
            />
          )}

          {!isHovered && bettingRange && (
            <div className="absolute   bottom-0 left-4 right-0  bg-opacity-70 text-white text-sm font-bold py-1 px-2 text-left">
              {bettingRange}
            </div>
          )}
        </div>

        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 
          ${isHovered ? "opacity-100" : "opacity-0"} 
          ${isHovered ? "scale-100" : "scale-90"}`}
        >
          <button className="px-6 py-2 font-semibold text-sm text-white bg-yellow-500 transition-all duration-300">
            PLAY NOW!
          </button>
        </div>
      </div>

      <div className="text-white py-1 px-2 text-left font-bold text-sm truncate">
        {title}
      </div>
    </div>
  );
};

CasinoCard.defaultProps = {
  specialTag: "",
  tagColor: "",
  isNew: false,
  numbers: [],
  showNumbers: false,
  seats: null,
  bettingRange: "",
};

const generateRandomNumbers = () => {
  const quantity = Math.floor(Math.random() * 4) + 3;

  const numbers = [];
  for (let i = 0; i < quantity; i++) {
    const value = Math.floor(Math.random() * 36);
    numbers.push({ value });
  }

  return numbers;
};

// Main grid component
export default function Top20CanliCasino() {
  const [showAllGames, setShowAllGames] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [gamesWithNumbers, setGamesWithNumbers] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    const casinoGames = [
      {
        title: "Fireball Roulette",
        image:img31,
        specialTag: "Evolution",
        tagColor: "bg-yellow-500",
        isNew: false,
        showNumbers: false,
      },
      {
        title: "Lightning Storm",
        image:img32,
        specialTag: "Evolution",
        tagColor: "bg-yellow-500",
        isNew: true,
        showNumbers: false,
      },
      {
        title: "Türkçe Rulet",
        image:img33,
        specialTag: "Evolution",
        tagColor: "bg-yellow-500",
        isNew: false,
        showNumbers: true,
        bettingRange: "€0.5-100,000",
      },
      {
        title: "Lightning Rulet",
        image:img34,
        specialTag: "Evolution",
        tagColor: "bg-yellow-500",
        isNew: false,
        showNumbers: true,
        bettingRange: "€0.05-100,000",
      },
      {
        title: "Crazy Time",
        image:img35,
        specialTag: "Evolution",
        tagColor: "bg-yellow-500",
        isNew: false,
        showNumbers: false,
      },
      {
        title: "XXXTreme",
        image:img36,
        specialTag: "Evolution",
        tagColor: "bg-yellow-500",
        isNew: false,
        showNumbers: true,
        bettingRange: "€0.2-100,000",
      },
      {
        title: "Auto-Roulette",
        image:img37,
        specialTag: "Evolution",
        tagColor: "bg-yellow-500",
        isNew: false,
        showNumbers: true,
        bettingRange: "€0.1-100,000",
      },
     
    ];

    // Add random numbers to each game
    const updatedGames = casinoGames.map((game) => ({
      ...game,
      numbers: generateRandomNumbers(),
    }));

    setGamesWithNumbers(updatedGames);

    const updateInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * updatedGames.length);

      setGamesWithNumbers((prev) => {
        const newGames = [...prev];

        if (newGames[randomIndex] && newGames[randomIndex].showNumbers) {
          const numberIndex = Math.floor(
            Math.random() * newGames[randomIndex].numbers.length
          );
          if (newGames[randomIndex].numbers[numberIndex]) {
            newGames[randomIndex].numbers[numberIndex].value = Math.floor(
              Math.random() * 36
            );
          }
        }
        return newGames;
      });
    }, 1000);
    return () => clearInterval(updateInterval);
  }, []);

  const isDesktop = windowWidth >= 1024;
  const displayGames =
    isDesktop || showAllGames ? gamesWithNumbers : gamesWithNumbers.slice(0, 4);

  return (
    <div className="h-auto lg:p-8 md:p-8 p-4 bg-[#1e1e20] text-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl md:text-2xl font-bold ml-4">TOP 20 CANLI CASINO</h1>
        <button className="text-gray-400 hover:text-white flex items-center text-sm md:text-lg font-semibold lg:block hidden">
          View all 20
          <span className="ml-1">›</span>
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-x-3 gap-y-4">
        {displayGames.map((game, index) => (
          <CasinoCard
            key={index}
            title={game.title}
            image={game.image}
            specialTag={game.specialTag}
            tagColor={game.tagColor}
            isNew={game.isNew}
            numbers={game.numbers}
            showNumbers={game.showNumbers}
            seats={game.seats}
            bettingRange={game.bettingRange}
          />
        ))}
      </div>

      {!showAllGames && (
        <div className="flex justify-center mt-6 lg:hidden">
          <button
            onClick={() => setShowAllGames(true)}
            className="px-8 sm:px-18 py-2 md:px-32 md:py-3 bg-transparent border-yellow-500 border-2 hover:text-yellow-300 hover:border-yellow-300 text-yellow-500 font-semibold rounded-md transition-colors duration-300"
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
}
