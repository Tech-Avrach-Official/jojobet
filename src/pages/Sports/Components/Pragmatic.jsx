
import { useState } from "react";
import PropTypes from "prop-types";
import img8 from '@/assets/gameImages/8.png';
import img9 from '@/assets/gameImages/9.jpg';
import img10 from '@/assets/gameImages/10.jpg';
import img11 from '@/assets/gameImages/11.jpg';
import img12 from '@/assets/gameImages/12.jpg';
import img13 from '@/assets/gameImages/13.jpg';
import img14 from '@/assets/gameImages/14.jpg';
import img15 from '@/assets/gameImages/15.jpg';
import img16 from '@/assets/gameImages/16.jpg';
import img17 from '@/assets/gameImages/17.png';
import img18 from '@/assets/gameImages/18.png';
import img19 from '@/assets/gameImages/19.jpg';
import img20 from '@/assets/gameImages/20.png';
import img21 from '@/assets/gameImages/21.jpg';
import img22 from '@/assets/gameImages/22.jpg';
import img23 from '@/assets/gameImages/23.png';
import img24 from '@/assets/gameImages/24.jpg';
import img25 from '@/assets/gameImages/25.jpg';
import img26 from '@/assets/gameImages/26.jpg';
import img27 from '@/assets/gameImages/27.jpg';
import img28 from '@/assets/gameImages/28.jpg';
import img29 from '@/assets/gameImages/29.jpg';
import img30 from '@/assets/gameImages/30.jpg';
import img31 from '@/assets/gameImages/31.jpg';
import img32 from '@/assets/gameImages/32.jpg';
import img33 from '@/assets/gameImages/33.png';
import img34 from '@/assets/gameImages/34.jpg';
import img35 from '@/assets/gameImages/35.jpg';

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
              className={`absolute top-1 right-1 transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <SpecialTag className ="rounded-none" text={specialTag} color={tagColor} />
            </div>
          )}
        </div>

        <div
          className={`absolute inset-0  flex items-center justify-center transition-all duration-300 
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
export default function Pregamatic() {
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
      image:
        img9,
      specialTag: "pregamaticPlay" ,
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Gates of Olympus™",
      image:
        img11,
      specialTag: "pregamaticPlay" ,
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Gates of Olympus 1000",
      image:
        img13,
      specialTag: "pregamaticPlay" ,
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Sweet Bonanza 1000",
      image:
        img15,
      specialTag: "pregamaticPlay" ,
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Gates of Jojobet",
      image:
        img17,
      specialTag: "pregamaticPlay" ,
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Jojo Bonanza",
      image:
        img19,
      specialTag: "pregamaticPlay" ,
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Sugar Rush 1000",
      image:
        img21,
      specialTag: "pregamaticPlay", 
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Sugar Rush",
      image:
        img23,
      specialTag: "pregamaticPlay" ,
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Wealthy Frog",
      image:
        img24,
      specialTag:  "pregamaticPlay" ,
          tagColor: "bg-yellow-500",
      isNew: true,
    },
    {
      title: "Jumbo Safari",
      image:
        img25,
      specialTag:  "pregamaticPlay" ,
          tagColor: "bg-yellow-500",
      isNew: true,
    },
    {
      title: "Fishing Legend",
      image:
        img27,
    specialTag:  "pregamaticPlay" ,
          tagColor: "bg-yellow-500",
      isNew: true,
    },
    {
      title: "Lucky Monkey",
      image:
        img29,
   specialTag:  "pregamaticPlay" ,
          tagColor: "bg-yellow-500",
      isNew: true,
    },
    {
      title: "Sleeping Dragon",
      image:
        img31,
    specialTag:  "pregamaticPlay" ,
          tagColor: "bg-yellow-500",
      isNew: true,
    },
    {
      title: "Witch Heart Megaways",
      image:
        img33,
   specialTag:  "pregamaticPlay" ,
          tagColor: "bg-yellow-500",
      isNew: true,
    },
  ];

  const isDesktop = windowWidth >= 1024;
  const displayGames =
    isDesktop || showAllGames ? casinoGames : casinoGames.slice(0, 4);

  return (
    <div className="h-auto lg:p-8 md:p-8 p-4 bg-[#1e1e20] text-white">
      <div className="flex justify-between items-center mb-4 ml-4">
        <h1 className="text-xl md:text-2xl font-bold">PRAGMATIC
</h1>
        <button className="text-gray-400 hover:text-white flex items-center text-sm md:text-lg font-semibold lg:block hidden">
          View all 681
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