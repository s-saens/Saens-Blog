import Link from 'next/link'
import Head from 'next/head'
export default function FirstPost() {
   return (
      <>
         <Head>
            <title> FirstPost </title>
         </Head>
         <h1> 
            First Post
         </h1>

         <Link href="/">
            <a> go home </a>
         </Link>
      </>
   );
}