import Branding from "../service/Branding";
import TextComponent from "../components/TextComponent";
import PiecesCards from "../home/piecesCards";
import OfferCards from "../home/offerCards";
import {getPiecesData} from '@/app/utils/utils';
import {getOfferData} from '@/app/utils/utils';


const Service = () => {
    const piecesData = getPiecesData();
    const offerData = getOfferData();
    return(
        <div className="bg-black">
            <Branding/>
            <TextComponent 
                title="Process"
                text="Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit."
            />
            <div className='flex flex-col w-full p-6 md:p-14'>
                <h1 className="text-3xl font-bold text-white md:text-4xl ">Branding Works</h1>
                <div className='w-full bg-black flex flex-col flex-wrap items-center justify-around mt-6 md:flex-row  '>
                    {piecesData.slice(0, 3).map((piece, index) => (
                        <PiecesCards
                            key={piece.id}
                            img={piece.img}
                            title={piece.title}
                            subtitle={piece.subtitle}
                        />
                    ))}
                </div>
            </div>
            <div className='flex flex-col w-full p-6 md:p-14'>
                <h1 className="text-3xl font-bold text-white md:text-4xl ">Other services</h1>
                <div className='w-full bg-black flex flex-col flex-wrap items-center justify-around md:flex-row  '>
                    {offerData.slice(0, 3).map((offer, index) => (
                        <OfferCards
                            key={offer.id}
                            img={offer.img}
                            title={offer.title}
                            description={offer.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
};
export default Service