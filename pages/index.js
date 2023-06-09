import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {



  return (
    <div >
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
         Hunting Coder
        </h1>
          <Image  className={styles.myImage} src={"/image/coding-image.avif"} width={237} height={158}/>
        <p className={styles.description}>
          A blog for hunting coders by a hunting coders
        </p>
        <div className='blog'>
          <h2>Popular Blogs</h2>
          <div className='blog-item'>
            <h3>How to learn JavaScript in 2023</h3>
            <p>JavaScript is language used to built login in website</p>
          </div>
          <div className='blog-item'>
            <h3>How to learn JavaScript in 2023</h3>
            <p>JavaScript is language used to built login in website</p>
          </div>
          <div className='blog-item'>
            <h3>How to learn JavaScript in 2023</h3>
            <p>JavaScript is language used to built login in website</p>
          </div>
        </div>
      </main> 
    </div>
  )
}
