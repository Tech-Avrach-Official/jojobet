import React from 'react'
import { Search } from 'lucide-react';


const TopSection = () => {
  return (
     <div className="pb-2 w-full bg-[#1E1E20] border-t-[3px] border-yellow-600 flex items-center text-sm text-white">
      {/* Search Section */}
      <div className="flex items-center px-4 py-2 bg-[#212521] md:min-w-[350px] gap-2">
        <Search size={16} className="text-white" />
        <span className="text-white">Search</span>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 px-4 py-2 items-center text-gray-300 text-[13px] whitespace-nowrap overflow-x-auto">
        <span className="text-white border-b-[2px] border-yellow-500 pb-[1px]">Live</span>
        <span className="text-gray-300">|</span>
        <span className="hover:text-white cursor-pointer">Event View</span>
        <span className="text-gray-300">|</span>
        <span className="hover:text-white cursor-pointer">Next Events</span>
        <span className="text-gray-300">|</span>
        <span className="hover:text-white cursor-pointer">Popular Events</span>
        <span className="text-gray-300">|</span>
        <span className="hover:text-white cursor-pointer">Results Page</span>
        <span className="text-gray-300">|</span>
        <span className="hover:text-white cursor-pointer">Live Calendar</span>
      </div>
    </div>
  )
}

export default TopSection