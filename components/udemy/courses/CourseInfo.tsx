import React, { useState } from 'react'
import { Course, Section, User, Episode } from "@prisma/client";
import useSWR from "swr";
import { useRouter } from "next/router";
import Link from 'next/link';

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


const CourseInfo = () => {    
    const router = useRouter();
    const { data } = useSWR<CourseDetailResponse>(`/api/courses/${router.query.id}`);
    console.log(data);
    return ( 
        <div >
            <section className="text-gray-50 bg-gray-800 py-14 px-8">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold w-11/12 md:w-8/12 mb-2">
                    {data?.courses?.title}</h1>
                <h3 className="text-sm md:text-lg md:w-9/12 lg:w-6/12 mb-2">
                {data?.courses?.description}</h3>
                <div className="mb-2">

                    <span className=" text-xs md:text-base font-semibold m-3  text-yellow-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" 
                        strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>

                    {data?.courses?._count?.favs} likes
                    </span>
                    <span className="text-xs md:text-base">{data?.courses?._count?.reviews} reviews</span>
                </div>
                <p className="mb-2 md:text-base text-xs">Created by <span className="text-blue-400 underline">{data?.courses?.author?.name}</span></p>
                <h2 className="text-xl md:text-2xl font-semibold mb-2">{data?.courses?.price}</h2>
                <button className="py-2 rounded-md px-5 bg-blue-500 font-semibold  text-white">구매하기</button>

            </section>

            <section className="w-full flex justify-center py-10">
                <div className="border p-3 md:p-6 rounded md:w-10/12 w-11/12 lg:w-8/12">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold my-4">What youll learn</h2>
                    <div className=" flex flex-col md:flex-row">
                        <div><div className="flex my-2 md:my-0">
                            <div className="mr-2 text-xl">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" 
                                    stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            </div><p>Learn to use Python professionally, learning both Python 2 and Python 3!</p>
                        </div>
                            <div className="flex my-2 md:my-0">
                                <div className="mr-2 text-xl">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                                        xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" 
                                        stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                </div><p>Create games with Python, like Tic Tac Toe and Blackjack!</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex my-2 md:my-0">
                                <div className="mr-2 text-xl">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                                        xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                </div><p> Learn advanced Python features, like the collections module and how to work with timestamps!</p></div>

                            <div className="flex my-2 md:my-0">
                                <div className="mr-2 text-xl">

                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                                        xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" 
                                            stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                </div><p>Learn to use Object Oriented Programming with classes!</p></div></div></div></div></section>



            <section className="w-full flex justify-center py-10">
              <div className="w-11/12 md:w-10/12 lg:w-8/12">
                <h2 className="text-xl md:text-2xl text-gray-800 font-semibold mb-2">Course Content</h2>
                <ul className="flex w-full text-sm md:text-base">
                    <li className="mr-1 inline-block">
                    {data?.courses?._count?.sections} sections
                    </li>

                    <li className="mr-1  inline-block">
                        • {data?.sections?.length} lectures
                    </li>

                    <li className="mr-1  inline-block">
                      • 0h 00m total length
                    </li>
                  </ul> 

                  {data?.sections?.map((section) => (
                  <>
                  <div className="flex cursor-pointer justify-between items-center p-2 bg-gray-200 border-b">
                    <div className="flex items-center w-8/12 md:w-10/12 overflow-hidden">
                        <div className="flex justify-center items-center text-xl mr-2">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
                            
                        </div>
                        
                        
                        <div>
                            <h3 className="md:text-lg font-semibold">{section.title}</h3>
                        </div>
                    </div>
                    <div className="w-4/12 md:w-3/12 lg:w-2/12">
                        <ul className="flex text-xs md:text-base">
                            <li className="mr-1">1 lecture</li>
                            <li>• 00min</li>
                        </ul>
                    </div>
                </div> 


                {section.episodes.map((episode) => (
                  <>
                      <div className=" cursor-pointer flex justify-between items-center px-3 py-2">
                          <div className="flex ">
                              <div className="mr-1 flex items-center justify-center">
                              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" /></svg> 
                              </div>
                              <div>

                                  <Link href={`/udemy/lession/${router.query.id}`}>
                                    <h3 className="text-sm md:text-lg font-medium ">{episode.title}</h3>
                                  </Link>
                                  
                              </div>
                          </div>
                          <div>
                              <p className="text-sm md:text-base">00:09</p>
                          </div>
                      </div>
                    </>
                 ))}

                  </>
              ))} 



                
              </div> 
            </section>

 
            <section className="w-full flex justify-center py-10">
              <div className="w-10/12 md:w-8/12">
                <h3 className="text-lg md:text-2xl font-semibold mb-3">Description</h3>
                <h5 className="text-sm md:text-lg ">{data?.courses?.description} </h5>
              </div>
            </section>
        </div>
    )
}

export default CourseInfo