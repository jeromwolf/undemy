const Main = () => {
    return (
        <div className="relative h-[480px]">
            <div className="absolute z-20 flex h-full flex-col items-center justify-center space-y-4 ml-12 text-white font-bold w-[800px]">
                <h2 className="text-5xl">Trending product design for apps, e-commerce, and games</h2>
                <p>Explore innovative Product Design from including apps, e-commerce or games to inspire your next project from popular design portfolios</p>
                <button className="bg-pink-500 px-[12px] py-[9px] text-[15px] font-bold text-white rounded-md hover:bg-pink-300">Sign up</button>
            </div>

            <div className="bg-black absolute opacity-70 w-full h-full"></div>
            <img
                className="w-full h-full object-cover" 
                src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2018_29/2504731/180720-read-book-good-health-ac-417p.jpg" alt="" />
        </div>
        
    )
  }
  
  export default Main