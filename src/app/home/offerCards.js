import Image from "next/image";

const OfferCards = (props) => {
    const {img, title, description} = props
    return(
        <div className="border-[#A1AEBF] rounded-md border mt-6 px-6 pt-5 pb-8 w-auto max-w-[450px] 
        md:max-w-[320px] md:h-[190px]
        lg:max-w-[450px] lg:w-[550px] lg:h-auto 2xl:mt-12 ">
            <Image 
            src={img} 
            alt={title} 
            width={110} 
            height={100} 
            className="w-[50px] md:w-[45px] xl:w-[53px]"
        />
            <h1 className="text-white font-bold text-2xl mt-3 md:text-xl xl:text-3xl">{title}</h1>
            <p className="text-[#919090] mt-4 text-sm md:text-sm xl:text-base">{description}</p>
        </div>
    )
};
export default OfferCards