/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '#/styles/Home.module.css'
import { useMemo } from 'react'


export default function Home() {

  const zoes = useMemo(() => {
    return new Array(100).fill('').map((_, i) => {
      const x = Math.floor(Math.random() * 200) + 50;
      return <img style={{
        animationDelay: `${x}ms`,
      }} key={i} className={styles.zoe} src="/zoe-small.png" alt='zoe' />
    })
  }, [])

  return (
    <>
      <Head>
        <title>zoe zoe</title>
        <meta name="description" content="Yes..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/zoe-small.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.zoes}>
          {zoes}
        </div>
        <img className={styles.oneZoeToRuleThemAll} src="/zoe-medium.png" alt='zoe' />
      </main>
    </>
  )
}
