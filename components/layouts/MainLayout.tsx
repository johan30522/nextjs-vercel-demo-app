import Head from 'next/head'
import { NavbarComponent } from '../NavbarComponent';
import styles from './MainLayout.module.css'
import { Inter } from 'next/font/google'

interface MainLayoutProps {
    children: React.ReactNode,
    title: string
}

const inter = Inter({ subsets: ['latin'] })

export const MainLayout = ({ children,title }: MainLayoutProps) => {


    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Pagina Home" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavbarComponent />
            <main className={`${styles.main} ${inter.className}`}>

                {children}


            </main>
        </div>
    )
}
