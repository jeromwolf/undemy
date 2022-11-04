

const Main = () => {
    return (
      <div className="w-full h-96 border border-gray-100 relative">
        <img 
            src="https://images.hindustantimes.com/img/2022/03/08/550x309/c3864396-0b29-11ec-b9d7-045730a49909_1630519264762_1646706679997.jpg" 
            alt="" 
            className="h-full w-full object-cover bg-no-repeat bg-bottom"/>
        <div className="absolute bg-white top-12 left-8 p-4 flex flex-col items-start justify-center shadow-lg h-40 w-[440px]">
            <h2 className="text-3xl font-bold mb-2">Hi guys welcome</h2>
            <h3 className="text-xl">Look at this project!!! Let's go</h3>
            <h3 className="text-xl">The goal is to learn without stress</h3>
        </div>

      </div>
    )
  }
  
  export default Main