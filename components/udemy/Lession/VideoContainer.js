import React from 'react'
import { useState, useEffect } from "react";
import { TimelineLite } from 'gsap';

function VideoContainer({ data }) {
  const [isPlaying, SetPlaying] = useState(false); 
  const tl = new TimelineLite({ delay: 0.3 })

  useEffect(() => {
    if(isPlaying) {
        tl.fromTo('#mainVideoName', {y:0, opacity:1 }, {y:-20, opacity: 0});
    }
  }, [isPlaying, data])
  return (
    <div className="relative w-full h-full">
 

        <iframe 
            className="min-w-full min-h-full w-auto h-auto bg-cover"
            width="560" height="315" src={data.videoSrc}
            id="mainVideo"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
        />
 
        

        <div 
             className="absolute top-0 left-0 z-10 w-full h-[60px] py-4 px-3
             bg-gradient-to-b from-black to-transparent"
        >
            <h2 className="text-textcolor text-xl" id="mainVideoName" >{data.name}</h2>
        </div> 
    </div>
  )
}

export default VideoContainer