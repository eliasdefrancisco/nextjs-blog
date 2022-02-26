import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Layout.module.css"
import utilStyles from "../styles/utils.module.css"

const name = 'bluuweb'

export default function Layout({ children, title, description, home }) {
  console.log(home)
  return (
    <div className={ styles.container }>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Este es mi primer post</title>
          <meta 
            name={ title }
            content={ description }
          />
        </Head>

        <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/pajaro.jpg"
              className={utilStyles.borderCircle}
              height={2176}
              width={3264}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/img/cabra.jpg"
                  className={utilStyles.borderCircle}
                  height={3076}
                  width={4613}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>


        <nav>
            <Link href="/"><a>Inicio | </a></Link>
            <Link href="/about"><a>About | </a></Link>
            <Link href="/blog"><a>Blog | </a></Link>
            <Link href="/contact"><a>Contact | </a></Link>
            <Link href="/blog/primer-post"><a>PrimerPost</a></Link>
        </nav>


        <main>
            { children }
        </main>


        <footer>
            { !home && (
                    <div className={styles.backToHome}>
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </div>
                )
            }
        </footer>
    </div>
  )
}

Layout.defaultProps = {
    title: 'Next.js | mi sitio web',
    description: 'Descripción de mi sitio web',
}
