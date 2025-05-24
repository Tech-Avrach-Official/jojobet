import React, { useState } from 'react';
import TournamentCard from './components/TournamentCard';
import Navbar from '@/component/Navbar';
import LiveGameCarousel from '../LiveGames/Components/LiveGameCarousel';

const Tournaments = () => {
  const [activeButton, setActiveButton] = useState('All');
  const buttons = ['All', 'Scheduled', 'Ongoing', 'Finished'];

  const shouldShowTournaments =
    activeButton === 'All' || activeButton === 'Scheduled' || activeButton === 'Finished';

  return (
    <>
      <Navbar />
      <LiveGameCarousel />

      <div className="bg-gray-900 min-h-screen text-white">
        {/* Header and Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-8 md:px-12 py-6 sm:py-10 gap-4 sm:gap-0">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">Tournaments</h1>

          <div className="flex flex-wrap gap-2">
            {buttons.map((button) => (
              <button
                key={button}
                onClick={() => setActiveButton(button)}
                className={`px-4 py-2 rounded-md border text-sm sm:text-base transition-all duration-200 ${
                  activeButton === button
                    ? 'border-yellow-500 bg-gray-800 text-yellow-400'
                    : 'border-gray-600 bg-gray-800 hover:bg-white hover:text-gray-900'
                }`}
              >
                {button}
              </button>
            ))}
          </div>
        </div>

        {/* Tournament Content */}
        <div className="px-4 sm:px-8 md:px-12">
          {shouldShowTournaments ? (
            <TournamentCard />
          ) : (
            <h2 className="text-center text-base sm:text-lg mt-8 sm:mt-10 text-gray-400">
              No tournament found
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Tournaments;
