import Image from "next/image";

const chooseUs = () => {
    return(
        <div className="w-full p-6 flex flex-col-reverse bg-black justify-between md:flex-row md:p-10">
            <div className="flex item-center w-full justify-center md:w-[50%]">
            <Image 
                src={"/assets/chooseImg.png"} 
                alt="choose" 
                width={1010} 
                height={1000} 
                className="w-full"
            />

            </div>
            <div className="w-full flex flex-col md:w-[45%]">
                <h1 className="font-bold text-4xl text-white">Why choose us</h1>
                <p className="text-[#999999] mt-4">Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.</p>
            </div>
        </div>
    )
};
export default chooseUs