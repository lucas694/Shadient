'use client';

import dynamic from 'next/dynamic';
import PartnersCard from "../home/partnersCard"
import { getPartnersData, getPartnersDataSecond } from '@/app/utils/utils';

// Importação dinâmica do motion.div para evitar problemas de SSR
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
);

const Partners = () => {
    const partnersData = getPartnersData();
    const partnersDataSecond = getPartnersDataSecond();
    return(
        <div className="w-full flex-col bg-black ">
            <div className="w-full flex-col md:flex-row p-6 lg:p-10 xl:p-16 ">
                <div className="flex flex-col w-full md:flex-row">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-white font-bold text-3xl w-auto lg:text-4xl lg:w-[70%]">Trusted by 200+ companies around the world</h1>
                    </div>
                    <div className="w-full mt-8 md:mt-0 md:w-1/2">
                        <p className="text-[#999999] text-sm  font-semibold w-auto lg:text-base lg:w-[85%]">Vulputate molestie molestie amet leo blandit accumsan. Sapien sed amet tellus purus sit odio eget. Diam morbi faucibus vitae neque id in. Nullam sed et dapibus nunc, porta enim orci urna, sit. Lectus ac.</p>
                    </div>
                </div>
            </div>
            <div className="w-full overflow-hidden">
                <MotionDiv
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 10, repeat: Infinity }}
                            className={"w-full p-2 flex flex-row space-x-2  justify-center items-center overflow-hidden md:p-4 md:space-x-6"}
                            style={{ x: "-80%" }}
                            initial={{ x: "100%" }}
                            offset={-0.1}
                        >
                {partnersData.map((partner) => (
                    <PartnersCard 
                        key={partner.id}
                        img={partner.img}
                        title={partner.title}
                        description={partner.description}
                    />
                ))}
                </MotionDiv>
            </div>
            <div className="w-full overflow-hidden">
                <MotionDiv
                            animate={{ x: ["100%", "-100%"] }}
                            transition={{ duration: 10, repeat: Infinity }}
                            className={"w-full p-2 flex flex-row space-x-2  justify-center items-center overflow-hidden md:p-4 md:space-x-6"}
                            style={{ x: "80%" }}
                            initial={{ x: "-100%" }}
                            offset={-0.1}
                        >
                {partnersDataSecond.map((partner) => (
                    <PartnersCard 
                        key={partner.id}
                        img={partner.img}
                        title={partner.title}
                        description={partner.description}
                    />
                ))}
                </MotionDiv>
            </div>
        </div>
        
    )
};
export default Partners

