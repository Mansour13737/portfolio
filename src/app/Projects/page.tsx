import Link from "next/link";

const allProjects = [
  {id : 1 , name : 'Responsive Design', url : "https://samplemd-git-main-mansour13737s-projects.vercel.app"},
  {id : 2 , name : 'Gallery', url : "https://gallery-2u9mdiysu-mansour13737s-projects.vercel.app"},
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center pt-6 sm:pt-8 lg:pt-10 bg-gray-700 h-screen text-white gap-2 sm:gap-3">
      <h2 className="text-lg sm:text-xl lg:text-[30px] tracking-[3px] sm:tracking-[4px] lg:tracking-[5px] first-letter:font-bold mb-6 sm:mb-8 lg:mb-10">Projects</h2>
      {allProjects.map((item) => (
        <Link href={item.url} key={item.id} target="_blank" rel="noopener noreferrer" className="w-[85vw] sm:w-[80vw] lg:w-[70vw]">
          <h2 className="cursor-pointer text-white tracking-wider sm:tracking-widest bg-gray-900 w-full text-center p-2 sm:p-3 rounded-[4px] text-sm sm:text-base lg:text-lg hover:bg-gray-800 transition-colors duration-200">{item.id} : {item.name}</h2>
        </Link>
      ))}
    </div>
  );
}