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
                 
            </h3>
             
        </div>

    </div>
  )
}

export default RecommendedList