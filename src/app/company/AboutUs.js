const AboutUs = () =>{
    return(
        <div className="w-full flex flex-col bg-black py-15 px-6 md:p-20 md:py-auto md:px-auto 
            bg-[url('/assets/main-bg.png'),radial-gradient(circle_at_10%_80%,#EF9364_0%,transparent_25%),radial-gradient(circle_at_90%_20%,#8A7ACE_0%,transparent_25%)]
            bg-cover bg-center bg-no-repeat"
            >
            <div className='w-full lg:w-[50%] xl:w-[35%]'>
                <h1 className="text-[#FFA800] font-bold text-xl">About us</h1>
                <h1 className="text-5xl md:text-7xl 2xl:text-8xl font-bold text-white mt-4">Shadient.co</h1>
                <p className="text-[#A09F9F] pt-2 text-xs md:pt-5 md:text-base">Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros</p>
            </div>    
            <div className="w-full flex flex-col md:flex-row mt-4 md:mt-8 ">
                <button className="px-8 py-3 bg-[#FFA800] text-black font-bold uppercase rounded-4xl hover:opacity-90 transition-opacity cursor-pointer">
                    Contact
                </button>
            </div>
        </div>
    )
};
export default AboutUs