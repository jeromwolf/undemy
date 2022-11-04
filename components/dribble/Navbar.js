import { SearchIcon } from "@heroicons/react/outline";

const Navbar = () => {
    return (
        <nav className="flex justify-between p-6 h-20">
            <div className="flex items-center w-[740px]">
                <h2 className="font-bold text-xl">dribble</h2>
                <ul className="flex flex-1 justify-between ml-8 text-[14px] text-gray-600 font-bold">
                    <li>Inspiration</li>
                    <li>Find Work</li>
                    <li>Learn Design</li>
                    <li>Go Pro</li>
                    <li>Marketplace</li>
                    <li>Hire Designers</li>
                </ul>
            </div>
            <div className="flex items-center justify-evenly w-[28%] text-gray-600">
                <SearchIcon className="h-4" />
                <h3>Sign in / Sign up</h3>
                <button className="bg-pink-500 px-[12px] py-[9px] text-[15px] font-bold text-white rounded-md hover:bg-pink-400">Start a free project</button>
            </div>
             
        </nav>
    )
  }
  
  export default Navbar