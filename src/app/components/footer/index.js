import Image from 'next/image'



export function Footer() {
    return(
        <div className='w-full flex flex-col items-center p-10  xl:p-14 bg-black'>
            <div className='w-full flex flex-col  '>
                <div className="flex flex-col w-full items-center md:flex-row md:justify-between md:items-start ">
                    <div className="flex flex-col items-center mb-10 md:mb-0 md:items-start ">
                        <h1 className="text-lg font-bold text-white mb-6">Company</h1>
                        <a href="/" className="text-[#999999] hover:text-white mb-4">About us</a>
                        <a href="/" className="text-[#999999] hover:text-white mb-4">Team</a>
                        <a href="/" className="text-[#999999] hover:text-white mb-4">Careers</a>
                    </div>
                    <div className="flex flex-col items-center mb-10 md:mb-0 md:items-start ">
                        <h1 className="text-lg font-bold text-white mb-6">Services</h1>
                        <a href="/" className="text-[#999999] hover:text-white mb-4">Branding</a>
                        <a href="/" className="text-[#999999] hover:text-white mb-4">Web development</a>
                        <a href="/" className="text-[#999999] hover:text-white mb-4">Digital marketing</a>
                        <a href="/" className="text-[#999999] hover:text-white mb-4">SEO</a>
                        <a href="/" className="text-[#999999] hover:text-white mb-4">User testing</a>
                    </div>
                    <div className="flex flex-col items-center mb-10 md:mb-0 md:items-start ">
                        <h1 className="text-lg font-bold text-white mb-6">Resources</h1>
                        <a href="/" className="text-[#999999] hover:text-white mb-4">Case study</a>
                        <a href="/" className="text-[#999999] hover:text-white mb-4">Testimonials</a>
                    </div>
                    <div className="flex flex-col items-center mb-10 md:mb-0 md:items-start ">
                        <h1 className="text-lg font-bold text-white mb-6">Follow us</h1>
                        <a href="/" className="text-[#999999] hover:text-white mb-4">Instagram</a>
                        <a href="/" className="text-[#999999] hover:text-white mb-4">Figma</a>
                    </div>
                
                    <div className='flex flex-col items-center w-full md:w-auto md:items-start'>
                        <div className='flex flex-row items-center'>
                            <Image src="/assets/header-icon.png" alt='.' width={30} height={30} className="mr-3" />
                            <h1 className="text-xl font-bold text-white">Shadient.co</h1>
                        </div>
                        <p className="text-base text-[#999999] mt-4">Get latest updates</p>
                        <input 
                            type="email" 
                            placeholder="Your email"
                            className=" mt-4 px-4 py-2 bg-black/10 border border-white/50 rounded-full text-white placeholder-white/60 focus:outline-none focus:border-white/90 transition-colors
                            "
                        />
                    </div>
                </div>
            </div>
            <div className='text-[#999999] pt-4'>
                Created by Lucas
            </div>
        </div>
    )
}