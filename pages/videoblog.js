import Head from "next/head";
import Header from "../components/videoblog/Header";
import MenuItem from "../components/videoblog/MenuItem";
import VideoContainer from "../components/videoblog/VideoContainer";
import RecommendedList from "../components/videoblog/RecommendedList";
import Collection from "../components/videoblog/Collection";
import { useEffect, useState } from "react";
import Data from "../components/videoblog/Data";
import { TimelineLite, gsap } from "gsap";

import {
    Chat,
    Dashboard,
    Favorite,
    LocalMovies,
    Logout,
    Stream,
    TrendingUp,
    VideogameAsset,
  } from "@mui/icons-material";

export default function VideoBlog() {
    gsap.registerPlugin();
    const [isVideo, setVideo] = useState({
      name: Data[0].videoName,
      videoSrc: Data[0].videoSrc,
    });
    const t1 = new TimelineLite({ delay: 0.3 });
    useEffect(() => {
      const scrollContainer = document.querySelector("#scrollContainer");
  
      scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
      });
      // prettier-ignore
      t1
      .from('#logo', {x : -50, opacity : 0, ease : 'back.out(1.7)', duration : 0.5}, 'Start') 
    }, []);

    return (
        <div className="flex flex-col bg-mainBg w-screen h-screen overflow-hidden">
        <Head>
          <title>Streame - Video Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <Header />
  
        <div className="flex w-full h-full">
          {/* Left Menu */}
          <div
            id="leftMenu"
            className="sm:w-[6%] md:w-[10%] min-w-[60px] h-full flex flex-col items-center justify-evenly"
          >
            <MenuItem icon={<Dashboard />} name={"Dashboard"} />
            <MenuItem icon={<VideogameAsset />} name={"Games"} />
            <MenuItem icon={<LocalMovies />} name={"Movies"} />
            <MenuItem icon={<Stream />} name={"Streamer"} />
            <MenuItem icon={<TrendingUp />} name={"Statistics"} />
            <MenuItem icon={<Chat />} name={"Messages"} />
            <MenuItem icon={<Favorite />} name={"Favourite"} />
            <MenuItem icon={<Logout />} name={"Logout"}  />
          </div>
  
          {/* Main Container */}
          <div className="sm:w-[94%] md:w-[90%] h-full  flex flex-col">
            {/* top  list */}
            <div className="w-full h-[70%] max-h-[480px]  grid grid-cols-3 gap-2 p-2">
              <div
                className="md:col-span-2 sm:col-span-6  rounded-lg overflow-hidden
                flex items-center justify-center
              "
              >
                <VideoContainer data={isVideo} />
              </div>
              <div
                className="md:col-span-1 bg-primary sm:col-span-6  overflow-y-auto
                scrollbar scrollbar-thin scrollbar-thumb-gray-800
              "
                id="recomendedList"
              >
                <p className="text-textColor text-[18px] font-bold my-2 px-2">
                  Recommended
                </p>
  
                {/* List item */}
  
                {Data &&
                  Data.map((data) => (
                    <div
                      key={data.id}
                      onClick={() =>
                        setVideo({
                          name: data.videoName,
                          videoSrc: data.videoSrc,
                        })
                      }
                    > 
 
                      <RecommendedList
                        imgSrc={data.imgSrc}
                        videoName={data.videoName} 
                      />
                    </div>
                  ))}
              </div>
            </div>
            {/* bottom List */}
            <div className="w-full h-[30%] ">
              <div
                className="flex overflow-x-scroll items-center scrollbar-none py-2"
                id="scrollContainer"
              >
                {Data &&
                  Data.map((data) => (
                    <Collection key={data.id} imgSrc={data.imgSrc} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}