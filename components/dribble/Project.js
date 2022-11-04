import { HeartIcon, EyeIcon } from "@heroicons/react/solid";

const Project = () => {
    return (
        <div className="w-[340px] h-[270px] rounded-xl mb-5">
            <img 
                className="rounded-xl"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkipL7_OnZIz0F99isGZd4mtslXi3Jcs3vmQ&usqp=CAU" alt=""/>
            <div className="flex justify-between p-2">
                <div className="flex items-center">
                    <h3 className="font-bold text-black text-[15px]">name</h3>
                    <h3 className="bg-gray-300 text-white p-[2px] font-bold rounded-md ml-2">TEAM</h3> 
                </div>
                <div className="flex space-x-2">
                    <div className="flex items-center">
                        <HeartIcon className="h-3 w-3 text-gray-500"/>
                        <h2 className="text-sm">61</h2>
                    </div>
                    <div className="flex items-center">
                        <EyeIcon className="h-3 w-3 text-gray-500"/>
                        <h2 className="text-sm">30.4k</h2>
                    </div>
                </div>
                
            </div>
        </div>
    )
  }
  
  export default Project