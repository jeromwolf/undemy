import React from 'react'
import { MenuIcon, SearchIcon, MicrophoneIcon, ViewGridIcon, DotsVerticalIcon } from '@heroicons/react/outline';
import Image from "next/image";

const Header = () => {
    return (
        <div className="flex justify-between items-center w-full h-10 px-6 py-8 bg-[#202020] text-white">
            <div className="flex cursor-pointer">
                <MenuIcon className="h-7 mr-4"/>
                <h1 className="text-xl font-bold">YouTube</h1>
            </div>

            <div className="flex items-center">
                <form className="flex w-[600px] items-center bg-[#313131]">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="bg-black flex-1 h-10"/>
                    <button className="h-10 w-16 items-center flex justify-center">
                        <SearchIcon className="h-5" />
                    </button>
                </form>
                <button className="bg-black h-10 w-10 ml-4 rounded-full flex justify center items-center">
                    <MicrophoneIcon className="h-5" />
                </button>
            </div>


            <div className="flex justify-between w-16">
                <ViewGridIcon className="h-6 cursor-pointer" />
                <DotsVerticalIcon className="h-6 cursor-pointer" />
                 
            </div>
        </div>
    )
}

export default Header
