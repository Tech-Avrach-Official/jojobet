import { useState } from "react";
import PropTypes from "prop-types";
const SpecialTag = ({ text, color }) => {
  return (
    <div
      className={`px-1.5 py-0.5 rounded text-xs text-white font-semibold ${color}`}
    >
      {text}
    </div>
  );
};

SpecialTag.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

const CasinoCard = ({ title, image, specialTag, tagColor, isNew }) => {
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

CasinoCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  specialTag: PropTypes.string,
  tagColor: PropTypes.string,
  isNew: PropTypes.bool,
};

// Default props
CasinoCard.defaultProps = {
  specialTag: "",
  tagColor: "",
  isNew: false,
};

// Main grid component
export default function Amusnet() {
  const [showAllGames, setShowAllGames] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useState(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const casinoGames = [
    {
      title: "Jojo Space",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Jojobet Space Roulette",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Easter Frog Dice",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "40 Burning Hot",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Flaming Hot Extreme",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Shining crown",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "40 Burning Hot 6 Reels",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "100 Super Hot",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Hot Deco",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "100 Burning Hot",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "20 Golden Coins",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "40 Extra Crown 6 Reels",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: true,
    },
    {
      title: "100 Extra Crown",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: true,
    },
    {
      title: "Extra Crown Classic Dice",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: true,
    },
  ];

  const isDesktop = windowWidth >= 1024;
  const displayGames =
    isDesktop || showAllGames ? casinoGames : casinoGames.slice(0, 4);

  return (
    <div className="h-auto lg:p-8 md:p-8 p-4 bg-[#191919] text-white">
      <div className="flex justify-between items-center mb-4 ">
        <h1 className="text-xl md:text-2xl font-bold ml-4">AMUSNET</h1>
        <button className="text-gray-400 hover:text-white flex items-center text-sm md:text-lg font-semibold lg:block hidden">
          View all 488
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
          />
        ))}
      </div>

      {!showAllGames && (
        <div className="flex justify-center mt-6 lg:hidden">
          <button
            onClick={() => setShowAllGames(true)}
            className="px-8 sm:px-18 py-2 md:px-32 md:py-3 bg-transparent  border-yellow-500 border-2  hover:text-yellow-300   hover:border-yellow-300 text-yellow-500 font-semibold rounded-md transition-colors duration-300"
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
}