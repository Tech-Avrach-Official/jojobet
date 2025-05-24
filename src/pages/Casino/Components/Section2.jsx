import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import img21 from "../../../assets/gameImages/11.jpg"
import img22 from "../../../assets/gameImages/20.png"
import img23 from "../../../assets/gameImages/6.jpg"
import img24 from "../../../assets/gameImages/19.jpg"
import img25 from "../../../assets/gameImages/25.jpg"
import img26 from "../../../assets/gameImages/27.jpg"
import img27 from "../../../assets/gameImages/7.jpg"

import img28 from "../../../assets/gameImages/10.jpg"
import img29 from "../../../assets/gameImages/2.jpg"
import img30 from "../../../assets/gameImages/36.jpg"
import img31 from "../../../assets/gameImages/9.jpg"
import img32 from "../../../assets/gameImages/15.jpg"
import img33 from "../../../assets/gameImages/29.jpg"
import img34 from "../../../assets/gameImages/19.jpg"

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
export default function Section2() {
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
      title: "Sweet Bonanza™",
      image:img21,
      specialTag: "PregamaticPaly",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Gates of Olympus™",
      image:img22,
      specialTag: "PregamaticPaly",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "UFO Galaxy",
      image:img23,
      specialTag: "PregamaticPaly",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Aviator",
      image:img24,
      specialTag: "PregamaticPaly",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Jojo Space",
      image:img25,
      specialTag: "PregamaticPaly",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Jojobet FP Blackjack",
      image:img26,
      specialTag: "PregamaticPaly",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Jojobet FP Roulette",
      image:img27,
      specialTag: "PregamaticPaly",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Gates of Jojobet",
      image:img28,
      specialTag: "PregamaticPaly",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Jojo Bonanza",
      image:img29,
      specialTag: "PregamaticPaly",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Jojobet Princess 1000",
      image:img30,
      specialTag: "PregamaticPaly",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Jojobet High Flyer",
      image:img31,
      specialTag: "PregamaticPaly",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Jojo Bonanza 1000",
      image:img32,
      specialTag: "PregamaticPaly",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Jojo Rush 1000",
      image:img33,
      specialTag: "PregamaticPaly",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Jojobet Space Roulette",
      image:img34,
      specialTag: "PregamaticPaly",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
   
  ];

  const isDesktop = windowWidth >= 1024;
  const displayGames =
    isDesktop || showAllGames ? casinoGames : casinoGames.slice(0, 4);

  return (
    <div className="h-auto lg:p-8 md:p-8 p-4 bg-[#1e1e20] text-white">
      <div className="flex justify-between items-center mb-4">
      <Link >
        <h1 className="text-xl md:text-2xl font-bold ml-4 uppercase hover:text-yellow-500">Jojobet'e Ozel</h1>
        </Link>
        <button className="text-gray-400 hover:text-white flex items-center text-sm md:text-lg font-bold lg:block hidden">
          View all 19
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