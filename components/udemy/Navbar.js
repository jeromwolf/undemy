import {
    ShoppingCartIcon,
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
} from "@heroicons/react/outline";

import Link from "next/link";


const Navbar = () => {
    return (
        <div>
            <div className="flex space-x-4 bg-white h-[74px] shadow-lg text-center justify-between items-center px-4">
                <MenuIcon className="h-6 w-6 md:hidden"/>
                <h2 className="text-3xl font-bold">udemy</h2>
                <h3 className="hidden text-sm md:block">Categories</h3>
                <form className="hidden bg-[#f8fafb] md:flex border border-black rounded-3xl flex-1 h-12 items-center">
                    <SearchIcon className="h-5 w-5 mx-4 text-gray" />
                    <input type="text" placeholder="Search for anything" 
                        className="w-10/12 py-1 outline-none bg-transparent text-sm focus:border-current focus:ring-0"/>
                </form>
                <h3 className="hidden text-sm lg:block" >Udemy Business</h3>
                <h3 className="hidden text-sm lg:block md:hidden">Teach on Udemy</h3>
                <div className="flex">
                    <SearchIcon className="h-6 w-6 text-gray-400 md:hidden"/>
                    <ShoppingCartIcon className="h-6 w-6"/>
                </div>
                <div className="hidden md:flex pr-4 space-x-4 justify-end">


                <Link href="/enter">
                    <div className="border border-black h-10 text-sm  text-center font-bold w-20 hover:bg-[#f5f5f5]">
                        Log In
                    </div>
                </Link>
                    
                    <button className="border bg-black text-white border-black h-10 text-sm font-bold w-20">
                        Sign Up
                    </button>

                    <button className="border bg-white w-10 flex items-center justify-center hover:bg-[#f5f5f5]">
                        <GlobeAltIcon className="h-5 w-5"/>
                    </button>
                </div>
            </div>
        </div>
    )
  }
  
  export default Navbar