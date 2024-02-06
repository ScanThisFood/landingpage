import Head from 'next/head'
import Image from 'next/image'
import { tw } from 'twind'

export default function Home() {
    return (
        <div className={tw``}>
            <Head>
                <title>Scan This Food</title>
                <meta name="Landing Page" content="Landing Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main
                className={tw`h-screen dark:bg-[#1e1e1e] bg-[#eeeeee] place-content-center place-items-center flex flex-col`}
            >
                <div className={tw``}>
                    <Image
                        src="/logo.svg"
                        width={200}
                        height={200}
                        alt="The Scan this Food logo"
                    />
                </div>
                <p
                    className={tw`dark:text-[#EE7150] opacity-50 text-black mt-2`}
                >
                    coming soon...
                </p>
            </main>

            <footer
                className={tw`absolute bottom-0 pr-4 pb-4 w-full flex flex-row-reverse place-content-center gap-x-8 dark:text-[#EE7150] opacity-75 text-black`}
            >
                <a className={tw`hover:underline`} href="">
                    Help
                </a>
                <a className={tw`hover:underline`} href="">
                    Contact us
                </a>
                {/* <span>Terms</span>
        <span>Privacy Policy</span> */}
                <a className={tw`hover:underline`} href="">
                    Blog
                </a>
            </footer>
        </div>
    )
}
