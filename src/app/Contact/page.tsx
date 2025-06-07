import Link from "next/link"
import Image from "next/image";

export default function Contact() {
    return (
        <div className="h-screen relative flex justify-center items-center container max-w-full bg-center bg-cover">
            <Image
                src={'/3.webp'}
                alt="Background Image"
                fill
                priority
                quality={85}
                sizes="100vw"
                className="object-cover object-center w-full h-screen -z-10"
            />
            <div className="w-full flex justify-center h-fit mt-20 sm:mt-32 lg:mt-40 flex-col mx-auto">
                <div className="flex justify-center items-center gap-2 sm:gap-3">
                    <Link href={'https://www.instagram.com/mansour_nosrati_live/profilecard/?igsh=MWR0eXppN2pzYjlxbQ=='}>
                        <button className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 transition-all duration-100 hover:rotate-45 bg-[url('/instagram.svg')] bg-center scale-95 bg-contain bg-no-repeat cursor-pointer"></button>
                    </Link>
                    <Link href={'https://t.me/mansournsrt'}>
                        <button className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 cursor-pointer bg-[url('/telegram.svg')] bg-center bg-contain scale-110 sm:scale-115 hover:scale-125 transition-all duration-100"></button>
                    </Link>
                    <Link href={'mailto:mansournosrati69@gmail.com'}>
                        <button className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 cursor-pointer bg-[url('/email.svg')] bg-center bg-contain scale-110 sm:scale-115 hover:scale-125 transition-all duration-100"></button>
                    </Link>
                </div>
                <div className="w-full mt-20 sm:mt-24 lg:mt-30 flex justify-center items-center">
                    <Link href={'/'}>
                        <button className="cursor-pointer absolute left-2 sm:left-4 lg:left-5 top-10 sm:top-12 lg:top-15 text-xl sm:text-2xl lg:text-[30px] p-2 font-extralight bg-gradient-to-r from-[#7f7f7f] via-[#bfbfbf] to-[#7f7f7f] bg-clip-text text-transparent">Home</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
