import PiecesCards from "./piecesCards";
import {getPiecesData} from '@/app/utils/utils';

const Pieces = () =>{
    const piecesData = getPiecesData();
    return(
        <div className='w-full flex flex-col p-10 lg:flex-row bg-black'>
            <div className='w-full lg:w-[40%]'>
                <h1 className="font-bold text-3xl text-white lg:text-4xl">Some pieces of our work</h1>
                <p className="text-[#999999] mt-4 text-sm lg:text-base">Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.</p>
                <div className="mt-8">
                    <button className="w-full md:w-auto px-8 py-2 bg-transparent border border-[#FFA800] text-[#FFA800] font-bold rounded-full 
                        hover:bg-[#FFA800] hover:text-gray-200 transition duration-500 cursor-pointer uppercase">
                        show more
                    </button>
                </div>
            </div>
            <div className='w-full flex flex-col flex-wrap items-center justify-around mt-6 md:flex-row lg:w-[60%] lg:mt-0 '>
            {piecesData.map((pieces) => (
                    <PiecesCards 
                        key={pieces.id}
                        img={pieces.img}
                        title={pieces.title}
                        subtitle={pieces.subtitle}
                    />
                ))}
            </div>
        </div>
    )
};
export default Pieces;