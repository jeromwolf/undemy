import React from 'react'
import { HomeIcon, GlobeIcon, VideoCameraIcon, PlayIcon, CogIcon } from "@heroicons/react/outline";

const MainLeft = () => {
    return (
        <div className="w-[6%] h-auto flex flex-col bg-[#202020] items-center text-white">
            <div className="flex flex-col justify-center cursor-pointer items-center hover:bg-gray-600 w-full h-20 mt-2">
                <HomeIcon className="h-6" />
                <h4 className="text-[10px]">Home</h4>
            </div> 
            <div className="flex flex-col justify-center cursor-pointer items-center hover:bg-gray-600 w-full h-20 mt-2">
                <GlobeIcon className="h-6" />
                <h4 className="text-[10px]">Explore</h4>
            </div> 
            <div className="flex flex-col justify-center cursor-pointer items-center hover:bg-gray-600 w-full h-20 mt-2">
                <VideoCameraIcon className="h-6" />
                <h4 className="text-[10px]">Shorts</h4>
            </div> 
            <div className="flex flex-col justify-center cursor-pointer items-center hover:bg-gray-600 w-full h-20 mt-2">
                <PlayIcon className="h-6" />
                <h4 className="text-[10px]">Subscriptions</h4>
            </div> 
            <div className="flex flex-col justify-center cursor-pointer items-center hover:bg-gray-600 w-full h-20 mt-2">
                <CogIcon className="h-6" />
                <h4 className="text-[10px]">Library</h4>
            </div> 
            <div className="flex flex-col justify-center cursor-pointer items-center hover:bg-gray-600 w-full h-20 mt-2">
                <GlobeIcon className="h-6" />
                <h4 className="text-[10px]">History</h4>
            </div> 
        </div>
    )
}

export default MainLeft
