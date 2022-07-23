import Head from "next/head";
import Header from "../components/layout/header";

export default function Home() {
   return (
      <div>
         <Head>
            <title>DijarJr</title>
            <meta name="description" content="Dijar Portfolio App" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <header>
            <Header />
         </header>
      </div>
   );
}
