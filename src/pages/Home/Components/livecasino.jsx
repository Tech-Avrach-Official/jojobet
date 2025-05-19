





// import { useState } from "react";
// import * as PropTypes from "prop-types";
// // Seat occupancy indicator component
// const SeatIndicator = ({ occupied }) => {
//   return (
//     <div
//       className={`w-4 h-4 rounded-full flex items-center justify-center mx-px ${
//         occupied ? "bg-white" : "bg-gray-800 border border-white/20"
//       }`}
//     >
//       <svg
//         className={`w-2.5 h-2.5 ${occupied ? "text-black" : "text-white/30"}`}
//         viewBox="0 0 24 24"
//         fill="currentColor"
//       >
//         <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
//       </svg>
//     </div>
//   );
// };

// // Casino card component
// const CasinoCard = ({
//   title,
//   betRange,
//   seats,
//   bgImage,
//   hasEvolution,
//   isTableFull,
//   highlightCard,
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="relative overflow-hidden"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Background Image */}
//       <div
//         className={`relative h-36 transition-all duration-300 ${
//           isHovered ? "blur-sm" : ""
//         }`}
//       >
//         {/* Game image */}
//         <img src={bgImage} alt={title} className="w-full h-full object-cover" />
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>

//         {/* Evolution logo - only visible when highlighted or on hover */}
//         {hasEvolution && (
//           <div
//             className={`absolute top-1 right-1 px-1.5 py-0.5 rounded text-xs text-white font-semibold 
//             ${highlightCard ? "bg-yellow-500" : "bg-yellow-500 opacity-0"} 
//             ${isHovered ? "opacity-100 z-10" : ""} 
//             transition-all duration-300`}
//           >
//             Evolution
//           </div>
//         )}

//         {/* Table status */}
//         {isTableFull && (
//           <div className="absolute top-1/3 left-0 right-0 text-center text-white text-xs font-bold">
//             TABLE FULL - BET BEHIND
//           </div>
//         )}

//         {/* Seats availability */}
//         <div className="absolute bottom-9 left-0 right-0 flex justify-center">
//           {seats.map((occupied, index) => (
//             <SeatIndicator key={index} occupied={occupied} />
//           ))}
//         </div>

//         {/* Bet range */}
//         <div className="absolute bottom-2 left-6 text-white font-bold text-sm">
//           {betRange}
//         </div>
//       </div>

//       {/* Title - left aligned without background */}
//       <div className="text-white py-1 px-2 text-left font-bold text-ms ">
//         {title}
//       </div>

//       {/* Play now button that appears on hover */}
//       <div
//         className={`absolute inset-0 flex items-center justify-center transition-all duration-300 
//         ${isHovered || highlightCard ? "opacity-100" : "opacity-0 bg-black/50"} 
//         ${isHovered ? "scale-100" : "scale-90"}`}
//       >
//         <button className="px-6 py-2 font-semibold text-sm text-white  bg-yellow-500 transition-all duration-300">
//           PLAY NOW!
//         </button>
//       </div>
//     </div>
//   );
// };

// // Prop types for components 
// CasinoCard.propTypes = {
//   title: PropTypes.string,
//   betRange: PropTypes.string,
//   seats: PropTypes.arrayOf(PropTypes.bool),
//   bgImage: PropTypes.string,
//   hasEvolution: PropTypes.bool,
//   isTableFull: PropTypes.bool,
//   highlightCard: PropTypes.bool,
// };

// CasinoCard.defaultProps = {
//   betRange: "",
//   seats: [false, false, false, true, true, true],
//   bgImage: "/api/placeholder/400/320",
//   hasEvolution: true,
//   isTableFull: false,
//   highlightCard: false,
// };

// SeatIndicator.propTypes = {
//   occupied: PropTypes.bool,
// };

// SeatIndicator.defaultProps = {
//   occupied: false,
// };

