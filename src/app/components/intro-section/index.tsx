import Image from "next/image"
import ShieldMarkIcon from "../icons/ShieldMarkIcon"

const IntroSection = () => {
    return (
        <section className="py-24">
            <div className="container max-w-[1280px] mx-auto px-4 lg:px-0">
                <h1 className='lg:text-4xl text-3xl text-center font-semibold w-2/3 lg:w-full mx-auto'>Venue management never been easy</h1>
                <p className='text-secondary text-center text-xl mt-5'>Manage your venue with ease</p>

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 justify-between mt-16">
                    <div className='flex flex-col lg:flex-row flex-[7] justify-between space-y-12 lg:space-y-0 bg-[#DFF4FF] rounded-3xl p-12 pb-0'>

                        <div className="flex-1 text-center lg:text-left space-y-3">
                            <h2 className='text-3xl font-semibold'>
                                Manage your venue anywhere
                            </h2>
                            <p className='text-secondary text-lg lg:w-11/12'>
                                You can view your venue anywhere anytime from your mobile
                            </p>
                        </div>
                        <div className="flex-1">
                            <Image className="w-[280px] mx-auto h-[350px] lg:h-[309px] object-cover object-top" src={"/assets/management_mockup.png"} alt="Venue Management Mock Up" width={280} height={314} />
                        </div>
                    </div>
                    <div className="bg-[#EAECFF] flex-[3] space-y-9 rounded-3xl px-9 py-12">
                        <div className="bg-[#2D38A810] rounded-full w-[96px] h-[96px] flex justify-center items-center">
                            <ShieldMarkIcon />
                        </div>
                        <div className="space-y-3">
                            <h2 className="font-semibold text-3xl">
                                Easy to access
                            </h2>
                            <p className="text-secondary text-lg">
                                You can access your enquiry list and respond to it from your mobile
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntroSection