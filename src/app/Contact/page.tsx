import Link from "next/link"

export default function Contact() {
    return (
        <div className="h-screen relative flex justify-center items-center container max-w-full bg-[url('/3.JPG')] bg-center bg-cover">

            <div className="w-full flex justify-center h-fit mt-40 flex-col mx-auto ">
                <div className="flex justify-center items-center gap-3">
                    <Link href={'https://www.instagram.com/mansour_nosrati_live/profilecard/?igsh=MWR0eXppN2pzYjlxbQ=='}>
                        <button className="w-16 transition-all duration-100 hover:rotate-45 h-16 bg-[url('/instagram.svg')] bg-center scale-95 bg-contain bg-no-repeat cursor-pointer"></button>                    </Link>
                    <Link href={'https://t.me/mansournsrt'}>
                        <button className="cursor-pointer w-15 h-15 bg-[url('/telegram.svg')] bg-center bg-contain scale-115 hover:scale-125 transition-all duration-100 "></button>
                    </Link>
                    <Link href={'mailto:mansournosrati69@gmail.com'}>
                        <button className="w-15 cursor-pointer h-15 bg-[url('/email.svg')] bg-center bg-contain scale-115 hover:scale-125 transition-all duration-100"></button>
                    </Link>
                </div>
                <div className="w-full mt-30 flex justify-center items-center">
                    <Link href={'/'}>
                        <button className="cursor-pointer absolute left-5 top-15 text-[30px] lg:text-[40px] p-2 text-4xl font-extralight bg-gradient-to-r from-[#7f7f7f] via-[#bfbfbf] to-[#7f7f7f] bg-clip-text text-transparent"> Home</button>
                    </Link>
                </div>
            </div>






        </div>
    )
}
