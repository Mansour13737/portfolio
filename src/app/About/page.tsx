import Link from "next/link"

export default function About() {
    return (
        <div className="flex flex-col lg:pt-20 pt-10 items-center w-screen h-screen border-t-16 border-black">
            <h2 className="mb-[6vh] lg:text-3xl text-[15px] leading-tight text-justify mx-auto font-semibold lg:tracking-[5px] border-black/10 border-b-2 rounded-b-md pb-2"> A little about me — not everything, just enough</h2>
            <p className="mx-[20vw] mb-6 font-extralight text-[17px] lg:text-xl lg:font-normal lg:text-justify leading-9 shadow-gray-400 text-center">
                <span>
                    <b>Mansour Nosrati</b> — born in July 1994. Front-End Developer with a passion for design and creativity.
                </span>
                <span>
                    Background in Industrial Management and an MBA in Business & Commerce.
                    Focused on building useful things with clean ideas and clear purpose.
                    Always learning. Always creating !
                </span>
            </p>
            
            <Link href={'/'}>
            <button className="btn lg:mt-20">Home</button>
            </Link>
        </div>
    )
}