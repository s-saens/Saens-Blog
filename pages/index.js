import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'

import Date from '../components/date'
import numberPad from '../components/numberpad'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {

  return (
    <Layout home>

      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="[PROFILE] w-full text-center">
        <img className="[PROFILE-IMAGE] mx-auto w-52 rounded-full shadow-lg transition-all transform hover:rotate-45"
              src="/images/Sanghun.jpg"
              alt="Profile"/>
        <p className="mt-12">송 X 훈</p>
        <p>010-3XXX-5XX5</p>
        <p>songsh5775@gmail.com</p>
        <br></br>
        
        <h1 className="font-bold text-xl">TECH</h1>
        <ol className="m-auto w-2/3 flex justify-center">
          <li className="m-4">
            <h2 className="m-2">Unity3D</h2>
            <ul>
              <li>AR, VR</li>
              <li>Shader</li>
            </ul>
          </li>


        </ol>


      </section>

      <section className="[POSTS] my-12">
        <h1 className="[POSTS_TITLE] font-extraboldtext text-center text-xl p-3 bg-gray-100">일기장</h1>
        <ul className="[POST] text-center">
          { allPostsData.map( ({ id, date, title, category }) => (
            <Link href={"/posts/"+id}>
              <li className="m-0 p-8 border-b transition-all hover:bg-gray-200 cursor-pointer divide-solid" key={id}>
                <p className="[POST-NUMBER] text-sm text-gray-400"> #{numberPad(id, 3)}, {category} </p>
                <p className="[POST-DATE] text-sm text-gray-400"> <Date dateString = {date} /> </p>
                <p className="[POST-TITLE] mt-2 text-xl font-semibold"> {title} </p>
              </li>
            </Link>
          ) ) }
        </ul>
      </section>
 
    </Layout>
  )
}
