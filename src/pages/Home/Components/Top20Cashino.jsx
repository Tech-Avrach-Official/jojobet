// import { useState } from "react";
// import PropTypes from "prop-types";

// // Special tag component that appears on hover (Evolution, Drop & Win, etc.)
// const SpecialTag = ({ text, color }) => {
//   return (
//     <div className={`px-1.5 py-0.5 rounded text-xs text-white font-semibold ${color}`}>
//       {text}
//     </div>
//   );
// };

// // Add prop validation for SpecialTag
// SpecialTag.propTypes = {
//   text: PropTypes.string.isRequired,
//   color: PropTypes.string.isRequired
// };

// // Casino card component
// const CasinoCard = ({
//   title,
//   image,
//   specialTag,
//   tagColor,
//   isNew
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="flex flex-col">
//       {/* Card container - only the image part has hover effects */}
//       <div
//         className="relative overflow-hidden"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* Background Image with blur effect on hover */}
//         <div className="relative h-36">
//           {/* Game image with transition for blur */}
//           <div className="w-full h-full relative">
//             <img
//               src={image}
//               alt={title}
//               className={`w-full h-full object-cover transition-all duration-300 ${isHovered ? 'blur-sm' : ''}`}
//             />
//           </div>

//           {/* NEW badge */}
//           {isNew && (
//             <div className="absolute top-28 right-0 bg-yellow-500 text-white px-2 py-0.5 text-xs font-bold">
//               NEW
//             </div>
//           )}

//           {/* Special tag - only visible on hover */}
//           {specialTag && (
//             <div className={`absolute top-1 right-1 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
//               <SpecialTag text={specialTag} color={tagColor} />
//             </div>
//           )}
//         </div>

//         {/* Play now button that appears on hover */}
//          <div
//           className={`absolute inset-0 flex items-center justify-center transition-all duration-300
//           ${isHovered ? "opacity-100" : "opacity-0"}
//           ${isHovered ? "scale-100" : "scale-90"}`}
//         >
//           <button className="px-6 py-2 font-semibold text-sm text-white bg-yellow-500 transition-all duration-300">
//             PLAY NOW!
//           </button>
//         </div>
//       </div>

//       {/* Game title - separate from card, not affected by hover */}
//       <div className="text-white py-1 px-2 text-left font-bold text-sm">
//         {title}
//          {isNew && (
//             <div className="absolute top-28 right-0 bg-yellow-500 text-white px-2 py-0.5 text-xs font-bold">
//               NEW
//             </div>
//           )}
//       </div>
//     </div>
//   );
// };

// // Add prop validation for CasinoCard
// CasinoCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   specialTag: PropTypes.string,
//   tagColor: PropTypes.string,
//   isNew: PropTypes.bool
// };

// // Default props
// CasinoCard.defaultProps = {
//   specialTag: "",
//   tagColor: "",
//   isNew: false
// };

