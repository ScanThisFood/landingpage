import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Scan This Food</title>
                <meta name="Landing Page" content="Landing Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="h-screen dark:bg-[#1e1e1e] bg-[#eeeeee] place-content-center place-items-center flex flex-col">
                <div>
                    <Image
                        src="/logo.svg"
                        width={200}
                        height={200}
                        alt="The Scan this Food logo"
                    />
                </div>
                <p className="dark:text-[#EE7150] opacity-50 text-black mt-2">
                    coming soon...
                </p>
            </main>

            <footer className="absolute bottom-0 pr-4 pb-4 w-full flex flex-row-reverse place-content-center gap-x-8 dark:text-[#EE7150] opacity-75 text-black">
                <a className="hover:underline" href="">
                    Help
                </a>
                <a className="hover:underline" href="">
                    Contact us
                </a>
                {/* <span>Terms</span>
        <span>Privacy Policy</span> */}
                <a className="hover:underline" href="">
                    Blog
                </a>
            </footer>
        </div>
    )
}
