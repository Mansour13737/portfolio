'use client'


import Link from "next/link";
import { CldImage } from 'next-cloudinary';

export default function Home() {
  return (
    <div className=" flex flex-col bg-[url('/1.JPG')] bg-cover bg-center items-center relative m-0 pt-7 w-full h-screen border-t-25 border-black">
      <h2 className="mb-[50%] lg:mb-[15%] tracking-[6px] lg:text-5xl first-letter:text-[40px] text-[25px] lg:first-letter:text-5xl first-letter:font-bold first-letter:text-gray-700 hover:scale-110 cursor-pointer transition-all duration-300 ">Portfolio</h2>
      <h2 className=" lg:text-[50px] md:text-5xl text-[23px] font-[Poppins] leading-10  text-center lg:leading-20 tracking-wider opacity-80 hover:blur-[1px]  "><b>Not</b> everything needs an <span className="first-letter:font-bold lg:text-[50px]">introduction</span></h2>
      <div className="flex justify-between gap-9 mt-35 p-2">
        <Link href={'/About'}>
          <button className="btn font-playfair">About</button>
        </Link>
        <Link href={'/Contact'}>
          <button className="btn ">Contact</button>
        </Link>
      </div>
      <div className="bg-[black] w-screen fixed lg:block h-[50px] lg:h-18 lg:mt-12 bottom-0"></div>
    </div>
  );
}
