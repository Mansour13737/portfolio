import Link from "next/link"
import Image from "next/image";

export default function About() {
    return (
        <div className="flex relative flex-col bg-center bg-cover pt-6 sm:pt-10 lg:pt-20 items-center w-screen h-screen border-t-16 border-black">
            <Image
                src={'/2.webp'}
                alt="Background Image"
                fill
                priority
                quality={85}
                sizes="100vw"
                className="object-cover object-center w-full h-screen -z-10"
            />
            <h2 className="mb-[4vh] sm:mb-[5vh] lg:mb-[6vh] text-base sm:text-xl lg:text-3xl text-justify mx-auto font-bold tracking-[3px] sm:tracking-[4px] lg:tracking-[5px] border-black/10 border-b-2 rounded-b-md pb-2">About me</h2>
            <p className="mx-4 sm:mx-[10vw] lg:mx-[20vw] mb-4 sm:mb-6 font-extralight text-sm sm:text-base lg:text-xl lg:font-normal text-justify leading-7 sm:leading-8 lg:leading-12 shadow-gray-400 text-center">
                <span className="block mb-2">
                    <b>Mansour Nosrati</b> — born in July 1994. Front-End Developer with a passion for design and creativity.
                </span>
                <span className="block">
                    Background in Industrial Management and an MBA in Business & Commerce.
                    Focused on building useful things with clean ideas and clear purpose.
                    Always learning. Always creating !
                </span>
            </p>
            
            <Link href={'/'} className="mt-4 sm:mt-6 lg:mt-20">
                <button className="btn w-full sm:w-auto">Home</button>
            </Link>
        </div>
    )
}