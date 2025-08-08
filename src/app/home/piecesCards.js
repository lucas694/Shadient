"use client";
import Image from "next/image";
import { useState } from "react";

const PiecesCards = (props) => {
    const {img,title,subtitle} = props;
    const [showImage, setShowImage] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return(
        <div 
            className={`relative border-[#A1AEBF] rounded-md mb-6 border px-6 pt-5 pb-8 w-auto min-w-[320px] h-auto 
                lg:w-[450px] cursor-pointer
                before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-500 before:z-10
                after:content-[''] after:absolute after:top-0 after:right-0 after:w-[2px] after:h-0 after:bg-white after:transition-all after:duration-500 after:z-10
                hover:before:w-full hover:after:h-full
                ${isHovered ? 'before:w-full after:h-full' : ''}`}
            onClick={() => setShowImage((prev) => !prev)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Borda inferior e esquerda */}
            <div className={`absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 z-10 ${isHovered ? 'w-full' : ''}`}></div>
            <div className={`absolute bottom-0 left-0 w-[2px] h-0 bg-white transition-all duration-500 z-10 ${isHovered ? 'h-full' : ''}`}></div>
            
            {showImage && (
                <Image 
                    src={img} 
                    alt={title} 
                    width={110} 
                    height={100} 
                    className="w-full transition-opacity duration-500"
                />
            )}
            <button className="px-1 py-[2px] bg-[#FFA800] mt-4 rounded-sm 
            md:px-2 md:py-[4px] md:mt-6 ">
               <h1 className="text-[#1A365D] uppercase text-[10px] md:text-xs font-bold">{title}</h1> 
            </button>
            <h1 className="text-lg mt-2 font-semibold text-white md:text-xl md:mt-4">{subtitle}</h1>
            <div className="mt-2 md:mt-4">
                <a
                    href="#"
                    className="relative w-full md:w-auto pb-2 text-[#728095] text-sm transition duration-500 cursor-pointer
                        before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-500
                        hover:before:w-full hover:text-white "
                >
                    Read more
                </a>
            </div>
        </div>
    )
}; 
export default PiecesCards;