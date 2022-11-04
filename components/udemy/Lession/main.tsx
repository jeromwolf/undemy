import React, { useState } from 'react'
import { Course, Section, User, Episode } from "@prisma/client";
import useSWR from "swr";
import { useRouter } from "next/router";
import Link from 'next/link';
import VideoContainer from "./VideoContainer";
import RecommendedList from "./RecommendedList";
import Data from "./Data";

interface CourseWithUser extends Course {
    author: User;
    _count: {
        favs: number,
        reviews: number,
        sections: number,
    };
}


interface SectionWithEpisode extends Section {
  episodes: Episode[];
}

interface CourseDetailResponse {
    ok: boolean;
    courses: CourseWithUser;
    sections : SectionWithEpisode[]; 
}

function Lession() {
    const router = useRouter();
    const { data } = useSWR<CourseDetailResponse>(`/api/courses/${router.query.id}`);
    console.log(data); 

    const [isVideo, setVideo] = useState({
      name: "",
      videoSrc: "",
    });

  return (
    <div className="flex flex-col bg-mainBg w-screen h-screen overflow-hidden">
      {/* Main Container */}
        <div className="w-full h-full  flex flex-col">
            {/* top  list */}
            <div className="w-full h-full  grid grid-cols-3 gap-2 p-2"> 

              <div
                className="md:col-span-1 bg-primary sm:col-span-6  overflow-y-auto
                scrollbar scrollbar-thin scrollbar-thumb-gray-800
              "
                id="recomendedList"
              > 
                <p className="text-textColor text-[18px] font-bold my-2 px-2">
                  {data?.courses?.title}
                </p>
  
                {/* List item */}
  
                { 
                  data?.sections?.map((section) => (

                    <> 
                      <p className="text-textColor text-[16px] my-2 px-2">
                          {section.title}
                      </p>

                        {section?.episodes?.map((item) =>  ( 
                        <div
                          key={item.id}
                          onClick={() =>
                            setVideo({
                              name: item.title,
                              videoSrc: item.videoSrc,
                            })
                          }
                        > 
    
                          <RecommendedList
                            imgSrc={item.imgSrc}
                            videoName={item.title} 
                          />
                        </div>

                        ))}
                    </>

                  ))}
              </div>

              <div
                className="md:col-span-2 sm:col-span-6  rounded-lg overflow-hidden
                flex items-center justify-center
              "
              >
                <VideoContainer data={isVideo} />
              </div>




            </div>
             
             
          </div>
    </div>
  )
}

export default Lession