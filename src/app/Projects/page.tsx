import Link from "next/link";

const allProjects = [
  {id : 1 , name : 'Responsive Design', url : "https://samplemd-git-main-mansour13737s-projects.vercel.app"},
  {id : 2 , name : 'Gallery', url : "https://gallery-2u9mdiysu-mansour13737s-projects.vercel.app"},
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center pt-10 bg-gray-700 h-screen text-white gap-3">
      <h2 className="text-[20px] lg:text-[30px] tracking-[5px] first-letter:font-bold mb-10">Projects</h2>
      {allProjects.map((item, id) => (
        <Link href={item.url} key={item.id} target="_blank" rel="noopener noreferrer">
          <h2 className="cursor-pointer text-white tracking-widest bg-gray-900 w-[90vw] text-center p-2 rounded-[4px]">{item.id} : {item.name}</h2>
        </Link>
      ))}
    </div>
  );
}