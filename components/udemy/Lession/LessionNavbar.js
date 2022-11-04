import {
    ShoppingCartIcon,
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
} from "@heroicons/react/outline";

import Link from "next/link";


const LessionNavbar = () => {
    return (
        <div>
            <div className="flex space-x-4 bg-white h-[74px] shadow-lg text-center justify-between items-center px-4">
                <MenuIcon className="h-6 w-6 md:hidden"/>
                <Link href="/udemy">
                    <h2 className="text-3xl font-bold cursor-pointer">udemy</h2> 
                </Link>
                <div className="hidden md:flex pr-4 space-x-4 justify-end">

 

                    <button className="border bg-white w-10 flex items-center justify-center hover:bg-[#f5f5f5]">
                        <GlobeAltIcon className="h-5 w-5"/>
                    </button>
                </div>
            </div>
        </div>
    )
  }
  
  export default LessionNavbar