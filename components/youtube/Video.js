import React from 'react' 

const Video = () => {
    return (
        <div className="bg-[#181818] w-[280px] h-64 flex flex-col">
           <img 
            src="https://ichef.bbci.co.uk/news/976/cpsprodpb/14D67/production/_126315358_gettyimages-598261008.jpg" 
            alt=""
            
           /> 
           <div className="flex justify-around mt-2">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="" className="rounded-full w-[11%] h-8"/>
                <div className="w-[80%] text-sm font-bold">
                    <h3 className="text-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    <h3 className="text-[11px] text-gray-400">HEY</h3>
                    <h3 className="text-[11px] text-gray-400">181k views - 11hours</h3>
                </div>
           </div>
        </div>
    )
}

export default Video