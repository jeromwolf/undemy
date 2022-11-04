import React from 'react'

function RecommendedList({imgSrc, videoName}) {
  return (
    <div className="flex items-center mb-2 cursor-pointer px-3 py-2 hover:bg-gray-900 duration-200 ease-in-out">
        <img
            className=" sm:w-[60px] sm:h-[60px] lg:w-[140px] lg:h-[80px] rounded-lg object-cover "
            src={imgSrc}
            alt="" 
        />
        <div  className="flex flex-col ml-2  flex-1">
            <h3 className="text-textColor lg:text-[16px] sm:text-[12px]">
                {videoName}
                <span className="block text-[12px] text-gray-400">Ninja</span>{" "}
            </h3>
            <div className="flex items-center mt-2">
                <p className="text-[14px] font-bold text-gray-500">40:30</p>
                <p className="text-[14px] font-bold text-gray-500 ml-6">65,000</p>
            </div>
        </div>

    </div>
  )
}

export default RecommendedList