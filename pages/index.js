import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Forum-Frontend</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* //navbar */}
      <nav>
        <div className="logo">
          <h1>Forum</h1>
        </div>
        <Link href="#about"><a>About</a></Link>
        <Link href="#topposts"><a>Organizations</a></Link>
        <Link href="#contactUs"><a>Contact Us</a></Link>
      </nav>

      {/* main */}
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Forum!
        </h1>
      </main>

      <section className={styles.section} id="about">
        <h1 className={styles.title}>
        About Forum
        </h1>
      </section>

      <section className={styles.section} id="topposts">
        <h1 className={styles.title}>Top Posts</h1>
      </section>


      <section className={styles.section} >
        <h1 className={styles.title}>
          Contribute to Forum
        </h1>
      </section>

      
      <section className={styles.section} id="contactUs">
        <h1 className={styles.title}>
          Contact Us
        </h1>
      </section>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/geekhaven.svg" alt="Geekhaven Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
