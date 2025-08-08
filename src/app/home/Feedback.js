const Feedback = () =>{
    return(
        <div className="bg-[#FFB219] p-6 flex flex-col items-center w-full md:p-20 xl:p-26">
            <div className="flex flex-col items-center text-center w-full md:w-[80%] xl:w-[50%] 2xl:w-[35%]">
                <h1 className="font-bold text-2xl text-black md:text-3x lg:text-4xl">Let’s discuss the idea</h1>
                <p className="text-[#66470A] mt-4 text-xs md:text-sm lg:text-base ">Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit.</p>
                <div className="w-full flex flex-col md:flex-row mt-4 md:mt-8 ">
                    <input 
                        type="email" 
                        placeholder="Email"
                        className="flex-1 mb-4 px-4 py-3 bg-white/90 border border-black/70 rounded-4xl text-black placeholder-black/90 focus:outline-none focus:border-black/40 transition-colors
                        md:mb-0 md:mr-4"
                    />
                    <button className="px-8 py-3 bg-black text-white font-semibold rounded-4xl border border-black hover:border-white transition duration-500 cursor-pointer">
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
};
export default Feedback