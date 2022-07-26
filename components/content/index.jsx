import ContentTitle from "../layout/title";

export default function Content({ id, titles, subtitle, className, children }) {
   return (
      <div>
         <div className="container mx-auto px-5 sm:px-10 space-y-4">
            <ContentTitle ids={id} subtitle={subtitle} className={className}>
               {titles}
            </ContentTitle>
            <div>{children}</div>
         </div>
      </div>
   );
}
