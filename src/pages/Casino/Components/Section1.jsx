import React from 'react';
import img2  from "../../../assets/gameImages/6.jpg"
import img3  from "../../../assets/gameImages/2.jpg"
import img5  from "../../../assets/gameImages/55.jpg"
import img6  from "../../../assets/gameImages/15.jpg"
import img7  from "../../../assets/gameImages/26.jpg"
import img8  from "../../../assets/gameImages/37.jpg"

const Section1 = () => {
  // Random gaming images
 
  const games = [
    { id: 1, image:img2,     title: 'Racing Game' },
    { id: 2, image:img3,     title: 'Strategy Game' },
    { id: 3, image:img5  ,   title: 'Adventure Game' },
    { id: 4, image: img8  ,  title: 'Action Game' },
    { id: 5, image:  img2  , title: 'Puzzle Game' },
    { id: 6, image:  img8 ,  title: 'Sports Game' },
    { id: 7, image: img2 ,   title: 'RPG Game' },
    { id: 8, image: img5,    title: 'Simulation Game' },
  ];

  return (
    <div className=" h-auto py-24 px-10 relative overflow-hidden" style={{ backgroundColor: '#1e1e20' }}>
      {/* Background Images with Blur */}
      <div className="absolute inset-0">
        <div className="w-full m-10 flex item-center  overflow-hidden">
          {games.map((game, index) => (
            <div 
              key={index} 
              className="flex-2 item-center h-auto"
              style={{ minWidth: '300px' }}
            >
              <img 
                src={game.image} 
                alt={game.title}
                className="w-full h-3/4 object-contain"
                style={{ filter: 'blur(1px)' }}
              />
            </div>
          ))}
        </div>
        
        {/* Dark overlay for proper contrast */}
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: 'rgba(30, 30, 32,0.90 )' }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-auto px-4">
        
        

        {/* Central Icon/Logo */}
        <div className=" sm:mb-6">
          <div className="relative">
            {/* Hexagonal background */}
            <div 
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center "
              style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
              }}
            >
              {/* Inner icon */}
              <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-black rounded-sm flex items-center justify-center transform rotate-45">
                <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 bg-cyan-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Play Random Game Button */}
       <div className="relative">
      <button 
        className="animated-bg mt-4 text-white font-bold py-1 px-8 md:py-1 md:px-12 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-xl border-2 border-green-900"
        style={{
          boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)'
        }}
      >
        <span className="text-xs md:text-sm font-bold tracking-wide  ">PLAY A RANDOM GAME</span>
      </button>
      
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animated-bg {
          background: linear-gradient(135deg, #012A0D, #16a34a, #22c55e, #012A0D);
          background-size: 300% 300%;
          animation: gradientMove 3s ease infinite;
        }
        
        .animated-bg:hover {
          animation-duration: 1.5s;
        }
      `}</style>
    </div>
      </div>

      {/* Additional styling for exact match */}
      <style jsx>{`
        @media (max-width: 640px) {
          .backdrop-blur-sm {
            backdrop-filter: blur(8px);
          }
        }
        
        @media (min-width: 641px) {
          .backdrop-blur-sm {
            backdrop-filter: blur(12px);
          }
        }
        
        /* Custom hexagon shape */
        .hexagon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          position: relative;
          margin: 0 auto;
        }
        
        .hexagon:before,
        .hexagon:after {
          content: "";
          position: absolute;
          width: 0;
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
        }
        
        .hexagon:before {
          bottom: 100%;
          border-bottom: 23px solid #FFD700;
        }
        
        .hexagon:after {
          top: 100%;
          border-top: 23px solid #FFA500;
        }
      `}</style>
    </div>
  );
};


export default Section1;