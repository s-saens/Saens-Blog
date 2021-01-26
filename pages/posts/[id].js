import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'

import Date from '../../components/date'
import numberPad from '../../components/numberpad'


export async function getStaticProps({ params }) {
   const postData = await getPostData(params.id)
   return {
      props: {
         postData
      }
   }
}

export default function Post({ postData }) {

   return (
      <Layout>

         <Head>
            <title>{numberPad(postData.id, 3)}. {postData.title}</title>
         </Head>

         <h1 className="text-xl font-bold">{postData.title}</h1>
            <Date className="bg-black" dateString={postData.date} />
         <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
         <br />
      </Layout>
   )
}
export async function getStaticPaths() {
   const paths = getAllPostIds()
   return {
      paths,
      fallback: false
   }
}