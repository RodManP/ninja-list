import Head from 'next/head'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
   <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"/>
   </Head>

  <div>
    <h1 className={styles.title}>Homepage</h1>
    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis earum soluta magnam, repellat quasi eaque voluptates minima nesciunt quisquam optio cumque. Ipsum culpa commodi magni maxime cum dignissimos provident assumenda!
            Possimus voluptate perferendis temporibus ab veniam sit repellat molestiae ratione iure officiis commodi, quae in suscipit pariatur sed alias ullam provident iusto tempora quisquam illo vitae dicta! Nihil, blanditiis maiores?
            Voluptate fugit, exercitationem eveniet repudiandae id deserunt illo? Repudiandae labore sit quia nulla, aspernatur nesciunt, dolorum suscipit excepturi corporis autem ab, nihil non maiores obcaecati dolores nobis quam minus quas!</p>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis earum soluta magnam, repellat quasi eaque voluptates minima nesciunt quisquam optio cumque. Ipsum culpa commodi magni maxime cum dignissimos provident assumenda!
            Possimus voluptate perferendis temporibus ab veniam sit repellat molestiae ratione iure officiis commodi, quae in suscipit pariatur sed alias ullam provident iusto tempora quisquam illo vitae dicta! Nihil, blanditiis maiores?
            Voluptate fugit, exercitationem eveniet repudiandae id deserunt illo? Repudiandae labore sit quia nulla, aspernatur nesciunt, dolorum suscipit excepturi corporis autem ab, nihil non maiores obcaecati dolores nobis quam minus quas!</p>
            <Link href="/ninjas/">
            <a className={styles.btn}>See Ninja Listing </a>
            </Link>
           
  </div> 

</>
  )
}
