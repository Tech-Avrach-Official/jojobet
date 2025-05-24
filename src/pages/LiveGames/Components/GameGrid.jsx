import { useState } from "react";
import PropTypes from "prop-types";
import img1 from '@/assets/gameImages/1.jpg';
import img2 from '@/assets/gameImages/2.jpg';
import img3 from '@/assets/gameImages/3.jpg';
import img4 from '@/assets/gameImages/4.png';
import img5 from '@/assets/gameImages/5.png';
import img6 from '@/assets/gameImages/6.jpg';
import img7 from '@/assets/gameImages/7.jpg';
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
import img36 from '@/assets/gameImages/36.jpg';
import img37 from '@/assets/gameImages/37.jpg';
import img38 from '@/assets/gameImages/38.jpg';
import img39 from '@/assets/gameImages/39.jpg';
import img40 from '@/assets/gameImages/40.jpg';
import img41 from '@/assets/gameImages/41.jpg';
import img42 from '@/assets/gameImages/42.jpg';
import img43 from '@/assets/gameImages/43.png';
import img44 from '@/assets/gameImages/44.jpg';
import img45 from '@/assets/gameImages/45.jpg';
import img46 from '@/assets/gameImages/46.jpg';
import img48 from '@/assets/gameImages/48.jpg';
import img49 from '@/assets/gameImages/49.jpg';
import img50 from '@/assets/gameImages/50.jpg';
import img51 from '@/assets/gameImages/51.jpg';
import img52 from '@/assets/gameImages/52.jpg';
import img53 from '@/assets/gameImages/53.png';
import img54 from '@/assets/gameImages/54.jpg';
import img55 from '@/assets/gameImages/55.jpg';
import img56 from '@/assets/gameImages/56.jpg';
import { Link } from "react-router-dom";
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
export default function GameGrid() {
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
      image: img1,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Jojobet Space Roulette",
      image: img2,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Easter Frog Dice",
      image: img3,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "40 Burning Hot",
      image: img4,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Flaming Hot Extreme",
      image: img5,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Shining Crown",
      image: img6,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "40 Burning Hot 6 Reels",
      image: img7,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "100 Super Hot",
      image: img8,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Hot Deco",
      image: img9,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "100 Burning Hot",
      image: img10,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "20 Golden Coins",
      image: img11,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "40 Extra Crown 6 Reels",
      image: img12,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: true,
    },
    {
      title: "100 Extra Crown",
      image: img13,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: true,
    },
    {
      title: "Extra Crown Classic Dice",
      image: img14,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: true,
    },
    // Continue from 15 to 56
    {
      title: "Diamond Dynasty Slots",
      image: img15,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Neon Night Roulette",
      image: img16,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Pharaoh's Fortune Dice",
      image: img17,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Cosmic Crash",
      image: img18,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Golden Tiger Reels",
      image: img19,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Lucky Leprechaun Spin",
      image: img20,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Electric Eruption",
      image: img21,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Mystic Moon Magic",
      image: img22,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Pirate's Plunder",
      image: img23,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Galaxy Gold Rush",
      image: img24,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Wild West Winnings",
      image: img25,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Jungle Jackpot",
      image: img26,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Dragon's Hoard",
      image: img27,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Arctic Adventure",
      image: img28,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Samurai Spins",
      image: img29,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Viking Victory",
      image: img30,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Cyber Spin City",
      image: img31,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Mythical Treasures",
      image: img32,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Starburst Riches",
      image: img33,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Golden Pharaoh's Tomb",
      image: img34,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Lucky 7 Revolution",
      image: img35,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Fruit Mania Deluxe",
      image: img36,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Space Miner's Fortune",
      image: img37,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Emerald Empire",
      image: img38,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Royal Roulette Elite",
      image: img39,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Diamond Dynasty Pro",
      image: img40,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Buffalo Stampede",
      image: img41,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Book of Wonders",
      image: img42,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Cleopatra's Fortune",
      image: img43,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Wolf Gold Mega",
      image: img44,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Gates of Olympus X",
      image: img45,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Sweet Bonanza 1000",
      image: img46,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    // {
    //   title: "Big Bass Bonanza",
    //   image: img47,
    //   specialTag: "Amusnet",
    //   tagColor: "bg-yellow-500",
    //   isNew: Math.random() < 0.2,
    // },
    {
      title: "Starlight Princess",
      image: img48,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Firebird Spirit",
      image: img49,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Gems Bonanza 2",
      image: img50,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Reactoonz 2",
      image: img51,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Money Train 3",
      image: img52,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Dog House Megaways",
      image: img53,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Jammin' Jars 2",
      image: img54,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Rise of Olympus",
      image: img55,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
    {
      title: "Hades Gigablox",
      image: img56,
      specialTag: "Amusnet",
      tagColor: "bg-yellow-500",
      isNew: Math.random() < 0.2,
    },
  ];

  const isDesktop = windowWidth >= 1024;
  const displayGames =
    isDesktop || showAllGames ? casinoGames : casinoGames.slice(0, 4);

  return (
    <div className="h-auto lg:p-8 md:p-8 p-4 bg-[#1e1e20] text-white">
      <div className="flex justify-between items-center mb-4 ">
        {/* <h1 className="text-xl md:text-2xl font-bold ml-4">AMUSNET</h1>
        <button className="text-gray-400 hover:text-white flex items-center text-sm md:text-lg font-semibold lg:block hidden">
          View all 488
          <span className="ml-1">›</span>
        </button> */}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-x-3 gap-y-4">
        {displayGames.map((game, index) => (
          <Link to="/game-screen" key={index}>
            <CasinoCard
              title={game.title}
              image={game.image}
              specialTag={game.specialTag}
              tagColor={game.tagColor}
              isNew={game.isNew}
            />
          </Link>
        ))}
      </div>

      

      {/* {showAllGames && ( */}
        <div className="flex justify-center mt-6">
          <button
            // onClick={() => setShowAllGames(true)}
            className="px-8 sm:px-18 py-2 md:px-32 md:py-3 bg-transparent  border-yellow-500 border-2  hover:text-yellow-300   hover:border-yellow-300 text-yellow-500 font-semibold rounded-md transition-colors duration-300"
          >
            Show more
          </button>
        </div>
      {/* )} */}
    </div>
  );
}