// // Main grid component
// export default function TurkishCasinoGrid() {
//   const casinoGames = [
//     {
//       title: "Jojo VIP BJ1",
//       betRange: "₺500-2,000,000",
//       seats: [false, false, false, true, true, true],
//       bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//     },
//     {
//       title: "Jojo VIP BJ2",
//       betRange: "₺500-2,000,000",
//       seats: [false, false, false, false, false, false],
//       bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//     },
//     {
//       title: "Jojo Blackjack3",
//       betRange: "₺200-2,000,000",
//       highlightCard: true,
//       seats: [true, true, true, true, true, true],
//       bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//     },
//     {
//       title: "Jojo Blackjack4",
//       betRange: "₺200-2,000,000",
//       isTableFull: true,
//       seats: [true, true, true, true, true, true],
//       bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//     },
//     {
//       title: "Jojo Blackjack5",
//       betRange: "₺200-2,000,000",
//       seats: [false, false, true, true, true, false],
//       bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//     },
//     {
//       title: "Jojo Blackjack6",
//       betRange: "₺50-2,000,000",
//       seats: [true, true, true, false, true, true],
//       bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//     },
//     {
//       title: "Jojo Blackjack7",
//       betRange: "₺50-2,000,000",
//       seats: [true, false, true, true, true, true],
//       bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//     },
//     {
//       title: "Jojo Blackjack8",
//       betRange: "₺50-2,000,000",
//       seats: [false, false, false, false, false, true],
//       bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//     },
//     {
//       title: "Jojo Blackjack9",
//       betRange: "₺50-2,000,000",
//       seats: [false, false, true, true, false, false],
//       bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//     },
//     {
//       title: "Jojo Blackjack10",
//       betRange: "₺200-2,000,000",
//       seats: [false, false, false, true, false, true],
//       bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//     },
//     {
//       title: "Jojo Blackjack11",
//       betRange: "₺100-2,000,000",
//       seats: [false, false, true, false, true, false],
//       bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//     },
//     {
//       title: "Jojo Blackjack12",
//       betRange: "₺100-2,000,000",
//       seats: [true, false, false, true, false, true],
//       bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//     },
//     {
//       title: "Jojo Blackjack13",
//       betRange: "₺50-2,000,000",
//       seats: [false, true, false, true, true, false],
//       bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//     },
//     {
//       title: "Jojobet FP Blackjack",
//       betRange: "",
//       hasEvolution: true,
//       bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
//     },
//   ];

//   return (
//     <div className="h-auto lg:p-12 md:p-8  p-4 bg-[#191919] text-white ">
//       {/* Header with "See all" button */}
//       <div className="flex justify-between items-center mb-10">
//         <h1 className="text-lg font-bold">TURKİSH CASİNO</h1>
//         <button className="text-gray-400 hover:text-white flex items-center text-md font-semibold ">
//           See all{" "}
//           <span className="ml-1 bg-gray-800 px-1.5 py-0.5 rounded-sm">60</span>
//           <span className="ml-1">›</span>
//         </button>
//       </div>

//       {/* Casino card grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-2">
//         {casinoGames.map((game, index) => (
//           <CasinoCard
//             key={index}
//             title={game.title}
//             betRange={game.betRange}
//             seats={game.seats}
//             bgImage={game.bgImage}
//             isTableFull={game.isTableFull}
//             hasEvolution={game.hasEvolution}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

















import { useState } from "react";
import * as PropTypes from "prop-types";

// Seat occupancy indicator component
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

