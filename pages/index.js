import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'

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
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list+" bg-gray-100 rounded-3xl"}>
          { allPostsData.map( ({ id, date, title }) => (
            <Link href={"/posts/"+id}>
              <li className={utilStyles.listItem+"m-0 p-8 hover:bg-white transition-all"} key={id}>
              {title}
              {id}
              <Date dateString = {date} />
              </li>
            </Link>
          ) ) }
        </ul>
      </section>
 
    </Layout>
  )
}