// // Main grid component
// export default function TopCasino() {
//   const casinoGames = [
//     {
//       title: "Jojo Bonanza 1000",
//      image: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//       specialTag: "PragmaticPlay",
//       tagColor: "bg-yellow-500",
//       isNew: false
//     },
//     {
//       title: "Jojo Rush 1000",
//      image: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//       specialTag: "Drop & Wins",
//       tagColor: "bg-yellow-500",
//       isNew: false
//     },
//     {
//       title: "Jackrabbit Jackpots",
//      image: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//       specialTag: "Evolution",
//       tagColor: "bg-yellow-500",
//       isNew: true
//     },
//     {
//       title: "Jojobet Princess 1000",
//      image: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//       specialTag: "Evolution",
//       tagColor: "bg-yellow-500",
//       isNew: false
//     },
//     {
//       title: "Jojobet FP Blackjack",
//      image: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//       specialTag: "Evolution",
//       tagColor: "bg-yellow-500",
//       isNew: false
//     },
//     {
//       title: "Jojobet FP Roulette",
//      image: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//       specialTag: "Evolution",
//       tagColor: "bg-yellow-500",
//       isNew: false
//     },
//     {
//       title: "Big Bass Bonanza 1000",
//      image: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//       specialTag: "Evolution",
//       tagColor: "bg-yellow-500",
//       isNew: false
//     },
//     {
//       title: "40 Extra Crown 6 Reels",
//      image: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//       specialTag: "Evolution",
//       tagColor: "bg-yellow-500",
//       isNew: true
//     },
//     {
//       title: "Fruit Shop",
//      image: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//       specialTag: "Evolution",
//       tagColor: "bg-yellow-500",
//       isNew: false
//     },
//     {
//       title: "Reel Rush",
//      image: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//       specialTag: "Evolution",
//       tagColor: "bg-yellow-500",
//       isNew: false
//     },
//     {
//       title: "Gods of Troy Megaways",
//      image: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//       specialTag: "Evolution",
//       tagColor: "bg-yellow-500",
//       isNew: false
//     },
//     {
//       title: "Sweet Bonanza™",
//      image: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//       specialTag: "Drop & Wins",
//       tagColor: "bg-yellow-500",
//       isNew: false
//     },
//     {
//       title: "Gates of Jojobet",
//      image: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//       specialTag: "Drop & Wins",
//       tagColor: "bg-yellow-500",
//       isNew: false
//     },
//     {
//       title: "Aviator",
//      image: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//       specialTag: "Evolution",
//       tagColor: "bg-yellow-500",
//       isNew: false
//     }
//   ];

//   return (
//     <div className="h-auto lg:p-8 md:p-8 p-4 bg-[rgb(25,25,25)] text-white">
//       {/* Header with "View all" button */}
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-xl md:text-2xl font-bold">TOP 20 CASINO</h1>
//         <button className="text-gray-400 hover:text-white flex items-center text-sm font-semibold">
//           View all 19
//           <span className="ml-1">›</span>
//         </button>
//       </div>

//       {/* Casino card grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-x-3 gap-y-4">
//         {casinoGames.map((game, index) => (
//           <CasinoCard
//             key={index}
//             title={game.title}
//             image={game.image}
//             specialTag={game.specialTag}
//             tagColor={game.tagColor}
//             isNew={game.isNew}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }








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

      {/* Game title - separate from card, not affected by hover */}
      <div className="text-white py-1 px-2 text-left font-bold text-sm truncate">
        {title}
      </div>
    </div>
  );
};

//  prop validation for CasinoCard
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
export default function TopCasino() {
  const [showAllGames, setShowAllGames] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Effect to handle window resize
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
      title: "Jojo Bonanza 1000",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Drop & Wins",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Jojo Rush 1000",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Drop & Wins",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Jackrabbit Jackpots",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Evolution",
      tagColor: "bg-yellow-500",
      isNew: true,
    },
    {
      title: "Jojobet Princess 1000",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Evolution",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Jojobet FP Blackjack",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Evolution",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Jojobet FP Roulette",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Evolution",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Big Bass Bonanza 1000",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Evolution",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "40 Extra Crown 6 Reels",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Evolution",
      tagColor: "bg-yellow-500",
      isNew: true,
    },
    {
      title: "Fruit Shop",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Evolution",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Reel Rush",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Evolution",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Gods of Troy Megaways",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Evolution",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Sweet Bonanza™",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Drop & Wins",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Gates of Jojobet",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Drop & Wins",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
    {
      title: "Aviator",
      image:
        "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
      specialTag: "Evolution",
      tagColor: "bg-yellow-500",
      isNew: false,
    },
  ];

  // Determine how many games to show based on screen size and showAllGames state
  const isDesktop = windowWidth >= 1024;
  const displayGames =
    isDesktop || showAllGames ? casinoGames : casinoGames.slice(0, 4);

  return (
    <div className="h-auto lg:p-8 md:p-8 p-4 bg-[#191919] text-white">
      {/* Header with "View all" button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl md:text-2xl font-bold">TOP 20 CASINO</h1>
        <button className="text-gray-400 hover:text-white flex items-center text-sm md:text-lg font-bold lg:block hidden">
          View all 19
          <span className="ml-1">›</span>
        </button>
      </div>

      {/* Casino card grid */}
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

      {/* Show more button - only visible on mobile and tablet */}
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