// Casino card component
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
      {/* Background Image */}
      <div
        className={`relative h-36 transition-all duration-300 ${
          isHovered ? "blur-sm" : ""
        }`}
      >
        {/* Game image */}
        <img src={bgImage} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>

        {/* Evolution logo - only visible when highlighted or on hover */}
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

        {/* Table status */}
        {isTableFull && (
          <div className="absolute top-1/3 left-0 right-0 text-center text-white text-xs font-bold">
            TABLE FULL - BET BEHIND
          </div>
        )}

        {/* Seats availability */}
        <div className="absolute bottom-9 left-0 right-0 flex justify-center">
          {seats.map((occupied, index) => (
            <SeatIndicator key={index} occupied={occupied} />
          ))}
        </div>

        {/* Bet range */}
        <div className="absolute bottom-2 left-6 text-white font-bold text-sm">
          {betRange}
        </div>
      </div>

      {/* Title - left aligned without background */}
      <div className="text-white py-1 px-2 text-left font-bold text-ms ">
        {title}
      </div>

      {/* Play now button that appears on hover */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 
        ${isHovered || highlightCard ? "opacity-100" : "opacity-0 bg-black/50"} 
        ${isHovered ? "scale-100" : "scale-90"}`}
      >
        <button className="px-6 py-2 font-semibold text-sm text-white  bg-yellow-500 transition-all duration-300">
          PLAY NOW!
        </button>
      </div>
    </div>
  );
};

// Prop types for components 
CasinoCard.propTypes = {
  title: PropTypes.string,
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

SeatIndicator.propTypes = {
  occupied: PropTypes.bool,
};

SeatIndicator.defaultProps = {
  occupied: false,
};

// Main grid component
export default function TurkishCasinoGrid() {
  const [showAllGames, setShowAllGames] = useState(false);
  
  const casinoGames = [
    {
      title: "Jojo VIP BJ1",
      betRange: "₺500-2,000,000",
      seats: [false, false, false, true, true, true],
      bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
    },
    {
      title: "Jojo VIP BJ2",
      betRange: "₺500-2,000,000",
      seats: [false, false, false, false, false, false],
      bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
    },
    {
      title: "Jojo Blackjack3",
      betRange: "₺200-2,000,000",
  
      seats: [true, true, true, true, true, true],
      bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
    },
    {
      title: "Jojo Blackjack4",
      betRange: "₺200-2,000,000",
      isTableFull: true,
      seats: [true, true, true, true, true, true],
      bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
    },
    {
      title: "Jojo Blackjack5",
      betRange: "₺200-2,000,000",
      seats: [false, false, true, true, true, false],
      bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
    },
    {
      title: "Jojo Blackjack6",
      betRange: "₺50-2,000,000",
      seats: [true, true, true, false, true, true],
      bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
    },
    {
      title: "Jojo Blackjack7",
      betRange: "₺50-2,000,000",
      seats: [true, false, true, true, true, true],
      bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
    },
    {
      title: "Jojo Blackjack8",
      betRange: "₺50-2,000,000",
      seats: [false, false, false, false, false, true],
      bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
    },
    {
      title: "Jojo Blackjack9",
      betRange: "₺50-2,000,000",
      seats: [false, false, true, true, false, false],
      bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
    },
    {
      title: "Jojo Blackjack10",
      betRange: "₺200-2,000,000",
      seats: [false, false, false, true, false, true],
      bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
    },
    {
      title: "Jojo Blackjack11",
      betRange: "₺100-2,000,000",
      seats: [false, false, true, false, true, false],
      bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
    },
    {
      title: "Jojo Blackjack12",
      betRange: "₺100-2,000,000",
      seats: [true, false, false, true, false, true],
      bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
    },
    {
      title: "Jojo Blackjack13",
      betRange: "₺50-2,000,000",
      seats: [false, true, false, true, true, false],
      bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
    },
    {
      title: "Jojobet FP Blackjack",
      betRange: "",
      hasEvolution: true,
      bgImage: "https://cloudcdn.owcontent.com/games/pragmaticplay/2201.jpg?221746438614000",
    },
  ];

  // Display only 4 games on mobile and tablet if not showing all
  const displayedGames = showAllGames ? casinoGames : casinoGames.slice(0, 4);
  const totalGames = casinoGames.length;

  return (
    <div className="h-auto lg:p-12 md:p-8 p-4 bg-[#191919] text-white">
      {/* Header with "See all" button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="lg:text-lg  text-2xl font-bold">ENGLISH CASINO</h1>
        <button className="text-gray-400 hover:text-white flex items-center text-md font-semibold">
          See all{" "}
          <span className="ml-1 bg-gray-800 px-1.5 py-0.5 rounded-sm">{totalGames}</span>
          <span className="ml-1">›</span>
        </button>
      </div>

      {/* Casino card grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-2">
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

      {/* Show more button */}
      {!showAllGames && (
        <div className="mt-4 flex justify-center">
          <button 
            onClick={() => setShowAllGames(true)}
            className="px-12 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-sm"
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
}