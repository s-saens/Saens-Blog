import Link from 'next/link'
import Head from 'next/head'

import Layout from '../../components/layout'

export default function FirstPost() {
   return (
      <Layout >
         <Head>
            <title> FirstPost </title>
         </Head>
         <h1 className=""> 
            First Post
         </h1>
      </Layout>
   );
}