import Link from "next/link"

export default function Contact() {
    return (
        <div className="h-screen relative flex justify-center items-center  w-[100vw] bg-[url('/2.JPG')] bg-center bg-cover mx-auto">

            <div className="w-full flex justify-center h-fit mt-40 flex-col mx-auto ">
            <div className="flex justify-center items-center gap-3">
            <Link href={'/'}>
                <button className="w-15 h-15 bg-[url('/instagram.svg')] bg-center bg-contain">    </button>
            </Link>
            <Link href={'/'}>
                <button className="w-15 h-15 bg-[url('/telegram.svg')] bg-center bg-contain"></button>
            </Link>
            <Link href={'/'}>
                <button className="w-15 h-15 bg-[url('/email.svg')] bg-center bg-contain"></button>
            </Link>
            </div>
            <div className="w-full mt-30 flex justify-center items-center">
            <Link href={'/'}>
                <button className="font-normal absolute left-5 top-15 text-[20px] p-2 text-gray-600"> <span className="text-[30px] font-bold">{'<'}</span> Home</button>
            </Link>
            </div>
            </div>
        </div>
    )
}
