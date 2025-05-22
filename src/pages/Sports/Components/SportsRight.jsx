import React from 'react'
import { Ticket } from "lucide-react";
import game from "../../../assets/Sports/game.gif"

const SportsRight = () => {
  return (
    <div className='w-full bg-[#1E1E20]'>
      <div className="text-white w-full">
      {/* Header */}
      <div className="flex justify-between items-center bg-[#191919] py-2 px-2">
        <div className="flex items-center justify-center gap-2">
          <Ticket size={18} />
          <h2 className="text-base font-medium">Betslip</h2>
        </div>
        <a
          href="#"
          className="text-xs text-gray-300 underline hover:no-underline transition"
        >
          Help
        </a>
      </div>

      {/* Content */}
      <div className="text-center py-10 px-4 text-gray-300 bg-[#242424] text-xs ">
        <p>Your betslip is empty</p>
        <p>
          To place a bet,{" "}
          <a href="#" className="underline">
            register
          </a>{" "}
          or{" "}
          <a href="#" className="underline">
            login
          </a>{" "}
          and click on any price.
        </p>
      </div>
    </div>
    <div className='grid grid-cols-3 mt-2 gap-1'>
      <div>
        <img src={game} alt="" />
      </div>
      <div>
        <img src={game} alt="" />
      </div>
      <div>
        <img src={game} alt="" />
      </div>
      <div>
        <img src={game} alt="" />
      </div>
      <div>
        <img src={game} alt="" />
      </div>
      <div>
        <img src={game} alt="" />
      </div>
    </div>
    </div>
  )
}

export default SportsRight