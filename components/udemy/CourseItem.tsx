import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import Link from "next/link";

const CourseItem = ({ item }) => {
    return (
        <div className="flex flex-col items-start space-y-[1px]">

            <Link href={`/udemy/courses/${item.id}`}>
                <img
                    src={item.image}
                    alt=""
                    className="h-32 w-full cursor-pointer" />
            </Link>


            <h2 className="font-bold text-md pt-1">{item.title}</h2>
            <h2 className="text-xs text-gray-700">{item.username}</h2>
            <div className="flex space-x-1">
                <h3 className="text-orange-800 font-bold ">{item.vote}</h3>
                <div className="flex items-center">
                    <StarIcon className="w-4 text-orange-400" />
                    <StarIcon className="w-4 text-orange-400" />
                    <StarIcon className="w-4 text-orange-400" />
                    <StarIcon className="w-4 text-orange-400" />
                    <StarIcon className="w-4 text-orange-400" />
                </div>
                <h3 className="text-xs">{item.students}</h3>
            </div>
            <div className="flex space-x-4 items-center">
                <h3 className="text-black font-bold">{item.price}</h3>
                <h3 className="text-gray-800 text-sm line-through">{item.oldPrice}</h3>
            </div>
        </div>
    )
  }
  
  export default CourseItem