import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
   return (
      <div>
         <Head>
            <title>Pastebin Clone</title>
            <meta name="description" content="This is Pastebin Clone" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Header />
         <div className="max-w-[1340px] m-auto bg-[#252525]">
            <Component {...pageProps} />
         </div>
      </div>
   );
}

export default MyApp;
