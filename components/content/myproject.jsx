import ContentTitle from "../layout/title";

export default function MyProject({ id, titles, subtitle, className }) {
   return (
      <div>
         <div className="container mx-auto px-5 sm:px-10 space-y-4">
            <ContentTitle ids={id} subtitle={subtitle} className={className}>
               {titles}
            </ContentTitle>
            <div>
               <p className="text-white leading-6 pl-3 indent-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Beatae, earum laudantium in libero sapiente commodi reiciendis
                  pariatur ad quos quaerat maiores dolores hic vero cumque.
                  Natus nam repellendus beatae saepe dolorum, eos laborum
                  impedit soluta excepturi doloribus, necessitatibus qui
                  mollitia assumenda consequuntur voluptatem asperiores at non
                  nulla perferendis cupiditate nesciunt accusamus consectetur.
                  Repellat asperiores placeat tenetur iusto, earum nulla fugiat
                  eligendi autem corporis cupiditate culpa laborum quod esse
                  dignissimos ea sit ut non. Ullam nobis hic possimus! Numquam
                  distinctio officiis fugit quas atque molestiae tempore enim
                  labore porro! Pariatur aspernatur quasi accusantium corrupti
                  harum voluptatum nesciunt illum eaque dolor quisquam fugiat,
                  vitae molestias, fugit cum ducimus omnis exercitationem, saepe
                  officiis corporis labore sit consectetur tempore ab neque.
                  Nobis voluptatum et eius eligendi ea, eos reprehenderit!
                  Blanditiis inventore corrupti vero, aliquid pariatur sapiente
                  dolore, quos eligendi, quisquam minus nulla fugiat provident
                  voluptatibus atque cumque consequuntur illum dicta sed
                  impedit. Commodi, cumque! Quaerat repellat illum a error in
                  odit perferendis ullam sequi quos dicta sapiente eligendi
                  nulla velit quas, nesciunt consectetur rerum, dolorem commodi
                  exercitationem officiis! Maxime omnis autem alias beatae eius
                  delectus cumque, rem sed modi eaque sequi, accusantium tempore
                  repellendus! Tenetur, impedit magnam reprehenderit ea at
                  veritatis soluta eum aut.
               </p>
            </div>
         </div>
      </div>
   );
}
