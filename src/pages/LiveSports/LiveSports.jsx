import React from 'react';
import Navbar from '@/component/Navbar';
import SportsCarousel from './conponents/SportsCarousel';
import LiveContent from './conponents/LiveContent';
import TopSection from './conponents/TopSection';
import MobileLiveContent from './conponents/mobile/LiveContent';
import SportsCarouselNameMob from './conponents/mobile/SportsCrouselMobile';
import TopSectionMobi from './conponents/mobile/TopSectionMobi';
import { Link } from 'react-router-dom';

const LiveSports = () => {
    return (
        <div>
        <div className="min-h-screen w-full bg-[#1E1E20] text-white md:block hidden">
            <Navbar />
            <div className="flex flex-col lg:flex-row w-full h-auto lg:gap-2">
                {/* Left section */}
                <div className="lg:w-[80%] w-full">
                    <TopSection />
                    <SportsCarousel />
                    <hr className="mb-2 border-t border-gray-600" />
                    <SportsCarousel />
                    <LiveContent />
                    <div className='flex justify-center items-center my-4'>
                        <button>Show more</button>
                    </div>
                </div>

                {/* Right section */}
                <div className="lg:w-[20%] w-full bg-[#1E1E20] flex flex-col">
                    <div className='flex justify-between items-center px-2 py-2'>
                        <span className='flex gap-2 items-center'>
                            <svg className="w-8 h-8" viewBox="0 0 126 126" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M106.2 74.8l-.1-.5.1.5zM17.8 31.6l2.4 13.6 5-.9c.9-.2 1.9.5 2 1.4l.1.7c.2.9-.5 1.9-1.4 2l-5 .9 1.2 6.7 6.8 38.5.1.8V28l-10 1.8c-.7.1-1.3.9-1.2 1.8zM19.8 54.2l.1.5-.1-.5zM89 18H71.8c0 4.8-3.9 8.8-8.8 8.8s-8.8-3.9-8.8-8.8H37c-1.1 0-2 .9-2 2v17.2h6.3c1.2 0 2.2 1 2.2 2.2v.8c0 1.2-1 2.2-2.2 2.2H35V106c0 1.1.9 2 2 2h17.2c0-4.8 3.9-8.8 8.8-8.8s8.8 3.9 8.8 8.8H89c1.1 0 2-.9 2-2V42.4h-6.3c-1.2 0-2.2-1-2.2-2.2v-.8c0-1.2 1-2.2 2.2-2.2H91V20c-.1-1.1-.9-2-2-2zM65.4 39.4c0-1.2 1-2.2 2.2-2.2h8c1.2 0 2.2 1 2.2 2.2v.8c0 1.2-1 2.2-2.2 2.2h-8c-1.2 0-2.2-1-2.2-2.2v-.8zm-17.1 0c0-1.2 1-2.2 2.2-2.2h8c1.2 0 2.2 1 2.2 2.2v.8c0 1.2-1 2.2-2.2 2.2h-8c-1.2 0-2.2-1-2.2-2.2v-.8zM46.1 54H80v7.2H46.1V54zm0 14.1H80v7.2H46.1v-7.2zm0 14.2H80v7.2H46.1v-7.2zM108.2 94.7l-2.4-13.6-5 .9c-.9.2-1.9-.5-2-1.4l-.1-.7c-.2-.9.5-1.9 1.4-2l5-.9-1.2-6.7-6.8-38.5-.2-.8v67.3l10-1.8c.8-.1 1.4-.9 1.3-1.8z" />
                            </svg>
                            <p>BetSlip</p>
                        </span>
                        <Link to="/" className='text-yellow-500 hover:text-yellow-300 text-sm'>help</Link>
                    </div>
                    <div>
                        <p className='text-xs w-full text-center p-8 bg-[#242424]'>Your betslip is empty <br /> To place a bet, register or login and click on any price.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* mobile version */}
        <div className='md:hidden w-full h-auto bg-[#1E1E20] text-white'>
            <Navbar />
            <TopSectionMobi />
            <SportsCarouselNameMob />
            <SportsCarouselNameMob />
            <MobileLiveContent />
            <div className="lg:w-[20%] w-full bg-[#1E1E20] flex flex-col">
                    <div className='flex justify-between items-center px-2 py-2'>
                        <span className='flex gap-2 items-center'>
                            <svg className="w-8 h-8" viewBox="0 0 126 126" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M106.2 74.8l-.1-.5.1.5zM17.8 31.6l2.4 13.6 5-.9c.9-.2 1.9.5 2 1.4l.1.7c.2.9-.5 1.9-1.4 2l-5 .9 1.2 6.7 6.8 38.5.1.8V28l-10 1.8c-.7.1-1.3.9-1.2 1.8zM19.8 54.2l.1.5-.1-.5zM89 18H71.8c0 4.8-3.9 8.8-8.8 8.8s-8.8-3.9-8.8-8.8H37c-1.1 0-2 .9-2 2v17.2h6.3c1.2 0 2.2 1 2.2 2.2v.8c0 1.2-1 2.2-2.2 2.2H35V106c0 1.1.9 2 2 2h17.2c0-4.8 3.9-8.8 8.8-8.8s8.8 3.9 8.8 8.8H89c1.1 0 2-.9 2-2V42.4h-6.3c-1.2 0-2.2-1-2.2-2.2v-.8c0-1.2 1-2.2 2.2-2.2H91V20c-.1-1.1-.9-2-2-2zM65.4 39.4c0-1.2 1-2.2 2.2-2.2h8c1.2 0 2.2 1 2.2 2.2v.8c0 1.2-1 2.2-2.2 2.2h-8c-1.2 0-2.2-1-2.2-2.2v-.8zm-17.1 0c0-1.2 1-2.2 2.2-2.2h8c1.2 0 2.2 1 2.2 2.2v.8c0 1.2-1 2.2-2.2 2.2h-8c-1.2 0-2.2-1-2.2-2.2v-.8zM46.1 54H80v7.2H46.1V54zm0 14.1H80v7.2H46.1v-7.2zm0 14.2H80v7.2H46.1v-7.2zM108.2 94.7l-2.4-13.6-5 .9c-.9.2-1.9-.5-2-1.4l-.1-.7c-.2-.9.5-1.9 1.4-2l5-.9-1.2-6.7-6.8-38.5-.2-.8v67.3l10-1.8c.8-.1 1.4-.9 1.3-1.8z" />
                            </svg>
                            <p>BetSlip</p>
                        </span>
                        <Link to="/" className='text-yellow-500 hover:text-yellow-300 text-sm'>help</Link>
                    </div>
                    <div>
                        <p className='text-xs w-full text-center p-8 bg-[#242424]'>Your betslip is empty <br /> To place a bet, register or login and click on any price.</p>
                    </div>
                </div>

        </div>
        </div>
    );
};

export default LiveSports;
