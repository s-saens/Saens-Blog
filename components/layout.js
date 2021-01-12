import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "SAENS";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className={styles.layout}>
      <div className={styles.navbar}>
        <Link href="/"><img
          src="/images/menu.svg"
          className={styles.navbar_contents}
          alt={name}
        /></Link>
        <Link href="/"><img
          src="/images/saens.svg"
          className={styles.navbar_logo}
          alt={name}
        /></Link>
        <Link href="/"><img
          src="/images/search.svg"
          className={styles.navbar_contents}
          alt={name}
        /></Link>
      </div>

      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicons.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
