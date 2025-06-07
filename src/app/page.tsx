import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-cover bg-center items-center relative m-0 pt-4 sm:pt-7 w-full h-screen border-t-25 border-black">
      <Image
        src={'/1.webp'}
        alt="Background Image"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center w-full h-screen -z-10"
      />
      <h2 className="mb-[40%] sm:mb-[30%] md:mb-[25%] lg:mb-[15%] tracking-[4px] sm:tracking-[6px] mt-[5%] sm:mt-[2.5%] text-2xl sm:text-3xl md:text-4xl lg:text-5xl first-letter:text-[30px] sm:first-letter:text-[40px] lg:first-letter:text-5xl first-letter:font-bold first-letter:text-gray-700 hover:scale-110 cursor-pointer transition-all duration-300">Portfolio</h2>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[50px] font-[Poppins] mb-6 sm:mb-10 leading-8 sm:leading-10 text-center lg:leading-20 tracking-wider opacity-80 hover:blur-[1px]"><b>Not</b> everything needs an <span className="first-letter:font-bold text-xl sm:text-2xl md:text-3xl lg:text-[50px]">introduction</span></h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 mt-6 sm:mt-10 p-2">
        <Link href={'/Projects'} className="w-full sm:w-auto">
          <button className="btn-new font-playfair w-full sm:w-auto">Projects</button>
        </Link>
        <Link href={'/About'} className="w-full sm:w-auto">
          <button className="btn font-playfair w-full sm:w-auto">About</button>
        </Link>
        <Link href={'/Contact'} className="w-full sm:w-auto">
          <button className="btn w-full sm:w-auto">Contact</button>
        </Link>
      </div>
      <div className="bg-[black] w-screen fixed block h-[40px] sm:h-[50px] lg:h-18 mt-8 sm:mt-12 bottom-0"></div>
    </div>
  );
}
