import Image from "next/image";

const chooseUs = () => {
    return(
        <div className="w-full p-6 flex flex-col-reverse bg-black justify-between md:flex-row md:p-10">
            <div className="flex item-center w-full justify-center mt-6 md:w-[50%] md:mt-0">
            <Image 
                src={"/assets/chooseImg.png"} 
                alt="choose" 
                width={1010} 
                height={1000} 
                className="w-full"
            />
            </div>
            <div className="w-full text-center flex flex-col md:text-start md:w-[45%] ">
                <h1 className="font-bold text-3xl text-white lg:text-4xl">Why choose us</h1>
                <p className="text-[#999999] mt-4 text-sm lg:text-base xl:w-[90%]">Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.</p>
                <div className="mt-8">
                    <button className="w-full md:w-auto px-8 py-2 bg-transparent border border-[#FFA800] text-[#FFA800] font-bold rounded-full 
                        hover:bg-[#FFA800] hover:text-gray-200 transition duration-500 cursor-pointer uppercase">
                        Let's connect
                    </button>
                </div>
            </div>
        </div>
    )
};
export default chooseUs