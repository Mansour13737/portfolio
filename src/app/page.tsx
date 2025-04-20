 import Link from "next/link";
 

export default function Home() {
  return (
    <div className=" flex flex-col bg-white items-center  pt-7 w-screen h-screen border-t-16 border-black">
      <h2 className="mb-[150px] tracking-[6px] text-3xl first-letter:text-3xl first-letter:font-bold first-letter:text-gray-700 hover:scale-110 cursor-pointer transition-all duration-300">Portfolio</h2>
      <h2 className=" text-2xl md:text-5xl font-[Poppins] text-center leading-relaxed tracking-wider opacity-80 hover:blur-[1px]">Not everything needs an introduction</h2>
      <div className="flex justify-between gap-9 mt-35 p-2">
      <Link href={'/About'}>
      <button className="btn">About</button>
      </Link>
      <Link href={'/Contact'}>
      <button className="btn">Contact</button>
      </Link>
      </div>
      <div className="bg-[black] w-screen h-[40px] lg:h-8 lg:mt-12 mt-4"></div>
    </div>
  );
}
