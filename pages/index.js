import Head from 'next/head'
import Header from '../components/Header'
import ProjectSection from '../components/ProjectSection'
import HowToUseSection from '../components/HowToUseSection'
import styles from '../styles/Home.module.css'
import ThirdSection from '../components/ThirdSection'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <ProjectSection />
      <HowToUseSection />
      <ThirdSection />
    </div>
  )
}
