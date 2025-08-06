import Image from "next/image";
const partnersCard = (props) => {
    const {img} = props;
    return(
        <div className="flex justify-center border border-[#A1AEBF] rounded-xl w-[300px] p-2 md:w-[160px] md:p-3">
            <Image 
                src={img} 
                alt="Parceiros" 
                width={110} 
                height={100} 
                className="w-auto"
            />
        </div>
    )
};

export default partnersCard;
