import React from 'react'
import { Search, PlayCircle, List, CalendarCheck, Link, ClipboardList } from 'lucide-react';


const SportsSubMenu = () => {
  return (
    <div>
        <div className="w-full bg-[#111111] h-14 text-white flex justify-between items-center">
      <div className="h-full px-1 flex items-center justify-center bg-black">
        <Search size={17} />
      </div>
      <div className="flex items-center gap-1 text-[12px]">
        <PlayCircle size={17} />
        <span>Live</span>
      </div>
      <div className="flex items-center gap-1 text-[12px]">
        <List size={17} />
        <span>Sports</span>
      </div>
      <div className="flex items-center gap-1 text-[12px]">
        <CalendarCheck size={17} />
        <span>Today's Match</span>
      </div>
      <div className="flex items-center gap-1 text-[12px]">
        <Link size={17} />
        <span>Links</span>
      </div>
      <div className="relative bg-black h-full px-1 flex flex-col items-center justify-center text-xs">
        <ClipboardList size={17} />
        <span className="absolute top-2 right-[-2px] bg-yellow-400 text-black text-[10px] rounded-full w-4 h-4 flex items-center justify-center">0</span>
      </div>
    </div>
    </div>
  )
}

export default SportsSubMenu