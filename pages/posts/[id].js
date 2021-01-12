import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'

import utilStyles from '../../styles/utils.module.css'


export async function getStaticProps({ params }) {
   const postData = await getPostData(params.id)
   return {
      props: {
         postData
      }
   }
}

export default function Post({ postData }) {

   function numberPad(n, width) {
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
   }

   return (
      <Layout>

         <Head>
            <title>{numberPad(postData.id, 3)}. {postData.title}</title>
         </Head>

         <h1 className={utilStyles.headingX1}>{postData.title}</h1>
         
         <br />
            <Date dateString={postData.date} />
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