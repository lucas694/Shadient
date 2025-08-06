import OfferCards from "../home/offerCards"
import {getOfferData} from '@/app/utils/utils';

const weOffer = () => {
    const offerData = getOfferData();
    return(
        <div className="flex flex-col w-full bg-black p-6 md:p-10">
            <div className="w-full flex flex-col items-center text-center">
                <h1 className="text-white font-bold text-3xl md:text-5xl">We Offer</h1>
                <p className="text-[#919090] text-sm mt-4 font-semibold md:mt-6 md:text-base lg:w-[70%] xl:w-[55%]">Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.</p>
            </div>
            <div className="w-full mt-10 flex flex-col items-center
            md:mt-16 md:flex-row md:flex-wrap md:justify-around 2xl:mt-4">
                {offerData.map((offer) => (
                    <OfferCards 
                        key={offer.id}
                        img={offer.img}
                        title={offer.title}
                        description={offer.description}
                    />
                ))}
            </div>
        </div>
    )
};
export default weOffer;