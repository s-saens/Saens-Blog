import Head from "next/head";
import Link from "next/link";

const name = "Saens";
export const siteTitle = "Saens";

export default function Layout({ children, home }) {
  
  return (
    <div className="[LAYOUT] absolute w-full transition-all">

      <div className= {"[NAVBAR] transition-all z-50 w-full fixed flex justify-center bg-white shadow-lg h-12 md:h-16 lg:h-20"} >
        <Link href="/"><img
          src="/images/saens.svg"
          className="image w-20 md:w-24 lg:w-28 cursor-pointer rounded-lg transition-all transform hover:scale-110"
          alt={name}
        /></Link>
      </div>

      <div className={"[CONTENT] min-h-full max-w-3xl mx-auto p-4 my-20 md:mt-24 lg:mt-32"}>
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
          <div className="[BACK-TO-HOME-BUTTON]">
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>

      <div className={"[FOOTER] w-full h-48 bg-black text-gray-300 text-center mt-24"}>
        <img className="mx-auto pt-16 w-32" src="/images/saensw.svg" alt="white logo"></img>
        <p className="pt-4">aufflugelndesgesanges9199@gmail.com</p>
      </div>

    </div>
  );
}
