import React from 'react';
import { Trophy } from 'lucide-react';
import Img from '@/assets/tournament/tournament-card.webp'

const TournamentCard = () => {
  return (
    <div className="max-w-lg mx-auto bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-lg overflow-hidden shadow-lg">
      {/* Image Section */}
      <div className="relative">
        <img 
          src={Img} 
          alt="Tournament Banner" 
          className="w-full h-56 object-cover"
        />
        
        
        {/* Ongoing Label */}
        <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded text-sm">
          Ongoing
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-4">
        {/* Title */}
        <div>
          <h3 className="text-lg font-bold text-gray-800">
            Jojobet 35.000.000₺ Ödüllü 19-25 Mayıs Haftalık Slot Turnuvası
          </h3>
          <p className="text-sm text-gray-700 mt-1">
            19 May, Started at: 02:30
          </p>
          <p className="text-sm text-gray-700">
            Score Criteria: Turnover (min bet count 5)
          </p>
          <p className="text-sm text-gray-700">
            You can see the games <span className="underline cursor-pointer">here</span>
          </p>
        </div>

        {/* Prizes Section */}
        <div>
          <div className="flex items-center mb-3">
            <Trophy className="w-5 h-5 text-yellow-600 mr-2" />
            <span className="font-semibold text-gray-800">Prizes</span>
          </div>
          
          <div className="grid grid-cols-3 gap-2 text-sm">
            <div><strong>1 place:</strong> ₺3.500.000</div>
            <div><strong>2 place:</strong> ₺2.500.000</div>
            <div><strong>3 place:</strong> ₺2.000.000</div>
            <div><strong>4 place:</strong> ₺1.250.000</div>
            <div><strong>5 place:</strong> ₺1.000.000</div>
            <div><strong>6 place:</strong> ₺750.000</div>
            <div><strong>7 place:</strong> ₺600.000</div>
            <div><strong>8-10 place:</strong> ₺500.000</div>
            <div><strong>11-12 place:</strong> ₺350.000</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-700">
            <span>19 May, 02:30, 2025</span>
            <span>25 May, 02:30, 2025</span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
          </div>
          <div className="text-right text-sm text-gray-700 font-medium">
            2 DAYS LEFT
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-3 pt-2">
          <button className="flex-1 bg-transparent border-2 border-gray-800 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Details
          </button>
          <button className="flex-1 bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
            ENROLLED
          </button>
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;