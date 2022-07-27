import ProjectCard from "../layout/card/projectCard";
import ContentTitle from "../layout/title";

export default function MyProject({ id, titles, subtitle, className }) {
   return (
      <div>
         <div className="container mx-auto sm:px-10 space-y-4 flex flex-col mt-5">
            <div className="pl-10">
               <ContentTitle ids={id} subtitle={subtitle} className={className}>
                  {titles}
               </ContentTitle>
            </div>
            <div className="flex justify-center flex-wrap items-center drop-shadow-lg">
               <ProjectCard />
               <ProjectCard />
               <ProjectCard />
               <ProjectCard />
               <ProjectCard />
            </div>
         </div>
      </div>
   );
}
