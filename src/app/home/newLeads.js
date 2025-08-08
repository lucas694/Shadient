const NewLeads = () => {
    return (
        <div className="w-full flex items-center justify-center bg-black  py-15 px-6 md:p-20 md:py-auto md:px-auto
            bg-[url('/assets/main-bg.png'),radial-gradient(circle_at_10%_80%,#EF9364_0%,transparent_25%),radial-gradient(circle_at_90%_20%,#8A7ACE_0%,transparent_25%)]
            bg-cover bg-center bg-no-repeat
             "
        >
            <div className="w-full md:w-auto xl:w-[45%] 2xl:w-[35%] flex flex-col items-center">
                <div className="text-white text-start text-5xl md:text-7xl 2xl:text-8xl font-bold">
                    <h1 className="">Attract</h1>
                    <h1 className="bg-gradient-to-r from-[#FA7C0B] via-[#9DE8EE] to-[#9F8CED] bg-clip-text text-transparent">
                        NewLeads
                    </h1>
                    <h1 className="">like never</h1>
                    <h1 className="">before</h1> 
                    <p className="text-[#A09F9F] pt-2 text-xs md:pt-5 md:text-base">Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros</p>
                </div>
                <div className="w-full flex flex-col md:flex-row mt-4 md:mt-8 ">
                    <input 
                        type="email" 
                        placeholder="Email"
                        className="flex-1 mb-4 px-4 py-3 bg-black/10 border border-white/70 rounded-4xl text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors
                        md:mb-0 md:mr-4"
                    />
                    <button className="px-8 py-3 bg-[#FFA800] text-black font-bold rounded-4xl hover:opacity-90 transition-opacity cursor-pointer">
                        Attract
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewLeads;