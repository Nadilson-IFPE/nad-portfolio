/* eslint-disable react-hooks/rules-of-hooks */
import FavIcon from "@/components/FavIcon";
import { useLanguages } from "@/hooks/useLanguages";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";


const my401ErrorPage: NextPage = () => {
    const t = useLanguages()

    return (
        <>
            <Head>
                <title>{t.my_401_error_page_title}</title>
                <FavIcon />
            </Head>
            <div className="grid h-screen place-content-center px-4 content-center items-center justify-center text-center antialiased">
                <h1 className="uppercase tracking-widest text-gray-500"> {t.my_401_error_page_error_code} | {t.my_401_error_page_error_description}</h1>

                <div className="mx-auto pt-10">
                    <Link href="/" passHref scroll={false}>
                        <a
                            className={
                                'text-sm font-bold tracking-wider transition-colors hover:text-blue-500 dark:text-white dark:hover:text-blue-400'
                            }
                        >
                            <p>{t.my_401_error_page_go_back_link}</p>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default my401ErrorPage;
